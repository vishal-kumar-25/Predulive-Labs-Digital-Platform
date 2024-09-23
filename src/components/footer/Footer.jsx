import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/logo.jpg'; // Make sure to replace this with the correct path to your logo

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="bottom">
                    <div className="column">
                        <img src={Logo} alt="Logo" className='logo' /> {/* Logo in the first column */}
                    </div>
                    <div className="column">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>Our Products</h2> 
                        <ul>
                            <li>Smartphones</li>
                            <li>Laptops</li>
                            <li>Gaming Consoles</li>
                            <li>Headphones & Accessories</li>
                            <li>Smart Home Devices</li>
                            <li>Wearables</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>+91-9372778974</li>
                            <li>support@predulivelabs.com</li>
                            <li>123 Tech Park, Sector 5, Bengaluru, Karnataka, India</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='credit'>
                <small>© Copyright 2024 PREDULIVE LABS. Developed by </small>
            </div>
        </div>
    );
}

export default Footer;
