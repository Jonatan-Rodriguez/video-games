import { Link } from "react-router-dom";
import { ContainerNav } from "./nav.styled";
import logo from '../../assets/img/logo.png';
import newGame from '../../assets/img/charmander.png';

const Nav = () => {
    return (
        <ContainerNav>
            <div className="logo">
                <Link to='/home'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navBtn">
                <Link to='/form'>
                    <div className="navIco">
                        <img className="ico" src={newGame} alt="new game"/>
                        <p>Crear Video Juego</p>
                    </div>
                </Link>
            </div>
        </ContainerNav>
    )
}

export default Nav;