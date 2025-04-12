import { Link, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" id="nav" >
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="/display">Display</Nav.Link>
                        <Nav.Link as={Link} to="/update">Update</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            retertertret

            <hr size="4" color="red" /><br /><br />

            <Outlet />

            <hr size="4" color="red" /><br /><br />
            All Company Ride Reserve @ 2025
        </>
    );
}

export default Layout;
