import React from 'react';
//Bootstrap
import { Navbar, Container } from 'react-bootstrap';
import './NavFooter.css';

function FooterFx () {
    return (
    <div > 

    <Container fluid={true} >
    <Navbar className='color-footer'  fixed="bottom" >
    <Navbar.Brand href="#home" >

    <h6 className='d-flex justify-content-cente py-0'>(C) Alexandria 2020</h6>
    
    </Navbar.Brand>
    </Navbar>
    </Container>


    </div>
    )
}


export default FooterFx;