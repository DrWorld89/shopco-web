import React, { useState, useEffect, useContext } from 'react'
import productStyles from './Product.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { EmptyCartContext } from '../../context/EmptyCartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { CartContext } from '../../context/CartContext'
import { ProductSpecsContext } from '../../context/ProductSpecsContext'


const Product = ({ productID }) => {


    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    let currentPath = '';
    const crumbs = pathSegments.map((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === pathSegments.length - 1;

        return (
            <span key={currentPath}>
                {isLast ? (
                    <span>{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
                ) : (
                    <>
                        <Link to={currentPath} className='text-decoration-none text-muted'>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
                        <span className='mx-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z" fill="black" fill-opacity="0.6" />
                            </svg>
                        </span>
                    </>
                )}
            </span>
        );
    });

    const [result, setResult] = useState({})

    console.log(productID);

    const { productDetail, setProductDetail } = useContext(ProductDetailContext)

    const { addToCart } = useContext(CartContext);

    console.log(productDetail);

    const fetchData = async () => {
        try {
            if (productID !== null && productID !== undefined && productID !== '') {
                const storedData = localStorage.getItem(`product-${productID}`);
                if (storedData) {
                    setResult(JSON.parse(storedData));
                } else {
                    const response = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${productID}`)
                    const data = await response.json()
                    console.log(data)
                    setResult(data)
                    setProductDetail(data)
                    localStorage.setItem(`product-${productID}`, JSON.stringify(data));
                }
            }
        } catch (error) {
            console.error('Error:', error)
            localStorage.removeItem(`product-${productID}`);
        }
    }

    useEffect(() => {
        fetchData();
    }, [productID])

    // Optional: Clear local storage when component unmounts or productID changes
    useEffect(() => {
        return () => {
            localStorage.removeItem(`product-${productID}`);
        };
    }, [productID]);

    const thumbImages = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg',
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/16170/pexels-photo.jpg',
        },
        {
            id: 3,
            image: result.image,
        }

    ]

    const [prodImg, setProdImg] = useState("")

    const colorVariations = [
        {
            id: 1,
            color: '#4F4631',
            colorName: 'Brown'
        },
        {
            id: 2,
            color: '#314F4A',
            colorName: 'Green'
        },
        {
            id: 3,
            color: '#31344F',
            colorName: 'Blue',
        }
    ]

    const sizeVariations = [
        {
            id: 1,
            size: 'Small',
        },
        {
            id: 2,
            size: 'Medium',
        },
        {
            id: 3,
            size: 'Large',
        },
        {
            id: 4,
            size: 'X-Large',
        },
    ]

    const [sizebtn, setSizeBtn] = useState(0)

    const [productQty, setProductQty] = useState(1)

    const [selectedThumb, setSelectedThumb] = useState('')

    const { emptyCart, setEmptyCart } = useContext(EmptyCartContext)

    console.log(emptyCart);

    const { productSpecs, setProductSpecs } = useContext(ProductSpecsContext)

    console.log(productSpecs)

    const updatedProduct = {
        ...result,
        colorOptions: colorVariations,
        sizeOptions: sizeVariations
    };

    console.log(updatedProduct)

    return (
        <section className={productStyles.productcontainer}>
            <Container fluid className='py-lg-5 py-3'>
                <Row>
                    <Col lg={12} className='border-top border-tertiary py-lg-4 pt-4'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb" style={{ fontSize: '14px' }}>
                                <li className="breadcrumb-item me-2">
                                    <Link to="/" className='text-decoration-none text-muted'>Home</Link>
                                </li>
                                <span className='me-2'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z" fill="black" fill-opacity="0.6" />
                                    </svg>
                                </span>
                                {crumbs.length > 0 && crumbs}
                            </ol>
                        </nav>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className='d-flex flex-lg-row flex-column'>
                            <div className={`${productStyles.prodthumbcon} d-flex flex-row flex-lg-column order-lg-1 order-2`}>
                                {thumbImages.map((item, index) =>
                                    <div key={index} onClick={() => { setProdImg(item.image); setSelectedThumb(index) }}>
                                        <Image src={item.image} fluid className={`${selectedThumb === index ? productStyles.selectedthumb : ''} rounded-4`} />
                                    </div>
                                )}
                            </div>
                            <div className='w-100 order-lg-2 order-1'>
                                <Image src={prodImg || result.image} fluid className={`${productStyles.productimg} rounded-4 ms-lg-3 mb-lg-0 mb-3`} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='ps-lg-4'>
                        <div>
                            <h2 className={`${productStyles.producttitle} text-uppercase`}>{result.title}</h2>
                        </div>
                        <div className='d-flex align-items-center pb-2'>
                            {[1, 2, 3, 4].map((_, index) => <div className='d-flex' key={index}><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.24494 0.255066L11.8641 5.89498L18.0374 6.64316L13.4829 10.877L14.679 16.9793L9.24494 13.9561L3.8109 16.9793L5.00697 10.877L0.452479 6.64316L6.62573 5.89498L9.24494 0.255066Z" fill="#FFC633" />
                            </svg>
                            </div>)}
                            <div className={`${productStyles.ratingtext} ms-2 pt-1`}>{result.rating}/5</div>
                        </div>
                        <div className='d-flex align-items-center pb-2'>
                            <div className='pt-2'>
                                <h2 className={`${productStyles.sliderprice} me-2 fw-semibold`}>${result.discountedPrice}</h2>
                            </div>
                            <div className='pt-2'>
                                <h2 className={`${productStyles.slideroldprice} me-2 fw-semibold`}>${result.oldPrice}</h2>
                            </div>
                            <div className={productStyles.sliderdiscountbg}>
                                <span className={productStyles.sliderdiscounttext}>{100 - Math.round(result.discountedPrice / result.oldPrice * 100)}%</span>
                            </div>
                        </div>
                        <div className='border-bottom border-tertiary'>
                            <p className={productStyles.productdesctext}>{result.description}</p>
                        </div>
                        <div className='py-4 border-bottom border-tertiary'>
                            <p className={productStyles.productdesctext}>Select Colors</p>
                            <div class={productStyles['color-picker']}>
                                {colorVariations.map((item, index) => <div key={index}>
                                    <input type="radio" id={item.color} name="color" value={item.color} onChange={() => setProductSpecs((prevSpec) => [...prevSpec, { color: item.colorName }])} />
                                    <label for={item.color} style={{ backgroundColor: item.color, border: '1px solid rgba(0,0,0,0.2)' }}></label>
                                </div>)}
                            </div>
                        </div>
                        <div className='py-4 border-bottom border-tertiary'>
                            <p className={productStyles.productdesctext}>Choose Size</p>
                            <div className={productStyles.sizebtncontainer}>
                                {sizeVariations.map((item, index) => <div key={index}>
                                    <button className={sizebtn === index ? productStyles.activesizebtn : productStyles.sizebtn} onClick={() => { setSizeBtn(index); setProductSpecs((prevSpec) => [...prevSpec, { size: item.size }]) }}>{item.size}</button>
                                </div>)}
                            </div>
                        </div>
                        <div className='py-4 d-flex'>
                            <div className='me-3'>
                                <button className={productStyles.qtybtn}>
                                    <svg onClick={() => { setProductQty(productQty > 1 ? productQty - 1 : productQty); setProductSpecs((prevSpec) => [...prevSpec, { quantity: productQty }]) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="black" />
                                    </svg>
                                    <span>{productQty}</span>
                                    <svg onClick={() => { setProductQty(productQty + 1); setProductSpecs((prevSpec) => [...prevSpec, { quantity: productQty }]) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button className={productStyles.addtocartbtn} onClick={() => { setEmptyCart(false); addToCart(productDetail) }}>Add to Cart</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Product