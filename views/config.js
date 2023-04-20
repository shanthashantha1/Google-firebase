const admin = require('firebase-admin');
const serviceAccount = require('./crud.json');

// Check if the app has already been initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
