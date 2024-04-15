import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('prashantkayastha67@gmail.com');
  const [password, setPassword] = useState('string');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3333/api/v1/auth/login', { email, password });

      // Store tokens and user data securely in local storage
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Convert user object to string before storing
      navigate('/list');

      // Log success message
      console.log('Logged in successfully:', response.data);

      // Redirect user to dashboard or another page
      // window.location.href = '/dashboard';
    } catch (error) {
      setError('Failed to login. Please check your email and password.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <div className="form-group">
          <label className="label">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
