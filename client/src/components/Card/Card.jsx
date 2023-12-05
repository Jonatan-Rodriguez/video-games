import { ContainerCard } from "./card.styled";
import { Link } from "react-router-dom";

const Card = ({ image, name, genre, id }) => {
    return (
        <ContainerCard>
            <div className="imgContainer">
                <Link to={`/detail/${id}`}>
                    <img src={image} alt={name} />
                    <div className="overlay">
                        {/* <img className='infoIco' src={info}/> */}
                        <p>Saber mas</p>
                    </div>
                </Link>
            </div>
            <p><b>{name}</b></p>
            <p>genero</p>
            <p>{genre}</p>
        </ContainerCard>
    )
}

export default Card;