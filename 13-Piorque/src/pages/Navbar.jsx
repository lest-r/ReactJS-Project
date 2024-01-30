// Navbar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavCss.css';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
