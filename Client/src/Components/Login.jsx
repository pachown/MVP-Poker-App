import React from 'react';

const Login = ({handleLogin}) => (
  <div>
    <form id="loginForm" onSubmit={(e)=>handleLogin(e)}>
      Username
      <input type="text" name="playerName"></input>
      <select id="tableSpot" type="dropdown" name="player">
        <option value="player1">Spot 1</option>
        <option value="player2">Spot 2</option>
        <option value="player3">Spot 3</option>
        <option value="player4">Spot 4</option>
        <option value="player5">Spot 5</option>
        <option value="player6">Spot 6</option>
        <option value="player7">Spot 7</option>
        <option value="player8">Spot 8</option>
        <option value="player9">Spot 9</option>
      </select>
      <button type="submit" value="Submit" id="loginSubmit">Join Game</button>
    </form>
  </div>

)

export default Login;