const express = require('express');
const app = express();


const { db } = require('../config.js');
const admin = require('firebase-admin');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'js');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://console.firebase.google.com/project/crud-firebase-3dda0/firestore/data/~2F',
});

// Define the endpoint to receive customer review data
app.post('/api/customer-review', (req, res) => {
  const data = req.body;

  // Save the data to a Firebase database collection
  const reviewsRef = db.collection('customer-reviews');
  reviewsRef.add(data)
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`);
      res.status(200).send('Review submitted successfully!');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
      res.status(500).send('Error adding document!');
    });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
