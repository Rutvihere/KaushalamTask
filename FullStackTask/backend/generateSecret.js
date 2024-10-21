const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex'); // Generates a 64-character hex string
console.log(secret);
