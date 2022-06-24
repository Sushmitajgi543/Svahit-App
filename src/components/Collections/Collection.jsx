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
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                                <Card.Body>
                                    <Card.Title>UNIFORM SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                                <Card.Body>
                                    <Card.Title>KNITTED SHOES</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardGroup>
                    </Container>
                    <Container className="mb-5  mt-5" id='Grid'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                                <Card.Body>
                                    <Card.Title>TERRY ANKLE SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1632944968588-3ec2870641ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                                <Card.Body>
                                    <Card.Title>KNITTED SHOES</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>
                    <Container className="mb-5  mt-5" id='Grid'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597843797221-e34b4a320b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                                <Card.Body>
                                    <Card.Title>UNIFORM SOCKS</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1597843797221-e34b4a320b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
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
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1597843797221-e34b4a320b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>UNIFORM SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1632944968588-3ec2870641ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>KNITTED SHOES</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>TERRY ANKLE SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
                <Container className="mb-5  mt-5" id='Grid'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>UNIFORM SOCKS</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
                            <Card.Body>
                                <Card.Title>KNITTED SHOES</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
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