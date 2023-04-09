import React from 'react';
import Banner from '@/components/Banner/Banner';
import logementservice from '@/_services/service';
import { NavLink } from 'react-router-dom';
import '@/pages/Public/Home/Home.css'
import Card from '@/components/Card/Card';
import bannerImg from '@/Assets/Img/Pages/Home/HeroAccueil.png'

const Home = () => {
    return (
        <section className='main'>
            <Banner srcimg={bannerImg} titre="Chez vous, partout et ailleurs" />
            <div className='card-area'>
                {
                    logementservice.GetAllLogement().map((logement) =>
                        <NavLink to={"/logement/" + logement.id} key={logement.id}>
                            <Card key={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </div>
        </section>
    );
};

export default Home;
