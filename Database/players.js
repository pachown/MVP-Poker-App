const mongoose = require('mongoose');
const db = require('./index.js');
require('newrelic');

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    unique: true,
  },
  action: String,
  wins: Number,
  bet: Number,
  funds: Number,
  seat: {
    type: String,
    unique: true,
  },
  hand: [
    {
      code: String,
      image: String,
    },
    {
      code: String,
      image: String,
    },
  ],
  button: Boolean,
  myTurn: Boolean,
  moneyAddedThisStreet: Number,
});

const Players = mongoose.model('Players', playerSchema);

module.exports = {
  Players,
  getById: (req, res) => {
    Players.findOne({ _id: req.params.id }, (err, result) => {
      if (err) { res.status(400).send(err); }
      else { res.status(200).send(result) };
    })
  },
  getAll: (req, res) => {
    Players.find({}, (err, result) => {
      if (err) { res.status(400).send(err); }
      else
        res.status(200).send(result);
    })
  },
  update: (req, res) => {
    const playerId = {_id: req.body._id};
    const playerInfo = {
      playerName: req.body.playerName,
      action: req.body.action,
      bet: req.body.bet,
      seat: req.body.seat,
      funds: req.body.funds,
      button: req.body.button,
      myTurn: req.body.myTurn,
      moneyAddedThisStreet: req.body.moneyAddedThisStreet,
      hand: [
        {
          code: req.body.hand[0].code,
          image: req.body.hand[0].image,
        },
        {
          code: req.body.hand[1].code,
          image: req.body.hand[1].image,
        },
      ],
    };
    Players.updateOne(playerId, playerInfo, (err, result) => {
        if (err) { res.status(400).send(err);}
        else {console.log('updatedPlayer')};
    })
  },
  add: (req, res) => {
    const player = {
      playerName: req.body.playerName,
      seat: req.body.seat,
      funds: req.body.funds,
    }
    Players.create(player, (err, result) => {
      if (err) { res.status(400).send(err); }
      else { res.status(201).send(result) };
    });
  },
  delete: (req, res) => {
    console.log(`Deleting ${req.params.id}`);
    Players.deleteOne({ _id: req.params.id }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log('Player Deleted')
        res.send(result);
      }
    }
    )
  },
};