import React from 'react'
import dressstyleStyles from './DressStyle.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const DressStyle = () => {
    return (
        <section className={dressstyleStyles.dressstylecontainer}>
            <Container fluid className='p-lg-5 p-md-5'>
                <div className='text-center mb-5 pt-lg-3 pt-5'>
                    <h2 className={`${dressstyleStyles.dressstyletitle} text-uppercase`}>BROWSE BY dress STYLE</h2>
                </div>
                <Row>
                    <Col lg={5} md={5} className='mb-3'>
                        <Link to='/shop' className='text-decoration-none'>
                            <Card className={dressstyleStyles.dressstylecard1}>
                                <Card.Body>
                                    <Card.Title className={dressstyleStyles.dressstylecardtitle}>Casual</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={7} md={7} className='mb-3'>
                        <Link to='/shop' className='text-decoration-none'>
                            <Card className={dressstyleStyles.dressstylecard2}>
                                <Card.Body>
                                    <Card.Title className={dressstyleStyles.dressstylecardtitle}>Formal</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={7} md={7} className='mb-3'>
                        <Link to='/shop' className='text-decoration-none'>
                            <Card className={dressstyleStyles.dressstylecard3}>
                                <Card.Body>
                                    <Card.Title className={dressstyleStyles.dressstylecardtitle}>Party</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={5} md={5} className='mb-3'>
                        <Link to='/shop' className='text-decoration-none'>
                            <Card className={dressstyleStyles.dressstylecard4}>
                                <Card.Body>
                                    <Card.Title className={dressstyleStyles.dressstylecardtitle}>Gym</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DressStyle