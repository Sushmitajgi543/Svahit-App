import React from "react";
import { Form, Button, Col, Row, Container, Card } from "react-bootstrap";
import './assets/ThirdSection.css'
const FormPage = () => {
  return (
    <Container id="form">
      <Form>
        <h2 style={{
          color: "#164F9C",fontSize:"6rem"
        }}>Write Us Here...</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control id="gd" type="text" placeholder="Enter Name" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id="gd" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control id="gd" type="textarea" placeholder="Message" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Button style={{ background: "rgb(22,79,156)" }} type="submit">
            Send Message
          </Button>
        </Form.Group>

      </Form>
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
    </Container>

  );
};

export default FormPage;