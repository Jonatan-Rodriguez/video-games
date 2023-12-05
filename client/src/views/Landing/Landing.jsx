import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addVideo } from "../../redux/action";
import { ContainerLanding } from "./landing.styled";

const Landing = ({ addVideo }) => {
    return (
        <ContainerLanding>
            <h1>Landing</h1>
            <Link to='/form'>
                <button> ⬅ Crear Video Juego </button>
            </Link>
            <Link to='/home'>
                <button onClick={addVideo}> Ingresar ➡ </button>
            </Link>
        </ContainerLanding>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addVideo: () => dispatch(addVideo())
    };
};

export default connect(null, mapDispatchToProps)(Landing);