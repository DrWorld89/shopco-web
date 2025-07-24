import React from 'react'
import topsellingStyles from './TopSelling.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import topsellingimg1 from '../../assets/images/topsellingimg1.png'
import topsellingimg2 from '../../assets/images/topsellingimg2.png'
import topsellingimg3 from '../../assets/images/topsellingimg3.png'
import topsellingimg4 from '../../assets/images/topsellingimg4.png'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const TopSelling = () => {

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
        <section className={topsellingStyles.newarrivalcontainer}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='text-center mb-5'>
                            <h2 className={topsellingStyles.newarrivaltitle}>top selling</h2>
                        </div>
                        <div className="slider-container" id='newarrivalslider'>
                            <Slider {...settings}>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg1} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Vertical Striped Shirt</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="114" height="19" viewBox="0 0 114 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255127L83.2698 5.89504L89.4431 6.64322L84.8886 10.8771L86.0846 16.9794L80.6506 13.9561L75.2166 16.9794L76.4126 10.8771L71.8581 6.64322L78.0314 5.89504L80.6506 0.255127Z" fill="#FFC633" />
                                            <path d="M104.452 0.255127L107.072 5.89504L113.245 6.64322L108.69 10.8771L109.887 16.9794L104.452 13.9561L99.0184 16.9794L100.215 10.8771L95.66 6.64322L101.833 5.89504L104.452 0.255127Z" fill="#FFC633" />
                                        </svg>
                                            5.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} d-flex fw-semibold`}>$186
                                            <span className={`${topsellingStyles.slideroldprice} text-decoration-line-through px-2`}>$232</span>
                                            <span className={topsellingStyles.sliderdiscountbg}><span className={topsellingStyles.sliderdiscounttext}>-20%</span></span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg2} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Courage Graphic T-shirt</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="90" height="19" viewBox="0 0 90 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255127L83.2698 5.89504L89.443 6.64322L84.8885 10.8771L86.0846 16.9794L80.6506 13.9561L75.2165 16.9794L76.4126 10.8771L71.8581 6.64322L78.0314 5.89504L80.6506 0.255127Z" fill="#FFC633" />
                                        </svg>
                                            4.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$145</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg3} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Loose Fit Bermuda Shorts</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="67" height="19" viewBox="0 0 67 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                        </svg>

                                            3.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$80</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg4} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Faded Skinny Jeans</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$210</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg1} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Vertical Striped Shirt</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="114" height="19" viewBox="0 0 114 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255127L83.2698 5.89504L89.4431 6.64322L84.8886 10.8771L86.0846 16.9794L80.6506 13.9561L75.2166 16.9794L76.4126 10.8771L71.8581 6.64322L78.0314 5.89504L80.6506 0.255127Z" fill="#FFC633" />
                                            <path d="M104.452 0.255127L107.072 5.89504L113.245 6.64322L108.69 10.8771L109.887 16.9794L104.452 13.9561L99.0184 16.9794L100.215 10.8771L95.66 6.64322L101.833 5.89504L104.452 0.255127Z" fill="#FFC633" />
                                        </svg>
                                            5.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} d-flex fw-semibold`}>$186
                                            <span className={`${topsellingStyles.slideroldprice} text-decoration-line-through px-2`}>$232</span>
                                            <span className={topsellingStyles.sliderdiscountbg}><span className={topsellingStyles.sliderdiscounttext}>-20%</span></span>
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg2} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Courage Graphic T-shirt</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="90" height="19" viewBox="0 0 90 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255127L83.2698 5.89504L89.443 6.64322L84.8885 10.8771L86.0846 16.9794L80.6506 13.9561L75.2165 16.9794L76.4126 10.8771L71.8581 6.64322L78.0314 5.89504L80.6506 0.255127Z" fill="#FFC633" />
                                        </svg>
                                            4.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$145</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg3} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Loose Fit Bermuda Shorts</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-flex align-items-center`}><svg className='me-2' width="67" height="19" viewBox="0 0 67 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633" />
                                        </svg>

                                            3.0/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$80</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={topsellingStyles.slidercard}>
                                        <Image src={topsellingimg4} fluid />
                                    </div>
                                    <div className='pt-3'>
                                        <p className={`${topsellingStyles.slidercardtitle} fw-bold m-0 mb-1`}>Faded Skinny Jeans</p>
                                        <span className={`${topsellingStyles.sliderratingtext} mb-2 d-block`}><svg className='me-2' width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633" />
                                            <path d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z" fill="#FFC633" />
                                            <path d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z" fill="#FFC633" />
                                            <path d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z" fill="#FFC633" />
                                            <path d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z" fill="#FFC633" />
                                        </svg>
                                            4.5/5
                                        </span>
                                        <h5 className={`${topsellingStyles.sliderprice} fw-semibold`}>$210</h5>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                        <div className='text-center py-5'>
                            <Link to='/shop' className='text-decoration-none'><Button variant="outline-dark" className={topsellingStyles.viewbtn}>View All</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TopSelling