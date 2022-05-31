import React from 'react';
import { Header } from '../Header Footer/Header';
import Footer from '../Header Footer/Footer';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import './Catalogue.css'
export  const Catalogue = () => {
    const downloadFile = () => {
        window.location.href = "http://svahit.in/includes/catalogue/Svahit-Presentation.pptx"
      }
    return (
        <>
            <Header />
            <Container className='Catalogue-Container'>
                <Row>
                    <Col>
                        <h1 style={{ fontSize: "6rem" }}>
                            Catalogue
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Container style={{
            padding: '0px 60px',
        }}>
            <Row>
                <Container
                    id='second'>
                    <h2 >SVAHIT E-Catalogue</h2>
                   
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
                    <Button  style={{background:"rgb(22,79,156)"}} onClick={downloadFile}>Download</Button>
       
                    </Container>
                    </Container>
            <Footer />
        </>
    )
}