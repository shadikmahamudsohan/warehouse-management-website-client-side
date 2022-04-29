import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc'
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div className='my-3 text-center'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className='mx-2 mt-2'>or</p>
                <div className="line"></div>
            </div>
            <Button variant="outline-primary px-5 py-2">
                <FcGoogle size={'25px'} />
                <span className='mx-1'></span>
                <span>SignIn with Google</span>
            </Button>
        </div>
    );
};

export default SocialLogin;