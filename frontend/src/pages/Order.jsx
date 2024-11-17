import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css'; // Import Menu.css instead of Order.css

function Order() {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] };

  const handleOrderNow = () => {
    if (selectedItems.length === 0) {
      alert('No items selected for ordering.');
      return;
    }
    alert(`Order placed for items: ${selectedItems.join(', ')}`);
  };

  return (
    <div className="menu-container"> {/* Use menu-container instead of order-container */}
      <h1>Your Order</h1>
      {selectedItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div className="menu-grid"> {/* Use menu-grid instead of order-items */}
          {selectedItems.map((item, index) => (
            <div key={index} className="menu-item"> {/* Use menu-item */}
              <img
                src={item.image_link}
                alt={item.food_item_name}
                className="menu-item-image"
              />
              <div className="menu-item-details">
                <h3>{item.food_item_name}</h3>
                <p className="menu-item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="order-section">
        <a href="https://paytm.com"><button
          onClick={handleOrderNow}
          className="order-button"
        >
          <strong>Pay Now</strong>
        </button></a>
      </div>
    </div>
  );
}

export default Order;