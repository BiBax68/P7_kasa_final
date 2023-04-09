import logo from '@/Assets/Img/Logo.png';
import React from 'react';
import '@/layout/Header/Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <img src={logo} className='header_logo' alt='logo'></img>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/Apropos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;