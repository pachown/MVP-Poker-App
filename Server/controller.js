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
  let gameData = {
    gameState: {
      seats: {
        player1: {playerName: 'player1', funds: 0},
        player2: {playerName: 'player2', funds: 0},
        player3: {playerName: 'player3', funds: 0},
        player4: {playerName: 'player4', funds: 0},
        player5: {playerName: 'player5', funds: 0},
        player6: {playerName: 'player6', funds: 0},
        player7: {playerName: 'player7', funds: 0},
        player8: {playerName: 'player8', funds: 0},
        player9: {playerName: 'player9', funds: 0},
      },
    },
  }
  Players.Players.find({}, (err, result) => {
    if (err) {res.status(400).send(err)}
    else
    {
      for (var i = 0; i < result.length; i++) {
        gameData.gameState.seats[result[i].seat] = result[i]
      }
  }}).then(()=>{
    res.status(201).send(gameData);
  })
}

module.exports = {
  start,
  addPlayer,
  getPlayer,
  getPlayers,
  getGameState,
  deletePlayer,
}