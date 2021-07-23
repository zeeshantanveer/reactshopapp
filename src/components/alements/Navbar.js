import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact & Shop App</Link>
                <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto me-2">Create Contact</Link>
                    <Link to="/shop" className="btn btn-light ml-auto me-2">Shop</Link>
                    <Link to="/chat" className="btn btn-light ml-auto">Online Chat</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
