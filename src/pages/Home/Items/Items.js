import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import SingleItem from './SingleItm/SingleItem';
import { MdOutlineManageSearch } from 'react-icons/md'

const Items = ({ dark }) => {
    const [products, , loading] = useProducts()
    const navigate = useNavigate()
    const navigateToManage = () => {
        navigate('/manageInventory')
        localStorage.setItem('navigate', '/manageInventory')
    }
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <section id='items' className='my-5 container'>
            <h1 className='text-left sectionTitle'>Our latest managing Items ___________________</h1>

            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {products.slice(0, 6).map(product => <SingleItem key={product._id} data={product} dark={dark} />)}
            </Row>
            <button className={`text-center btn py-2 px-4 mt-5 btn-success ${dark && 'btn-light'}`} onClick={navigateToManage}>Manage Inventory
                <MdOutlineManageSearch className='ms-2' size={30} />
            </button>
        </section>
    );
};

export default Items;