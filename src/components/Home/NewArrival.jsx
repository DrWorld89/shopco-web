import React from 'react'
import newarrivalStyles from './NewArrival.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import newarrivalimg1 from '../../assets/images/newarrivalimg1.png'
import newarrivalimg2 from '../../assets/images/newarrivalimg2.png'
import newarrivalimg3 from '../../assets/images/newarrivalimg3.png'
import newarrivalimg4 from '../../assets/images/newarrivalimg4.png'
import Button from 'react-bootstrap/Button'

const NewArrival = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
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






    return (
        <section className={newarrivalStyles.newarrivalcontainer}>
            <Container fluid className='py-5'>
                <Row>
                    <Col>
                        <div className='text-center mb-5'>
                            <h2 className={newarrivalStyles.newarrivaltitle}>NEW ARRIVALS</h2>
                        </div>
                        <div className="slider-container" id='newarrivalslider'>
                            <Slider {...settings}>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg1} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>T-shirt With Tape Details</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold`}>$120</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg2} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Skinny Fit Jeans</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold d-flex`}>$240
                                            <span className={`${newarrivalStyles.slideroldprice} text-decoration-line-through px-2`}>$260</span>
                                            <span className={newarrivalStyles.sliderdiscountbg}><span className={newarrivalStyles.sliderdiscounttext}>-20%</span></span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg3} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Checkered Shirt</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold`}>$180</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg4} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Sleeve Striped T-shirt</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold d-flex`}>$240
                                            <span className={`${newarrivalStyles.slideroldprice} text-decoration-line-through px-2`}>$160</span>
                                            <span className={newarrivalStyles.sliderdiscountbg}><span className={newarrivalStyles.sliderdiscounttext}>-30%</span></span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg1} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>T-shirt With Tape Details</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold`}>$120</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg2} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Skinny Fit Jeans</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold d-flex`}>$240
                                            <span className={`${newarrivalStyles.slideroldprice} text-decoration-line-through px-2`}>$260</span>
                                            <span className={newarrivalStyles.sliderdiscountbg}><span className={newarrivalStyles.sliderdiscounttext}>-20%</span></span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg3} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Checkered Shirt</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold`}>$180</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={newarrivalStyles.slidercard}>
                                        <Image src={newarrivalimg4} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${newarrivalStyles.slidercardtitle} fw-bold m-0 mb-1`}>Sleeve Striped T-shirt</p>
                                        <span className={`${newarrivalStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${newarrivalStyles.sliderprice} fw-semibold d-flex`}>$240
                                            <span className={`${newarrivalStyles.slideroldprice} text-decoration-line-through px-2`}>$160</span>
                                            <span className={newarrivalStyles.sliderdiscountbg}><span className={newarrivalStyles.sliderdiscounttext}>-30%</span></span>
                                        </h5>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className='text-center py-5'>
                            <Button variant="outline-dark" className={newarrivalStyles.viewbtn}>View All</Button>
                        </div>
                        <svg width="1240" height="1" viewBox="0 0 1240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="-4.37114e-08" y1="0.500122" x2="1240" y2="0.500014" stroke="black" stroke-opacity="0.1" />
                        </svg>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewArrival