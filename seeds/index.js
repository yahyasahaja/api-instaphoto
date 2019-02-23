const conn = require('../models/connection')
const Posts = require('./Posts')

module.exports = async () => {
    await conn.models.Post.bulkCreate(Posts)
}
