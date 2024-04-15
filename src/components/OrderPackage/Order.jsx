import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css'; // Importing CSS file for styling

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
      fetchProducts();
    } else {
      // Redirect to login page or handle unauthorized access
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3333/api/v1/item/batch');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const placeOrder = async () => {
    try {
      const productIds = cart.map((product) => product.id);
      await axios.post('http://localhost:3333/api/v1/package', {
        customerName: customerName,
        Ids: productIds,
      });
      setCart([]);
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="product-list-container"> 
      {isLoggedIn ? (
        <div>
          <h2 className="title">Product List</h2> 
          <ul className="product-list"> 
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <div>Name: {product.name}</div>
                <div>Price: {product.price}</div>
                <div>Weight: {product.weight}</div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
          <h2 className="title">Cart</h2> 
          <ul className="cart-list"> 
            {cart.map((item, index) => (
              <li key={index} className="cart-item"> 
                <div>Name: {item.name}</div>
                <div>Price: {item.price}</div>
                <div>Weight: {item.weight}</div>
              </li>
            ))}
          </ul>
          {cart.length > 0 && !orderPlaced && (
            <div>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="input" 
              />
              <button onClick={placeOrder} className="button">Place Order</button> 
            </div>
          )}
          {orderPlaced && <p className="order-placed-message">Order placed successfully!</p>} 
          <button onClick={() => setIsLoggedIn(false)} className="button">Logout</button> 
        </div>
      ) : (
        <p className="login-message">Please log in to view the products.</p> 
      )}
    </div>
  );
};

export default Order;
