const express = require('express')
const bodyparser = require('body-parser')
require('./models')
const controller = require('./controller')
const fileUpload = require('express-fileupload')

bodyparser.urlencoded({
    extended: true
})

var app = express()
app.use(bodyparser.json())
app.use(fileUpload({
limits: { fileSize: 50 * 1024 * 1024 },
}))
app.use(express.static('./public'))
app.use(controller)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))







