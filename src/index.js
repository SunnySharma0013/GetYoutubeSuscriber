const mongoose = require('mongoose');
const app = require('./app.js'); // This already contains your express app with routes and middleware
const port = process.env.PORT || 3000;

// MongoDB Atlas URL
const DATABASE_URL = "mongodb+srv://SunySharma:Sunny%402002@cluster0.8jtdvca.mongodb.net/youtubeSubscribersDB?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('Connection error:', err));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));
