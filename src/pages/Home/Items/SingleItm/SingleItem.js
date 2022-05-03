import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleItem.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ data }) => {
    const [seeMore, setSeeMore] = useState(true)
    const { name, price, quantity, sold, supplierName, img, description, _id } = data;
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    const navigate = useNavigate()
    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    };
    return (

        <Col>
            <Card data-aos='fade-up' className='h-100 card-container text-dark'>
                <div className="inner">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-around'>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <p>Price: {price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Sold: {sold}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <h6>Supplier: {supplierName}</h6>
                    </Card.Text>
                    <Card.Text>

                        {
                            seeMore ? <>
                                {description.slice(1, 100)} {' '}
                                <span className='text-decoration-underline' title='click to see more' onClick={() => setSeeMore(!seeMore)} style={{ cursor: 'pointer' }}>See more...</span>
                            </>
                                : <>
                                    {description} {'  '}
                                    <span className='text-decoration-underline' title='click to see more' onClick={() => setSeeMore(!seeMore)} style={{ cursor: 'pointer' }}>See less...</span>
                                </>
                        }
                        <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary mt-3 py-2 w-100">Stock Update</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleItem;

/* 
> */