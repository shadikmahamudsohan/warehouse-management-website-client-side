import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { BiErrorCircle } from 'react-icons/bi'

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignIn = event => {
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
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        if (!email || !password || !name || !confirmPassword) {
            setErrorMessage('Please fill all the forms!')
        } else {
            createUserWithEmailAndPassword(email, password)
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
        <div>
            <div className="authentication">
                <div className='container form-container'>
                    <h3 className=' fw-bold text-center'>Please Register</h3>
                    <Form onSubmit={handleSignIn} noValidate validated={validated} >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User name</Form.Label>
                            <Form.Control required type="text" name="name" placeholder="Enter you name" />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </Form.Group>
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

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" name="confirmPassword" placeholder="Confirm Password" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a your password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="mb-3">
                            <p>Already have an account? <Link className='text-white' to='/signIn'>Please Login!</Link></p>
                        </div>
                        <Button className="w-100 py-2  custom-button" type="Register">
                            Register
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
        </div>
    )
}

export default Register;