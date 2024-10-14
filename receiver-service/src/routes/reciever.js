const express = require('express');
const { saveData } = require('../controllers/receiverController');

const router = express.Router();


router.post('/', saveData);

module.exports = router;
