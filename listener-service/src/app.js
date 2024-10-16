const express = require('express');
require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send("Listener-service is running")
})

module.exports = app;
