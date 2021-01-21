const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'F0ver$lol', {
  host: 'localhost',
  dialect: 'postgres'
});

// authenticate 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize