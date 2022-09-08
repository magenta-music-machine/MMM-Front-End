import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ScoreModal from './ScoreModal';
import { Form } from 'react-bootstrap';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
      message: 'Start Guessing!',
      buttonStatus: false,
      radioButtonNames: Array(4),
      artistNames: [],
      userScore: 0,
      previousTrack: 0,
      currentTrack: 0,
      favoriteTrackList:[],
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
     this.state.tracks[this.state.previousTrack].preview.pause();
     this.setState({buttonStatus: true})
     this.props.handleModal();
    }
  }, 1000)};
  this.setState ({
    message: 'PASS'
  })
};

getMusic = async () => {
  let tracks = [];
  let artistNamesPool = [];
  let response = await axios.get(`${process.env.REACT_APP_SERVER}/music`)
  response.data.forEach(track => {if(track.isExplicit === false){tracks.push({preview: new Audio(track.previewURL), previewURL: track.previewURL, artist: track.artistName, title: track.title, albumId: track.albumId, albumName: track.albumName})}});
  response.data.forEach(track => {if(track.isExplicit === false && artistNamesPool.includes(track.artistName) !== true){artistNamesPool.push(track.artistName)}});
  this.shuffleArray(tracks);
  this.setState ({
    tracks: tracks,
    artistNamesPool: artistNamesPool,
  })
}

getArtistName = (currentArtistNumber) => {
  let numbers = [];
  let radioButtonNames = [];
  radioButtonNames.push(this.state.tracks[this.state.currentTrack].artist)
  while (numbers.length < 3){
    let randomValue = Math.floor(Math.random() * this.state.artistNamesPool.length);
    numbers.includes(randomValue) || this.state.artistNamesPool[randomValue] === this.state.tracks[this.state.currentTrack].artist?
    randomValue = Math.floor(Math.random() * this.state.tracks.length):
    numbers.push(randomValue)};
    numbers.forEach(index => radioButtonNames.push(this.state.artistNamesPool[index]))
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
  this.state.tracks[this.state.previousTrack].preview.pause();
  this.state.tracks[this.state.currentTrack].preview.play();
  this.setState({
    previousTrack: this.state.currentTrack,
    currentTrack: this.state.currentTrack + 1});
    event.target.checked = 'false'
  this.getArtistName()
}

playMusic = () => {
  this.startTimer();
  console.log(this.state.tracks)
  this.state.tracks[this.state.previousTrack].preview.pause();
  this.state.tracks[this.state.currentTrack].preview.play();
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
favoriteSong = () => {
  this.state.favoriteTrackList.includes(this.state.tracks[this.state.previousTrack])?
  console.log('You already favorited this song!'):
this.state.favoriteTrackList.push(this.state.tracks[this.state.previousTrack]);
console.log(this.state.favoriteTrackList)
}

  render() {
    return (
      <>
      <ScoreModal
      highscore={this.props.highscore}
      userScore={this.state.userScore}
      favoriteTrackList={this.state.favoriteTrackList}
      handleSubmit={this.props.handleSubmit}
      showModal={this.props.showModal}
      handleModal={this.props.handleModal} />
      <Form onSubmit={this.submitAnswer}>
        <Form.Group>
        <Button value={this.state.radioButtonNames[0]} onClick={this.submitAnswer} disabled={this.state.buttonStatus}>{this.state.radioButtonNames[0]}</Button>
        <Button value={this.state.radioButtonNames[1]} onClick={this.submitAnswer} disabled={this.state.buttonStatus}>{this.state.radioButtonNames[1]}</Button>
        <Button value={this.state.radioButtonNames[2]} onClick={this.submitAnswer} disabled={this.state.buttonStatus}>{this.state.radioButtonNames[2]}</Button>
        <Button value={this.state.radioButtonNames[3]} onClick={this.submitAnswer} disabled={this.state.buttonStatus}>{this.state.radioButtonNames[3]}</Button>
        <Button onClick={this.favoriteSong} disabled={this.state.buttonStatus}>Favorite Song</Button>
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
