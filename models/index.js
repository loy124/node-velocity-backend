const Sequelize = require('sequelize');
const Shock = require('./shock');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Shock = Shock;
Shock.init(sequelize);

module.exports = db;