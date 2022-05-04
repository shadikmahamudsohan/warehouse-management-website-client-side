import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import TableItem from './TableItem/TableItem';

const ManageItems = ({ dark }) => {
    const [products, setProducts, loading] = useProducts()
    const navigate = useNavigate()

    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://quiet-refuge-83525.herokuapp.com/inventory/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted');
                        const remaining = products.filter(item => item._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    }
    return (
        <div className='container' style={{ minHeight: '100vh' }}>
            <h1 className="text-center text-primary my-3">Manage Inventory</h1>
            {loading ? <LoadingSpinner />
                :
                <Table id='table' className={`text-center ${dark && 'table-dark'}`}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <TableItem key={product._id} data={product} deleteData={deleteData} />)
                        }
                    </tbody>
                </Table>
            }
            <button className="btn btn-success py-2 px-4 my-4" onClick={() => navigate('/addItems')}>Add New Item</button>
        </div>
    );
};

export default ManageItems;