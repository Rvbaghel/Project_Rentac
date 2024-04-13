import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Rentac</h3>
                    <p>Enter a brief description of Rentac, its mission, and what it offers.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <p>123 Street Name, City, Country</p>
                    <p>Phone: +1234567890</p>
                    <p>Email: info@rentac.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Rentac. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
