import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo192.png" width="50" alt="img" />
            SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Головна</Nav.Link>
            <Nav.Link href="#features">Корзина</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
