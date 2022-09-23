import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Signup</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Signin
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
