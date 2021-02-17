var Shuffle = require('shuffle');
const deck = [
  {"code": "KH", "image": "https://deckofcardsapi.com/static/img/KH.png"},
  {"code": "3C", "image": "https://deckofcardsapi.com/static/img/3C.png"},
  {"code": "TS", "image": "https://deckofcardsapi.com/static/img/0S.png"},
  {"code": "7D", "image": "https://deckofcardsapi.com/static/img/7D.png"},
  {"code": "JH", "image": "https://deckofcardsapi.com/static/img/JH.png"},
  {"code": "3S", "image": "https://deckofcardsapi.com/static/img/3S.png"},
  {"code": "5S", "image": "https://deckofcardsapi.com/static/img/5S.png"},
  {"code": "2S", "image": "https://deckofcardsapi.com/static/img/2S.png"},
  {"code": "AH", "image": "https://deckofcardsapi.com/static/img/AH.png"},
  {"code": "5H", "image": "https://deckofcardsapi.com/static/img/5H.png"},
  {"code": "4H", "image": "https://deckofcardsapi.com/static/img/4H.png"},
  {"code": "4C", "image": "https://deckofcardsapi.com/static/img/4C.png"},
  {"code": "8S", "image": "https://deckofcardsapi.com/static/img/8S.png"},
  {"code": "4D", "image": "https://deckofcardsapi.com/static/img/4D.png"},
  {"code": "JC", "image": "https://deckofcardsapi.com/static/img/JC.png"},
  {"code": "7C", "image": "https://deckofcardsapi.com/static/img/7C.png"},
  {"code": "9D", "image": "https://deckofcardsapi.com/static/img/9D.png"},
  {"code": "5D", "image": "https://deckofcardsapi.com/static/img/5D.png"},
  {"code": "KC", "image": "https://deckofcardsapi.com/static/img/KC.png"},
  {"code": "KD", "image": "https://deckofcardsapi.com/static/img/KD.png"},
  {"code": "2D", "image": "https://deckofcardsapi.com/static/img/2D.png"},
  {"code": "6S", "image": "https://deckofcardsapi.com/static/img/6S.png"},
  {"code": "9C", "image": "https://deckofcardsapi.com/static/img/9C.png"},
  {"code": "4S", "image": "https://deckofcardsapi.com/static/img/4S.png"},
  {"code": "9S", "image": "https://deckofcardsapi.com/static/img/9S.png"},
  {"code": "TD", "image": "https://deckofcardsapi.com/static/img/0D.png"},
  {"code": "AD", "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png"},
  {"code": "TC", "image": "https://deckofcardsapi.com/static/img/0C.png"},
  {"code": "3H", "image": "https://deckofcardsapi.com/static/img/3H.png"},
  {"code": "AS", "image": "https://deckofcardsapi.com/static/img/AS.png"},
  {"code": "2H", "image": "https://deckofcardsapi.com/static/img/2H.png"},
  {"code": "QS", "image": "https://deckofcardsapi.com/static/img/QS.png"},
  {"code": "5C", "image": "https://deckofcardsapi.com/static/img/5C.png"},
  {"code": "KS", "image": "https://deckofcardsapi.com/static/img/KS.png"},
  {"code": "QC", "image": "https://deckofcardsapi.com/static/img/QC.png"},
  {"code": "7S", "image": "https://deckofcardsapi.com/static/img/7S.png"},
  {"code": "6H", "image": "https://deckofcardsapi.com/static/img/6H.png"},
  {"code": "QD", "image": "https://deckofcardsapi.com/static/img/QD.png"},
  {"code": "AC", "image": "https://deckofcardsapi.com/static/img/AC.png"},
  {"code": "9H", "image": "https://deckofcardsapi.com/static/img/9H.png"},
  {"code": "8C", "image": "https://deckofcardsapi.com/static/img/8C.png"},
  {"code": "8D", "image": "https://deckofcardsapi.com/static/img/8D.png"},
  {"code": "6C", "image": "https://deckofcardsapi.com/static/img/6C.png"},
  {"code": "6D", "image": "https://deckofcardsapi.com/static/img/6D.png"},
  {"code": "TH", "image": "https://deckofcardsapi.com/static/img/0H.png"},
  {"code": "7H", "image": "https://deckofcardsapi.com/static/img/7H.png"},
  {"code": "JS", "image": "https://deckofcardsapi.com/static/img/JS.png"},
  {"code": "QH", "image": "https://deckofcardsapi.com/static/img/QH.png"},
  {"code": "3D", "image": "https://deckofcardsapi.com/static/img/3D.png"},
  {"code": "2C", "image": "https://deckofcardsapi.com/static/img/2C.png"},
  {"code": "8H", "image": "https://deckofcardsapi.com/static/img/8H.png"},
  {"code": "JD", "image": "https://deckofcardsapi.com/static/img/JD.png"},
]


let shuffled = [];
module.exports = {
  deck,
  shuffled: function(deck1) {
    let shuffled = deck1
    .map((a) => ({ sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
    return shuffled;
  },
  draw: function(deck, cardsToDraw) {
    let cardsDrawn = deck.splice(0, cardsToDraw);
    return cardsDrawn;
  }
}