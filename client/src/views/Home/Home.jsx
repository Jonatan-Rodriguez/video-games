import { ContainerHome } from "./home.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from '../../components/Cards/Cards'

const Home = ({ onSearch }) => {
    return (
        <ContainerHome>
            <h1>HOME</h1>
            <SearchBar onSearch={onSearch} />
            <Cards />
        </ContainerHome>
    )
}

export default Home;