const Axios = require('axios');

// Totally new deck. ID expires every 2 weeks
const newDeck = () => {
  Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((cards) => {return cards.data})
}

// Draws one card from the deck
const drawOne = (deckId) => {
  Axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((cards) => {return cards.data});
}

// draws two cards from the deck
const drawTwo = (deckId) => {
  Axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
  .then((cards) => {return cards.data});
}

// Draws three cards from the deck
const drawThree = (deckId) => {
  Axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=23`)
  .then((cards) => {return cards.data});
}

exports.default = {
  draw1: drawOne,
  draw2: drawTwo,
  draw3: drawThree
}