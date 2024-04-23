import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return(
        <nav>
            <Link to="/" className="title">Website</Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;