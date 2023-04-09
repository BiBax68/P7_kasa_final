import logo from '@/Assets/Img/LogoFooter.png';
import '@/layout/Footer/Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logo} alt='logo'></img>
            <p className='credit'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;