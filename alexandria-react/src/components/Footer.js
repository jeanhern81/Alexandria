import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function FooterFx () {
    return (
    <div > 

    <Container fluid={true} >
    <Navbar className='color-footer'  fixed="bottom" >
    <Navbar.Brand href="#home" >

        <h6 className='justify-content-center py-0'>(C) Alexandria 2020</h6></Navbar.Brand>
  

  </Navbar>
    </Container>


        </div>
    )
}


export default FooterFx;