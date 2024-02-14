const mongoose = require('mongoose');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = express.Router(); 

// decryptURI
const decryptURI = (encryptRUI) => {
    // function to decrypt
    return encryptRUI; 
};

router.post('/receive-mongo-uri', async (req, res) => {
    const { encryptedURI } = req.body;
    const decryptedURI = decryptURI(encryptedURI);
  
    try {
      await mongoose.connect(decryptedURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
      res.send('Successfully connected to MongoDB');
    } catch (err) {
      console.error('Could not connect to MongoDB', err);
      res.status(500).send('Failed to connect to MongoDB');
    }
  });
  
  module.exports = router;

  