import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BiErrorCircle } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';


const AddItems = () => {
    // const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);
    const [user] = useAuthState(auth);

    const handleAddProduct = event => {
        event.preventDefault()
        // setErrorMessage('')
        // validation
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        // ---------validation end---------
        //
        // getting data from input
        const name = event.target.productName.value
        const genericName = event.target.genericName.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const supplierName = event.target.supplierName.value;
        const sold = event.target.sold.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const itemData = { name, genericName, email, price, supplierName, sold, quantity, img, description }
        if (name && genericName && email && price && supplierName && sold && quantity && img && description) {
            fetch('http://localhost:5000/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData),
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Product Added')
                    event.target.reset()
                });

        }
        //----------------------
        // event.target.reset()
    }
    return (
        <div>
            <div className='container form-container'>
                <h3 className=' fw-bold text-center'>Add Products</h3>
                <Form onSubmit={handleAddProduct} noValidate validated={validated} >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control required type="text" name="productName" placeholder="Product Name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a product name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="genericName">
                        <Form.Label>Generic name</Form.Label>
                        <Form.Control required type="text" name="genericName" placeholder="Product Generic Name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a generic name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Your email</Form.Label>
                        <Form.Control type="email" value={user?.email} name='email' readOnly disabled placeholder="Product Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="supplierName">
                        <Form.Label>Supplier name</Form.Label>
                        <Form.Control required type="text" name="supplierName" placeholder="Supplier name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a supplier name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="sold">
                        <Form.Label>Product sold</Form.Label>
                        <Form.Control required type="number" name="sold" placeholder="Product sold" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="price">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control required type="number" name="price" placeholder="Enter price" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a price.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="quantity">
                            <Form.Label>Product quantity</Form.Label>
                            <Form.Control required type="number" name="quantity" placeholder="Enter quantity" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a quantity.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Add some description</Form.Label>
                        <Form.Control as="textarea" required name='description' placeholder='Write the description' rows={3} />
                        <Form.Control.Feedback type="invalid">
                            Please provide some description.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="imgUrl">
                        <Form.Label>Add an image URL</Form.Label>
                        <Form.Control required type="url" name="img" placeholder="Image URL" />
                        <p><small>https://i.ibb.co/fdJbR5N/img3.png</small></p>
                        <Form.Control.Feedback type="invalid">
                            Please provide a image URL
                        </Form.Control.Feedback>
                    </Form.Group>
                    <button className="w-100 py-2 custom-button" type="Register">
                        Add Product
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;