import React, { Component } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

export class EditProp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Image
            src={require("../images/Alexandria-logo-s.png")}
            style={{ float: " left " }}
            id="loginAlexLogo"
            alt="Alexandria Logo"
          />

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <h3>Edit Property</h3>{" "}
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="email" placeholder="Adress" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Street Address #2</Form.Label>
              <Form.Control type="email" placeholder="Address #2" />
              <Form.Text className="text-muted">
                Ex. Apt, STE, Unit, etc.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="email" placeholder="City" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>State</Form.Label>
              <Form.Control type="email" placeholder="State Abbreviation" />
              <Form.Text className="text-muted">Ex. CA, NY, TX, FL</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="email" placeholder="Zip Code" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Monthly Expenses</Form.Label>
              <Form.Control type="email" placeholder="Monthly Expenses" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Purchase Price</Form.Label>
              <Form.Control type="email" placeholder="Purchase Price" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Monthly Rent</Form.Label>
              <Form.Control type="email" placeholder="Monthly Rent" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditProp;
