import React, { useState, useEffect } from 'react'
import productStyles from './Product.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';

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
                        <span className='mx-2'>  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z" fill="black" fill-opacity="0.6" />
                        </svg> </span>
                    </>
                )}
            </span>
        );
    });

    const [result, setResult] = useState({})

    console.log(productID);


    const fetchData = async () => {
        try {
            if (productID !== null && productID !== undefined && productID !== '') {
                const response = await fetch(`https://fakestoreapiserver.reactbd.org/api/products/${productID}`)
                const data = await response.json()
                console.log(data)
                setResult(data)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [productID])



    return (
        <section className={productStyles.productcontainer}>
            <Container fluid className='py-lg-5 py-3'>
                <Row>
                    <Col lg={12} className='border-top border-tertiary py-lg-4 py-3'>
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
                    <div>
                        {result.title}
                        {result.image}
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Product