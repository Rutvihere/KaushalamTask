// // middleware/auth.js
// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     return res.status(400).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;
