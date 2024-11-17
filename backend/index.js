import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (token == null) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = user;
    next();
  });
}

// Routes

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home Page" });
});

// Get all menu items
app.get("/api/menu", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM menu_items");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// User registration
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hash = await bcrypt.hash(password, saltRounds);
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
        [email, hash]
      );
      const user = result.rows[0];
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET
      );
      res.json({ token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// User login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET
        );
        res.json({ token });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Place an order (protected route)
app.post("/api/order", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const { items } = req.body; // Expecting an array of item IDs

  try {
    // Get user's email
    const userResult = await db.query("SELECT email FROM users WHERE id = $1", [
      userId,
    ]);
    const userEmail = userResult.rows[0].email;

    // Insert order into the database
    const result = await db.query(
      "INSERT INTO orders (user_id, email, items) VALUES ($1, $2, $3) RETURNING *",
      [userId, userEmail, items]
    );
    res.json({
      message: "Order placed successfully",
      order: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Logout route (not necessary with JWT but included if you need to perform any cleanup)
app.post("/api/logout", (req, res) => {
  // Since JWTs are stateless, there's no need to handle logout on the server side unless using a blacklist
  res.json({ message: "Logged out successfully" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});