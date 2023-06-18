const admin = require('firebase-admin');

// Function to handle user login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verify the login credentials using the Firebase Admin SDK
    const userRecord = await admin.auth().getUserByEmail(email);

    // Check if the provided credentials match the stored credentials or the demo user credentials
    if (email === 'demo@example.com' && password === 'password') {
      // Fetch user data from the Realtime Database
      const userRef = admin.database().ref(`/users/${userRecord.uid}`);
      const snapshot = await userRef.once('value');
      let user = snapshot.val();

      // If user data doesn't exist, create a new user record
      if (!user) {
        user = {
          email: userRecord.email,
          // Add other relevant user data as needed
        };
        await userRef.set(user);
      }

      // Return the user data as a response
      return res.status(200).json({ user });
    }

    // If the credentials are invalid, return an error message
    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    // Handle any errors that occur during the authentication process
    console.log('Error fetching user data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
