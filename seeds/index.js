const conn = require('../models/connection')
const Posts = require('./Posts')

module.exports = async () => {
  try {
    await conn.models.Post.bulkCreate(Posts)
  } catch (err) {
    console.log(err)
  }
}
