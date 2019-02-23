const express = require('express')
const app = express()
const path = require('path')
// const conn = require('../models')

app.post('/upload/image', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).json({
      is_ok: false,
      error: 'No files were uploaded.'
    })
  }

  for (let i in req.files) {
    let file = req.files[i]
    let pathStr = `/image/${file.md5()}-${file.name}`

    // Use the mv() method to place the file somewhere on your server
    // console.log(file.md5())
    file.mv(path.join(__dirname, `../public${pathStr}`), function(err) {
      if (err) return res.status(500).json({
        is_ok: false,
        error: err
      })

      res.status(200).json({
        is_ok: true,
        path: pathStr
      })
    })
  }
})

module.exports = app