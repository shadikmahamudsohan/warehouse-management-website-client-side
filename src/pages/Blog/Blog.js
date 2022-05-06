import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="my-5 p-4 shadow rounded">
                <h2 className="fs-1 mb-4">
                    1. Difference between javascript and nodejs.
                </h2>
                <p className="fs-5">
                    <strong className='fs-4'>Ans: </strong>In client side website we use javascript.It can only run in the browser.It is a high level programming language. Javascript is used to make a website dynamic. On the other handle, nodejs is used in server side. It is used to run javascript outside the browse and create server to sore data. NodeJS is a Javascript runtime environment.
                </p>
            </div>
            <div className="my-5 p-3 shadow rounded">
                <h2 className="fs-1 mb-4">
                    2.  When should you use nodejs and when should you use mongodb?
                </h2>
                <p className="fs-5">
                    <strong className='fs-4'>Ans: </strong>Nodejs runs you javascript code outside the website. It is used to create sever. Nodejs need to sore it's data in a server. Mongodb is a server where you can sore data and get api. You can access to mongodb in you nodejs and create database. You can get, add, delete, update from the database. So when I need to run my js outside the browser and I will use mongodb when I need to create database to sore, update my data.
                </p>
            </div>
            <div className="my-5 p-3 shadow rounded">
                <h2 className="fs-1 mb-4">
                    3.  What is the purpose of jwt and how does it work?
                </h2>
                <p className="fs-5">
                    <strong className='fs-4'>Ans: </strong>JSON Web Token or jwt are used to send tokens to the user to see if the user is authorized to have access in the website. It give the use a unique access tokens when the use is logged in. Then token then secure the users information from accessing. It also verify the user when the user is logged in from another account. It also help to transmitting information between parties securely.
                </p>
            </div>
        </div>
    );
};

export default Blog;