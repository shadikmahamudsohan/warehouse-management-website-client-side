import React from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';
import TableItem from './TableItem/TableItem';

const ManageItems = () => {
    const [products, setProduct] = useProducts()
    const navigate = useNavigate()
    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            toast('Item is deleted')
        }

    }
    return (
        <div className='container' style={{ minHeight: '100vh' }}>
            <h1 className="text-center text-primary my-3">Manage Items</h1>
            <div className="table">
                <Table id='table' className='text-center'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <TableItem key={product._id} data={product} deleteData={deleteData} />)
                        }
                    </tbody>
                </Table>
            </div>
            <button className="btn btn-success py-2 px-4 my-4" onClick={() => navigate('/addItems')}>Add New Product</button>

        </div>
    );
};

export default ManageItems;