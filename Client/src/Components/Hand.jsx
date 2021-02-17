import React from 'react';

const Hand = ({funds, hand, name}) => (
  <div>
    <div>{name}</div>
    <img className="card" src={hand[0].image}></img>
    <img className="card" src={hand[1].image}></img>
    <div>${funds}</div>
  </div>
)

export default Hand;