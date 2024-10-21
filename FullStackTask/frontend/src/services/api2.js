import axios from 'axios';
const API_URL = 'https://kaushalam-backend-final.onrender.com/api/auth';

// User signup
export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);

// User login
export const login = (userData) => axios.post(`${API_URL}/login`, userData);