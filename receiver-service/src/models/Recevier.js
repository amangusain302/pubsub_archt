const mongoose = require('mongoose');

const ReceiverSchema = new mongoose.Schema({
    user: String,
    class: String,
    age: Number,
    email: String,
    inserted_at: Date,
});

const ReceiverModel = mongoose.model('Receiver', ReceiverSchema);
module.exports = { ReceiverModel };
