import React, { Component } from "react";
import { Button } from "react-bootstrap";

//Pages
import NavBarProps from "../components/NavBarProps";
import Footer from "../components/Footer";
import { Container, Row } from "react-bootstrap";

import PropsModalAdd from "../components/PropsModalAdd";

import "../index.css";
import "./Properties.css";

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

        <Footer />
      </div>
    );
  }
}

export { Properties };
