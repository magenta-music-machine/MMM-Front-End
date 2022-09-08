import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
  render() {
    return (
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
              <LinkContainer to="/">
                <Nav.Link href="/">Play</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Highscore">
                <Nav.Link href="/Highscore">High Score</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/About">
                <Nav.Link href="/About" title="About us">About Us</Nav.Link>
              </LinkContainer>  
              
              <LinkContainer to="/FavoriteSongs">
                <Nav.Link href="/FavoriteSongs" title="Favorite Songs">Favorite Songs</Nav.Link>
              </LinkContainer>            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}

export default Header;

