const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame } = require('../db');
const URL = 'https://api.rawg.io/api/games';

const getVideoById = async (req, res) => {
    try {
        const id = req.params.id;

        if (id.length > 20) { //verifico que el id sea de tipo uuidv4
            const videoGameDb = await Videogame.findOne({ where: { id: id } });
            if (videoGameDb) {
                //estas condiciones se cumplen si el id es de la BD

                const genDb = await videoGameDb.getGenres();

                const genreFilter = [];
                genDb.map((gen) => {
                    genreFilter.push(gen.name);
                });

                const videoDbGenre = {
                    name: videoGameDb.name,
                    description: videoGameDb.description,
                    platforms: videoGameDb.platforms,
                    image: videoGameDb.image,
                    released: videoGameDb.released,
                    rating: videoGameDb.rating,
                    genres: genreFilter
                }

                return res.status(200).json(videoDbGenre);
            }
        }


        //estas condiciones se cumplen si el id es de la API
        const { data } = await axios(`${URL}/${id}?key=${API_KEY}`);

        if (data.id) {
            const platformFilter = [];

            data.parent_platforms.map((plat) => {
                platformFilter.push(`${plat?.platform.name} `);
            });

            const genreFilter = [];

            data.genres.map((gen) => {
                genreFilter.push(`${gen?.name} `);
            });

            const videoGameId = {
                id: data?.id,
                name: data?.name,
                description: data?.description,
                platforms: platformFilter,
                image: data?.background_image,
                released: data?.released,
                rating: data?.rating,
                genre: genreFilter
            }

            return res.status(200).json(videoGameId);
        }
        return res.status(404).json({ error: 'id no encontrado' });

    } catch (error) {
        console.error('Error al consultar videojuego:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getVideoById
}