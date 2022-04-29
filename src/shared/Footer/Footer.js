import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    var currentYear = new Date().getFullYear();
    return (
        <footer className='bg-primary text-light text-center'>
            <div className="icons py-3 d-flex justify-content-center">
                <div className="link-container mx-2">
                    <FaFacebookF />
                </div>
                <div className="link-container mx-2">
                    <FaTwitter />
                </div>
                <div className="link-container mx-2">
                    <FaGooglePlusG size={'23px'} />
                </div>
                <div className="link-container mx-2">
                    <FaLinkedinIn />
                </div>
            </div>
            <div className="copy-right w-100 py-2">
                &copy; {currentYear} Copyright: <span className='text-decoration-underline'>pharmadb.com</span>
            </div>
        </footer>
    );
};

export default Footer;