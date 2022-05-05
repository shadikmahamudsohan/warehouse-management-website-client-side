import React from 'react';
import Banner from './Banner/Banner';
import Dashboard from './Dashboard/Dashboard';
import Items from './Items/Items';
import UserReview from './UserReview/UserReview';

const Home = ({ dark }) => {
    console.log(dark);

    return (
        <div>
            <Banner />
            <Items dark={dark} />
            <Dashboard dark={dark} />
            <UserReview dark={dark} />
        </div>
    );
};

export default Home;