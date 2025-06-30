const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asad', 'root', '@Asad9284', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
