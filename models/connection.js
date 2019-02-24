const Sequalize = require('sequelize');
const test = process.env.NODE_ENV === 'development'
console.log(process.env.NODE_ENV)
const password = test ? 'yahya123' : 'sansaja123'

const conn = new Sequalize('instaphoto', 'root', password, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: false,
    operatorsAliases: false
})

module.exports = conn