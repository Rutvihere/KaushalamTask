// models/User.js
const mongoose = require('mongoose');

// Use the user connection if defined
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a new connection for the user model
const userConnection = mongoose.createConnection(process.env.MONGODB_URI_USERS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = userConnection.model('User', userSchema);
