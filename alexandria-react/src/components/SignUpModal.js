import React, { Component } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';




import '../index.css';


export class SignUpModal extends Component {
  constructor(props){
      super(props);
      
  };
  
render(){
  
          return(
          <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  >
      <Modal.Header closeButton>
      <Image src={require('../images/Alexandria-logo-s.png') } style={{float:'' }} id='loginAlexLogo' alt='Alexandria Logo'/>    
      
      <Modal.Title id="contained-modal-title-vcenter">

          
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <p><h3>Create an Account</h3> </p>
      <p><h5 className="text-center">Manage your properties from the palm of your hand.</h5></p>
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
  <Form.Group controlId="formConfirmBasicPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
  </Form.Group>


  <Button variant="primary" type="submit">
  Login
  </Button>

              
          

</Form>

      </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
  </Modal>
      );
}

  };


export default SignUpModal;