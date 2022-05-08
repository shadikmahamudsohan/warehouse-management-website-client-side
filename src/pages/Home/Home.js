import React from 'react';
import Banner from './Banner/Banner';
import Dashboard from './Dashboard/Dashboard';
import Items from './Items/Items';
import UserReview from './UserReview/UserReview';
import './Home.css'
const Home = ({ dark }) => {
    localStorage.setItem('navigate', `/home`)
    return (
        <div>
            <Banner dark={dark} />
            <Items dark={dark} />
            <Dashboard dark={dark} />
            <UserReview dark={dark} />
        </div>
    );
};

export default Home;