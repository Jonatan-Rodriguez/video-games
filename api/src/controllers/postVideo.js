const { Videogame, Genre } = require('../db');

const postVideo = async (req, res) => {
    try {
        const { name, description, platforms, image, released, rating, genre } = req.body;

        const videoCreate = await Videogame.create({ name, description, platforms, image, released, rating });

        const foundGenre = await Genre.findOne({ where: { name: genre } });

        if (!foundGenre) {
            return res.status(404).json({ message: 'Género no encontrado' });
        };

        await videoCreate.addGenre(foundGenre.id);

        res.status(200).json(videoCreate);

    } catch (error) {
        console.error('Error al agregar videojuego a la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }

}

module.exports = {
    postVideo
}