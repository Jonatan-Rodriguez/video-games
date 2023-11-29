const { Router } = require('express');
const { getVideoAll } = require('../controllers/getVideoAll');
const { getVideoById } = require('../controllers/getVideoById');
const { postVideo } = require('../controllers/postVideo');
const { getVideoGenre } = require('../controllers/getVideoGenre');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', getVideoAll);

router.get('/videogames/:id', getVideoById);

router.post('/videogames', postVideo);

router.get('/genres', getVideoGenre);


module.exports = router;
