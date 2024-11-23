import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css'


function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  // Placeholder data
  const placeholderMenuItems = [
    {
      sr_no: 1,
      food_item_name: 'Butter Chicken',
      price: 14.99,
      image_link: 'https://via.placeholder.com/250x250?text=Butter+Chicken'
    },
    {
      sr_no: 2,
      food_item_name: 'Paneer Tikka Masala',
      price: 13.99,
      image_link: 'https://via.placeholder.com/250x250?text=Paneer+Tikka+Masala'
    },
    {
      sr_no: 3,
      food_item_name: 'Dal Makhani',
      price: 11.99,
      image_link: 'https://via.placeholder.com/250x250?text=Dal+Makhani'
    },
    {
      sr_no: 4,
      food_item_name: 'Biryani',
      price: 15.99,
      image_link: 'https://via.placeholder.com/250x250?text=Biryani'
    },
    {
      sr_no: 5,
      food_item_name: 'Naan Bread',
      price: 3.99,
      image_link: 'https://via.placeholder.com/250x250?text=Naan'
    },
    {
      sr_no: 6,
      food_item_name: 'Samosa',
      price: 5.99,
      image_link: 'https://via.placeholder.com/250x250?text=Samosa'
    },
    {
      sr_no: 7,
      food_item_name: 'Palak Paneer',
      price: 12.99,
      image_link: 'https://via.placeholder.com/250x250?text=Palak+Paneer'
    },
    {
      sr_no: 8,
      food_item_name: 'Chicken Tikka',
      price: 13.99,
      image_link: 'https://via.placeholder.com/250x250?text=Chicken+Tikka'
    },
    {
      sr_no: 9,
      food_item_name: 'Malai Kofta',
      price: 12.99,
      image_link: 'https://via.placeholder.com/250x250?text=Malai+Kofta'
    },
    {
      sr_no: 10,
      food_item_name: 'Chole Bhature',
      price: 11.99,
      image_link: 'https://via.placeholder.com/250x250?text=Chole+Bhature'
    },
    {
      sr_no: 11,
      food_item_name: 'Gulab Jamun',
      price: 4.99,
      image_link: 'https://via.placeholder.com/250x250?text=Gulab+Jamun'
    },
    {
      sr_no: 12,
      food_item_name: 'Tandoori Roti',
      price: 2.99,
      image_link: 'https://via.placeholder.com/250x250?text=Tandoori+Roti'
    },
    {
      sr_no: 13,
      food_item_name: 'Vegetable Korma',
      price: 11.99,
      image_link: 'https://via.placeholder.com/250x250?text=Vegetable+Korma'
    },
    {
      sr_no: 14,
      food_item_name: 'Raita',
      price: 3.99,
      image_link: 'https://via.placeholder.com/250x250?text=Raita'
    },
    {
      sr_no: 15,
      food_item_name: 'Mango Lassi',
      price: 4.99,
      image_link: 'https://via.placeholder.com/250x250?text=Mango+Lassi'
    }
];

  useEffect(() => {
    // Simulate loading time
    const loadMenuItems = () => {
      setTimeout(() => {
        setMenuItems(placeholderMenuItems);
        setLoading(false);
      }, 1000);
    };
    loadMenuItems();
  }, []);

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const handleOrderNow = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }

    // Simulate order placement
    alert(`Order placed for items: ${selectedItems.join(', ')}`);
    setSelectedItems([]); // Clear selected items after order
    navigate('/order', { state: { selectedItems: menuItems.filter(item => selectedItems.includes(item.sr_no)) } });
  };

  if (loading) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      {menuItems.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.sr_no} className="menu-item">
              <img 
                src={item.image_link} 
                alt={item.food_item_name} 
                className="menu-item-image"
              />
              <div className="menu-item-details">
                <h3>{item.food_item_name}</h3>
                <p className="menu-item-price">₹{item.price.toFixed(2)}</p>
                <label className="menu-item-select">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.sr_no)}
                    onChange={() => handleSelectItem(item.sr_no)}
                  />
                  Select
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="order-section">
        <button 
          onClick={handleOrderNow} 
          disabled={selectedItems.length === 0}
          className="order-button"
        >
          <strong>Order Now</strong>
        </button>
      </div>
    </div>
  );
}

export default Menu;