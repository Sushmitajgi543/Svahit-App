import React from 'react';
import { CImage } from '@coreui/react'
import { Header } from '../Header Footer/Header';
import { CContainer } from '@coreui/react'

import { Footer } from '../Footer/Footer';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import '../assets/Catalogue/Catalogue.scss';
export const Catalogue = () => {
    const downloadFile = () => {
        window.location.href = "http://svahit.in/includes/catalogue/Svahit-Presentation.pptx"
    }
    return (
        <>
            <Header catalogue="true"/>


            <Container className='mb-5' id="Catalogue-Container">
                <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                        <h1 id="cat-heading" style={{ textAlign: "center"}}>
                            Catalogue

                        </h1>

                    </Col>
                </Row>
            </Container>


            <Container id='Catalogue-Quote'>
                <h1>
                    We dive deep into our client’s needs and follow a <br/>structured process that helps them accompli design.
                </h1>
            </Container>
            <Container id='catimg'>
                <CImage
                    src='https://images.unsplash.com/photo-1600693615301-8752ab9411f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                ></CImage>
            </Container>
            <Container>
            <Row>
                    <CContainer md id="para-container">

                        <h2 className='para'>We offer an extensive range of Men’s & Ladies socks, knitted shoes, leggings, arm bands,
                            wrist bands and t-shirts to our valued clients.</h2>


                    </CContainer>
                    <CContainer id='para-button'>

                        <span className='para'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </span>
                        <span className='para'>Duis aute irure dolor in reprehen
                            derit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.</span>



                    </CContainer>
                </Row>
            </Container>
            
            <CContainer id='para-button1'>
                <Button className='btn' id='button' >
                    DOWNLOAD<span> &darr;</span>
                </Button>
            </CContainer>

            <Footer />
        </>
    )
}