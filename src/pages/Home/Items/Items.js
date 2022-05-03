import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import SingleItem from './SingleItm/SingleItem';

const Items = () => {
    const [products, setProduct, loading] = useProducts()
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div id='items' className='my-5 container'>
            <h1 className='text-primary'>Our latest managing Items ___________________</h1>

            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {products.slice(0, 6).map(product => <SingleItem key={product._id} data={product} />)}
            </Row>
        </div>
    );
};

export default Items;