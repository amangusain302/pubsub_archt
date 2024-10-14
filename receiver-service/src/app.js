const express = require('express');
const bodyParser = require('body-parser');
const receiverRoutes = require('./routes/reciever.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


app.use('/receiver', receiverRoutes);

module.exports = app;