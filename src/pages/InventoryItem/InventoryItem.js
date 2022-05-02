import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { toast } from 'react-toastify';

const InventoryItem = () => {
    const { itemId } = useParams()
    const [item] = useItem(itemId)
    const { _id, name, img, sold, quantity, genericName, price, description } = item;
    console.log(quantity);

    const [newQuantity, setNewQuantity] = useState(quantity)
    useEffect(() => {
        setNewQuantity(quantity)
    }, [quantity])

    const handleAddItems = event => {

        event.preventDefault()
        const quantity = parseInt(event.target.number.value)
        setNewQuantity(quantity + newQuantity);
        const updateItem = { _id, name, img, sold, quantity: quantity + newQuantity, genericName, price, description }
        const url = `http://localhost:5000/item/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Product added!');
                event.target.reset();
            })
    }

    const handleDeliver = () => {
        console.log('delivered');
    }
    console.log(newQuantity);
    return (
        <div className='row align-items-center container mx-auto' style={{ minHeight: '80vh' }}>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src={img} className='w-100 rounded shadow' alt="img" />
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                    <h1>Item name: {name}</h1>
                    <h3 className='text-danger'>quantity: {newQuantity}</h3>
                    <h4>Sold: {sold}</h4>
                    <h5>Price: {price}$</h5>
                    <p><strong>GenericName:</strong> {genericName}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <button onClick={handleDeliver} className="btn btn-primary d-flex justify-content-center">
                        delivered
                        <BsFillCartCheckFill size={20} className='ms-2' />
                    </button>
                    <form onSubmit={handleAddItems}>
                        <input type="number" name="number" id="number" />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;