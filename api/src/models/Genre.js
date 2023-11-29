const { DataTypes } = require('sequelize');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/genres';

module.exports = ( sequelize ) => {
    const Genre = sequelize.define('Genre', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{ timestamps: false });

    Genre.afterSync(async () => {
        // Verificar si la tabla de géneros está vacía
        const {data} = await axios(`${URL}?key=${API_KEY}`);

        const genresCount = await Genre.count();

        if (genresCount === 0) {
            // Cargar datos iniciales de género al crear la tabla si está vacía

            await data.results.map((gen) => {
                Genre.create({id:gen?.id, name:gen?.name})
            });
        }
    });

    return Genre;
}