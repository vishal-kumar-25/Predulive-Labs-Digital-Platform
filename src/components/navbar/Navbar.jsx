import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <img src={logo} alt="SWARI TRAVELS Logo" className="swari-logo" />
            </div>

            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>New Arrivals</li></Link>
                <Link to='travel' smooth={true} duration={500}><li>Cart</li></Link>
                <Link to='sign-up' smooth={true} duration={500}><li>Sign Up</li></Link>
                <Link to='login' smooth={true} duration={500}><li>Login</li></Link>
            </ul>

            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (
                    <HiOutlineMenuAlt4 className='icon' />
                ) : (
                    <AiOutlineClose style={{ color: '#000' }} className='icon' />
                )}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='popular' smooth={true} duration={500}><li>Popular Products</li></Link>
                    <Link to='search' smooth={true} duration={500}><li>Search</li></Link>
                    <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
                    <Link to='gallery' smooth={true} duration={500}><li>Gallery</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
