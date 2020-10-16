import React, { Component } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";

const mapStyles = {
  height: "400%",
  width: "100%",
};

export class MapsModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    Geocode.setApiKey("AIzaSyDHRCqL8yZbKNEZl7PFCmbA_XlaIBluHZ8");
    this.state = { a: "" }
    Geocode.fromAddress(this.props.address).then(
      response => {
        this.setState({ a: response.results[0].geometry.location });
        // console.log(lat, lng);
      },
      error => {
        console.error(error);
      }

    );

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
          zoom={17}
          style={mapStyles}

          initialCenter={this.state.a}
        ><Marker
            title={this.props.address}
            name={'SOMA'}
            position={this.state.a} /></Map>
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
