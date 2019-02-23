const express = require('express')
const app = express()
// const conn = require('../models')
const posts = require('./posts')
const upload = require('./upload')

app.use(posts)
app.use(upload)

module.exports = app