import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LoadingSpinner;