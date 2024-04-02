const monitoringController = require('./monitoring.controller');
const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => {res.send({message: 'Hello Printi Monitoring' })});

routes.get('/monitoring/all', monitoringController.getAll);
routes.post('/monitoring', monitoringController.post);

module.exports = routes;