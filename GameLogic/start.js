const Deck = require('../DeckData.js');
const Players = require('../Database/players.js');
const Game = require('../Database/game.js');
const Axios = require('axios');
const Bets = require('./bets.js');

// Get a new deck *
// get and order players
// update gameStatus with player order
// give each player 2 cards
// update player records with new cards and (myTurn = true) for the player after the big blind
//
const startRound = () => {
  let deckID, unorderedPlayers, orderedPlayers, gameState, gameID, dealer, button, UTG;
  //get cards

  deckID = Deck.shuffled(Deck.deck);
  // console.log(deckID);
  //get gameState
  Game.Game.findOne({}, (err, result) => {
    if (err) { console.log(err) }
    else {
      gameState = result;
      gameID = result._id;
    }
  })
    //get players
    .then(()=>{
      Players.Players.find({}, (err, result) => {
        if (err) { console.log(err); }
        else {
          unorderedPlayers = result
          button = undefined;
          // Setting dealer button and setting dealer button for next hand.
          unorderedPlayers.forEach(player => {
            if (player.funds > 0) {
              // console.log('cards', cards.data,'player', player);
              player.hand = Deck.draw(deckID, 2)
              // console.log(cards.data);
              let req, res;
              req = { body: {}, }
              res = {
                status: undefined,
              }
              req.body = player;
              // console.log(req, player);
              Players.update(req, res);
            }
                  // console.log(cards.data);
                  gameState.board =  Deck.draw(deckID, 5)
                  let req, res;
                  req = { body: gameState }
                  res = {
                    status: undefined,
                  }
                  // console.log(req.body.gameState.board)
                  Game.updateGame(req, res)
        })
      }
    })
    })
}

//retrieve all players from the database
//discern active players from empty seats
//give 2 cards to every active player
//find button holding player
//create array of players in order starting after button
//automatically take blinds from big and small blind and add to total
//listen for commands from

module.exports = {
  startRound,
}