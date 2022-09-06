import React from 'react';
// import axios from 'axios';
import './App.css';
import Artist from './Artist';
import Highscore from './Highscore';
import Main from './Main.js';
import Footer from './Footer.js';
import {  withAuth0 } from '@auth0auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

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
  ?<Profile/>
  : <h2>Please Log in</h2>
}
        <Artist/>
        <Highscore/>
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
