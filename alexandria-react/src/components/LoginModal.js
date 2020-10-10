import React, { Component } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

export class LoginModal extends Component {
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
            style={{ float: "" }}
            id="loginAlexLogo"
            alt="Alexandria Logo"
          />

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <h3>Login</h3>{" "}
          </p>
          <p>
            <h5 className="text-center">Welcome Back!</h5>
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <p clasName="newCustomer">
              {" "}
              New Customer? <a href="signUp.home.html">Create account</a>
            </p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;
