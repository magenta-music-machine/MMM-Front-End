import React from 'react';
// import axios from 'axios';
import './App.css';
import Artist from './Artist';
import Highscore from './Highscore';
import Main from './Main.js';
import Footer from './Footer.js';
import {  withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Game">Play</Nav.Link>
            <Nav.Link href="/Highscore">High Score</Nav.Link>
            <NavDropdown href="#placeholder" title="About us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#adrian's placeholder">Adrian Cosme-Halverson</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hanbyeol's placeholder">Hanbyeol Lee (David Lee)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#jordan's placeholder">Jordan Yamada</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#alfredo's placeholder">Orquiz Alfredo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
