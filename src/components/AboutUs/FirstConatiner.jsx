import React from 'react';
import "../assets/AboutUs/FirstContainer.scss"
import { Container, Row, Col } from 'react-bootstrap';
export const FirstConatiner = () => {
    return (
        <>
            <Container className='aboutus-Container' >
                <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                        <h1 id="abt-heading" style={{ fontWeight: "300", textAlign: "center",  }}>
                            About Us
                        </h1>
                    </Col>
                </Row>
                <h1 id='h1'>Our experience in design spans geographies and cultures.</h1>
            </Container></>
    )
}