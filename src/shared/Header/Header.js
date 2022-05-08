import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import ActiveLink from '../ActiveLink/ActiveLink';
import DarkMode from '../DarkMode/DarkMode';
import './Header.css'

const Header = ({ dark, setDark }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    const handleSignOut = () => {
        signOut(auth);
        console.log();
        localStorage.setItem('navigate', `${location.pathname}`)
    }
    return (
        <Navbar className="py-2 text-center" bg="primary" variant="dark" expand="lg" sticky="top" >
            <Container>
                <Navbar.Brand as={Link} to="/"><h2 className='me-3 title'>pharmabd</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={ActiveLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={ActiveLink} to="/blog">Blog</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={ActiveLink} to="/manageInventory">Manage Inventory</Nav.Link>
                                <Nav.Link as={ActiveLink} to="/addItems">Add Item</Nav.Link>
                                <Nav.Link as={ActiveLink} to="/myItems">My items</Nav.Link>
                            </>
                        }
                    </Nav>

                    <Nav className='ms-auto'>
                        {
                            user ? <Nav.Link onClick={handleSignOut}>
                                <Button variant="danger" className='px-4  w-100'>sign Out</Button>
                            </Nav.Link> :
                                <Nav.Link as={Link} to="/signIn">
                                    <Button variant="light" className='px-4  w-100'>sign in</Button>
                                </Nav.Link>
                        }
                    </Nav>
                    <DarkMode
                        dark={dark}
                        setDark={setDark}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;