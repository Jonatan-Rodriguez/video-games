import { ContainerSearchBar } from "./searchbar.styled";
import { useState } from "react";
import { videoFound } from "../../redux/action";
import { connect } from "react-redux";

const SearchBar = ({ videoFound }) => {
    const [nombre, setNombre] = useState('');

    let handleInputChange = (event) => {
        setNombre(event.target.value);
    }

    return (
        <ContainerSearchBar>
            <input type="text" placeholder="Buscar por nombre" onChange={handleInputChange} value={nombre} />

            <button onClick={() => { videoFound(nombre); setNombre('') }}>Buscar</button>
        </ContainerSearchBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        videoFound: (nombre) => dispatch(videoFound(nombre))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);