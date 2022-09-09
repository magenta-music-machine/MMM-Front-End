import React from 'react';
import axios from 'axios';
import './App.css';
import Artist from './Artist';
import About from './About.js';
import Highscore from './Highscore';
import FavoriteSongs from './FavoriteSongs';
import Header from './Header.js';
import Footer from './Footer.js';
import {  withAuth0 } from '@auth0/auth0-react';
import Game from './Game.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showUpdateModal: false,
      showSongModal:false,
      highScore:[],
      score:{},
      favSongs:[],
      song:{},
  }
}


  handleModal = () => { 
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  handleSubmit = (userName, userScore, favoriteTrackList) => {
    let score = {
      name: userName,
      score: userScore,
      _id: this.state.highScore[9]._id
    }
    console.log(score);
    console.log(this.state.highScore[9]);
    if (userScore > this.state.highScore[9].score) {this.updateScore(score)}
    // this.createScore(score);
    this.handleModal();
    favoriteTrackList.forEach(track => {
      track.email = this.state.email;
      this.createSong(track)});
  }

  getSongs = async () => {
    try { 

      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/songs',
          headers: {"Authorization": `Bearer ${jwt}`}
        };
        console.log(this.props.auth0.user);
        let results = await axios(config);
      this.setState({
        favSongs: results.data.filter(song => song.email === this.props.auth0.user.email),
        email: this.props.auth0.user.email,
      });
      
    } else {
      console.log('please log in');
    }
    } catch (err) {
      console.log('Mayday, Mayday ', err.response.data);
    }
  }

  getScore = async () => {
    try { 
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/score`);
      this.setState({
        highScore: results.data.sort((a,b)=> parseInt(b.score) > parseInt(a.score) ? 1 : -1),
      });
    } catch (err) {
      console.log('Mayday, Mayday ', err.response.data);
    }
  }

  createSong = async (song) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/songs`;
      let createdSong = await axios.post(url, song);
      console.log('Posted Song: ', createdSong.data);
      this.setState({
        favSongs: [...this.state.favSongs, createdSong.data],
      });
    } catch (e) {
      console.log('This is a problem... ', e.response)
    }
  }

  createScore = async (score) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/score`;

      let createdScore = await axios.post(url, score);
      this.setState({
        highScore: [...this.state.highScore, createdScore.data],
      });
    } catch (e) {
      console.log('This is a problem... ', e.response)
    }
  }

  deleteSong = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/songs/${id}`;
      await axios.delete(url);
      console.log(url);
      let updatedSongs = this.state.favSongs.filter(song => song._id !== id);
      console.log(updatedSongs);
      this.setState({
        favSongs: updatedSongs,
      });
    }
    catch (e) {
      console.log('could not delete this book: ', e.response.data);
    }
  }

  updateScore = async updatedScore =>
    {
      try
      {
        let url = `${process.env.REACT_APP_SERVER}/score/${updatedScore._id}`;
        let updatedScoreFromDB = await axios.put(url, updatedScore);
        let updatedArr = this.state.highScore.map( existingScore => 
        {
          return existingScore._id === updatedScore._id
          ? updatedScoreFromDB.data
          : existingScore;
        });

        this.setState({
          highScore: updatedArr,
        })
      }
      catch(e)
      {
        console.log('Problem updating book...: ', e.message);
      }
    }
    handleUpdate = e =>
    {
      e.preventDefault();

      let scoreToUpdate = 
      {
        name: e.target.name.value || this.state.highScore.name,
        score: e.target.score.value || this.state.highScore.score,
        _id: this.state.book._id,
        __v: this.state.book.__v
      }
      this.updateScore(scoreToUpdate);
    }
  componentDidMount() {
    this.getSongs();
    this.getScore();
  }


  render() {
    return (
      <>
        <Router>
          <Header/>
          <Routes>
          <Route 
            path="/" 
            element={<Game
              handleModal={this.handleModal}
              handleSubmit={this.handleSubmit}
              showModal={this.state.showModal}/>
            }>
          </Route>
          <Route 
            path="/About" 
            element={<About
            />}>
          </Route>
          <Route 
            path="/Highscore" 
            element={<Highscore
              score={this.state.score}
              highScore={this.state.highScore}
            />}>
          </Route>
          <Route 
            path="/FavoriteSongs" 
            element={<FavoriteSongs
            favSongs={this.state.favSongs}
            deleteSong={this.deleteSong}
            />}>
          </Route>
          </Routes>
        </Router>
        <Artist/>
        <Footer/>
      </>
    )
  }
}

export default withAuth0(App);
