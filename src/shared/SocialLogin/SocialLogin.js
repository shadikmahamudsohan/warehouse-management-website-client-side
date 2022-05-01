import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc'
import { Button } from 'react-bootstrap';
import auth from '../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    //private route navigate
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    //--------------

    if (loading) {
        return <LoadingSpinner />
    }
    if (user) {
        toast('Logged In');
        navigate(from, { replace: true });
    }

    return (
        <div className='my-3 text-center'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className='mx-2 mt-2'>or</p>
                <div className="line"></div>
            </div>
            <Button onClick={handleGoogleSignIn} variant="outline-light px-5 py-2">
                <FcGoogle size={'25px'} />
                <span className='mx-1'></span>
                <span>SignIn with Google</span>
            </Button>
            {error && <div className="alert alert-danger mt-3" role="alert">
                <BiErrorCircle size={25} className='me-2' />
                {error.message}
            </div>}
        </div>
    );
};

export default SocialLogin;