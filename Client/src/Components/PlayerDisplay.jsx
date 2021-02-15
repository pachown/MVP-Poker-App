import React from 'react';

const PlayerDisplay = ({ playerInfo }) => (
  <div id="playerInfo">
    {/* {console.log(playerInfo)} */}
    {playerInfo.funds ?
      <div>{playerInfo.playerName}
        <br />
        {playerInfo.funds}</div>
      :
      <div>Empty Seat</div>
    }
  </div>
)

export default PlayerDisplay;