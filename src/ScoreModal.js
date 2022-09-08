import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


class ScoreModal extends React.Component {
  render() {
    return (
      <Modal
      show={this.props.show}
       onHide={this.props.onHide}
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
      <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              aria-label="Default select example"
              type="text"
              name="name"
              onInput={this.props.handleInput} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={this.props.onHide}>
            Explore!
          </Button>
        </Form>
      </Modal.Body>
    </Modal>     
    );
  }
}


export default ScoreModal;