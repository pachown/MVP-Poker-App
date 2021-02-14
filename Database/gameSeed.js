const mongoose = require('mongoose');
const Game = require('./game.js');

const seedGame = () => {
  data = {
     dealerBtn: 'player1',
     street: 'preflop',
     pot: 0,
     deck: {
       deck_id: String,
     },
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
     }
   }
   Game.Game.create(data, (err, result) => {
     if (err) {console.log(err)}
     else
     {console.log('Seeded DB')}
   })
 }
seedGame();