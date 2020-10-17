import React, { Component, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import $ from "jquery";

export function EditProp(props) {

  console.log(props)

  const [property, setProperty] = useState({ ...props });

  console.log(property)
  function handleSubmit(e) {

    console.log(property)

    var newProperty = {
      ...property
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
            <Form.Control type="text" onChange={e => setProperty({ address: e.target.value, _id: props._id })} defaultValue={props.address} />
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
            <Form.Control type="text" defaultValue={props.city} onChange={e => setProperty({ city: e.target.value, _id: props._id })} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" defaultValue={props.state} onChange={e => setProperty({ ...property, state: e.target.value, _id: props._id })} />
            <Form.Text className="text-muted">Ex. CA, NY, TX, FL</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="number" defaultValue={props.zip} onChange={e => setProperty({ ...property, zip: e.target.value, _id: props._id })} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Monthly Expenses</Form.Label>
            <Form.Control type="number" defaultValue={props.mortgage} onChange={e => setProperty({ ...property, mortgage: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Purchase Price</Form.Label>
            <Form.Control type="number" defaultValue={props.purchasePrice} onChange={e => setProperty({ ...property, purchasePrice: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Monthly Rent</Form.Label>
            <Form.Control type="number" defaultValue={props.rent} onChange={e => setProperty({ ...property, rent: e.target.value })} />
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
