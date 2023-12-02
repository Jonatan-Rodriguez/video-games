import { ContainerSearchBar } from "./searchbar.styled";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [nombre, setNombre] = useState('');

    let handleInputChange = (event) => {
        setNombre(event.target.value);
    }

    return (
        <ContainerSearchBar>
            <input type="text" placeholder="Buscar por nombre" onChange={handleInputChange} value={nombre} />

            <button onClick={() => { onSearch(nombre); setNombre('') }}>Buscar</button>
        </ContainerSearchBar>
    )
}

export default SearchBar;