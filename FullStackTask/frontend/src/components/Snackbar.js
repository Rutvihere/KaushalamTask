// src/components/Snackbar.js
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarComponent = ({ open, message, handleClose, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
