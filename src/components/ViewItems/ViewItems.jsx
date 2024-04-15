import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewItems.css'; // Import CSS file for styling

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3333/api/v1/item/batch');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="items-container">
      <h2>Items List</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-box">
            <div className="item-name">Name: {item.name}</div>
            <div className="item-price">Price: {item.price}</div>
            <div className="item-weight">Weight: {item.weight}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewItems;
