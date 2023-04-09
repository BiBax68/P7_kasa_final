import '@/components/Dropdown/Dropdown.css'
import flecheBas from '@/Assets/Img/Components/Dropdown/DropDownFlecheBas.png'
import flecheHaut from '@/Assets/Img/Components/Dropdown/DropDownFlecheHaut.png'
import { useState } from 'react';

function Dropdown({ titre, description, provenance }) {

    const [drop, setdrop] = useState(false);

    const changedrop = () => {
        setdrop(!drop);
    }


    return (
        <li className="Dropdown">
            <div onClick={changedrop} className="click_area">
                <h2> {titre}</h2>
                {<span><img src={drop ? flecheHaut : flecheBas} alt="*"></img></span>}
            </div>
            {
                drop && provenance === "paragraphe" && (
                    <div className="text_area">
                        <p>{description}</p>
                    </div>
                )}
            {
                drop && provenance === "list" && (
                    <div className="text_area">
                        {description}
                    </div>
                )
            }
        </li>
    );
};

export default Dropdown;
