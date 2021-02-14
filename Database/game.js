const mongoose = require('mongoose');
const db = require('./index.js');

const gameSchema = new mongoose.Schema({
  dealerBtn: 'String',
  street: String,
  pot: Number,
  board: Array,
  deckId: String,
  seats: {
    player1: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player2: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player3: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player4: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player5: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player7: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player6: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player8: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
    player9: {  playerName: {
      type: String,
      unique: true,
    },
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    hand: Array,
    button: Boolean,
    myTurn: Boolean,},
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = {
  Game,
  updateGame: (req, res) => {

    let gameId = {_id: req.body.id};
    let data = {
      dealerBtn: req.body.dealerBtn,
      street: req.body.street,
      pot: req.body.pot,
      deck: req.body.deck,
      seats: {
        player1: req.body.player1,
        player2: req.body.player2,
        player3: req.body.player3,
        player4: req.body.player4,
        player5: req.body.player5,
        player7: req.body.player6,
        player6: req.body.player7,
        player8: req.body.player8,
        player9: req.body.player9,
      }
    }
    let options = {
      upsert: true,
    }

    Game.findOneAndUpdate(gameId, data, options, (err, result) => {
      if (err) { console.log('Could not update game DB') }
      else {
        console.log('Updated DB');
        if (res) {
          res.status(200).send(result);
        }
      }
    })
  }
};