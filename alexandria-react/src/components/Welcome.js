import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
//Bootstrap
import { Modal, Button, Form, Image } from 'react-bootstrap';

import $ from "jquery";


export default function Welcome(props) {







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

                <p><h2 className="text-center">Welcome {this.props.user}!</h2></p>




            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
