import React, { Component } from 'react'
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap'
import Footer from '../Header Footer/Footer'
import { Header } from '../Header Footer/Header'
import './Collection.css'
export const Collections = () => {
    return (
        <>
            <Header></Header>
            <Container id="Collection-Container">
                <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                        <h1>
                            Product Collections
                        </h1>
                    </Col>
                </Row>
            </Container>
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
            <Footer />
        </>
    )
}