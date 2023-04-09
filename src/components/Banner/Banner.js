import React from 'react';
import '@/components/Banner/Banner.css'

function Banner({ srcimg, titre }) {
    return (
        <div className="banner-container">
            <img src={srcimg} className="img-source" alt="bannière de la page d'accueil." />
            <div className='shadow-banner'></div>
            <h1 className="banner-text">{titre}</h1>
        </div>
    );
};

export default Banner;
