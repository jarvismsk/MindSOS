const admin = require('firebase-admin');
const serviceAccount = require('./mindsos-health-firebase-adminsdk-etbm4-cc45d9cba8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mindsos-health-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

module.exports = admin;