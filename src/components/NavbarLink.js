import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const NavbarLink = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="/">React Toolkit</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link to="/products" as={Link}>Products</Nav.Link>
            </Nav>
            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default NavbarLink