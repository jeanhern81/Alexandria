import React, { Component } from 'react';
import{ Modal, Button, Form, Image } from 'react-bootstrap';

export class PropsModalAdd extends Component {
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
            <Image src={require('../images/Alexandria-logo-s.png') } style={{float:' left ' }} id='loginAlexLogo' alt='Alexandria Logo'/>
        
        <Modal.Title id="contained-modal-title-vcenter">

            
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <p><h3></h3> </p>
        <p><h5 className="text-center">Add Properties</h5></p>
        <Form>
    <Form.Group controlId="formAddress">
    <Form.Label>Street Address *</Form.Label>
    <Form.Control type="address" placeholder="Address" />
    </Form.Group>
    <Form.Group controlId="formBasicCity">
    <Form.Label>City *</Form.Label>
    <Form.Control type="city" placeholder="City" />
    </Form.Group>
    <Form.Group controlId="formBasicState">
    <Form.Label>State Abbreviation *</Form.Label>
    <Form.Control type="state" placeholder="State" />
    </Form.Group>
    <Form.Group controlId="formBasicZipCode">
    <Form.Label>Zip Code *</Form.Label>
    <Form.Control type="zipcode" placeholder="Zip Code" />
    </Form.Group>
    <Form.Group controlId="formBasicState">
    <Form.Label>Montly Expenses *</Form.Label>
    <Form.Control type="montlyExpenses" placeholder="Monthly Expenses" />
    </Form.Group>
    <Form.Group controlId="formBasicState">
    <Form.Label>Purchase Price *</Form.Label>
    <Form.Control type="purchasePrice" placeholder="Purchase Price" />
    </Form.Group>
    <Form.Group controlId="formBasicState">
    <Form.Label>Montly Rent *</Form.Label>
    <Form.Control type="montlyRent" placeholder="Monthly Rent" />
    </Form.Group>

    <Button variant="primary" type="submit">
    Save
    </Button>
    
            <p className='requiredFields py-2' > (*) Required Fields</p>

</Form>




        </Modal.Body>
        <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
        );
}

    };


export default PropsModalAdd;