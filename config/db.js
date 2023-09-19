const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'events_app_db',
  'root',
  'FrankUdee101.',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database Initialized Successfully!');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sequelize, connect }
