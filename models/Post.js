const Sequelize = require('sequelize');
const conns = require('./connection');

module.exports = conns.define(
    'Post',
    {
        caption: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
    
)

