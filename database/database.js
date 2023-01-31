const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','postgres','a1@a2ccc3',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = connection;