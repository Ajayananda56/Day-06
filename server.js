//server ko start karna
//database se connect karna
require("dotenv").config()
const mongoose = require("mongoose")
const app = require('./src/app')
const connectToDB = require('./src/config/database')


connectToDB()
app.listen(3000, ()=>{
  console.log('server is running on port 3000')
})