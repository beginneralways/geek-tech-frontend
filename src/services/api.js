import axios from 'axios';
// import React from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});

// Function to retrieve tokens from local storage
const getTokensFromStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  return { accessToken, refreshToken };
};

// Function to attach tokens to the request headers
const attachTokensToHeaders = (headers) => {
  const { accessToken } = getTokensFromStorage();
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }
};

// Interceptor to attach tokens to outgoing requests
api.interceptors.request.use((config) => {
  attachTokensToHeaders(config.headers);
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
