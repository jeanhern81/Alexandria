import React from 'react'
import { Col, Row, Image, Card } from 'react-bootstrap';

import './HomeBody.css';

function HomeBody() {
    return (
        <div>
            
        <div className='containerHome'>



<Col xs={12} md={4} ><Image src={require('../images/backgrounds/iPhone2X.png' ) } style={{width: '65%', float:'left' }} id='iPhoneX' alt='iPhone X'  /></Col>


<Row>
<Col >    
<Card.Body  className='smartest' x={12} md={6} style={{float: 'left', width: '45rem' }}>
<Card.Title ><h1 style={{color: 'white'}}> The Smartest Way to Manage Rental Properties</h1></Card.Title>

  <Card.Text style={{color: 'white'}}>          
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
        </div>
    )
}

export default HomeBody;
