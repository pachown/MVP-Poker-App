import React from 'react';

const Table = ({pot, board}) => (
  <div id="cards">
    <img className="card" src={board[0].image}></img>
    <img className="card" src={board[1].image}></img>
    pot
    <div>{pot}</div>
  </div>

)

export default Table;