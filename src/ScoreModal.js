import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


class ScoreModal extends React.Component {
  
  submit = (event) => {
    event.preventDefault();
    let userName = event.target.name.value;
    let userScore = this.props.userScore;
    let favoriteTrackList = this.props.favoriteTrackList;
    this.props.handleSubmit(userName, userScore, favoriteTrackList)
  }

  render() {
    return (
      <Modal
      show={this.props.showModal}
       onHide={this.props.closeModal}
       keyboard="true"
        backdrop="static"
      // {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          High Scores
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={() => this.submit}>
          <Form.Group className="mb-3">
            <Form.Label>Enter your name</Form.Label>
            <Form.Text>Your score was {this.props.score}</Form.Text>
            <Form.Control name='name'/>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            >
            Explore!
          </Button>
        </Form>
      </Modal.Body>
    </Modal>     
    );
  }
}


export default ScoreModal;