const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame } = require('../db');
const URL = 'https://api.rawg.io/api/games';

const getVideoAll = async (req, res) => {

    try {
        const { name } = req.query;

        //cumplira estas condiciones si existe query
        if (name) {

            const videoGameFound = [];
            const videoGamesDbFound = await Videogame.findAll({ where: { name: name } });

            if (videoGamesDbFound) {
                videoGameFound.push(videoGamesDbFound);
            };

            const { data } = await axios(`${URL}?search=${name}&key=${API_KEY}`);

            if (data.results) {
                const resultadosLimitados = data.results.slice(0, 15);
                resultadosLimitados.map((video) => {
                    const videoGame = {
                        name: video?.name,
                        image: video?.background_image,
                        released: video?.released,
                        rating: video?.rating,
                    }
                    videoGameFound.push(videoGame);
                });
                videoGameFound.slice(0, 15);
                return res.status(200).json(videoGameFound);
            }

            return res.status(404).json({ error: 'video juego no encontrado' });
        }

        //cumplira estas condiciones si no existe query

        const allVideoGames = [];
        const videoGamesDb = await Videogame.findAll();

        if (videoGamesDb) {
            videoGamesDb.map((videoDb) => {
                allVideoGames.push(videoDb);
            });
        };

        const { data } = await axios(`${URL}?key=${API_KEY}`);

        if (data.results) {
            data.results.map((video) => {
                const videoGame = {
                    name: video?.name,
                    image: video?.background_image,
                    released: video?.released,
                    rating: video?.rating,
                }
                allVideoGames.push(videoGame);
            });

            return res.status(200).json(allVideoGames);
        }
        return res.status(404).json({ error: 'Error al solicitar todos los videos juegos' });

    } catch (error) {
        console.error('Error al consultar todos los videojuegos:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getVideoAll
};