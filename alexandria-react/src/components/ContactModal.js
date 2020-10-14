import React, { Component } from 'react';
//Boostrap
import{ Modal, Button, Form, Col, Image } from 'react-bootstrap';
//Email Component
import * as emailjs from "emailjs-com";

export class ContactModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          message: '',
          disabled: false,
          emailSent: null,
      }
  }
  //change
  handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }

  
//submit
  handleSubmit = (event) => {
      event.preventDefault();

      const templateParams = {
          name: this.state.name + " (" + this.state.email + ")",
          email: this.state.email,
          message: this.state.message
          };

      console.log(event.target);

      this.setState({
          disabled: false,
          emailSent: true
      });
      
          emailjs
              .send('service_4mg06tc', 'template_zzjqm74', templateParams, 'user_LGeJBa2i5mGFZgeANC51W')
              .then(
              function(response) {
                  console.log("EMAIL SUCCESSFULLY SENT", response.status, response.text);
              },
              function(error) {
                  console.log("EMAIL DID NOT SEND!", error);
              }
              );
  
          this.setState({
              name: "",
              email: "",
              message: ""
              });
          }


    render () {
//email form 
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

  <Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
  </Form.Group>

  <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
    Submit
  </Button>

  {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
  {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
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
    
  

