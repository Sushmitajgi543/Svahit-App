import React, { Component } from 'react'
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header Footer/Header'
import '../assets/Collection/Collection.scss'
export const Collections = () => {
    const x = window.matchMedia("(max-width:439px)")
    return (
        <>
            <Header collection="true"></Header>
            <Container id="Collection-Container">
                <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                        <h1>
                            Product </h1>
                        <h1 className='h1'>Collections</h1>

                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    </Col>
                </Row>
            </Container>

            {x.matches ? (
                <>
                    <Container id='Grid'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/uniform-socks.jpg" />
                                <Card.Body>
                                    <Card.Title>UNIFORM SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/KNITTED-SHOES.jpg" />
                                <Card.Body>
                                    <Card.Title>KNITTED SHOES</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardGroup>
                    </Container>
                    <Container className="mb-5  mt-5" id='Grid'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/TERRY-ANKLE-SOCKS.jpg" />
                                <Card.Body>
                                    <Card.Title>TERRY ANKLE SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/crew-socks/CREW-SOCKS-1.jpg" />
                                <Card.Body>
                                    <Card.Title>KNITTED SHOES</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>
                    <Container className="mb-5  mt-5" id='Grid'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/crew-socks/CREW-SOCKS-2.jpg" />
                                <Card.Body>
                                    <Card.Title>UNIFORM SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="http://svahit.in/includes/products/crew-socks/CREW-SOCKS-1.jpg" />
                                <Card.Body>
                                    <Card.Title>KNITTED SHOES</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardGroup>
                    </Container>
                </>
            ) : (<>
                <Container id='Grid'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/uniform-socks.jpg" />
                            <Card.Body>
                                <Card.Title>UNIFORM SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/KNITTED-SHOES.jpg" />
                            <Card.Body>
                                <Card.Title>KNITTED SHOES</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/TERRY-ANKLE-SOCKS.jpg" />
                            <Card.Body>
                                <Card.Title>TERRY ANKLE SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
                <Container className="mb-5  mt-5" id='Grid'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/crew-socks/CREW-SOCKS-2.jpg" />
                            <Card.Body>
                                <Card.Title>UNIFORM SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/crew-socks/CREW-SOCKS-1.jpg" />
                            <Card.Body>
                                <Card.Title>KNITTED SHOES</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="http://svahit.in/includes/products/TERRY-ANKLE-SOCKS/ankle-socks-1.jpg" />
                            <Card.Body>
                                <Card.Title>TERRY ANKLE SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
            )}



            <Footer />
        </>
    )
}