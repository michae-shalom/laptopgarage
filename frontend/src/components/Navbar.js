import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">LaptopGarage</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listings">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
