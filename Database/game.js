const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  dealerBtn: Number,
  street: String,
  players: [String],
})

const game = mongoose.model('game', gameSchema);

module.exports = game;