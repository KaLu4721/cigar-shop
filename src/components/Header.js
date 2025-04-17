import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
 // Ako koristiš posebne stilove



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    

    const handleBarClick = () => {
        setMenuOpen(true);
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        setMenuOpen(false);
    };

    return (
        <section id="header">
            <Link to="/"><img src="images/logo.png" className="logo" alt="Logo" /></Link>
            <div>
            <ul id="navbar" className={menuOpen ? 'active' : ''}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Početna</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Proizvodi</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>O nama</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Kontakt</NavLink></li>
                <li className="lg-bag"><NavLink to="/cart"><i className="fa fa-shopping-basket" /></NavLink></li>
                <a href="#" id="close" onClick={handleCloseClick}><i className="fa-solid fa-xmark" /></a>
            </ul>

            </div>
            <div id="mobile">
                <Link to="/cart"><i className="fa fa-shopping-basket" aria-hidden="true" /></Link>
                <i id="bar" className="fas fa-outdent" onClick={handleBarClick} />
            </div>
        </section>
        
    );
};


export default Header;
