// server.js
const express = require('express');
const { multer, uploadMiddleware, mapMulterError } = require('./middleware');
const { handleFileUpload } = require('./filehandler');
const db = require('./db');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/upload', uploadMiddleware, handleFileUpload);

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
