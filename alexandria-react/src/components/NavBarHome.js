import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';

import LoginModal from './LoginModal';
import ContactModal from './ContactModal';
import SignUpModal from './SignUpModal';



import './NavFooter.css';



class NavBarHome extends Component {
    constructor(props) {
        super(props);
        this.state = { depts: [LoginModal, ContactModal], addModalShow: false }
    }
    render() {
        let addLoginModalClose = () => this.setState({ addLoginModalShow: false });
        let addContactModalClose = () => this.setState({ addContactModalShow: false });
        let addSignUpModalClose = () => this.setState({ addSignUpModalShow: false });

        return (
            <div clssName='NavB'>

                <Router>


                    <Navbar className='color-nav' expand="lg">
                        <Navbar.Brand href="/"><Image src={require('../images/Alexandria-logo-BW.png')} style={{ width: '50%', float: 'left' }} id='loginAlexLogo' alt='Alexandria Logo' /> </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto " >

                                <Link className='nav-link' href="#" onClick={() => this.setState({ addLoginModalShow: true })}><h6 style={{ color: 'white' }}>Login</h6></Link>
                                <LoginModal show={this.state.addLoginModalShow} onHide={addLoginModalClose} />

                                <Link className='nav-link' href="#" onClick={() => this.setState({ addSignUpModalShow: true })}><h6 style={{ color: 'white' }}>Sign Up</h6></Link>
                                <SignUpModal show={this.state.addSignUpModalShow} onHide={addSignUpModalClose} />


                                <Link className='nav-link' href="#" onClick={() => this.setState({ addContactModalShow: true })}><h6 style={{ color: 'white' }}>Contact Us</h6></Link>
                                <ContactModal show={this.state.addContactModalShow} onHide={addContactModalClose} />

                                <Link className='nav-link' to='/properties' ><h6 style={{ color: 'white' }}>Properties</h6></Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>






                </Router>
            </div>
        );
    }

}

export default NavBarHome;


