import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

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

    return children;
};

export default RequireAuth;