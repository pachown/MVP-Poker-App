const Players = require('../Database/players.js');
const Game = require('../Database/game.js');
const Cards = require('../GameLogic/deckHandlers.js');
const Start = require('../GameLogic/start.js');
const db = require('../Database/index.js');
const mongoose = require('mongoose');

// Starts game
const start = (req, res) => {
  Start.startRound(req, res);

}
// Add new player
const addPlayer = (req, res) => {
  Players.add(req, res);
}
const updatePlayer = (req, res) => {
  Players.add(req, res);
}
const RemovePlayer = (req, res) => {

}
// Retrieve a player by ID
const getPlayer = (req, res) => {
  Players.getById(req, res);
}
// Retrieve array of all players
const getPlayers = (req, res) => {
  Players.getAll(req, res);
}
// Delete player by ID
const deletePlayer = (req, res) => {
  Players.delete(req, res);
}
// Returns playerState and gameState data
const getGameState = (req, res) => {
  let gameData;
  Game.Game.findOne({}, (err, result) => {
    if (err) {console.log(err)}
    else
    {gameData = result;}
  }).then(()=>{
    Players.Players.find({}, (err, result) => {
      if (err) {res.status(400).send(err)}
      else
      {
        for (var i = 0; i < result.length; i++) {

            gameData.seats[result[i].seat] = result[i]
        }
    }}).then(()=>{
      res.status(201).send(gameData);
    })
    .catch((err) => {
      console.log(err);
    })
  })
}

module.exports = {
  start,
  addPlayer,
  getPlayer,
  getPlayers,
  getGameState,
  updatePlayer,
  deletePlayer,
}