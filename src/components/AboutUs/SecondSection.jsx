import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';
import '../assets/AboutUs/SecondSection.scss';

export const SecondSection = () => {
    return (
        <Container id='abt-second-section'>
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
                    <Figure >
                        <Figure.Image
                            width={471}
                            height={150}
                            alt="171x180"
                            src="https://images.unsplash.com/photo-1613228489368-75c0bad290ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        />
                    </Figure>
                </Container>
            </Row>

        </Container>
    )
}