import React, { useEffect, useState } from 'react';
import Gallery from '@/components/Gallery/Gallery';
import logementservice from '@/_services/service';
import { useNavigate, useParams } from 'react-router-dom';
import Rate from '@/components/Rate/Rate';
import DropDown from '@/components/Dropdown/Dropdown'
import Tags from '@/components/Tag/Tag';

import '@/pages/Public/Logement/Logement.css'

const Logement = () => {

    const [logement, setlogement] = useState({});
    const [chargement, setchargement] = useState(true);

    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        logementservice.GetLogement(id)
            .then((data) => {
                if (data) {
                    setlogement(data);
                    setchargement(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id, navigate])

    const changehtml = (equipments) => {
        return (
            <div className='list_equipement'>
                {equipments.map((equipement, index) => {
                    return (
                        <p key={index}>
                            {equipement}
                        </p>
                    )
                })}
            </div>
        )
    }

    if (chargement) return (<h2>Chargement</h2>)
    return (
        <section className='logement-content'>
            <Gallery photo={logement.pictures} />
            <div className='info-area'>
                <div className='text-info'>
                    <p className='title'>{logement.title}</p>
                    <p className='location'>{logement.location}</p>
                    <div className='tag-area'><Tags key={Tags.id} avantage={logement.tags} /></div>
                </div>
                <div className='author-area'>
                    <div className='host'>
                        <p className='name-autor'>{logement.host.name}</p>
                        <img className='author' alt='auteur' src={logement.host.picture}></img>
                    </div>
                    <Rate key={Rate.id} score={logement.rating} />

                </div>
            </div>
            <div className='drop-area'>
                <DropDown titre="Description" description={logement.description} provenance="paragraphe" />
                <DropDown titre="Équipement" description={changehtml(logement.equipments)} provenance="list" />
            </div>

        </section>
    )
};

export default Logement;