

const express = require('express');
const app = express();
const Subscriber = require('./models/subscribers');

// Middleware to parse JSON
app.use(express.json());

// GET /subscribers – return all subscribers
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /subscribers/names – return name and subscribedChannel
app.get('/subscribers/names', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /subscribers/:id – return subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res.status(400).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;

