import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Row, Column, FooterLink, Heading, Ul, Li, A, P } from "./FooterStyles";
import reddot from '../assets/Image/dot-pattern.png';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import "../assets/Footer/index.scss"
import logo from "../assets/Image/logo.png";
export const Footer = () => {

    return (
        <div className="footer">
            <Container>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={logo} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    </div>

                    <div className="footer-content-right">
                        <img src={reddot} alt="" />
                    </div>
                </div>
                <hr className='hr' style={{width:"100%",marginTop:"-20px", marginBottom:"20px"}}/>

                <div className="footer-link">
                 
                        <Row>

                            <div className='columnDiv'>
                                <Column>
                                    <Heading>LINKS</Heading>
                                    <Ul>
                                        <A href=""><Li> Home</Li></A>
                                        <A href=""><Li> About Us</Li></A>
                                        <A href=""><Li> Products</Li></A>
                                        <A href=""><Li> Contact Us</Li></A>
                                    </Ul>
                                </Column>
                                <hr />
                                <Column>

                                    <Heading>SOCIAL</Heading>
                                    <div className='social'>
                                    <FooterLink href="#">
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"
                                            icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)"
                                            url="https://some-website.com/my-social-media-url" size="30" />
                                    </FooterLink>
                                    <FooterLink href="#">
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"
                                            icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)"
                                            url="https://some-website.com/my-social-media-url" size="30" />
                                    </FooterLink>
                                    <FooterLink href="#">
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"
                                            icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)"
                                            url="https://some-website.com/my-social-media-url" size="30" />
                                    </FooterLink>
                                    <FooterLink href="#">
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"
                                            icon="whatsapp" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,0)"
                                            url="https://some-website.com/my-social-media-url" size="30" />
                                    </FooterLink>

                                    </div>
                                    
                                </Column>



                            </div>
                            <div className='columnDiv second'>
                                <Column >
                                    <Heading>CONTACT</Heading>
                                    <div>
                                    <span>+ 91 9723812711</span>
                                    <span>+ 91 9723812711</span>
                                    </div>
                                    
                                </Column>
                                <hr />
                                <Column >
                                    <Heading>SUPPORT</Heading>
                                    <Ul>
                                        <A href=""><Li>Privacy Policy </Li></A>
                                        <A href=""><Li>Terms & Conditions</Li>	</A>
                                    </Ul>

                                </Column>

                            </div>






                        </Row>

                

                </div>
                <hr className='hr'  />
                <div className="footer-copyright">
                    <p>Copyright @2022 By Svahit Private Limited</p>
                    <p>Web Design By LOGION SOLUTIONS</p>

                </div>

            </Container>
        </div>
    )
}
