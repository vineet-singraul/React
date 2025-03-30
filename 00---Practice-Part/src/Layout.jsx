




import { Link, Outlet, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    const location = useLocation(); 

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home" style={{ color: location.pathname === "/home" ? "red" : "white" }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="insert" style={{ color: location.pathname === "/insert" ? "red" : "white" }}>Insert</Nav.Link>
                        <Nav.Link as={Link} to="display" style={{ color: location.pathname === "/display" ? "red" : "white" }}>Display</Nav.Link>
                        <Nav.Link as={Link} to="search" style={{ color: location.pathname === "/search" ? "red" : "white" }}>Search</Nav.Link>
                        <Nav.Link as={Link} to="update" style={{ color: location.pathname === "/update" ? "red" : "white" }}>Update</Nav.Link>
                        <Nav.Link as={Link} to="contects" style={{ color: location.pathname === "/contects" ? "red" : "white" }}>Contects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
           <br /><hr />
            <Outlet />
        </>
    );
}

export default Layout;
