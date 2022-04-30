import React from 'react';
import image from '../../Image/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found row align-items-center my-5 container mx-auto'>
            <img src={image} className='col-md-6' alt="" />
            <div className="text col-md-6">Oops! Page Not Found</div>
        </div>
    );
};

export default NotFound;