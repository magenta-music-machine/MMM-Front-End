import React from 'react';
import Table from 'react-bootstrap/Table';

class Highscore extends React.Component {
  
  // Use "map" un order to create an array to import the score of the user
  render() {
    let scoreArr = this.props.highScore.map((highScore, idx) => {
      return <Table key={idx}>
        <tbody>
          <tr>
            <td>{idx}</td>
            <td>{highScore.name}</td>
            <td>{this.props.score}</td>
          </tr>
        </tbody>
      </Table>
    });
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Score</th>
          </tr>
        </thead>
        {scoreArr}
      </Table>
    )
  }
}



export default Highscore;
