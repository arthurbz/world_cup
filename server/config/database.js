const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('worldcup', 'user', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

module.exports = sequelize;