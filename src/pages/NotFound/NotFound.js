import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../Image/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/home')
    }
    return (
        <div className='not-found row align-items-center my-5 container mx-auto' style={{ minHeight: '100vh' }}>
            <img src={image} className='col-md-6' alt="" />
            <div className='col-md-6'>
                <h1 className="text">Oops! Page Not Found</h1>
                <button className="custom-button my-3" onClick={backToHome} >Go Back Home</button>
            </div>
        </div>
    );
};

export default NotFound;