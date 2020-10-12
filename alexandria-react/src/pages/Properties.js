import React, { Component } from "react";
import { Button } from "react-bootstrap";

//Pages
import NavBarProps from "../components/NavBarProps";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";

import PropsModalAdd from "../components/PropsModalAdd";
import MapsModal from "../components/MapsModal";

import "../index.css";
import "./Properties.css";
import PropertyDetailsModal from "../components/PropertyDetails";

//Icons
import { GrAddCircle } from "react-icons/gr";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = { depts: [PropsModalAdd], addModalShow: false };
  }
  render() {
    let addPropsModalAddClose = () =>
      this.setState({ addPropsModalAddShow: false });
    /* let addMapsModalClose = () => this.setState({ addMapsModalShow: false }); */
    return (
      <div>
        <NavBarProps />

        <div>
          <h4 className="PropsHeading" style={{ float: "left" }}>
            {" "}
            Properties{" "}
          </h4>
        </div>
        <div className="lineProps">
          {" "}
          <hr></hr>
        </div>

        {/*  Add Properties Button  */}
        <div>
          <Button
            variant="info"
            to="/ProsModalAdd"
            onClick={() => this.setState({ addPropsModalAddShow: true })}
          >
            Add Property <GrAddCircle />
          </Button>
          <PropsModalAdd
            show={this.state.addPropsModalAddShow}
            onHide={addPropsModalAddClose}
          />
        </div>
        {/* <div>
          <Button
            variant="info"
            to="/MapsModal"
            onClick={() => this.setState({ addMapsModalShow: true })}
          >
            View Map <GrAddCircle />
          </Button>
          <MapsModal
            show={this.state.addMapsModalShow}
            onHide={addMapsModalClose}
          />
        </div> */}

        <Footer />
      </div>
    );
  }
}

export { Properties };
