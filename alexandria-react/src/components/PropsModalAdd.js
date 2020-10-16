import React, { Component, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

import $ from "jquery";

export default function PropsModalAdd(props) {
  // user_id is retrieved from local storage and user_id's state is set initially
  const [user_id, setUser_id] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [expenses, setExpenses] = useState("");
  const [rent, setRent] = useState("");

  // this function makes the ajax call and submits data to the database
  async function handleSubmit(e) {
    await $.ajax({
      url: "/api/newProperty",
      method: "POST",
      data: {
        user_id: user_id,
        address: address,
        city: city,
        state: state,
        zip: zip,
        purchasePrice: purchasePrice,
        expenses: expenses,
        rent: rent,
      },
    }).then((res) => {
      console.log(res);
    });
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

        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <h5 className="text-center">Add Properties</h5>
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAddress">
            <Form.Label>Street Address *</Form.Label>
            <Form.Control
              type="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCity">
            <Form.Label>City *</Form.Label>
            <Form.Control
              type="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicState">
            <Form.Label>State Abbreviation *</Form.Label>
            <Form.Control
              type="state"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
            <Form.Text className="text-muted">Ex. CA, NV, TX, FL</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicZipCode">
            <Form.Label>Zip Code *</Form.Label>
            <Form.Control
              type="zipcode"
              placeholder="Zip Code"
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicState">
            <Form.Label>Monthly Expenses *</Form.Label>
            <Form.Control
              type="monthlyExpenses"
              placeholder="Monthly Expenses"
              onChange={(e) => setExpenses(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicState">
            <Form.Label>Purchase Price *</Form.Label>
            <Form.Control
              type="purchasePrice"
              placeholder="Purchase Price"
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicState">
            <Form.Label>Montly Rent *</Form.Label>
            <Form.Control
              type="montlyRent"
              placeholder="Monthly Rent"
              onChange={(e) => setRent(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>

          <p className="requiredFields py-2"> (*) Required Fields</p>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
