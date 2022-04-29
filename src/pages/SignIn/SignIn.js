import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './SignIn.css'

const SignIn = () => {
    const handleSignIn = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password);
    }
    return (
        <div className="authentication">
            <div className='container form-container'>
                <h3 className='text-primary text-center'>Please Login</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100 py-2 mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignIn;