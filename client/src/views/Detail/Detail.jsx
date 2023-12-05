import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContainerDetail } from "./detail.styled";

const Detail = () => {
    const { id } = useParams();
    const [videoGame, setVideoGame] = useState({});

    useEffect(async () => {
        try {
            const { data } = await axios(`http://localhost:3001/videogames/${id}`);
            if (data.name) {
                setVideoGame(data);
            }
        } catch (error) {
            alert('¡No hay personajes con este ID!');
        }
    }, [id]);



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
                            <div className='data'>{/* <img src={play} alt="episodios" /> */}<p>ID: {videoGame?.id}</p></div>
                            <div className='data'>{/* <img src={play} alt="episodios" /> */}<p>Descripcion: </p> <div className="contenedor-des">{videoGame?.description}</div></div>
                            <div className='data'>{/* <img src={pulso} alt="estado" /> */}<p>Fecha de lanzamiento: {videoGame?.released}.</p></div>
                            <div className='data'>{/* <img src={gender} alt="genero" /> */}<p>Rating: {videoGame?.rating}.</p></div>
                            <div className='data'>{/* <img src={planet} alt="origen" /> */}<p>Generos: {videoGame?.genre}.</p></div>
                            <div className='data'>{/* <img src={mapPin} alt="localizacion" /> */}<p>Plataformas: {videoGame?.platforms}.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDetail>
    )
}

export default Detail;