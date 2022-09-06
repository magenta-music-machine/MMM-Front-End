import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: ''
    }
  }

getMusic = async () => {
  let tracks = [];
  let response = await axios.get(`http://api.napster.com/v2.2/tracks/top?apikey=MDE0MzEwNmUtZDA1Zi00YjRiLWEyMTQtMjhhMjFjYTFmMmYz&limit=50`);
  response.data.tracks.forEach(track => track.isExplicit === false ? tracks.push(new Audio(track.previewURL)) : console.log('miss'));
  this.setState ({
    tracks: tracks
  })
}
playMusic = () => {
  console.log(this.state.tracks)
  let randomNumber = Math.floor(Math.random() * this.state.tracks.length)
  this.state.tracks[randomNumber].play();
  this.state.tracks.splice(randomNumber, 1)
  console.log(this.state.tracks)
}
componentDidMount(){
  this.getMusic();
}

  render() {
    return (
      <>
      <Button onClick={this.playMusic}>Play</Button>
      </>
    )
  }
}

export default Main;
