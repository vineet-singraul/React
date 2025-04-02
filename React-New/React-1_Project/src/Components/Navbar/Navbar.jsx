import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import logo from '../Assets/Brand_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import "../Navbar/Navbar.css";
import { useState } from "react";

const Navbar = () => {

    // Nav link me click change performed ke liye
    const [manu, setManu] = useState(' ')

    // Hamburger ke liye
    const [hamb , setHamb] = useState(' ')

    return (
        <nav id="Navbar">
            <div className="navMainDiv">

                <div className="logodiv">
                    <img src={logo} alt="Brand Logo" />
                    <p className="logoName">Shoppify</p>
                </div>
               
    

                <ul className="manuDiv">
                    <li style={{ color: manu === "Home" ? 'red' : 'white' }} onClick={()=>{setManu("Home")}}>Home</li>
                    <li style={{ color: manu === "Men's" ? 'red' : 'white'  }} onClick={()=>{setManu("Men's")}}>Men's</li>
                    <li style={{ color: manu === "Women's"  ? 'red' : 'white' }} onClick={()=>{setManu("Women's")}}>Women's</li>
                    <li style={{ color: manu === "Kide's"  ? 'red' : 'white'  }} onClick={()=>setManu("Kide's")}>Kide's</li>
                    <li style={{ color: manu === "Electranic Item's" ? 'red' : 'white' }} onClick={()=>setManu("Electranic Item's")}>Electranic Item's</li>
                    <li style={{ color: manu === "Grosery Item's"  ? 'red' : 'white'}} onClick={()=>setManu("Grosery Item's")}>Grosery Item's</li>
                </ul>

                <div className="userSection">
                    <div className="login">
                        <span className="userLogin">Login</span>
                        <FaRegUserCircle id="User" />
                    </div>
                    <div className="cartDiv">
                        <GrCart id="Cart" />
                    </div>
                </div>
                
                <div className="Ham-div">
                    <button className="Ham-button">
                    <RxHamburgerMenu id="Hamburger"/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
