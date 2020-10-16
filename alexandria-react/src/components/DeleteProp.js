import React, { Component, useState } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import $ from "jquery";
import "../index.css";

export function DeleteProp(props) {
  console.log(props);
  const [property, setProperty] = useState({
    address: props.address,
    city: props.city,
    state: props.state,
    zip: props.zip,
    mortgage: props.mortgage,
    purchasePrice: props.purchasePrice,
    rent: props.rent,
    _id: props._id,
  });

  function handleSubmit(e) {
    console.log(property);

    var newProperty = {
      address: property.address,
      city: property.city,
      state: property.state,
      zip: property.zip,
      purchasePrice: property.purchasePrice,
      mortgage: property.mortgage,
      rent: property.rent,
      id: props._id,
    };
    console.log(newProperty);

    $.ajax({ url: "/api/properties", method: "PUT", data: newProperty }).then(
      (res) => {
        console.log(res);
      }
    );
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

        <Modal.Title
          id="contained-modal-title-vcenter"
          key={props._id}
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <h3 className="warning">Warning!</h3>{" "}
        </p>
        <p>
          Click "Delete" to delete this property or press "Cancel" to go back.
        </p>
        <Button variant="primary" type="submit">
          Delete
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteProp;
