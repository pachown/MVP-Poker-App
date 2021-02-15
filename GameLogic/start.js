const Deck = require('./deckHandlers.js');
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
            button = undefined;
            // Setting dealer button and setting dealer button for next hand.
            for(var i = 0; i < unorderedPlayers.length; i++) {
              if (unorderedPlayers[i].seat === gameState.dealerBtn) {
                button = unorderedPlayers[i]
                    unorderedPlayers[i].button = true;
                    if((i+1) === unorderedPlayers.length) {
                      gameState.dealerBtn = unorderedPlayers[0].seat;
                      break;
                    } else {
                      gameState.dealerBtn = unorderedPlayers[i+1].seat;
                      break;
                    }
                  }
            }
            // Setting button off for everyone else
            for(var i = 0; i < unorderedPlayers.length; i++) {
              if (unorderedPlayers[i] !== button) {
                unorderedPlayers[i].button = false;
              }
            }

            // Order Players
            for (var i = 0; i < unorderedPlayers.length; i++) {
              if (button === undefined) {
                  button = unorderedPlayers[0];
                  unorderedPlayers[0].button = true;
                  gameState.dealerBtn = unorderedPlayers[1].seat;
                }

              if (unorderedPlayers[i] === button) {
                if (i + 1 === unorderedPlayers.length) {
                  orderedPlayers = unorderedPlayers.slice(0);
                }
                splitStart = unorderedPlayers.slice(i+1, unorderedPlayers.length);
                splitEnd = unorderedPlayers.slice(0, i+1);
                orderedPlayers = splitStart.concat(splitEnd);
              }
            }

            //Take blinds and put in pot and set myTurn for 3rd action player
            if (orderedPlayers.length > 3 ) {
              orderedPlayers[1].funds -= 5;
              orderedPlayers[1].moneyAddedThisStreet +=5
              orderedPlayers[2].funds -= 10;
              orderedPlayers[2].moneyAddedThisStreet +=10
              orderedPlayers[3].myTurn = true;
              UTG = orderedPlayers[3];
            } else if (orderedPlayers.length === 3) {
              orderedPlayers[1].funds -= 5;
              orderedPlayers[1].moneyAddedThisStreet +=5
              orderedPlayers[2].funds -= 10;
              orderedPlayers[2].moneyAddedThisStreet +=10
              orderedPlayers[0].myTurn = true;
              UTG = orderedPlayers[0];
            } else if (orderedPlayers.length === 2) {
              orderedPlayers[1].funds -= 5;
              orderedPlayers[1].moneyAddedThisStreet +=5
              orderedPlayers[0].funds -= 10;
              orderedPlayers[0].moneyAddedThisStreet +=10
              orderedPlayers[0].myTurn = true;
              UTG = orderedPlayers[0];
            } else {
              orderedPlayers[0].myTurn = true;
              UTG = orderedPlayers[0];
            }
            gameState.currentBet += 10;
            gameState.pot += 15;
            console.log('players', orderedPlayers);
          orderedPlayers.forEach(player => {
            if(player.funds > 0){
              Axios.get(`https://deckofcardsapi.com/api/deck/${deckID.deck_id}/draw/?count=5`)
              .then((cards) => {
                // console.log('cards', cards.data,'player', player);
                player.hand = cards.data.cards;
                // console.log(cards.data);
                let req, res;
                req = {body: {},}
                res = {
                  status: undefined,
                }
                req.body = player;
                // console.log(req, player);
                Players.update(req, res);
              })
              .then(()=>{
                Axios.get(`https://deckofcardsapi.com/api/deck/${deckID.deck_id}/draw/?count=2`)
                .then((cards) => {
                  // console.log(cards.data);
                  gameState.board = cards.data.cards;

                  let req, res;
                  req = {body: gameState}
                  res = {
                    status: undefined,
                  }
                  // console.log(req.body.gameState.board)
                  Game.updateGame(req, res)
                })
              })
              .catch((err)=> {
                console.log(err)
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

module.exports = {
  startRound,
}