import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';
const Layoyt = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="display">Display</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet/>
        </>
    );
};

export default Layoyt;
