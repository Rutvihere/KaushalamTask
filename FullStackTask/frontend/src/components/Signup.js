// // src/components/Signup.js
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';
//     if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       const users = JSON.parse(localStorage.getItem('signupUsers')) || [];
//       // Check if user already exists
//       const existingUser = users.find((user) => user.email === email);
//       if (existingUser) {
//         setErrors({ email: 'Email already in use' });
//       } else {
//         // Add new user
//         users.push({ username, email, password });
//         localStorage.setItem('signupUsers', JSON.stringify(users));
//         navigate('/login'); // Redirect to the login page after successful signup
//       }
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>Signup</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Username"
//           fullWidth
//           variant="outlined"
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           error={!!errors.username}
//           helperText={errors.username}
//         />
//         <TextField
//           label="Email"
//           fullWidth
//           variant="outlined"
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={!!errors.email}
//           helperText={errors.email}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           variant="outlined"
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           error={!!errors.password}
//           helperText={errors.password}
//         />
//         <TextField
//           label="Confirm Password"
//           type="password"
//           fullWidth
//           variant="outlined"
//           margin="normal"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           error={!!errors.confirmPassword}
//           helperText={errors.confirmPassword}
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Signup
//         </Button>
//       </form>
//       <Typography variant="body1" style={{ marginTop: '10px' }}>
//         If you are already a user, <Link href="/login">Login</Link>
//       </Typography>
//     </div>
//   );
// };

// export default Signup;


// src/components/Signup.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/api2'; // Assume this is your API call

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!credentials.username) newErrors.username = 'Username is required';
    if (!credentials.email) newErrors.email = 'Email is required';
    if (!credentials.password) newErrors.password = 'Password is required';
    if (credentials.password !== credentials.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value })); // Update state dynamically
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // Normalize email to lowercase
        const normalizedCredentials = {
          ...credentials,
          email: credentials.email.toLowerCase(),
        };
  
        // Make the API call
        const response = await signup(normalizedCredentials);
  
        // Check if the response indicates success
        if (response.data.message === "User created successfully") {
          const users = JSON.parse(localStorage.getItem('signupUsers')) || [];
          
          // Add new user to localStorage (for demonstration purposes)
          users.push({ username: normalizedCredentials.username, email: normalizedCredentials.email, password: normalizedCredentials.password });
          localStorage.setItem('signupUsers', JSON.stringify(users)); // Store users in localStorage
          navigate('/login'); // Redirect to the login page after successful signup
        } else {
          // Handle unexpected response
          setErrors({ email: 'Unexpected response from server.' });
        }
      } catch (error) {
        console.error('Signup failed:', error.response ? error.response.data : error);
        setErrors({ email: error.response?.data?.message || 'Signup failed. Please try again.' });
      }
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     try {
  //       const response = await signup(credentials); // Make the API call
  //       const { email } = response.data; // Adjust based on your response structure
  //       const users = JSON.parse(localStorage.getItem('signupUsers')) || [];
        
  //       // Check if user already exists
  //       const existingUser = users.find((user) => user.email === email);
  //       if (existingUser) {
  //         setErrors({ email: 'Email already in use' });
  //       } else {
  //         // Add new user
  //         users.push({ username: credentials.username, email, password: credentials.password });
  //         localStorage.setItem('signupUsers', JSON.stringify(users)); // Store users in localStorage
  //         navigate('/login'); // Redirect to the login page after successful signup
  //       }
  //     } catch (error) {
  //       console.error('Signup failed:', error);
  //       setErrors({ email: 'Signup failed. Please try again.' }); // Handle API errors
  //     }
  //   }
  // };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username" // Add name attribute
          fullWidth
          variant="outlined"
          margin="normal"
          value={credentials.username} // Bind value to state
          onChange={handleChange} // Use handleChange
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          name="email" // Add name attribute
          fullWidth
          variant="outlined"
          margin="normal"
          value={credentials.email} // Bind value to state
          onChange={handleChange} // Use handleChange
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword" // Add name attribute
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={credentials.confirmPassword} // Bind value to state
          onChange={handleChange} // Use handleChange
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Signup
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        If you are already a user, <Link href="/login">Login</Link>
      </Typography>
    </div>
  );
};

export default Signup;

