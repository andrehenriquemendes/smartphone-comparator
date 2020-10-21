const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Smartphone = require('../models/Smartphone');

const connection = new Sequelize(dbConfig);

Smartphone.init(connection);

module.exports = connection;