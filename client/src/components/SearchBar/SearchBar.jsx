//styled
import { ContainerSearchBar } from "./searchbar.styled";
//hook
import { useState } from "react";
import { connect } from "react-redux";
//action
import { videoFound } from "../../redux/action";
//img
import search from '../../assets/img/search.svg';

const SearchBar = ({ videoFound }) => {
    const [nombre, setNombre] = useState('');

    let handleInputChange = (event) => {
        setNombre(event.target.value);
    }

    return (
        <ContainerSearchBar>
            <div className="search">
                <input className="search__input" type="text" placeholder="Buscar por nombre" onChange={handleInputChange} value={nombre} />
                <button className="search__button" onClick={() => { videoFound(nombre); setNombre('') }}>
                <img src={search} className="search__icon" />
                </button>
            </div>
        </ContainerSearchBar>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        videoFound: (nombre) => dispatch(videoFound(nombre))
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);