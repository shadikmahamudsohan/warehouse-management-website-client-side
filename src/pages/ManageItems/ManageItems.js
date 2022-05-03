import React from 'react';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';
import TableItem from './TableItem/TableItem';

const ManageItems = () => {
    const [products, setProducts] = useProducts()
    const navigate = useNavigate()
    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/inventory/${id}`, {
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
            <button className="btn btn-success py-2 px-4 my-4" onClick={() => navigate('/addItems')}>Add New Item</button>

        </div>
    );
};

export default ManageItems;