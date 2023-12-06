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
                        genreFilter.push(`${gen.name} `);
                    });

                    const videoDb = {
                        id: gamesDb.id,
                        name: gamesDb.name,
                        image: gamesDb.image,
                        genre: genreFilter,
                        rating: gamesDb.rating,
                        created: true
                    }

                    videoGameFound.push(videoDb);

                })


            };
            //busqueda en la API
            const { data } = await axios(`${URL}?search=${name}&key=${API_KEY}`);

            if (data.results) {
                const resultadosLimitados = data.results.slice(0, 15);
                resultadosLimitados.map((video) => {
                    const genreFilter = [];

                    video.genres.map((gen) => {
                        genreFilter.push(`${gen?.name} `);
                    });

                    const videoGame = {
                        id: video?.id,
                        name: video?.name,
                        image: video?.background_image,
                        genre: genreFilter,
                        rating: video?.rating,
                        created: false
                    }
                    videoGameFound.push(videoGame);
                });
                videoGameFound.slice(0, 15);
                return res.status(200).json(videoGameFound);
            }

            return res.status(404).json({ error: 'video juego no encontrado' });
        }

        //cumplira estas condiciones si no existe query

        //traigo todos los video de la base de datos
        const allVideoGames = [];
        const videoGamesDb = await Videogame.findAll();

        if (videoGamesDb[0]) {
            videoGamesDb.map(async (videoDb) => {
                const genDb = await videoDb.getGenres();

                const genreFilter = [];
                genDb.map((gen) => {
                    genreFilter.push(`${gen.name} `);
                });

                const videoGamesDb = {
                    id: videoDb.id,
                    name: videoDb.name,
                    image: videoDb.image,
                    genre: genreFilter,
                    rating: videoDb.rating,
                    created: true
                }

                allVideoGames.push(videoGamesDb);
            });
        };

        //traigo todos los video de la API
        const { data } = await axios(`${URL}?key=${API_KEY}`);


        if (data.results) {
            data.results.map((video) => {
                const genreFilter = [];

                video.genres.map((gen) => {
                    genreFilter.push(`${gen?.name} `);
                });

                const videoGame = {
                    id: video?.id,
                    name: video?.name,
                    image: video?.background_image,
                    genre: genreFilter,
                    rating: video?.rating,
                    created: false
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