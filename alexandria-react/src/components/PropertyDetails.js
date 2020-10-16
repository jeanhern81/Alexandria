import React, { Component } from "react";
//ReactBootstrap
import { Table, Modal, Form, Button, Image } from "react-bootstrap";

export class PropertyDetailsModal extends Component {
  constructor(props) {
    super(props);
  }

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

          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>
            <h5 className="text-center">Home Details</h5>
          </p> */}
          <Form>
            {/* <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Residential Code</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Building Size (Sqft) </th>
                    <th>Lot Size (Sqft) </th>
                    <th>Year Built</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                  </tr>
                </tbody>
              </Table>
            </div> */}

            <p>
              <h5 className="text-center">Market Valuation</h5>
            </p>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Zestimate (USD)</th>
                    <th>High Value Limit (USD)</th>
                    <th>Low Value Limit (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <p>
              <h5 className="text-center">Rent Estimate</h5>
            </p>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Rent Zestimate (USD)</th>
                    <th>High Value Limit (USD)</th>
                    <th>Low Value Limit (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Data</td>
                    <td>No Data</td>
                    <td>No Data</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <p className="requiredFields py-2"> </p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Image
            src={require("../images/Zillowlogo_200x50.png")}
            style={{ float: " " }}
            id="zillowLogo"
            alt="Zillow Logo"
          />

          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PropertyDetailsModal;
