const { Genre } = require('../db');

const getVideoGenre = async (req, res) => {
    try {
        const videoGenreDb = await Genre.findAll();

        if (!videoGenreDb[0]) return res.status(404).json({ error: 'base de datos Genre vacia' });

        return res.status(200).json(videoGenreDb);

    } catch (error) {
        console.error('Error al consultar géneros de los videojuegos:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getVideoGenre
}

