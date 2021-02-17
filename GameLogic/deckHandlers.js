const Axios = require('axios');

// Totally new deck. ID expires every 2 weeks
const newDeck = () => {
  Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((cards) => {
    // console.log(cards.data);
    return cards.data;
  })
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
  Axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
  .then((cards) => {return cards.data});
}

// https://deckofcardsapi.com/api/deck/2lcl0x2x6fsm/draw/?count=52
let deckObj = []
const shuffle = (deckId) => {
  Axios.get(`https://deckofcardsapi.com/api/deck/2lcl0x2x6fsm/shuffle/`)
  .then((cards) => console.log(cards.data.cards));
}




module.exports = {
  newDeck: newDeck,
  draw1: drawOne,
  draw2: drawTwo,
  draw3: drawThree,
  shuffle: shuffle,
}

