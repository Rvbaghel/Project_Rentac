import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaUserCircle, FaShoppingCart, FaTimes } from 'react-icons/fa';
import Event from './Logos/event.png';
import Process from './Logos/process.png';
import Deliver from './Logos/express-delivery.png';

const Navbar = () => {
    const [showCard, setShowCard] = useState(false); // State for the user card visibility
    const [cartOpen, setCartOpen] = useState(false); // State for the cart icon toggle

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <FaHome size="1.9em" />
                <img src={Deliver} alt="Deliver" className="event-image" />

                <img src={Process} alt="Process" className="event-image" />

                <img src={Event} alt="Event" className="event-image" />

            </div>
            <div className="nav-icons">
                <div className="icon-container" onMouseEnter={() => setShowCard(true)} onMouseLeave={() => setShowCard(false)}>
                    <FaUserCircle size="2em" className="icon" />
                    {showCard && (
                        <div className="user-card">
                            <a href="/login">Login</a>
                            <a href="/signup">Signup</a>
                        </div>
                    )}
                </div>
                <div onClick={() => setCartOpen(!cartOpen)}>
                    {cartOpen ? <FaTimes size="2em" className="icon" /> : <FaShoppingCart size="2em" className="icon" />}
                </div>
            </div>
        </nav>

        
   
);

};

export default Navbar;
