const conn = require('./connection')
require('./Post')

//sync
const giveSeeds = require('../seeds')
var force = true
conn.sync({
    force
}).then(()=> {
    console.log("database syncronized")
    if (force) {
        giveSeeds()
    }
    
}).catch((error)=>{
    console.log("Error", error)
})

module.exports = conn