import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleItem.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const SingleItem = ({ data }) => {
    const { name, img, description } = data;
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (

        <Col>
            <Card data-aos='fade-up' className='h-100 card-container'>
                <div className="inner">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleItem;

/* 
> */