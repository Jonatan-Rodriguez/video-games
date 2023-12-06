import { Link } from "react-router-dom";
import { ContainerLanding } from "./landing.styled";

const Landing = () => {
    return (
        <ContainerLanding>
            <h1>Landing</h1>
            <Link to='/form'>
                <button> ⬅ Crear Video Juego </button>
            </Link>
            <Link to='/home'>
                <button> Ingresar ➡ </button>
            </Link>
        </ContainerLanding>
    )
}

export default Landing;