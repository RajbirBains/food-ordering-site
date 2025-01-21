import React, { useState } from "react";
import "./Navbar.css"
import { assets } from "../../assets/assets";

// Assets downloaded from https://greatstack.dev/assets/food-del-mern

const Navbar = () => {
    // useState variable
    const [menu, setMenu] = useState("home");

    return(
        <div className = "navbar">
            <img src={assets.logo} alt="Logo" className="logo"></img>
            <ul className="navbar-menu">
                <li className="navbar-item" id="nav-Home">
                    {/* {menu === "menu"?"active":""} checks if the useState value (menu) is set to the specific item in the menu, 
                    if it is then that specific item will be set to active and the rest will be non-active*/}
                    <a href="." onClick={()=>setMenu("home")} className = {menu === "home"?"active":""}>Home</a>
                </li>
                <li className="navbar-item" id="nav-Menu">
                    <a href="." onClick={()=>setMenu("menu")} className = {menu === "menu"?"active":""}>Menu</a>
                </li>
                <li className="navbar-item" id="nav-App">
                    <a href="." onClick={()=>setMenu("mobile-app")} className = {menu === "mobile-app"?"active":""}>Mobile App</a>
                </li>
                <li className="navbar-item" id="nav-Contact">
                    <a href="." onClick={()=>setMenu("context-us")} className = {menu === "contact-us"?"active":""}>Contact Us</a>
                </li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket Icon" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;