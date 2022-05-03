import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import Items from './Items/Items';

const MYItems = () => {
    const [user, userLoading] = useAuthState(auth);
    const [loading, setLoading] = useState(true);
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/myItems', {
            headers: {
                'authorization': `${user?.email}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
                setLoading(false)
            })
    }, [user])

    const navigate = useNavigate()

    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/myItems/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted');
                        const remaining = myItems.filter(item => item._id !== id);
                        setMyItems(remaining);
                    }
                });
        }
    }
    if (userLoading) {
        return <LoadingSpinner />
    }
    if (loading) {
        return <LoadingSpinner />
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
                            myItems.map(product => <Items key={product._id} data={product} deleteData={deleteData} />)
                        }
                    </tbody>
                </Table>
            </div>
            <button className="btn btn-success py-2 px-4 my-4" onClick={() => navigate('/addItems')}>Add New Item</button>

        </div>
    );
};

export default MYItems;