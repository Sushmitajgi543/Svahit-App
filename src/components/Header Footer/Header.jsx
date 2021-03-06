import { gsap } from "gsap";
import {React,useRef,useEffect} from 'react';
import "../assets/Header/Header.scss";
import logo from "../assets/Image/blue-lOGO.png"
import { Nav,Container,Navbar ,Offcanvas,NavDropdown} from 'react-bootstrap';

export const Header=(props)=>{
  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);
 

  useEffect(() => {
      gsap.fromTo(q('.logo'),{duration:1,
          opacity: 0,  y: -90 },{opacity:1,y:10,delay:0.7})

      gsap.fromTo(q('.anchor'),{ duration: 0.4,y:-30,
          opacity: 0,ease:'bounce' },{stagger:.1,y:10,opacity:1})

    });
    
    return (
      <Navbar ref={boxRef} key="sm" sticky="top" expand="md" className="mb-3">
      <Container fluid >
        <Navbar.Brand href="/">
          
          <img className='logo' src={logo} alt="dbb" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header id="close" closeButton>
            {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
              Svahit
            </Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav id="menu"className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link id={props.home}className='anchor' href="/">Home</Nav.Link>
              <Nav.Link id={props.about}className='anchor' href="/about-us">About Us</Nav.Link>
              <Nav.Link id={props.collection} className='anchor' href="/collection">Collection</Nav.Link>
              <Nav.Link id={props.catalogue}className='anchor' href="/catalogue">Catalogue</Nav.Link>

              <Nav.Link className='anchor' href="/contact-us">Contact Us</Nav.Link>
              
              
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}