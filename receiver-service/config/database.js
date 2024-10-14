const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Receiver Service: Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
