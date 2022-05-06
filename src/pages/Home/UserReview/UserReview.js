import React from 'react';
// import { Row, Carousel } from 'react-bootstrap'
import Review from './Review/Review'
import Slider from "react-slick";
import './UserReview.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Row } from 'react-bootstrap';


const UserReview = ({ dark }) => {
    const reviews = [
        { id: 1, img: 'https://i.ibb.co/DbQbc0p/user1.jpg', name: 'Mr. Kan', description: 'This is really nice inventory management website. It keeps counts of all the product and safely deliver the products to them. It saves a lot of time.' },
        { id: 2, img: 'https://i.ibb.co/fNhHPBS/user2.jpg', name: 'Ms. Kamal', description: 'Medicine is a important Item. It has to be managed properly. I think this website does the right thing for managing there products. It keeps count of its products.' },
        { id: 3, img: 'https://i.ibb.co/PCwP1Q1/user3.jpg', name: 'Mr. Salman', description: 'There are many inventory management websites but no website is dedicated to managing there medicine stock. This website Does the right thing.' },
        { id: 4, img: 'https://i.ibb.co/5BnyBjB/user4.jpg', name: 'Ms. Salina', description: 'There are many inventory management websites but no website is dedicated to managing there medicine stock. This website Does the right thing.' },
        { id: 5, img: 'https://i.ibb.co/2NZx4Rg/user5.jpg', name: 'Dr. Rokea', description: 'It is so hard to keep management of my medicine. So it is hard to by many kinds of medicine at a time. It website helped me a lot.' },
    ]

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BsFillArrowRightCircleFill size='30' />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <BsFillArrowLeftCircleFill size='30' />
            </div>
        );
    };

    const settings = {
        infinite: true,
        // lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section className='container my-5 overflow-hidden'>
            <h1 className='mb-5 sectionTitle'>See what Other Say _________________________</h1>
            <Row>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            name={review.name}
                            description={review.description}
                            img={review.img}
                            dark={dark}
                        />)
                    }
                </Slider>
            </Row>
        </section>
    );
};

export default UserReview;