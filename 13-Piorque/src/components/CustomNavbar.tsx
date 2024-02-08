import { Navbar, Container, Nav } from "react-bootstrap";

// CustomNavbar Component
// This component represents the custom navigation bar for the application.
// It provides navigation links to different sections of the application.

const CustomNavbar = () => {
  
  // Get the current path to determine active navigation link
  const currentPath = window.location.pathname;

  return (

    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">

      <Container>

        {/* Brand/logo */}
        <Navbar.Brand href="Home">13 - Piorque</Navbar.Brand>

        {/* Toggle button for mobile navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* Home link */}
            <Nav.Link href="Home" className={currentPath === '/' ? 'active' : ''}>Home</Nav.Link>
            {/* Hobbies link */}
            <Nav.Link href="Hobbies" className={currentPath === '/Hobbies'  ? 'active' : ''}>Hobbies</Nav.Link>
            {/* Calculator link */}
            <Nav.Link href="Calculator" className={currentPath === '/Calculator'? 'active' : ''}>Calculator</Nav.Link>
            {/* JSON link */}
            <Nav.Link href="JSON" className={currentPath === '/JSON' ? 'active' : ''}>JSON</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
