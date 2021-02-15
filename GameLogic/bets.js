const Deck = require('./deckHandlers.js');
const Players = require('../Database/players.js');
const Game = require('../Database/game.js');
const Axios = require('axios');

const bets = (orderedPlayers, gameState, firstPlayer) => {
//start listening for actions at first player
//if bet is made, update currentBet (player name & amt) and pot size to gameState in db, exit function and restart function with new array
//if fold, remove from orderedPlayers
//if only one player remaining in array, start win round logic
//If array gets to the end

}

module.exports = {
  bets,
}