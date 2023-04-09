import React from 'react';
import emptyStar from '@/Assets/Img/Components/Stars/StarsWhite.png';
import fullStar from '@/Assets/Img/Components/Stars/StarsOrange.png';

function Rate({ score }) {
    return (
        <div className="rate-comp">
            {
                [...Array(5)].map((e, index) => {

                    return index < score ? (<img src={fullStar} alt="etoile orange" key={index} />) : (<img src={emptyStar} alt="etoile blanche" key={index} />)

                })
            }

        </div>
    );
};

export default Rate;