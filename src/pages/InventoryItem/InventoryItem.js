import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { toast } from 'react-toastify';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const InventoryItem = () => {
    const navigate = useNavigate()
    // getting item data
    const { itemId } = useParams()
    const [item, , loading] = useItem(itemId)
    const { _id, name, img, sold, quantity, genericName, price, description } = item;
    //-------------------

    // state for all quantity
    const [allQuantity, setAllQuantity] = useState(quantity)
    useEffect(() => {
        setAllQuantity(quantity)
    }, [quantity])
    if (allQuantity < 0) {
        setAllQuantity(0);
        toast.error('not product left')
    }
    //---------------------
    const [deliver, sedDeliver] = useState(0)

    // Adding items in quantity
    const handleAddItems = event => {
        event.preventDefault()
        const quantity = parseInt(event.target.number.value)
        if (!quantity) {
            return;
        }
        setAllQuantity(quantity + allQuantity);
        const updateItem = { _id, name, img, sold, quantity: quantity + allQuantity, genericName, price, description }
        // updating data
        fetch(`https://quiet-refuge-83525.herokuapp.com/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added!');
                event.target.reset();
            })
    }
    //------------------------

    // removing item from quantity
    const handleDeliver = () => {

        //updating the sold number
        if (allQuantity > 0) {
            sedDeliver(deliver + 1)
        }
        //---------------------

        setAllQuantity(allQuantity - 1)

        // updating data
        fetch(`https://quiet-refuge-83525.herokuapp.com/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: allQuantity - 1, sold: sold + deliver + 1 })
        })
            .then(res => res.json())
    }
    //-----------------------------

    return (
        <div id='inventory' className='row align-items-center container mx-auto ' style={{ minHeight: '80vh' }}>
            {loading ? <LoadingSpinner />
                :
                <>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={img} className='w-100 rounded shadow' alt="img" />
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center my-3'>
                        <div className=''>
                            <h1>Item name: {name}</h1>
                            <h4 className='text-danger'>quantity: {allQuantity}</h4>
                            <h4>Sold: {sold + deliver}</h4>
                            <h4>Price: {price}$</h4>
                            <p><strong>GenericName:</strong> {genericName}</p>
                            <p><strong>Description:</strong> {description}</p>
                            <button onClick={handleDeliver} className="btn btn-primary d-flex justify-content-center">
                                delivered
                                <BsFillCartCheckFill size={20} className='ms-2' />
                            </button>
                            <form onSubmit={handleAddItems} className='my-3'>
                                <div className="input-group">
                                    <input type="number" name="number" id="number" className='form-control ps-2' placeholder='Restock items' />
                                    <input type="submit" className='btn btn-outline-primary' value="Add" />
                                </div>
                            </form>
                            <div className="btn btn-success" onClick={() => navigate('/manageInventory')}>Manage Inventory</div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default InventoryItem;