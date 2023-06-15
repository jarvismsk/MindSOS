// Import the User model
const User = require('../models/user');

// Create a new user
const newUser = new User({
  username: 'john123',
  password: 'password123',
  email: 'john@example.com',
});

// Save the user to the database
newUser.save()
  .then(() => {
    console.log('User created successfully');
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
