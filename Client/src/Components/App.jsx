import React from 'react';
import Axios from 'axios';
import Table from './Table.jsx';
import Login from './Login.jsx';
import Controls from './Controls.jsx';
import PlayerDisplay from './PlayerDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalId: undefined,
      playerState: {
        seat: undefined,
        playerName: undefined,
        funds: undefined,
        cards: [],
        myTurn: false,
      },
      gameState: {
        street: undefined,
        pot: undefined,
        seats: {
          player1: {playerName: 'player1', funds: 0},
          player2: {playerName: 'player2', funds: 0},
          player3: {playerName: 'player3', funds: 0},
          player4: {playerName: 'player4', funds: 0},
          player5: {playerName: 'player5', funds: 0},
          player6: {playerName: 'player6', funds: 0},
          player7: {playerName: 'player7', funds: 0},
          player8: {playerName: 'player8', funds: 0},
          player9: {playerName: 'player9', funds: 0},
        }
      }
    };
    this.inactivePlayer.bind(this);
  }
  componentDidMount() {
    window.addEventListener('unload', this.inactivePlayer);
  }
  componentWillUnmount() {
    window.removeEventListener('unload', this.inactivePlayer);
  }
  handleLogin(e) {
    e.preventDefault();
    const playerData = {
      playerName: e.target.playerName.value,
      funds: 1000,
      seat: e.target.seat.value,
    }
    Axios.post('/api/player', playerData)
    .then((res) => {
      this.setState ({
        personalId: res.data._id,
      })
      this.getGameState();
    })
    .catch((err) => {
      console.log(err);
    })
  }
  getGameState() {
    Axios.get('/api/gameState')
    .then((gameInfo)=> {
      this.setState ({
        gameState: gameInfo.data.gameState,
      })
    })
    .then(() => {
    this.getPlayerState();
    })
    .then(() => {
      setTimeout(()=>{
          this.getGameState();
      }, 1000)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  getPlayerState() {
    Axios.get(`/api/player${this.state.personalId}`,
    {params: {
      id: this.state.personalId}
    })
    .then((res) => {
      this.setState ({
        playerState: res.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  startRound (e) {
    e.preventDefault();
    Axios.get('/api/gameStart',)
    .then((res) => {
      console.log(res.data);
    })
  }
  inactivePlayer(e) {
    e.preventDefault()
    console.log(this.state);
    Axios.delete(`/api/player/${this.state.personalId}`,
    {params: {
      id: this.state.personalId}
    })
    .then (res => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        {!this.state.playerState.seat && (
          <div>
         <Login
         handleLogin={this.handleLogin.bind(this)}/>
         </div>
        )}
        {this.state.playerState.seat && (
        <div>
        <h1 id="title"> POKER APP</h1>
        <div id="table">
        <Table />
        </div>
        <div>
          Logout
          <button onClick={(e) => this.startRound(e)}>START ROUND</button>
          <button onClick={(e) => this.inactivePlayer(e)}>LOG OUT</button>
        </div>
        <div id="player1"><PlayerDisplay playerInfo={this.state.gameState.seats.player1} /></div>
        <div id="player2"><PlayerDisplay playerInfo={this.state.gameState.seats.player2} /></div>
        <div id="player3"><PlayerDisplay playerInfo={this.state.gameState.seats.player3} /></div>
        <div id="player4"><PlayerDisplay playerInfo={this.state.gameState.seats.player4} /></div>
        <div id="player5"><PlayerDisplay playerInfo={this.state.gameState.seats.player5} /></div>
        <div id="player6"><PlayerDisplay playerInfo={this.state.gameState.seats.player6} /></div>
        <div id="player7"><PlayerDisplay playerInfo={this.state.gameState.seats.player7} /></div>
        <div id="player8"><PlayerDisplay playerInfo={this.state.gameState.seats.player8} /></div>
        <div id="player9"><PlayerDisplay playerInfo={this.state.gameState.seats.player9} /></div>
        <Controls />
      </div>
        )}
      </div>
    )
  }

}
export default App;