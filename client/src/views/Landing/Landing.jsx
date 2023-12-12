import { Link } from "react-router-dom";
import { ContainerLanding } from "./landing.styled";

const Landing = () => {
    return (
        <ContainerLanding>
            <div className="context">
                <Link to='/home'>
                    <button className="button">
                        <span className="button-content">Ingresar</span>
                    </button>
                </Link>
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </ContainerLanding>
    )
}

export default Landing;