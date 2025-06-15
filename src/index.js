const express = require('express');
const app = require('./app.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get('/', (req, res) => {
  res.send(`
    <div style="width: 350px; margin: 40px auto; font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; box-shadow: 2px 2px 10px #ccc;">
      <h3>Get YouTube Subscribers</h3>
      <p>This is a simple API project using Node.js and MongoDB.</p>
      <ul>
        <li><a href="/subscribers">/subscribers</a></li>
        <li><a href="/subscribers/names">/subscribers/names</a></li>
        <li><a href="/subscribers/664a5a92fcd3cf0d2c4fa170">/subscribers/:id</a></li>
      </ul>
    </div>
  `);
});

// MongoDB connection
const DATABASE_URL = "mongodb+srv://SunySharma:Sunny%402002@cluster0.8jtdvca.mongodb.net/youtubeSubscribersDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Connection error:', err));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
