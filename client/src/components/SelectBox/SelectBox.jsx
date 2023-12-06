import { ContainerSelectBox } from "./selectBox.styled";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import down from '../../assets/img/arrow.svg';

const SelectBox = ({ filterCards, orderCards }) => {
    const handleFilter = (event) => {
        filterCards(event.target.value);
    }

    const handleOrder = (event) => {
        orderCards(event.target.value);
    }
    return(
        <ContainerSelectBox>
            <div className='selectContainer'>
                <p>Filtro:</p>
                <select className='selectBox' onChange={handleFilter}>
                    <option value="default">Por defecto</option>
                    <option value="all">Todos</option>
                    <option value="true">Creaciones</option>
                    <option value="Action">Accion</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Adventure">Aventura</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <div className='selectContainer'>
                <p>Orden Alfabético:</p>
                <select className='selectBox' onChange={handleOrder}>
                    <option value="default">Por defecto</option>
                    <option value="asAlf">Ascendente</option>
                    <option value="desAlf">Descendente</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <div className='selectContainer'>
                <p>Orden por rating:</p>
                <select className='selectBox' onChange={handleOrder}>
                    <option value="default">Por defecto</option>
                    <option value="asRating">Ascendente</option>
                    <option value="desRating">Descendiente</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
        </ContainerSelectBox>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterCards: (option) => dispatch(filterCards(option)),
        orderCards: (order) => dispatch(orderCards(order))
    };
};

export default connect(null, mapDispatchToProps)(SelectBox);