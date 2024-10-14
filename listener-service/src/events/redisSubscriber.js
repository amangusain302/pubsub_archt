const redis = require('@redis/client');
require('dotenv').config();
const { ListenerModel } = require('../models/Listener');
const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

client.connect()
    .then(() => {
        console.log('Connected to Redis');
    })
    .catch((err) => {
        console.error('Redis connection error:', err);
    });


client.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});


client.subscribe('receiverChannel', async (message, channel) => {
    try {
        console.log(`Received message from channel: ${channel}`);
        const data = JSON.parse(message);
        
        const newRecord = new ListenerModel({
            ...data,
            modified_at: new Date(),
        });

        await newRecord.save();
        console.log('Record saved to second table:', newRecord);
    } catch (error) {
        console.error('Error processing message:', error);
    }
});


client.subscribe('receiverChannel');
