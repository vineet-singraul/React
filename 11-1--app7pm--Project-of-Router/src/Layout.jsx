import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contect from "./pages/Contect";
import About from "./pages/About";


const Layout = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="contect">Contect</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



            <Container>
                <hr />
                  <Outlet/>
                <hr />
            </Container>

            <footer>
                <p>Copyright All Rull Resaerved Hare</p>
            </footer>
        </>
    )
}
export default Layout;