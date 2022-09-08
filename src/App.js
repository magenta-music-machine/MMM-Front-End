import React from 'react';
import axios from 'axios';
import './App.css';
import Artist from './Artist';
import About from './About.js';
import Highscore from './Highscore';
import Header from './Header.js';
import Footer from './Footer.js';
import {  withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// import Profile from './Profile';
import Content from './Content';
import Game from './Game.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showUpdateModal: false,
      highScore:[],
      score:{},
      favSongs:[],
      song:{},
  }
}

  handleModal = () => {
    this.state.showModal === false?
    this.setState({
      showModal: true,
    })
    : this.setState({
      showModal: false
    })
    console.log(this.state.showModal)
  }

  handleSubmit = (userName, userScore, favoriteTrackList) => {
    console.log(userName, userScore)
    let score = {
      name: userName,
      score: userScore,
    }
    this.createScore(score);
    this.handleModal();
    favoriteTrackList.forEach(track => this.createSong(track));
  }

  getSongs = async () => {
    try { 
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/songs`);
      this.setState({
        favSongs: results.data,
      });
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
      // console.log('postBook url: ', url);

      let createdSong = await axios.post(url, song);
      console.log('Posted Song: ', createdSong.data);

      // use spread operator to make a deep copy of books in state, and concatenate the createdSong to the end
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
      console.log('Posted Score: ', createdScore.data);

      this.setState({
        highScore: [...this.state.highScore, createdScore.data],
      });
    } catch (e) {
      console.log('This is a problem... ', e.response)
    }
  }

  updateScore = async updatedScore =>
    {
      try
      {
        let url = `${process.env.REACT_APP_SERVER}/score/${updatedScore._id}`;

        // get the updatedBook from the database
        let updatedScoreFromDB = await axios.put(url, updatedScore);

        // update state, so that it can rerender with updated books info

        let updatedArr = this.state.highScore.map( existingScore => 
        {
          // if the `._id` matches the book we want to update:
          // replace that element with the updatedBookFromDB book object

          return existingScore._id === updatedScore._id
          ? updatedScoreFromDB.data
          : existingScore;
        });

        this.setState({
          highScore: updatedArr,
          // showUpdateModal: false
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

        // pass in _id and __v of book
        _id: this.state.book._id,

        // two underscores
        __v: this.state.book.__v
      }
    

      // log to see the book we are to update
      console.log('scoreToUpdate: ', scoreToUpdate);
      this.updateScore(scoreToUpdate);
    }
  // only runs these methods after the component mounts


  componentDidMount() {
    this.getSongs();
    this.getScore();
  }


  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated
          ? <LogoutButton/>
          : <LoginButton/>
        }
        {this.props.auth0.isAuthenticated
          ?<Content/>
          : <h2>Please Log in</h2>
        }
        <Router>
          <Header/>
          <Routes>
          <Route 
            path="/Game" 
            element={<Game
            />}>
          </Route>
          <Route 
            path="/About" 
            element={<About
            />}>
          </Route>
          <Route 
            path="/Highscore" 
            element={<Highscore
            />}>
          </Route>
          </Routes>
        </Router>
        <Artist/>
        <Game
        handleModal={this.handleModal}
        handleSubmit={this.handleSubmit}
        showModal={this.state.showModal}/>
        <Footer/>
      </>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withAuth0(App);
