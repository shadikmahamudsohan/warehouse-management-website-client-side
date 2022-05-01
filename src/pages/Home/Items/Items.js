import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleItem from './SingleItm/SingleItem';

const Items = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='items' className='my-5 container'>
            <h1 className='text-primary'>Our latest managing Items ___________________</h1>

            <Row sm={1} md={2} lg={3} className="g-4 mt-5">
                {products.slice(0, 6).map(product => <SingleItem key={product._id} data={product} />)}
            </Row>
        </div>
    );
};

export default Items;