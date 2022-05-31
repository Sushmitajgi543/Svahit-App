import React from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import "./assets/ThirdContainer.css"
export const ThirdContainer = () => {
    return (
        <Container className='bhg'>
            <Row className='main'>
                <Container className='para-container'>
                    <Row>
                        <Col className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Soluta corrupti alias eos sed, aliquam maiores repudiandae dicta, molestias
                            aliquid quas </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col>Lorem ipsum dolor sit amet, consect
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore </Col>
                        <Col>Duis aute irure dolor in reprehen
                            derit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.</Col>
                        <Col></Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col><Button style={{background:"rgb(22,79,156)"}}>Button</Button></Col>
                        
                    </Row>

                </Container>
            </Row>
        </Container>
    )
}