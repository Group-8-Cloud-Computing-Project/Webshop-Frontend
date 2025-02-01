import React from "react";
import { useAppState } from "../../context/context";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import CartModal from "../Pages/CartModal";

const AppNavbar = () => {
  const {
    toggleButton, SetToggleButton, cart, setCart, totalItems
  } = useAppState();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Web Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => SetToggleButton(true)}>
                <FaShoppingCart style={{ fontSize: "36px" }} /> {Number(totalItems)}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartModal
        show={toggleButton}
        handleClose={() => SetToggleButton(false)}
        cartItems={cart}
        setCart={setCart}
        variant="primary"
      />
    </>
  );
};

export default AppNavbar;
