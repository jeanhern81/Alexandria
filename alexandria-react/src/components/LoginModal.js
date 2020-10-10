import React, { Component, useState } from 'react';
//Bootstrap
import { Modal, Button, Form, Image } from 'react-bootstrap';

import $ from "jquery";


export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email }, { password });
        if (validateForm())
            $.ajax({ url: "/api/users/login", method: "POST", data: { email: email.toLowerCase(), password: password } })
                .then(res => {


                    return localStorage.setItem("user", JSON.stringify(res._id))




                })

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Image src={require('../images/Alexandria-logo-s.png')} style={{ float: '' }} id='loginAlexLogo' alt='Alexandria Logo' />

                <Modal.Title id="contained-modal-title-vcenter">


                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><h3>Login</h3> </p>
                <p><h5 className="text-center">Welcome Back!</h5></p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
    </Button>
                    <p clasName='newCustomer'> New Customer? <a href="signUp.home.html">Create account</a></p>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}




