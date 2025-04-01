import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import logo from '../Assets/Brand_logo.png'
import "../Navbar/Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav id="Navbar">
                <div className="navMainDiv">

                    <div className="logodiv">
                        <img src={logo} alt="Brand Logo" />
                        <p className="logoName">Shoppify</p>
                    </div>
                    
                    <ul className="manuDiv">
                       <li>Home</li>
                       <li>Man's</li>
                       <li>Women's</li>
                       <li>Kide's</li>
                       <li>Electric Items</li>
                       <li>Kitchen itmes</li>
                    </ul>

                    <div className="userSection">
                        <div className="login">
                            <span className="userLogin">Login</span>
                            <FaRegUserCircle id="User" />
                        </div>
                        <div className="cartDiv">
                           <GrCart  />
                        </div>
                    </div>
                </div> 
            </nav>
        </>
    );
};

export default Navbar;
