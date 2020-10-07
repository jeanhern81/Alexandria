import React, { Component } from 'react';
import{ Modal, Button, Form, Col, Image } from 'react-bootstrap';

export class ContactModal extends Component{
    constructor(props){
    super(props);

    };


    render () {

        return (
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
              <p><h3>Contact Us</h3></p>
              <p></p>
            <p><h5 className="">We'd love to hear from you, please drop us a message if you have any questions.</h5></p>

            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Full Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p><h5 className="text-center">555 Riverside Dr.
                                <p>Riverside, CA 92506</p>
                                <p>(800) 555-5555</p>
                                </h5></p>


            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
    
    }
    export default ContactModal;
    
  

