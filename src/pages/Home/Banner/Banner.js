import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typical from 'react-typical'
import './Banner.css'

const Banner = ({ dark }) => {
    return (
        <section>
            <Carousel fade className='carousel d-flex h-100 justify-content-center align-items-center'>
                <Carousel.Item className='d-block carousel-item w-100' style={{ background: 'linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("https://i.ibb.co/tKFD5PS/img1.jpg")' }}>
                    <img />
                    <Carousel.Caption className={`carousel-detail d-flex h-100 justify-content-center align-items-center`}>
                        <div className='text-dark'>
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
                            <span className='fs-4 mb-5'>
                                <Typical
                                    wrapper='p'
                                    loop={1}
                                    steps={[
                                        'We are one of the best pharmacy in the world. We collect medicine form all over wold. We will provide you with the best medicine for your health.',
                                        2000,
                                    ]}
                                /></span>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='d-block carousel-item w-100' style={{ background: `linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("https://i.ibb.co/Kxy2Q6X/img2.jpg")` }}>
                    <img />

                    <Carousel.Caption className={`${dark && 'text-light'}text-dark carousel-detail d-flex h-100 justify-content-center align-items-center`}>
                        <div className='text-dark'>
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
                            <span className='fs-4 mb-5'>
                                <Typical
                                    wrapper='p'
                                    loop={1}
                                    steps={[
                                        'We have professional software developer who are working day and night to develope our management.',
                                        3000,
                                    ]}
                                />
                            </span>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='d-block carousel-item w-100' style={{ background: 'linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5)), url("https://i.ibb.co/fdJbR5N/img3.png")' }}>
                    <img />

                    <Carousel.Caption className={`${dark && 'text-light'}text-dark carousel-detail d-flex h-100 justify-content-center align-items-center`}>
                        <div className='text-dark'>
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
                            <span>
                                <Typical
                                    className='fs-4 mb-5'
                                    loop={1}
                                    wrapper="p"
                                    steps={[
                                        'We help other foundation by helping there management and delivering them products in time.',
                                        3000,
                                    ]}
                                />

                            </span>
                            <a href="#items" className="custom-button py-3 px-5 text-decoration-none">Check Our Management</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;