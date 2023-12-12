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

    //metodo que carga los generos automaticamente una vez creado el modelo
    Genre.afterSync(async () => {
        const {data} = await axios(`${URL}?key=${API_KEY}`);

        const genresCount = await Genre.count();

        if (genresCount === 0) {
            
            await data.results.map((gen) => {
                Genre.create({id:gen?.id, name:gen?.name})
            });
        }
    });

    return Genre;
}