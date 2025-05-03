// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('son', 'userdb', 'root', {
//   host: '192.168.1.21',
//   dialect: 'mysql',
//   port: 3306
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asad', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
