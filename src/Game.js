import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      message: 'Start Guessing!',
      buttonStatus: false,
      radioButtonNames: Array(4),
      artistNames: [],
      userScore: 0,
      previousTrack: 0,
      currentTrack: 0,
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
     this.state.tracks[this.state.previousTrack].pause();
     this.setState({buttonStatus: true})
    }
  }, 1000)};
  this.setState ({
    message: 'PASS'
  })
};

getMusic = async () => {
  let tracks = [];
  let respectiveArtistNames = [];
  let artistNames = [];
  let response = await axios.get(`http://api.napster.com/v2.2/tracks/top?apikey=MDE0MzEwNmUtZDA1Zi00YjRiLWEyMTQtMjhhMjFjYTFmMmYz&limit=100`);
  response.data.tracks.forEach(track => {if(track.isExplicit === false){tracks.push(new Audio(track.previewURL))}});
  response.data.tracks.forEach(track => {if(track.isExplicit === false){respectiveArtistNames.push(track.artistName)}});
  response.data.tracks.forEach(track => {if(track.isExplicit === false && artistNames.includes(track.artistName) !== true){artistNames.push(track.artistName)}});
  tracks.forEach((track, index) => {track.artist = respectiveArtistNames[index]});
  console.log(tracks)
  this.shuffleArray(tracks);
  this.shuffleArray(artistNames);
  this.setState ({
    tracks: tracks,
    artistNames: artistNames,
  })
}

getArtistName = (currentArtistNumber) => {
  let numbers = [];
  let radioButtonNames = [];
  radioButtonNames.push(this.state.tracks[this.state.currentTrack].artist)
  while (numbers.length < 3){
    let randomValue = Math.floor(Math.random() * this.state.artistNames.length);
    numbers.includes(randomValue) || randomValue === this.state.previousTrack?
    randomValue = Math.floor(Math.random() * this.state.artistNames.length):
    numbers.push(randomValue)};
    numbers.forEach(index => radioButtonNames.push(this.state.artistNames[index]))
    this.shuffleArray(radioButtonNames)
    this.setState({
      radioButtonNames: radioButtonNames,
    })
    
}

submitAnswer = (event) => {
  event.preventDefault();
  console.log(event.target.value, this.state.tracks[this.state.currentTrack].artist)
  event.target.value === this.state.tracks[this.state.previousTrack].artist? 
  this.setState({userScore: this.state.userScore + 1}): 
  this.setState({userScore: this.state.userScore - 1});
  this.state.tracks[this.state.previousTrack].pause();
  this.state.tracks[this.state.currentTrack].play();
  this.setState({
    previousTrack: this.state.currentTrack,
    currentTrack: this.state.currentTrack + 1});
    event.target.checked = 'false'
  this.getArtistName()
}

playMusic = () => {
  this.startTimer();
  this.state.tracks[this.state.previousTrack].pause();
  this.state.tracks[this.state.currentTrack].play();
  console.log(this.state.tracks[this.state.currentTrack].artist)
  this.setState({
    previousTrack: this.state.currentTrack,
    currentTrack: this.state.currentTrack + 1});
  this.getArtistName();
}
componentDidMount(){
  this.getMusic();
}
shuffleArray = (array) => {
  let arrayLength = array.length;
  while(arrayLength){
    let remainingShuffles = Math.floor(Math.random() * arrayLength--);
    let t = array[arrayLength];
    array[arrayLength] = array[remainingShuffles];
    array[remainingShuffles] = t;
  }
}
handleRadioButtons = (event) => {
this.setState({
  chosenButton: event.target.value,
})
}

  render() {
    return (
      <>
      <Form onSubmit={this.submitAnswer}>
        <Form.Group>
        <Button value={this.state.radioButtonNames[0]} onClick={this.submitAnswer}>{this.state.radioButtonNames[0]}</Button>
        <Button value={this.state.radioButtonNames[1]} onClick={this.submitAnswer}>{this.state.radioButtonNames[1]}</Button>
        <Button value={this.state.radioButtonNames[2]} onClick={this.submitAnswer}>{this.state.radioButtonNames[2]}</Button>
        <Button value={this.state.radioButtonNames[3]} onClick={this.submitAnswer}>{this.state.radioButtonNames[3]}</Button>
        </Form.Group>
      </Form>
      <div>{this.state.seconds}
      {this.state.userScore}</div>
      <Button disabled={this.state.buttonStatus} onClick={this.playMusic}>{this.state.message}</Button>
      </>
    )
  }
}

export default Game;
