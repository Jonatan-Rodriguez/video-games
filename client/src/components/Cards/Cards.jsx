import { connect } from "react-redux";
import { ContainerCards } from "./cards.styled";
import Card from '../Card/Card'

const Cards = ({ allVideo }) => {
    return (
        <ContainerCards>
            <h1>Video Juegos</h1>
            <div className="cards">
                {allVideo?.map(video => {
                    return (
                        <Card
                            key={video?.id}
                            id={video?.id}
                            image={video?.image}
                            name={video?.name}
                            rating={video?.rating}
                            genre={video?.genre}
                        />
                    )
                })
                }
            </div>
        </ContainerCards>
    )
}

const mapStateToProps = (state) => {
    return {
        allVideo: state.allVideo, // Acceder al estado del contador desde el store
    };
};

export default connect(mapStateToProps, null)(Cards);