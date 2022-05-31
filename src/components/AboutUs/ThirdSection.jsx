import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';
import './assets/ThirdSection.css';

export const ThirdSection = () => {
    return (
        <Container  style={{
            padding: '0px 60px',
        }} >
            <Row>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={150}
                            alt="171x180"
                            src="http://svahit.in/includes/about/vision.jpg"
                        />
                    </Figure>
                </Container>
            </Row>
            <Row>
                <Container
                    id='third'>
                    <h2 >VISION</h2>
                    <p>
                    As a socially responsible corporate, Svahit will scale newer heights of infinite opportunities to achieve customer delight while fostering an environment of partnership, trust and commitment. </p>
                </Container>

            </Row>
            

        </Container>
    )
}