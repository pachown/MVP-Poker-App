const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../Database/index.js');
const controller = require('./controller.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(`${__dirname}/../Client/dist`));

// Game Routes
app.get('/api/game', (req, res) => {

});
app.post('/api/game', (req, res) => {

});
app.put('/api/game:id', (req, res) => {

});
app.delete('/api/game:id', (req, res) => {

});

// Player Routes
app.get('/api/player', (req, res) => {

});
app.post('/api/player', (req, res) => {

});
app.put('/api/player:id', (req, res) => {

});
app.delete('/api/player:id', (req, res) => {

});

module.exports = app;