const { ReceiverModel } = require('../models/Recevier');
const { publishEvent } = require('../services/redisService');


exports.saveData = async (req, res) => {
    try {
        const { user, class: className, age, email } = req.body;

        if (!user || !className || !age || !email) {
            return res.status(400).send('Invalid data');
        }

        const newRecord = new ReceiverModel({
            user,
            class: className,
            age,
            email,
            inserted_at: new Date()
        });

        await newRecord.save();
        publishEvent(newRecord); 

        res.status(201).json({ message: 'Data saved', data: newRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
};
