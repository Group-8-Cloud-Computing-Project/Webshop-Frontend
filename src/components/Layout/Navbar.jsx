import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Web Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        {/* <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
