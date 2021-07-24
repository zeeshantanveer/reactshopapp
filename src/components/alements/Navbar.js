import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const activeClasses = 'btn btn-light ml-auto me-2 active';
    const nonActiveClasses = 'btn btn-light ml-auto me-2';
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">Contact & Shop App</Link>
                <div className="nav-links">
                    <Link to="/" className={splitLocation[1] === "" ? activeClasses : nonActiveClasses}>Home</Link>
                    <Link to="/contacts/add" className={splitLocation[1] === "contacts" ? activeClasses : nonActiveClasses}>Create Contact</Link>
                    <Link to="/shop" className={splitLocation[1] === "shop" ? activeClasses : nonActiveClasses}>Shop</Link>
                    <Link to="/chat" className={splitLocation[1] === "chat" ? activeClasses : nonActiveClasses}>Online Chat</Link>
                    <Link to="/foodmenu" className={splitLocation[1] === "foodmenu" ? activeClasses : nonActiveClasses}>Food Recipe</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
