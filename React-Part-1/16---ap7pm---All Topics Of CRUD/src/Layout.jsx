import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="Home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="Contact" >Contact</Nav.Link>
                        <Nav.Link as={Link} to="Insert" >Insert</Nav.Link>
                        <Nav.Link as={Link} to="Search" >Search</Nav.Link>
                        <Nav.Link as={Link} to="Display" >Display</Nav.Link>
                        <Nav.Link as={Link} to="Update" >Update</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <hr /> 
            <Outlet/>
            <hr />
        </>
    )
}

export default Layout;