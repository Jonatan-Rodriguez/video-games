import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContainerDetail } from "./detail.styled";

const Detail = () => {
    const { id } = useParams();
    const [videoGame, setVideoGame] = useState({});

    const detailGet = async() => {
        try {
            const { data } = await axios(`http://localhost:3001/videogames/${id}`);
            if (data.name) {
                setVideoGame(data);
            }
        } catch (error) {
            alert('¡No hay video juegos con este ID!');
        }
    }

    useEffect(() => {
        detailGet();
    }, []);



    return (
        <ContainerDetail>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className='containerCard'>
                        <div className='containerImg'>
                            <img className='img' src={videoGame?.image} alt={videoGame?.name} />
                        </div>
                        <div className='containerData'>
                            <h1 className='name'>{videoGame?.name}</h1>
                            <div className='data'><p>ID: {videoGame?.id}</p></div>
                            <div className='data'><p>Descripcion: </p> <div className="contenedor-des">{videoGame?.description}</div></div>
                            <div className='data'><p>Fecha de lanzamiento: {videoGame?.released}.</p></div>
                            <div className='data'><p>Rating: {videoGame?.rating}.</p></div>
                            <div className='data'><p>Generos: {videoGame?.genre}.</p></div>
                            <div className='data'><p>Plataformas: {videoGame?.platforms}.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDetail>
    )
}

export default Detail;