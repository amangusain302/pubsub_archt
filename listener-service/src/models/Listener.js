const mongoose = require('mongoose');

const ListenerSchema = new mongoose.Schema({
    user: String,
    class: String,
    age: Number,
    email: String,
    inserted_at: Date,
    modified_at: Date,
});

const ListenerModel = mongoose.model('Listener', ListenerSchema);
module.exports = { ListenerModel };
