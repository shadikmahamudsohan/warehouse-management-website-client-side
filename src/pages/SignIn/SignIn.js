import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './SignIn.css'
import { BiErrorCircle } from 'react-icons/bi'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault()
        setErrorMessage('')
        // -----------validation---------
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        // ---------validation end---------
        const email = event.target.email.value
        const password = event.target.password.value
        if (!email || !password) {
            setErrorMessage('Please fill all the forms!')
        } else {
            console.log(email, password);
            signInWithEmailAndPassword(email, password)
        }
        if (error) {
            setErrorMessage(error.message)
        }
        if (loading) {
            return <LoadingSpinner />
        }
        if (user) {
            event.target.reset()
        }
    }
    return (
        <div className="authentication">
            <div className='container form-container'>
                <h3 className=' fw-bold text-center'>Please Login</h3>
                <Form onSubmit={handleRegister} noValidate validated={validated} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" name="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" name="password" placeholder="Password" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="mb-3">
                        <p>New to pharmabd? <Link className='text-white' to='/register'>Create a new account!</Link></p>

                    </div>
                    <Button className="w-100 py-2  custom-button" type="submit">
                        Submit
                    </Button>
                    {
                        errorMessage && <div className=" my-3 alert alert-danger" role="alert">
                            <BiErrorCircle size={25} className='me-2' />
                            {errorMessage}
                        </div>
                    }
                </Form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignIn;