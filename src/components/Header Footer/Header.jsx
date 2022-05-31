import React from 'react';
import "./Header.css"
import { Nav,Container,Navbar ,Offcanvas,NavDropdown} from 'react-bootstrap';

export const Header=()=>{
    return (
      <Navbar  key="xl" sticky="top" expand="false" className="mb-3">
      <Container fluid >
        <Navbar.Brand href="/">
          <img className='logo' src="http://svahit.in/includes/logo.png" alt="dbb" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
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

              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              
              {/* <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-xl`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}