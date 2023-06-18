const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
