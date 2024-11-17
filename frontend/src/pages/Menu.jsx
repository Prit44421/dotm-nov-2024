import React, { useEffect, useState } from 'react';
import './Menu.css'

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder data
  const placeholderMenuItems = [
    {
      sr_no: 1,
      food_item_name: 'Cheeseburger',
      price: 9.99,
      image_link: 'https://via.placeholder.com/250x250?text=Cheeseburger'
    },
    {
      sr_no: 2,
      food_item_name: 'Margherita Pizza',
      price: 12.99,
      image_link: 'https://via.placeholder.com/250x250?text=Margherita+Pizza'
    },
    {
      sr_no: 3,
      food_item_name: 'Caesar Salad',
      price: 7.99,
      image_link: 'https://via.placeholder.com/250x250?text=Caesar+Salad'
    },
    {
      sr_no: 4,
      food_item_name: 'Pasta Primavera',
      price: 11.99,
      image_link: 'https://via.placeholder.com/250x250?text=Pasta+Primavera'
    },
    {
      sr_no: 5,
      food_item_name: 'Chocolate Cake',
      price: 4.99,
      image_link: 'https://via.placeholder.com/250x250?text=Chocolate+Cake'
    },
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
  };

  if (loading) {
    return <div>Loading menu...</div>;
  }

  return (
    <div className="menu-container">
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
                <p className="menu-item-price">${item.price.toFixed(2)}</p>
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
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Menu;