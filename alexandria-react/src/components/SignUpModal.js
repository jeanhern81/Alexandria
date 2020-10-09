import React, { Component, useState } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';




import '../index.css';

import $ from "jquery";


export default function SignUpModal(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email }, { password });
    $.ajax({ url: "/api/users/register", method: "POST", data: { email: email, password: password, passwordConf: confPassword } })
      .then(res => {
        console.log(res)

      })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Image src={require('../images/Alexandria-logo-s.png')} style={{ float: '' }} id='loginAlexLogo' alt='Alexandria Logo' />

        <Modal.Title id="contained-modal-title-vcenter">


        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><h3>Create an Account</h3> </p>
        <p><h5 className="text-center">Manage your properties from the palm of your hand.</h5></p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
  </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formConfirmBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              onChange={e => setConfPassword(e.target.value)} />
          </Form.Group>


          <Button variant="primary" type="submit">
            Login
  </Button>




        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




