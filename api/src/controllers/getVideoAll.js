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

            //busqueda en la base de datos
            const videoGamesDbFound = await Videogame.findAll({ where: { name: name } });

            if (videoGamesDbFound[0]) {

                videoGamesDbFound.map(async (gamesDb) => {
                    const genDb = await gamesDb.getGenres();

                    const genreFilter = [];
                    genDb.map((gen) => {
                        genreFilter.push(gen.name);
                    });

                    const videoDb = {
                        name: gamesDb.name,
                        image: gamesDb.image,
                        genres: genreFilter
                    }

                    videoGameFound.push(videoDb);

                })


            };

            const { data } = await axios(`${URL}?search=${name}&key=${API_KEY}`);

            if (data.results) {
                const resultadosLimitados = data.results.slice(0, 15);
                resultadosLimitados.map((video) => {
                    const genreFilter = [];

                    video.genres.map((gen) => {
                        genreFilter.push(gen?.name);
                    });

                    const videoGame = {
                        name: video?.name,
                        image: video?.background_image,
                        genre: genreFilter,
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

        if (videoGamesDb[0]) {
            videoGamesDb.map((videoDb) => {
                allVideoGames.push(videoDb);
            });
        };

        const { data } = await axios(`${URL}?key=${API_KEY}`);


        if (data.results) {
            data.results.map((video) => {
                const genreFilter = [];

                video.genres.map((gen) => {
                    genreFilter.push(gen?.name);
                });

                const videoGame = {
                    name: video?.name,
                    image: video?.background_image,
                    genre: genreFilter,
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