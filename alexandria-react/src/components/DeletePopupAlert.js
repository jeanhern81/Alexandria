import React, { useState } from "react";
import { Button, Alert, Container } from 'react-bootstrap';

import '../index.css';


function AlertDismissible() {
    const [show, setShow] = useState(false);

    return (
    <>
        <Container fluid={false} >

        
        <Alert className='DeleteAlert' show={show} variant="danger">
            <Alert variant="" onClose={() => setShow(false)} dismissible></Alert>
        <Alert.Heading></Alert.Heading>
        <p>
        To delete this property click on "Delete Property" otherwise click on the 'x' to close.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger" size='sm'>
            Delete Property
            </Button>
        </div>
        </Alert>

        {!show && <Button className='DeleteButton' 
                        variant="danger" size='sm' onClick={() => setShow(true)}>Delete Property </Button>}
        </Container>                
    </>
    );
}

//render(<AlertDismissible />);

export default AlertDismissible;