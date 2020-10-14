import React, { Component } from "react";
import { Button } from "react-bootstrap";

//Pages
import NavBarProps from "../components/NavBarProps";
import Footer from "../components/Footer";
//import { Container, Row } from "react-bootstrap";
import PropertiesContainer from "../components/PropertiesContainer"

import PropsModalAdd from "../components/PropsModalAdd";
// import MapsModal from "../components/MapsModal";

import "../index.css";
import "./Properties.css";
import PropertyDetails from "../components/PropertyDetails";

//Icons
//import { GrAddCircle } from "react-icons/gr";

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = { depts: [PropsModalAdd], addModalShow: false };
    }
    render() {
        let addPropsModalAddClose = () =>
            this.setState({ addPropsModalAddShow: false });
        /*let addMapsModalClose = () => this.setState({ addMapsModalShow: false }); */
        let addPropertyDetailsModalClose = () =>
            this.setState({ addPropertyDetailsModalShow: false });

        return (
            <div>
                <NavBarProps />

                <div>
                    <h4 className="PropsHeading " style={{ float: "left" }}>
                        {" "}
            Properties{" "}
                    </h4>
                </div>
                <div className="lineProps py-3">
                    {" "}
                    <hr></hr>
                </div>
                <PropertiesContainer />

                {/*  Add Properties Button  */}
                <div>
                    <Button
                        variant="info"
                        to="/ProsModalAdd"
                        onClick={() => this.setState({ addPropsModalAddShow: true })}
                    >
                        Add Property 
                    </Button>
                    <PropsModalAdd
                        show={this.state.addPropsModalAddShow}
                        onHide={addPropsModalAddClose}
                    />
                </div>

                {/* Property Details Button */}
            <br></br>
                <div>
                <Button variant="info" to='/PropertyDetails' onClick={() => this.setState({ addPropertyDetailsModalShow: true })}>Property Details </Button>
                <PropertyDetails show={this.state.addPropertyDetailsModalShow} onHide={addPropertyDetailsModalClose} />
                </div>
                

                {/* Maps Button */}
                {/* <div>
        <Button
            variant="info"
            to="/MapsModal"
            onClick={() => this.setState({ addMapsModalShow: true })}
        >
            View Map 
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
