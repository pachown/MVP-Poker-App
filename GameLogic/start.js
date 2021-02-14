const Deck = require('./deckHandlers.js');
const Players = require('../Database/players.js');
const Game = require('../Database/game.js');
const Axios = require('axios');

// Get a new deck *
// get and order players
// update gameStatus with player order
// give each player 2 cards
// update player records with new cards and (myTurn = true) for the player after the big blind
//
const startRound = () => {
  let deckID, unorderedPlayers, orderedPlayers, gameState, gameID;
  //get cards
  Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((deck) => {
    deckID = deck.data;
    //get gameState
    Game.Game.findOne({}, (err, result) => {
      if (err) {console.log(err)}
      else
      {gameState = result;
        // console.log('gamestate', gameState);
        gameState.deck = deckID;
        gameID = result._id;}
        //get players
        Players.Players.find({}, (err, result) => {
          if (err) {console.log(err);}
          else
          {unorderedPlayers = result
            console.log('players',result);
          unorderedPlayers.forEach(player => {
            if(player.funds > 0){
              Axios.get(`https://deckofcardsapi.com/api/deck/${deckID.deck_id}/draw/?count=2`)
              .then((cards) => {
                // console.log('cards', cards.data,'player', player);
                player.hand = cards.cards;
                let req, res;
                req = {
                  body: {},
                }
                req.body = player;
                console.log(req);
                Players.update(req, res);
              })
            }
          })
        }
        })
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

const orderPlayers = (players) => {
  let ordered = [];
  let first = undefined;
for (var i = 0; i < players.length; i++) {
  if (player.myTurn === true) {
    first = i;
  }
}
}

module.exports = {
  startRound,
}