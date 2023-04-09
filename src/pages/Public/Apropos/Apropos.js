import React from 'react';
import Banner from '@/components/Banner/Banner';

import '@/pages/Public/Apropos/Apropos.css';
import bannerImg from '@/Assets/Img/Pages/Apropos/HeroApropos.png'
import DropDown from '@/components/Dropdown/Dropdown'
const Apropos = () => {
    return (
        <section className='main-apropos'>
            <Banner srcimg={bannerImg} titre="" />
            <ul className="dropDown_area">
                <DropDown titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." provenance="paragraphe" />
                <DropDown titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." provenance="paragraphe" />
                <DropDown titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." provenance="paragraphe" />
                <DropDown titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." provenance="paragraphe" />
            </ul>
        </section>
    );
};

export default Apropos;

