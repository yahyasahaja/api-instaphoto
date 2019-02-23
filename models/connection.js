const Sequalize = require('sequelize');

const conn = new Sequalize('instaphoto', 'root', 'jingga21', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});

module.exports = conn