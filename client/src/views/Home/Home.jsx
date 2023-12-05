import { ContainerHome } from "./home.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from '../../components/Cards/Cards';
import { filterCards, orderCards } from "../../redux/action";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <ContainerHome>
            <h1>HOME</h1>
            <SearchBar />
            <select className='selectBox' onClick={handleFilter}>
                <option value="created">Creaciones</option>
                <option value="action">Genero</option>
                <option value="all">Todos</option>
            </select>
            <Cards />
        </ContainerHome>
    )
}

export default Home;