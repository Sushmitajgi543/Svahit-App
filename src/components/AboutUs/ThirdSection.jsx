import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';
import '../assets/AboutUs/ThirdSection.scss';

export const ThirdSection = () => {
    return (
        <Container id='last' >
            <Row>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={150}
                            alt="171x180"
                            src="https://images.unsplash.com/photo-1487081968683-2a6664e725ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
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