const express = require('express')
const app = express()
const path = require('path')
// const conn = require('../models')

let saveFile = (file, pathStr) => new Promise((resolve, reject) => {
  file.mv(path.join(__dirname, `../public${pathStr}`), function(err) {
    if (err) return reject(err)
    resolve(pathStr)
  })
})

app.post('/upload/image', async function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).json({
      is_ok: false,
      error: 'No files were uploaded.'
    })
  }

  let paths = []
  for (let i in req.files) {
    let file = req.files[i]
    let pathStr = `/image/${file.md5()}-${file.name}`

    // Use the mv() method to place the file somewhere on your server
    // console.log(file.md5())
    try {
      let pathResult = await saveFile(file, pathStr)
      paths.push({name: i, path: pathResult})
    } catch (err) {
      return res.status(500).json({
        is_ok: false,
        error: err
      })
    }
  }

  res.status(200).json({
    is_ok: true,
    paths
  })
})

module.exports = app