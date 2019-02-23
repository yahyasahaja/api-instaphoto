const express = require('express')
const app = express()
const conn = require('../models')

app.get('/posts', async (req, res) => {
    let posts = await conn.models.Post.findAll()
    res.json(posts)
})

app.patch('/posts/:id', async (req, res) => {
    let posts = await conn.models.Post.update(req.body, {
        where: {
            id: req.params.id 
        }
    })
    res.json({
        status: 'OK'
    })
})

app.delete('/posts/:id', async (req, res) => {
    let post = await conn.models.Post.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        status: 'OK'
    })
})

app.post('/posts', async (req, res) => {
    let post = await conn.models.Post.create(req.body);
    res.json(post)
})


module.exports = app;