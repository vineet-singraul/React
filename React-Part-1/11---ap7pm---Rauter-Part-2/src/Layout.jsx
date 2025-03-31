import { Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar id="nav">
                <Link to="home" id="li">Home</Link> |
                <Link to="about" id="li">About</Link> |
                <Link to="contact" id="li">Contact</Link>
            </Navbar>
            <hr />
            <Outlet />
            <hr />
            www.mycompany.com
        </>
    );
};

export default Layout;
