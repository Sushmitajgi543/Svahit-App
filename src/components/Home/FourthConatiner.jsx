import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';


export const FourthContainer = () => {
    return (
        <Container style={{padding:"0px 90px"}}>
            <Row>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={380}
                            alt="171x180"
                            src="http://svahit.in/includes/products/loafers-socks.jpg"
                        />

                    </Figure>
                </Container>

            </Row>
            <Row>
                <Container style={{marginTop:"100px"}}>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={380}
                            alt="171x180"
                            src="http://svahit.in/includes/products/T-SHIRTS.jpg"
                        />

                    </Figure>
                </Container>
            </Row>

        </Container>
    )
}