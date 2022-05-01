import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typical from 'react-typical'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade className='carousel d-flex h-100 justify-content-center align-items-center'>
                <Carousel.Item className='carousel-item w-100'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tKFD5PS/img1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark carousel-detail d-flex h-100 justify-content-center align-items-center'>
                        <div>
                            <h1 className='fs-1 fw-bold'>We Service
                                <br />
                                <Typical
                                    steps={[
                                        'All Kinds of medicine',
                                        3000,
                                        'All Kinds of healthCare',
                                        3000,
                                        'Product management',
                                        3000
                                    ]}
                                    loop={Infinity}
                                /></h1>
                            <p className='fs-4 mb-5'>
                                <Typical
                                    loop={1}
                                    steps={[
                                        'We are one of the best pharmacy in the world. We collect medicine form all over wold. We will provide you with the best medicine for your health.',
                                        2000,
                                    ]}
                                /></p>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item w-100'>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/Kxy2Q6X/img2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark carousel-detail d-flex h-100 justify-content-center align-items-center'>
                        <div>
                            <h1 className='fs-1 fw-bold'>We have The best
                                <br />
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'management on our medicine!',
                                        3000,
                                        'management on our products!',
                                        3000,
                                        'management on our storage!',
                                        3000
                                    ]}
                                /></h1>
                            <p className='fs-4 mb-5'>
                                <Typical
                                    loop={1}
                                    steps={[
                                        'We have professional software developer who are working day and night to develope our management.',
                                        3000,
                                    ]}
                                />
                            </p>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item w-100' >
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fdJbR5N/img3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark carousel-detail d-flex h-100 justify-content-center align-items-center'>
                        <div>
                            <h1 className='fs-1 fw-bold'>Unlock your potential
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Buy joining Us!',
                                        3000,
                                        'Buy investing!',
                                        3000,
                                        'Buy using our management software!',
                                        3000
                                    ]}
                                />
                            </h1>
                            <p className='fs-4 mb-5'>We help other foundation by helping there management.</p>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;