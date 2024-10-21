// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api2'; // Assume this is your API call

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' }); // Adjust state structure
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value })); // Update state dynamically
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials); // Make the API call
      const { token, username } = response.data; // Adjust based on your response structure
      localStorage.setItem('authToken', token); // Store token
      localStorage.setItem('username', username); // Store username
      navigate('/alltasks'); // Redirect to tasks page
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password'); // Set error message
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email" // Add name attribute
          fullWidth
          variant="outlined"
          margin="normal"
          value={credentials.email} // Bind value to state
          onChange={handleChange} // Use handleChange
        />
        <TextField
          label="Password"
          name="password" // Add name attribute
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={credentials.password} // Bind value to state
          onChange={handleChange} // Use handleChange
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        If you don't have an account, <Link href="/signup">Signup</Link>
      </Typography>
    </div>
  );
};

export default Login;
