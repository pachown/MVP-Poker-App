const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerName: String,
  password: String,
  funds: Number,
  seat: Number,
  hand: Array,
});

const players = mongoose.model('players', playerSchema);

module.exports = players;