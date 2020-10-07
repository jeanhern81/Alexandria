import React, { Component } from 'react';

import LoginModal from './LoginModal';
import ContactModal from './ContactModal';

import { Navbar, Nav, Image } from 'react-bootstrap';

import './NavFooter.css';


class NavBarHome extends Component {
    constructor(props){
        super(props);
        this.state ={depts:[LoginModal, ContactModal], addModalShow: false}
    }    
    render(){
        let addLoginModalClose =() => this.setState({addLoginModalShow:false});
        let addContactModalClose =() => this.setState({addContactModalShow:false});
        
        return (
    <div clssName='NavB'>

<Navbar className='color-nav' expand="lg">
  <Navbar.Brand href="#home"><Image src={require('../images/Alexandria-logo-BW.png') } style={{width: '50%', float:'center' }} id='loginAlexLogo' alt='Alexandria Logo'/> </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto " >
      
      <Nav.Link href="#login" onClick={() => this.setState({addLoginModalShow: true})}><h6 style={{color: 'white'}}>Login</h6></Nav.Link>
      <LoginModal show={this.state.addLoginModalShow} onHide={addLoginModalClose}  /> 

      <Nav.Link href="#contact"  onClick={() => this.setState({addContactModalShow: true})}><h6 style={{color: 'white'}}>Contact Us</h6></Nav.Link> 
      <ContactModal show={this.state.addContactModalShow} onHide={addContactModalClose} /> 

    </Nav>

    </Navbar.Collapse>
</Navbar>

    </div>
    );
}

}

export default NavBarHome;


