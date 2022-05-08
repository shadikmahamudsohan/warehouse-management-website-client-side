import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './SignIn.css'
import { BiErrorCircle } from 'react-icons/bi'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, useToast } from 'react-toastify';
import useTokens from '../../hooks/useTokens';

const SignIn = () => {
    const emailRef = useRef('');

    const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // reset password
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (sending) {
            return <LoadingSpinner />
        }
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast.error('Enter your email address');
        }
    };
    //----------------------

    //private route navigate
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    //--------------
    if (user) {
        fetch('https://quiet-refuge-83525.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token)
                // navigate(from, { replace: true });
                const previousRoute = localStorage.getItem('navigate')
                if (previousRoute) {
                    navigate(previousRoute)
                } else {
                    navigate('/')
                }
                toast.success('Logged In')
            });
    }
    // const [token] = useTokens(user)
    // if (token) {
    //     navigate(from, { replace: true });
    //     toast.success('Logged In')
    // }

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
        const password = event.target.password.value
        const email = emailRef.current.value;

        if (!email || !password) {
            setErrorMessage('Please fill all the forms!')
        } else {
            signInWithEmailAndPassword(email, password)
                .then(() => {
                    event.target.reset()
                })
        }
    }

    return (
        <div className="authentication ">
            {loading && <LoadingSpinner />}
            <div className="row container mx-auto align-items-center">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/RB2Q6rn/login.png" className='w-100' alt="loginImage" />
                </div>
                <div className="col-md-6">
                    <div className='form-container'>
                        <h3 className=' fw-bold text-center'>Please Login</h3>
                        <Form onSubmit={handleSignIn} noValidate validated={validated} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" ref={emailRef} placeholder="Enter email" />
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
                                <p>Forget Password? <span className='text-white text-decoration-underline' onClick={resetPassword} style={{ cursor: 'pointer' }}>Create a new password!</span></p>
                            </div>
                            <Button className="w-100 py-2 custom-button" type="submit">
                                Submit
                            </Button>
                            {
                                errorMessage && <div className=" my-3 alert alert-danger" role="alert">
                                    <BiErrorCircle size={25} className='me-2' />
                                    {errorMessage}
                                </div>
                            }
                            {
                                error && <div className=" my-3 alert alert-danger" role="alert">
                                    <BiErrorCircle size={25} className='me-2' />
                                    {error.message}
                                </div>
                            }
                        </Form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;