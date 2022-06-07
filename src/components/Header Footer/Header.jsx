import { gsap } from "gsap";
import {React,useRef,useEffect} from 'react';
import "./Header.css"
import { Nav,Container,Navbar ,Offcanvas,NavDropdown} from 'react-bootstrap';

export const Header=()=>{
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
          <img className='logo' src="http://svahit.in/includes/logo.png" alt="dbb" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
              Svahit
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav id="menu"className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='anchor' href="/">Home</Nav.Link>
              <Nav.Link className='anchor' href="/about-us">About Us</Nav.Link>
              <Nav.Link className='anchor' href="/collection">Collection</Nav.Link>
              <Nav.Link className='anchor' href="/catalogue">Catalogue</Nav.Link>

              <Nav.Link className='anchor' href="/contact-us">Contact Us</Nav.Link>
              
              
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}