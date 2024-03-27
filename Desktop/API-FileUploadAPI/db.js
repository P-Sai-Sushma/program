// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/fileupload')
  .then(() => console.log('Connection to MongoDB successful'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

module.exports = mongoose.connection;




