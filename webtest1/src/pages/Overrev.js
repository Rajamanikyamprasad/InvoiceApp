import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Overrev = () => {
	return (
		<div>
			    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link href="#">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#">Services</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
		</div>
	)
}

export default Overrev
