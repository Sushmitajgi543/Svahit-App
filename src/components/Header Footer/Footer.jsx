import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Box, Container, Row, Column, FooterLink, Heading, Span, Ul, Li, A } from "./FooterStyles";
import { Form } from "react-bootstrap";
import "./Footer.css"
const Footer = () => {
	const eleRef = useRef();
	const t1 = useRef();
	const q = gsap.utils.selector(eleRef);
	useEffect(() => {
		t1.current = gsap.timeline({
			scrollTrigger: {
				trigger: '.box',
				start: 'center bottom'
			}
		})
			.fromTo('.box h1',
				{ y: '100', opacity: 0 },
				{ y: 10, opacity: 1, ease: 'back.out(1.7)', delay: 1, duration: 0.5 }, "-=1")

			.fromTo('.box p',
				{ y: '90', opacity: 0 },
				{ stagger: .8, y: 10, opacity: 1, ease: 'back.out(1.7)', duration: 0.5 }, "-=0.1")
			.fromTo('span , form',
				{ y: '90', opacity: 0 },
				{ stagger: .2, y: 10, opacity: 1, ease: 'back.out(1.7)', duration: 1 }, "-=0.1");

	})
	return (
		<Box className='box'>

			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<p style={{ fontSize: "2.2rem", color: "white" }}>We offer an extensive range of Men’s &
							Ladies socks, knitted shoes, leggings,
							arm bands, wrist bands and t-shirts
							to our valued clients.</p>
						<hr style={{ color: "white" }} />

					</Column>
					<Column style={{ width: "35%" }}>
						<Heading>Get In Touch</Heading>
						<Form style={{ fontSize: "2rem", color: "white" }}>

							<Form.Group controlId="formBasicEmail">
								{/* <Form.Label>Name</Form.Label> */}
								<Form.Control type="text" placeholder="Enter Your Name" />

							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								{/* <Form.Label>Email address</Form.Label> */}
								<Form.Control type="email" placeholder="Enter email" />

							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								{/* <Form.Label>Message</Form.Label> */}
								<Form.Control type="text" placeholder="Message" />
							</Form.Group>
							<button
								style={{
									color: "white",
									backgroundColor: "black",
									padding: "2px 5px",
									marginTop:"10px"
								}}>Send</button>
							{/* <Button variant="primary" type="submit">Send</Button> */}
						</Form>

					</Column>


					<Column>
						<Heading>Location</Heading>

						<span style={{ fontSize: "2rem", color: "#fff" }}>
							Kottanpur, Uttar Pradesh, India
							<hr />
							<span >
								+91-1234567890
							</span>
						</span>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<div>

							<FooterLink href="#">
								<i className="fab fa-facebook-f">
									<span style={{ marginLeft: "10px" }}>
										Facebook
									</span>
								</i>
							</FooterLink>
							<FooterLink href="#">
								<i className="fab fa-instagram">
									<span style={{ marginLeft: "10px" }}>
										Instagram
									</span>
								</i>
							</FooterLink>
							<FooterLink href="#">
								<i className="fab fa-twitter">
									<span style={{ marginLeft: "10px" }}>
										Twitter
									</span>
								</i>
							</FooterLink>
							<FooterLink href="#">
								<i className="fab fa-youtube">
									<span style={{ marginLeft: "10px" }}>
										Youtube
									</span>
								</i>
							</FooterLink>
						</div>
						<br />
						<hr style={{ color: "#fff" }} />
					</Column>
				</Row>
				<Row>
					<Span>
						<Ul>
							<A href=""><Li> Home</Li></A>
							<A href=""><Li> About Us</Li></A>
							<A href=""><Li> Catalogue</Li></A>
							<A href=""><Li> Collections</Li></A>

							<A href=""><Li>Privacy and Policy </Li></A>
							<A href=""><Li>Terms and Conditions</Li>	</A>
						</Ul>
					</Span>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
