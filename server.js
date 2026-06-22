const express = require('express')

const app = express() //server create kr chuke ho

app.get('/', (req, res)=>{
    res.send("Hello World") //jab bhi home page pe jaoge to hello world show hoga
})

app.get('/about', (req, res)=>{
    res.send("This is about page") //jab bhi about page pe jaoge to this is about page show hoga
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000") //server start ho gya
})