import React, { Component, useState } from "react";
import { Form, Modal, Button, Image } from "react-bootstrap";
import $ from "jquery";
import "../index.css";

export function DeleteProp(props) {
  console.log(props);
  let deleteProperty = (id) =>
    $.ajax({
      method: "DELETE",
      url: "/api/" + id
    }).then(() => {

      console.log("property deleted")
    })

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
      <Form onSubmit={props.onHide}>
        <Modal.Body >
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
      </Form>
    </Modal>
  );
}

export default DeleteProp;
