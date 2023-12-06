import { Link } from "react-router-dom";
import { ContainerLanding } from "./landing.styled";

const Landing = () => {
    return (
        <ContainerLanding>
            <div class="context">
                <Link to='/home'>
                    <button class="button">
                        <span class="button-content">Ingresar</span>
                    </button>
                </Link>
            </div>
            <div class="area" >
                <ul class="circles">
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