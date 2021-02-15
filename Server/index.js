const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../Database/index.js');
const Controller = require('./controller.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(`${__dirname}/../Client/dist`));

// Game Routes
app.get('/api/gameState', (req, res) => {
  Controller.getGameState(req, res);
});
app.get('/api/gameStart', (req, res) => {
  Controller.start(req, res);
})
// app.post('/api/gameState', (req, res) => {

// });
// app.put('/api/gameState:id', (req, res) => {

// });
// app.delete('/api/gameState:id', (req, res) => {

// });

// Player Routes
app.get('/api/player:id', (req, res) => {
  Controller.getPlayer(req, res);
});
app.post('/api/player', (req, res) => {
  Controller.addPlayer(req, res);
});
app.put('/api/player:id', (req, res) => {
  Controller.updatePlayer(req, res);
})
// app.put('/api/player:id', (req, res) => {

// });
app.delete('/api/player/:id', (req, res) => {
  console.log('hello');
  Controller.deletePlayer(req, res);
});

// Cards Route Test
app.get('/api/cards', (req, res) => {
  Controller.start(req, res);
})

module.exports = app;