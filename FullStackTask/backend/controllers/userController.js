// // backend/controllers/userController.js
// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Signup Controller
// const signup = async (req, res) => {
//   const { username, email, password } = req.body;
  
//   const hashedPassword = await bcrypt.hash(password, 10);
  
//   const user = new User({
//     username,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await user.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Login Controller
// const login = async (req, res) => {
//   const { username, password } = req.body;
  
//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, username: user.username });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { signup, login };
