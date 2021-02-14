const Hand = require('pokersolver').Hand;

// Compares an array of all hands and returns the winner
const compareHands = (args) => {
  let solvedHands = []
  arguments.forEach(hand => {
    solvedHands.push(Hand.solve(hand))
  })
  return Hand.winners(solvedHands);
}

// Solved one hand and returns the type & description
const solveOneHand = (hand) => {
  return Hand.solve(hand);
}

module.exports = {
  compare: compareHands,
  solveOne: solveOneHand
}