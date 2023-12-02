import { Link } from "react-router-dom";
import { ContainerLanding } from "./landing.styled";

const Landing = () => {
    return (
        <ContainerLanding>
            <h1>Landing</h1>
            <Link to='/home'>
                <button>Ingresar Home</button>
            </Link>
            <Link to='/form'>
                <button>Ingresar Form</button>
            </Link>
            <Link to='/detail/:id'>
                <button>Ingresar Detail</button>
            </Link>
        </ContainerLanding>
    )
}

export default Landing;