const conn = require('./connection')
require('./Post')

//sync
const giveSeeds = require('../seeds')
var force = true
conn.sync({
  force
}).then(async ()=> {
  console.log("database syncronized")
  if (force) {
    await giveSeeds()
  }
}).catch((error)=>{
  console.log("Error", error)
})

module.exports = conn