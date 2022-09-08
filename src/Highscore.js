import React from 'react';
import Table from 'react-bootstrap/Table';

class Highscore extends React.Component {
  
  // Use "map" un order to create an array to import the score of the user
  render() {
    let scoreArr = this.props.highScore.map((highScore, idx) => {
      return <tbody key={idx}>
                <tr>
                  <td>{idx + 1}</td>
                  <td>{highScore.name}</td>
                  <td>{highScore.score}</td>
                </tr>
              </tbody>
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
