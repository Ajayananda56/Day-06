//server ko create/config karna

const express = require('express')

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
    
})


module.exports = app;