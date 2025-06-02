const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asad', 'root', 'Pass@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
