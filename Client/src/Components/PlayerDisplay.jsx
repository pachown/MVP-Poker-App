import React from 'react';

const PlayerDisplay = ({ playerInfo }) => (
  <div id="playerInfo">
    {/* {console.log(playerInfo)} */}
    {playerInfo.playerName !== playerInfo ?
      <div>{playerInfo.playerName}
        <br />
        {playerInfo.hand.length !== 0 && (
          <div>
        <img className="smallimg" src={playerInfo.hand[0].image}></img>
        <img className="smallimg" src={playerInfo.hand[1].image}></img>
        </div>
        )}
        </div>
      :
      <div>Empty Seat</div>
    }
  </div>
)

export default PlayerDisplay;