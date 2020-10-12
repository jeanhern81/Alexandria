import React, { Component } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  height: "400%",
  width: "100%",
};

export class MapsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal {...this.props} size="lg">
        <Modal.Header closeButton>
          <Image
            src={require("../images/Alexandria-logo-s.png")}
            style={{ float: " left " }}
            id="loginAlexLogo"
            alt="Alexandria Logo"
          />

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        {/* <Modal.Body> */}
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
        {/* </Modal.Body> */}
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8",
})(MapsModal);
