const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asad', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

module.exports = sequelize;
