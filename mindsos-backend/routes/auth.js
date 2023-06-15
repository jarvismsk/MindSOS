// Import required modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Route for user registration
router.post('/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne().or([{ username }, { email }]);
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    // Return the token to the client
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error in user registration:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Return the token to the client
    res.json({ token });
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
