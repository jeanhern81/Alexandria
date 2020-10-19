import React, { Component, useState } from "react";
import { Form, Modal, Button, Image } from "react-bootstrap";
import $ from "jquery";
import "../index.css";

class DeleteProp extends Component {
  constructor(props) {
    super(props);
    this.deleteProperty = this.deleteProperty.bind(this)
  }


  deleteProperty = () =>
    $.ajax({
      method: "DELETE",
      url: "/api/" + this.props._id
    }).then((res) => {

      console.log(res)
    })
  render() {

    return (
      <Modal
        {...this.props}
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
            key={this.props._id}
          ></Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.props.onHide}>
          <Modal.Body >
            <p>
              <h3 className="warning">Warning!</h3>{" "}
            </p>
            <p>
              Click "Delete" to delete this property or press "Cancel" to go back.
        </p>
            <Button variant="primary" type="submit" onClick={this.deleteProperty}>
              Delete
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={this.props.onHide}>Cancel</Button>
          </Modal.Body>
        </Form>
      </Modal >
    );
  }
}

export default DeleteProp;
