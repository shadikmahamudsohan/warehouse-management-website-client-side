import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleItem.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ data, dark }) => {
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

        <Col data-aos='fade-up'>
            <Card className={`h-100 card-container ${dark && 'bg-dark text-light'}`}>
                <div className="inner">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-around'>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        <span className="d-flex justify-content-between">
                            <span>Price: {price}</span>
                            <span>Quantity: {quantity}</span>
                            <span>Sold: {sold}</span>
                        </span>
                    </Card.Text>
                    <Card.Text>
                        Supplier: {supplierName}
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