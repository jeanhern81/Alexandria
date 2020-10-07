import React, { Component } from "react";
import NavBarHome from "../components/NavBarHome";
import Footer from '../components/Footer';

import { Col, Row, Image, Card } from 'react-bootstrap';

import '../index.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBarHome />

        <div className='containerHome'>

        <Col xs={12} md={4} ><Image src={require('../images/backgrounds/iPhone2X.png' ) } style={{width: '65%', float:'right' }} id='iPhoneX' alt='iPhone X'  /></Col>

            
  <Row>
    
  <Col >    
      <Card.Body  className='smartest' x={12} md={6} style={{ width: '45rem' }}>
        <Card.Title ><h1> The Smartest Way to Manage Rental Properties</h1></Card.Title>
    
          <Card.Text>          
            <p>
            <h3>Take your investment to the next level. Use digital information to
            enhance your real estate decision making and start visualizing your
            profits.</h3>
            </p>

          </Card.Text>
      </Card.Body>
      
    </Col>
    


  </Row>




        </div>



        <Footer />
      </div>
    );
  }
}
export default Home;
