import React from "react";
import "./navbar.css"
import { assets } from "../../assets/assets";

// Assets downloaded from https://greatstack.dev/assets/food-del-mern

const Navbar = () => {
    return(
        <div class = "navbar">
            <img src={assets.logo} alt="Logo" className="logo"></img>
            <ul className="navbar-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile App</li>
                <li>Contact Us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket Icon" />
                    <div className="dot">

                    </div>
                    <button>Sign In</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;