import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';


export const SixthConatiner = () => {
    return (
        <Container style={{ height: "100Vh" ,padding:"0px 90px"}} >
            <Row>
                <Container
                    style={{
                        display: "flex",marginTop:"35%"
                    }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </Container>

            </Row>
            <Row>
                <Container>
                    <Figure>
                        <Figure.Image
                            width={471}
                            height={150}
                            alt="171x180"
                            src="http://svahit.in/includes/products/T-SHIRTS.jpg"
                        />
                    </Figure>
                </Container>
            </Row>

        </Container>
    )
}