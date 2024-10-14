const redis = require('@redis/client');
require('dotenv').config();
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


exports.publishEvent = async (data) => {
    try {

        console.log(JSON.stringify(data))
        const result = await client.publish('receiverChannel', JSON.stringify(data));
        console.log('Event published to receiverChannel:', result);
    } catch (err) {
        console.error('Error publishing event:', err);
    }
};
