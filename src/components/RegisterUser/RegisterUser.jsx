// RegisterUserForm.js

import React, { useState } from 'react';
import axios from 'axios';

const RegisterUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/api/v1/users', formData); // Assuming your backend endpoint is '/api/users'
      console.log('User registered successfully:', response.data);
      setSuccessMessage('User registered successfully!');
      setErrorMessage('');
      // Reset form fields after successful registration
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Registration failed. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
