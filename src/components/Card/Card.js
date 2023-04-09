import '@/components/Card/Card.css'

function Card({ image, titre }) {
    return (
        <div className="card-logement">
            <img src={image} alt="Card d'un logement" />
            <div className="shadow"></div>
            <h2 className="Card-titre">{titre}</h2>
        </div>
    );
};

export default Card;
