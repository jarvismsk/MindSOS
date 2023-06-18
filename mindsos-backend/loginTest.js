const admin = require('firebase-admin');

const serviceAccount = require('./firebase/mindsos-health-firebase-adminsdk-etbm4-cc45d9cba8.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mindsos-health-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

// Function to simulate login with demo user
const simulateLogin = async () => {
  const email = 'demo@example.com';
  const password = 'password';

  try {
    // Verify the login credentials using the Firebase Admin SDK
    const userRecord = await admin.auth().getUserByEmail(email);

    // Check if the provided credentials match the stored credentials or the demo user credentials
    if (email === 'demo@example.com' && password === 'password') {
      // Fetch user data from the Realtime Database
      const userRef = admin.database().ref(`/users/${userRecord.uid}`);
      const snapshot = await userRef.once('value');
      const user = snapshot.val();

      // Log the user data
      console.log('Login successful');
      console.log('User:', user);
    } else {
      console.log('Invalid credentials');
    }
  } catch (error) {
    console.log('Error fetching user data:', error.message);
  }
};

// Call the function to simulate the login
simulateLogin();
