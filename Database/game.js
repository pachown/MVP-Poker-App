const mongoose = require('mongoose');
const db = require('./index.js');

const gameSchema = new mongoose.Schema({
  dealerBtn: 'String',
  street: String,
  pot: Number,
  board: Array,
  deckId: String,
  currentBet: Number,
  winner: String,
  board: [
    {
      code: String,
      image: String,
    },
    {
      code: String,
      image: String,
    },
    {
      code: String,
      image: String,
    },
    {
      code: String,
      image: String,
    },
    {
      code: String,
      image: String,
    },
  ],
  seats: {
    player1: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]
  },
    player2: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player3: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player4: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player5: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player7: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player6: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player8: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
    player9: {  playerName: {
      type: String,
      unique: true,
    },
    wins: Number,
    funds: Number,
    seat: {
      type: String,
      unique: true,
    },
    button: Boolean,
    myTurn: Boolean,
    hand: [
      {
        code: String,
        image: String,
      },
      {
        code: String,
        image: String,
      },
    ]},
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = {
  Game,
  updateGame: (req, res) => {
// console.log(req.body.board);
    let gameId = {_id: req.body.id};
    let data = {
      dealerBtn: req.body.dealerBtn,
      street: req.body.street,
      pot: req.body.pot,
      deck: req.body.deck,
      wins: req.body.wins,
      currentBet: req.body.currentBet,
      winner: req.body.winner,
      seats: {
        player1: req.body.seats.player1,
        player2: req.body.seats.player2,
        player3: req.body.seats.player3,
        player4: req.body.seats.player4,
        player5: req.body.seats.player5,
        player7: req.body.seats.player6,
        player6: req.body.seats.player7,
        player8: req.body.seats.player8,
        player9: req.body.seats.player9,
      },
      board: [
        {
          code: req.body.board[0].code,
          image: req.body.board[0].image,
        },
        {
          code: req.body.board[1].code,
          image: req.body.board[1].image,
        },
        {
          code: req.body.board[2].code,
          image: req.body.board[2].image,
        },
        {
          code: req.body.board[3].code,
          image: req.body.board[3].image,
        },
        {
          code: req.body.board[4].code,
          image: req.body.board[4].image,
        },

      ]
    }
    let options = {
      upsert: true,
      useFindAndModify: false,
    }

    Game.findOneAndUpdate(gameId, data, options, (err, result) => {
      if (err) { console.log('Could not update game DB') }
      else {
        console.log('Updated DB');
      }
    })
  }
};