const Sequalize = require('sequelize');

const conn = new Sequalize('instaphoto', 'root', 'yahya123', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: false,
    operatorsAliases: false
});

module.exports = conn