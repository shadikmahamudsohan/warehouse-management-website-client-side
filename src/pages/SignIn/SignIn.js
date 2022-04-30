import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './SignIn.css'
import { BiErrorCircle } from 'react-icons/bi'

const SignIn = () => {
    const [error, setError] = useState('');
    const handleSignIn = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if (!email || !password) {
            setError('Please fill all the forms!')
        } else {
            console.log(email, password);
        }
    }
    return (
        <div className="authentication">
            <div className='container form-container'>
                <h3 className=' fw-bold text-center'>Please Login</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100 py-2  custom-button" type="submit">
                        Submit
                    </Button>
                    {
                        error && <div className=" my-3 alert alert-danger" role="alert">
                            <BiErrorCircle size={25} className='me-2' />
                            {error}
                        </div>
                    }
                </Form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignIn;