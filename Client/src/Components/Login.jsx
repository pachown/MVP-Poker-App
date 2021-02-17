import React from 'react';

const Login = ({handleLogin}) => (
  <div>
        <h1 className="title">Bomb Pot</h1>
      <h1 className="log-in">Log-In</h1>
      <h4 className="username">Username</h4>
      <div className="log-in-Form">
    <form id="loginForm" onSubmit={(e)=>handleLogin(e)}>
      <input type="text" name="playerName"></input>
      <br></br>
      <select id="tableSpot" type="dropdown" name="seat">
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
      <br></br>
      <button type="submit" value="Submit" id="loginSubmit">Join Game</button>
    </form>
      </div>
  </div>

)

export default Login;