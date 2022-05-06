import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const VerifyEmail = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const sendVerifyEmail = async () => {
        await sendEmailVerification();
        toast('Email Sended');
        if (error) {
            return <p>{error.message}</p>
        }
    }
    return (
        <div className="container d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <div className='p-5 w-75 mx-auto shadow text-center d-flex align-items-center justify-content-center'>
                <div>
                    {sending ? <LoadingSpinner /> :
                        <>
                            {/* {error && <p className='text-danger'>{error}</p>} */}
                            <h2>Please verify your email</h2>
                            <br />
                            <p>You are almost there! We send a email to <br />
                                {user.email}
                            </p>
                            <p>
                                Just go to <strong>mail.google.com</strong> and verify your email. <br />
                                If you don't see a verification email you may need to check your span folder.
                            </p>
                            <p>Still can't find the email?</p>
                            <button onClick={sendVerifyEmail} className='btn btn-primary'>
                                Send Verify email Again
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>

    );
};

export default VerifyEmail;