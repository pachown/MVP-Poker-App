import React from 'react';

const Table = ({pot, board, winner}) => (
  <div id="cards">
    <div>Winner: {winner}</div>
    <img className="card" src={board[0].image}></img>
    <img className="card" src={board[1].image}></img>
    <img className="card" src={board[2].image}></img>
    <img className="card" src={board[3].image}></img>
    <img className="card" src={board[4].image}></img>
    <div>POT: {pot}</div>
  </div>

)

export default Table;