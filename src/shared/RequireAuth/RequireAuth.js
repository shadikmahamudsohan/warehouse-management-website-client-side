import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import VerifyEmail from './VerifyEmail/VerifyEmail';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <LoadingSpinner />
    }
    if (error) {
        return <p className='text-danger'>{error.massage}</p>
    }
    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <VerifyEmail />
    }

    return children;
};

export default RequireAuth;