const express = require('express');
const app = require('./app.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Correct MongoDB URI with password safely encoded
const DATABASE_URL = "mongodb+srv://SunySharma:Sunny%402002@cluster0.8jtdvca.mongodb.net/youtubeSubscribersDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Connection error:', err));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
