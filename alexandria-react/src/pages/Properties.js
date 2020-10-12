import React from "react";
import NavBarProps from "../components/NavBarProps";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";

import "../index.css";
import "./Properties.css";

function Properties() {
  return (
    <div>
      <NavBarProps />

      <Container fluid>
        <Row>
          <h5 style={{ float: "right" }} id="property-header">
            PROPERTIES
          </h5>
          {/* <!-- Beginning of Property listings. This Section will need to be dynamic with JS. --> */}
          {/* <!-- Propertery #1 - Just a place holder--> */}
        </Row>
        <hr />
      </Container>

      <Footer />
    </div>
  );
}

export { Properties };
