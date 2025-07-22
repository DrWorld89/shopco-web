import React, { useContext } from 'react'
import cartStyles from './Cart.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbShoppingCartX } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { EmptyCartContext } from '../../context/EmptyCartContext';


const Cart = ({ emptyCart, productDetail, productSpecs }) => {

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
                        <Link to={currentPath}>{segment}</Link>
                        <span> / </span>
                    </>
                )}
            </span>
        );
    });

    console.log(productDetail);

    const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext)

    console.log(cart);

    const totalCost = cart.reduce((acc, product) => acc + (product.discountedPrice * product.quantity), 0);

    const { setEmptyCart } = useContext(EmptyCartContext)

    console.log(emptyCart)

    console.log(cart.length)

    const showEmptyCart = () => {
        cart.length === 0 ? setEmptyCart(true) : setEmptyCart(false)
    }

    return (
        <section className={cartStyles.cartcontainer}>
            <Container fluid className='py-4'>
                <Row>
                    {emptyCart && cart.length === 0 &&
                        <Col lg={12}>
                            <div className={`${cartStyles.emptycartcontainer} text-center position relative`}>
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <TbShoppingCartX size={50} color='#000' className='mb-2' />
                                    <p>Your shopping cart is empty</p>
                                    <Link to='/shop'>
                                        <button className={cartStyles.shopbtn}>Shop</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    }
                    {cart && cart.length > 0 ?
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
                        : ''}
                    {cart && cart.length > 0 ?
                        <Col lg={7}>
                            <div>
                                <h2 className={`${cartStyles.carttitle} text-uppercase`}>Your cart</h2>
                            </div>
                            <div>
                                <h2>Cart</h2>
                                {cart.map((product) => (
                                    <div key={product._id}>
                                        <p>{product.title} - ${product.discountedPrice} x {product.quantity}</p>
                                        <button onClick={() => updateQuantity(product._id, product.quantity + 1)}>
                                            +
                                        </button>
                                        {product.quantity}
                                        <button onClick={() => updateQuantity(product._id, product.quantity - 1)}>
                                            -
                                        </button>
                                        <button onClick={() => { removeFromCart(product._id); showEmptyCart() }}>Remove</button>
                                        {productSpecs.map((item, index) => <div key={index}>{item.quantity}{item.color}{item.size}</div>)}
                                    </div>
                                ))}
                                <p>Total: ${Math.round(totalCost)}</p>
                                <button onClick={() => { clearCart(); setEmptyCart(true) }}>Clear Cart</button>
                            </div>
                        </Col>
                        : ''}
                </Row>
            </Container>
        </section>
    )
}

export default Cart