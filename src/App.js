import React from 'react';
// import axios from 'axios';
import './App.css';
import Artist from './Artist';
import About from './About.js';
import Highscore from './Highscore';
import Header from './Header.js';
import Main from './Game.js';
import Footer from './Footer.js';
import {  withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Content from './Content';
import Game from './Game.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <Main/>
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
