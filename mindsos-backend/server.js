// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.send('MindSOS server is up and running!');
  });
  
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
