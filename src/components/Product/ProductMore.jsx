import React, { useContext } from 'react'
import productmoreStyles from './ProductMore.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductMore = ({ productMore }) => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { productID, setProductID } = useContext(ProductContext)

    console.log(productID);

    console.log(productMore);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Optional: for smooth scrolling animation
        });
    };

    return (
        <section className={productmoreStyles.productmorecontainer}>
            <Container fluid className='py-4'>
                <Row>
                    <Col>
                        <div className='text-center mb-4'>
                            <h2 className={`${productmoreStyles.productmoretitle} text-uppercase`}>You might also like</h2>
                        </div>
                        <div className="slider-container" id='newarrivalslider'>
                            <Slider {...settings}>
                                {productMore.map((item, index) =>
                                    <Link to='/shop/product' className='text-decoration-none'>
                                        <Card key={index} className='border-0' onClick={() => { setProductID(item._id); localStorage.setItem('productID', item._id); scrollToTop() }}>
                                            <Card.Body className='p-0'>
                                                <div className='mb-3'>
                                                    <Image src={item.image} fluid className={productmoreStyles.productimg} />
                                                </div>
                                                <Card.Title className='fw-semibold text-capitalize'>{item.title}</Card.Title>
                                                <div className='d-flex align-items-center pb-2'>
                                                    {[1, 2, 3, 4].map((_, index) => <div className='d-flex' key={index}><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.24494 0.255066L11.8641 5.89498L18.0374 6.64316L13.4829 10.877L14.679 16.9793L9.24494 13.9561L3.8109 16.9793L5.00697 10.877L0.452479 6.64316L6.62573 5.89498L9.24494 0.255066Z" fill="#FFC633" />
                                                    </svg>
                                                    </div>)}
                                                    <div className={`${productmoreStyles.ratingtext} ms-2 pt-1`}>{item.rating}/5</div>
                                                </div>
                                                <div className='d-flex align-items-center pb-4'>
                                                    <div>
                                                        <span className={`${productmoreStyles.sliderprice} me-2 fw-semibold`}>${item.discountedPrice}</span>
                                                    </div>
                                                    <div>
                                                        <span className={`${productmoreStyles.slideroldprice} me-2 fw-semibold`}>${item.oldPrice}</span>
                                                    </div>
                                                    <div className={productmoreStyles.sliderdiscountbg}>
                                                        <span className={productmoreStyles.sliderdiscounttext}>{100 - Math.round(item.discountedPrice / item.oldPrice * 100)}%</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                )}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductMore