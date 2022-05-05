import React from 'react';
import { Card, Col } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
const Review = ({ name, description, img, dark }) => {
    return (
        <Col>
            <Card className={`h-100 mx-2 text-center ${dark && 'bg-dark text-light'}`}>
                <Card.Img style={{ width: '60px' }} className='rounded-circle mx-auto mt-3' src={img} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-around'>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <AiFillStar size='30' className='text-warning' />
                        <AiFillStar size='30' className='text-warning' />
                        <AiFillStar size='30' className='text-warning' />
                        <AiFillStar size='30' className='text-warning' />
                        <AiFillStar size='30' className='text-warning' />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;