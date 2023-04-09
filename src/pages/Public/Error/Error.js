import React from 'react';
import '@/pages/Public/Error/Error.css'
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <section className='error_page'>
            <span>404</span>
            <p className='text_error'>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </section>
    );
};

export default Error;