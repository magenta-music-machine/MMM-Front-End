import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

class About extends React.Component {
  render() {
    return (
      <>
      <Image/>
      <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/Adrian.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Adrian Cosme-Halverson</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/David.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Hanbyeol (David) Lee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/Jordan.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Jordan Yamada</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/Alfredo.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Alfredo Orquiz</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
  }
}

export default About;
