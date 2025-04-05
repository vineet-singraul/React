import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import logo from '../Assets/Brand_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import "../Navbar/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    // Nav link me click change performed ke liye
    const [manu, setManu] = useState(' ')

    // Hamburger ke liye
    const [showManu, setShowManu] = useState(false)

    const HandleHamburger = () => {
        setShowManu(!showManu)
    }

    return (
        <nav id="Navbar">
            <div className="navMainDiv">

                <div className="logodiv">
                    <img src={logo} alt="Brand Logo" />
                    <p className="logoName">Shoppify</p>
                </div>



                <ul className={showManu ? 'manuDiv' : 'hide'} >
                <Link style={{textDecoration : 'none'}} to="/">  <li style={{ color: manu === "Home" ? 'red' : 'white' }} onClick={() => { setManu("Home") }}>Home</li></Link>
                <Link style={{textDecoration : 'none'}} to="/mens"> <li style={{ color: manu === "Men's" ? 'red' : 'white' }} onClick={() => { setManu("Men's") }}>Men's</li></Link>
                <Link style={{textDecoration : 'none'}} to="/womens"><li style={{ color: manu === "Women's" ? 'red' : 'white' }} onClick={() => { setManu("Women's") }}>Women's</li></Link>
                <Link style={{textDecoration : 'none'}} to="/kides"> <li style={{ color: manu === "Kide's" ? 'red' : 'white' }} onClick={() => setManu("Kide's")}>Kide's</li></Link>
                <Link style={{textDecoration : 'none'}} to="/electranic"> <li style={{ color: manu === "Electranic Item's" ? 'red' : 'white' }} onClick={() => setManu("Electranic Item's")}>Electranic Item's</li></Link>
                <Link style={{textDecoration : 'none'}} to="/grosery"> <li style={{ color: manu === "Grosery Item's" ? 'red' : 'white' }} onClick={() => setManu("Grosery Item's")}>Grosery Item's</li></Link>
                </ul>

                <div className="userSection">
                    <div className="login">
                       <span className="userLogin"> <Link style={{textDecoration : 'none'}} to="/loginsigup">Login</Link></span>                
                        <FaRegUserCircle id="User" />
                    </div>                                                                                                                      
                    <div className="cartDiv">
                        <Link to="/cart"><GrCart id="Cart" /></Link>
                    </div>
                </div>

                <div className="Ham-div">
                    <button className="Ham-button" onClick={HandleHamburger}>
                        {showManu ? <RxCross2 id="Hamburger" /> : <RxHamburgerMenu id="Hamburger" className="cross"/>}
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
