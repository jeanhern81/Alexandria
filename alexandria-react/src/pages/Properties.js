import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

//Pages
import NavBarProps from "../components/NavBarProps";
import Footer from '../components/Footer';

import PropsModalAdd from '../components/PropsModalAdd';
//import PropertyDetails from '../components/PropertyDetails';


import '../index.css';
import "./Properties.css";
import PropertyDetailsModal from '../components/PropertyDetails';



class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = { depts: [PropsModalAdd, PropertyDetailsModal], addModalShow: false }
    }
render() {
    let addPropsModalAddClose = () => this.setState({ addPropsModalAddShow: false });
    let addPropertyDetailsModalClose = () => this.setState({ addPropertyDetailsModalShow: false });

            return (
            <div>
                <NavBarProps />

                <div>
                    <h4 className='PropsHeading' style={{ float: 'left',  }}> Properties </h4>
                    
                </div>
                <div className='lineProps py-3'><hr></hr></div>


                {/*  Add Properties Button  */}
                <div className='justify-content-center' >
                <Button className='addPropertyButton ' variant="info" to='/ProsModalAdd' onClick={() => this.setState({ addPropsModalAddShow: true })}>Add Property </Button>
                <PropsModalAdd show={this.state.addPropsModalAddShow} onHide={addPropsModalAddClose} />
                </div>
                

                {/* Property Details */}
                {/*
                <div>
                <Button variant="info" to='/PropertyDetails' onClick={() => this.setState({ addPropertyDetailsModalShow: true })}>Property Details </Button>
                <PropertyDetails show={this.state.addPropertyDetailsModalShow} onHide={addPropertyDetailsModalClose} />
                </div>
                */}

                <Footer />
            </div>
        );
}


    }



export {Properties}