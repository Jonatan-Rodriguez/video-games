//styled
import { ContainerHome } from "./home.styled";
//components
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from '../../components/Cards/Cards';
import SelectBox from "../../components/SelectBox/SelectBox";
//hook
import { addVideo } from "../../redux/action";
import { connect } from "react-redux";
import { useEffect } from "react";

const Home = ({ addVideo }) => {

    useEffect(() => {
        addVideo();
    }, []);

    return (
        <ContainerHome>
            <div className="searchSelect">
                <SearchBar />
                <SelectBox/>
            </div>
            <Cards />
        </ContainerHome>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addVideo: () => dispatch(addVideo())
    };
};

export default connect(null, mapDispatchToProps)(Home);