// src/App.js
import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
      <Routes>
        {/* Set the default route to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />
        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        {/* Tasks route */}
        <Route path="/alltasks" element={<HomePage />} />
      </Routes>

  );
};

export default App;
