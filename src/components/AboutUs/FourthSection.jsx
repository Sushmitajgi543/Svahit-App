import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';
import '../assets/AboutUs/ThirdSection.scss';


export const FourthSection = () => {
    return (
        <Container className='mb-5' id='fouthContainer'>
            <Row>
                <Container
                    id='fourth'>
                    <h2 >MISSION</h2>
                    <p>
                    As a socially responsible corporate, Svahit will scale newer heights of infinite opportunities to achieve customer delight while fostering an environment of partnership, trust and commitment. </p>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={150}
                            alt="171x180"
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxtaXNzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        />
                    </Figure>
                </Container>
            </Row>
        </Container>
    )
}