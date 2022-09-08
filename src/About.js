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
            src="../Adrian.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Adrian Cosme-Halverson</h3>
            <p>Fire support specialist 4+ years of honorable military service. Seasoned individual with professional work experience in a variety of dynamic and fast-paced environments. Experience in a multitude of work environments form professional office experience to months long austere environment training.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../David.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Hanbyeol (David) Lee</h3>
            <p>Medical specialist with 4+ years of honorable military service.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Jordan.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Jordan Yamada</h3>
            <p>
              Air traffic control 5+ years of honorable military service. Experience in troubleshooting, time management, and risk management.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Alfredo.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Alfredo Orquiz</h3>
            <p>Helicopter Airframe Mechanic 5+ years of honorable military service. Experience in operation risk management, military missions by managing leadership, communications, training, operations, logistics, compliance, and administration for over ten workers.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
  }
}

export default About;
