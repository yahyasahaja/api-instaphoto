const express = require('express')
const app = express()
const conn = require('../models')

app.get('/posts', async (req, res) => {
  try {
    let posts = await conn.models.Post.findAll()
    res.json({
      is_ok: true,
      posts
    })
  } catch (err) {
    res.status(500).json({
      is_ok: false,
      error: err
    })
  }
})

app.patch('/posts/:id', async (req, res) => {
  try {
    await conn.models.Post.update(req.body, {
      where: {
        id: req.params.id 
      }
    })
    res.status(200).json({
      is_ok: true
    })
  } catch (err) {
    res.status(500).json({
      is_ok: false,
      error: err
    })
  }
})

app.delete('/posts/:id', async (req, res) => {
  try {
    await conn.models.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({
      is_ok: true
    })
  } catch (err) {
    res.status(500).json({
      is_ok: false,
      error: err
    })
  }
})

app.post('/posts', async (req, res) => {
  try {
    let post = await conn.models.Post.create(req.body)
    res.status(201).json({
      is_ok: true,
      post
    })
  } catch (err) {
    res.status(500).json({
      is_ok: false,
      error: err
    })
  }
})

module.exports = app