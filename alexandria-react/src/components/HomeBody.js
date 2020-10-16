import React from "react";
//Bootstrap
import { Col, Row, Image, Container } from "react-bootstrap";
//Styling
import "./HomeBody.css";

function HomeBody() {
  return (
    <div className="HomeBody">
      <div className="containerHome d-flex justify-content-center">
        <Container fluid={false}>
          <Col xs={6} md={4}>
            <Image
              src={require("../images/backgrounds/iPhone2X.png")}
              style={{ width: 360, float: "left" }}
              id="iPhoneX"
              alt="iPhone X"
            />
          </Col>
          <Row className="d-flex justify-content-center py-5">
            <Col
              className="smartest"
              style={{ float: "right", width: "45rem" }}
            >
              <h1 style={{ color: "white" }}>
                {" "}
                The Smartest Way to Manage Rental Properties
              </h1>
              <p>
                <h3 style={{ color: "white" }}>
                  Take your investment to the next level. Use digital
                  information to enhance your real estate decision making and
                  start visualizing your profits.
                </h3>
              </p>
            </Col>
          </Row>

          <Col></Col>
        </Container>
      </div>
    </div>
  );
}

export default HomeBody;
