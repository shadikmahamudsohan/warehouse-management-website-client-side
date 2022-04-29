import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>pharmabd</h3>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Header;