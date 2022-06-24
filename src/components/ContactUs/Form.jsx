import React from "react";
import { Form, Button, Col, Row, Container, Card } from "react-bootstrap";
import './assets/ThirdSection.css'
const FormPage = () => {
  return (
    <>
      <Container id="form">
        <Form id="form1">
        <Form.Group className="mb-3 " as={Row} controlId="formBasicEmail">
            <Col sm="6">
            <Form.Control id="gd" type="text" placeholder="Enter First Name" />

            </Col>
            <Col sm="6">
            <Form.Control id="gd" type="text" placeholder="Enter Last Name" />

            </Col>
          </Form.Group>

          

          <Form.Group className="mb-3 " as={Row} controlId="formBasicEmail">
           
            <Col sm="6">
              <Form.Control id="gd" className="col-6" type="email" placeholder="Enter email" />
            </Col>
            <Col sm="6">
              <Form.Control id="gd" className="col-6" type="number" placeholder="Enter Contact Number" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3 " as={Row} controlId="formBasicEmail">
          
            <Col sm="12">
            <Form.Control id="gd" type="textarea" placeholder="Message" />
            </Col>
            
          </Form.Group>



          <Form.Group className="mb-3" >
            <Button style={{
              background: "rgb(22,79,156)",
              padding: "5px 10px",
              fontSize: "2rem", borderRadius: "10px", marginTop: "20px"
            }} type="submit">
              Send Message
            </Button>
          </Form.Group>

        </Form>

      </Container>
      <Card>
        <Card.Header>Contacts</Card.Header>
        <Card.Body>
          <Card.Title >Address
            No: 1-2, Nagar Bapa Industrial Estate,
            Near Gota talav, Gota, Ahmedabad - 382481

          </Card.Title>
          <Card.Text>
            Email
            business@svahit.in
          </Card.Text>
          <Card.Text>Phone
            Hitesh Momaya[M.D.] - +91 98250 12129</Card.Text>
          <Button style={{ background: "rgb(22,79,156)" }}>Mail us</Button>
        </Card.Body>
      </Card>

    </>

  );
};

export default FormPage;