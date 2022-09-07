import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousNumber:'',
      seconds: 15,
      message: 'Start Guessing!'
    }
  }

startTimer = () => {
  if(this.state.message !== 'PASS'){
 let intervalTimer =  setInterval(() => {
    if(this.state.seconds > 0) {
    this.setState({seconds: this.state.seconds - 1});
  } else{ 
     clearInterval(intervalTimer);
     console.log('Interval cleared');
    }
  }, 1000)};
  this.setState ({
    message: 'PASS'
  })
};

getMusic = async () => {
  let tracks = [];
  let response = await axios.get(`http://api.napster.com/v2.2/tracks/top?apikey=MDE0MzEwNmUtZDA1Zi00YjRiLWEyMTQtMjhhMjFjYTFmMmYz&limit=50`);
  response.data.tracks.forEach(track => {if(track.isExplicit === false){tracks.push(new Audio(track.previewURL))}});
  this.setState ({
    tracks: tracks,
  })
}

playMusic = () => {
  this.startTimer();
  if (this.state.previousNumber){
    this.state.tracks[this.state.previousNumber].pause();
    this.state.tracks.splice(this.state.previousNumber, 1);
  }
  let randomNumber = Math.floor(Math.random() * this.state.tracks.length)
  this.state.tracks[randomNumber].play();
  this.setState({
    previousNumber: randomNumber
  })
}
componentDidMount(){
  this.getMusic();
}

  render() {
    return (
      <>
      <div>{this.state.seconds}</div>
      <Button onClick={this.playMusic}>{this.state.message}</Button>
      </>
    )
  }
}

export default Game;
