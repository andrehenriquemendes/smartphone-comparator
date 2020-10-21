const express = require('express');
const SmartphoneController = require('./controllers/SmartphoneController');
const CompareController = require('./controllers/CompareController');

const routes = express.Router();

routes.get('/smartphones', SmartphoneController.index);
routes.post('/smartphones', SmartphoneController.store);

routes.get('/compare', CompareController.index);

module.exports = routes;