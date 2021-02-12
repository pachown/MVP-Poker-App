import React from 'react';
import Axios from 'axios';
import Table from './Table.jsx';
import Login from './Login.jsx';
import Controls from './Controls.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: undefined,
      playerName: undefined,
      gameState: {
        street: undefined,
        cards: [],
      },
      table: {
        player1: undefined,
        player2: undefined,
        player3: undefined,
        player4: undefined,
        player5: undefined,
        player6: undefined,
        player7: undefined,
        player8: undefined,
        player9: undefined,
      }
    };
  }
  componentDidMount() {

  }
  handleLogin(e) {
    e.preventDefault();
    let playerLogin = e.target.player.value;
    let playerNameLogin = e.target.playerName.value;
    console.log(playerLogin, playerNameLogin);
    this.setState ({
      player: playerLogin,
      playerName: playerNameLogin,
      table: {
        player1: playerNameLogin,
      }
    })
  }

  render() {
    return (
      <div>
         <Login
         handleLogin={this.handleLogin.bind(this)}/>
        {this.state.player && (
        <div>
        <h1 id="title"> POKER APP</h1>
        <div id="table">
        <Table />
        </div>
        <div id="player1">{this.state.player1 || 'player1'}</div>
        <div id="player2">{this.state.player2 || 'player2'}</div>
        <div id="player3">{this.state.player3 || 'player3'}</div>
        <div id="player4">{this.state.player4 || 'player4'}</div>
        <div id="player5">{this.state.player5 || 'player5'}</div>
        <div id="player6">{this.state.player6 || 'player6'}'</div>
        <div id="player7">{this.state.player7 || 'player7'}</div>
        <div id="player8">{this.state.player8 || 'player8'}</div>
        <div id="player9">{this.state.player9 || 'player9'}</div>
        <Controls />
      </div>
        )}
      </div>
    )
  }

}
export default App;