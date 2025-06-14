const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
<<<<<<< HEAD
//const DATABASE_URL = "mongodb://localhost/subscribers";
const DATABASE_URL = "mongodb+srv://SunySharma:Sunny@2002@cluster0.8jtdvca.mongodb.net/youtubeSubscribersDB?retryWrites=true&w=majority&appName=Cluster0";

=======
const DATABASE_URL = "mongodb://localhost/subscribers";
>>>>>>> 367d214b4e6669a2eec9b6d42c01da820898ef17
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()