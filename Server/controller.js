const Players = require('../Database/players.js');
const Game = require('../Database/game.js');
const Cards = require('../GameLogic/deckHandlers.js');
const Start = require('../GameLogic/start.js');
const db = require('../Database/index.js');
const mongoose = require('mongoose');
const Hand = require('pokersolver').Hand;

// Starts game
const start = (req, res) => {
  Start.startRound(req, res);
}
// Add new player
const addPlayer = (req, res) => {
  Players.add(req, res);
}
const updatePlayer = (req, res) => {
  Players.update(req, res)

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
// Show down hands and log winner to db
const showdown = (req, res) => {
let gameData, playerData, allHands, hand, solution, playerOrder, winner;
Game.Game.findOne({}, (err, result) => {
  allHands = [];
  playerOrder = [];
  hand = [];
  if (err) {console.log(err)}
  else
  {gameData = result}
})
.then(() => {
  Players.Players.find({}, (err, result) => {
    if (err) {res.status(400).send(err)}
    else
    {
      playerData = result;
        for (var i = 0; i < playerData.length; i++) {
        if (playerData[i].hand.length !== 0){
          for(var j = 0; j < playerData[i].hand.length; j++) {
            if (playerData[i].hand[j].code[0] == '0'){
              playerData[i].hand[j].code = playerData[i].hand[j].code.replace("0", "T");
            }
          }
          for(var k = 0; k < gameData.board.length; k++) {
            if (gameData.board[i].code[0] == '0'){
              gameData.board[k].code = gameData.board[k].code.replace("0", "T");
            }
          }
          hand = [playerData[i].hand[0].code, playerData[i].hand[1].code]
          hand = hand.concat([gameData.board[0].code,gameData.board[1].code,gameData.board[2].code,gameData.board[3].code,gameData.board[4].code]);
          playerOrder.push(playerData[i])
          hand = Hand.solve(hand)
          allHands.push(hand);
          playerData[i].solvedHand = hand;
        }
      }
    }
  }).then(()=> {
    solution = Hand.winners(allHands);
    let winner = '';
    playerOrder.forEach((player) => {
      if(player.solvedHand.descr === solution[0].descr) {
        winner += ` ${player.playerName}, ${player.solvedHand.descr}`
      }
    })
    gameData.winner = winner;
  })
  .then(()=>{
    let req, res;
    req = {body: gameData}
    res = {
      status: undefined,
    }
    Game.updateGame(req, res)
  })
  .then(()=>{
    res.status(201).send(gameData);
  })
  .catch((err) => {
    console.log(err);
  })
})
}

// Returns playerState and gameState data
const getGameState = (req, res) => {
  let gameData;
  Game.Game.findOne({}, (err, result) => {
    if (err) {console.log(err)}
    else
    {gameData = result;}
    console.log(result);
  }).then(()=>{
    Players.Players.find({}, (err, result) => {
      if (err) {res.status(400).send(err)}
      else
      {
        for (var i = 0; i < result.length; i++) {
          if(gameData === undefined){
            console.log('error here', i)
            continue;
          }
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
  showdown,
  start,
  addPlayer,
  getPlayer,
  getPlayers,
  getGameState,
  updatePlayer,
  deletePlayer,
}