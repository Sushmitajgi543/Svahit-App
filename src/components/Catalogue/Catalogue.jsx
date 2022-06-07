import React from 'react';
import {CImage} from '@coreui/react'
import { Header } from '../Header Footer/Header';
import Footer from '../Header Footer/Footer';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import './Catalogue.css'
export const Catalogue = () => {
    const downloadFile = () => {
        window.location.href = "http://svahit.in/includes/catalogue/Svahit-Presentation.pptx"
    }
    return (
        <>
            <Header />
            {/* <Container className='Catalogue-Container'>
                <Row>
                    <Col>
                        <h1 style={{ fontSize: "6rem" }}>
                            Catalogue
                        </h1>
                    </Col>
                </Row>
            </Container> */}

            <Container className='mb-5' id="Catalogue-Container">
            <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                        <h1 id="cat-heading" style={{ textAlign: "center", fontSize: "18rem" }}>
                            Catalogue

                        </h1>

                    </Col>
                </Row>
            </Container>

            <Container id='Catalogue-Quote'>
                <h1>
                We dive deep into our client’s needs and follow a structured process that helps them accomplish their strategic goals though design.
                </h1>
            </Container>
            <Container id='catimg'>
                <CImage
                
                height={740}
                width={1060}
                 src='https://images.unsplash.com/photo-1600693615301-8752ab9411f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                ></CImage>
            </Container>
            <Container id="nextContainer"style={{
                padding: '0px 60px',
            }}>
                <Row>
                    <Container
                        id='second'>
                        <h2 style={{
                            color: "#164F9C",
                        }} >SVAHIT E-Catalogue</h2>

                    </Container>

                </Row>
                <Row>
                    <Container>
                        <p>We offer an extensive range of Men’s & Ladies socks, knitted shoes, leggings, arm bands,
                            wrist bands and t-shirts to our valued clients.

                        </p>
                    </Container>
                </Row>

            </Container>
            <Container className='mb-5' id='catalogue'>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={150}
                        alt="171x180"
                        src="http://svahit.in/includes/catalogue/catalogue-img.png"
                    />
                </Figure>
                <Container id='btn'>
                    <h3>Latest Catalogue</h3>
                    <Button style={{ background: "rgb(22,79,156)" }} onClick={downloadFile}>Download</Button>

                </Container>
            </Container>
            <Footer />
        </>
    )
}