// src/features/auth/authService.js
import axios from "axios";

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// API calls
export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  return response.data;
};

export const registerUser = async ({ name, email, password, role }) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, { name, email, password, role });
  return response.data;
};