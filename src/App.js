import React from 'react';
// import axios from 'axios';
import './App.css';
import Artist from './Artist';
import Highscore from './Highscore';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
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

export default App;
