const express = require('express');
const bodyparser = require('body-parser');
require('./models');
const controller = require('./controller')

bodyparser.urlencoded({
    extended: true
})

var app = express();
app.use(bodyparser.json())

app.use(express.static('./public'))

app.use(controller)

const PORT = 8000;
app.listen(PORT, () => console.log("udah jalan"));







