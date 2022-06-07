import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';
import './assets/SecondSection.css';

export const SecondSection = () => {
    return (
        <Container style={{
            padding: '0px 60px',
           

        }}>
            <Row>
                <Container
                    id='second'>
                    <h2 >SVAHIT KOTTEX PVT LTD</h2>
                    <p>
                        We offer an extensive range of Men’s & Ladies socks, knitted shoes, leggings, arm bands, wrist bands and t-shirts to our valued clients. The offered range is fabricated using optimum quality fabric and advanced technology in accordance with the international standards.
</p><p>
                        These are tested on various parameters by our quality controllers in order to deliver flawless products to clients. We promise better design, softness and sweat absorbing capability.
</p><p>
                        Available in different colors, designs and sizes, these can also be customized as per the various requirements of clients. Meeting our customers requirement & satisfaction of the end user is our prime focus.
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
                            src="http://svahit.in/includes/about-img.jpg"
                        />
                    </Figure>
                </Container>
            </Row>

        </Container>
    )
}