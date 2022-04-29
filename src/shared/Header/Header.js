import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <Navbar className="py-2 text-center" bg="primary" variant="dark" expand="lg" fixed="sticky">
            <Container>
                <Navbar.Brand as={Link} to="/"><h2 className='me-3'>pharmadb</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={ActiveLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={ActiveLink} to="/link1">Manage Items</Nav.Link>
                        <Nav.Link as={ActiveLink} to="/link2">Add Item</Nav.Link>
                        <Nav.Link as={ActiveLink} to="/link3">My items</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/signIn">
                            <Button variant="light" className='px-4 rounded-pill fw-bold w-100'>sign in</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/link">
                            <Button variant="danger" className='px-4 rounded-pill fw-bold w-100'>sign Out</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;