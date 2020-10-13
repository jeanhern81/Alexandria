import React, { Component, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import $ from "jquery";

export function EditProp(props) {

  console.log(props.address)
  const [_id, set_id] = useState(props._id)
  const [address, setAddress] = useState(props.address);
  const [city, setCity] = useState(props.city);
  const [state, setState] = useState(props.state);
  const [zip, setZip] = useState(props.zip);
  const [mortgage, setMortgage] = useState(props.mortgage);
  const [purchasePrice, setPurchasePrice] = useState(props.purchasePrice);
  const [rent, setRent] = useState(props.rent);

  function handleSubmit(e) {


    var newProperty = {
      address: address,
      city: city,
      state: state,
      zip: zip,
      purchasePrice: purchasePrice,
      mortgage: mortgage,
      rent: rent,
      id: props._id
    }
    console.log(newProperty)

    $.ajax({ url: "/api/properties", method: "PUT", data: newProperty })
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
        <Image
          src={require("../images/Alexandria-logo-s.png")}
          style={{ float: " left " }}
          id="loginAlexLogo"
          alt="Alexandria Logo"
        />

        <Modal.Title id="contained-modal-title-vcenter" key={props._id}></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <h3>Edit Property</h3>{" "}
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" onChange={e => setAddress(e.target.value)} defaultValue={props.address} />
          </Form.Group>
          {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Street Address #2</Form.Label>
            <Form.Control type="text" defaultValue="Address #2" />
            <Form.Text className="text-muted">
              Ex. Apt, STE, Unit, etc.
              </Form.Text>
          </Form.Group> */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" Value={props.city} onChange={e => setCity(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" Value={props.state} onChange={e => setState(e.target.value)} />
            <Form.Text className="text-muted">Ex. CA, NY, TX, FL</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="number" defaultValue={props.zip} onChange={e => setZip(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Monthly Expenses</Form.Label>
            <Form.Control type="number" initialValue={props.mortgage} onChange={e => setMortgage(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" Value={props.purchasePrice} onChange={e => setPurchasePrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Monthly Rent</Form.Label>
            <Form.Control type="number" Value={props.rent} onChange={e => setRent(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
            </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default EditProp;
