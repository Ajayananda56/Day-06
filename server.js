//server ko start karna
//database se connect karna

const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://ajay:Bz8hcGrAg9xPTZPM@cluster0.l6bvia6.mongodb.net/day-06")
}
connectToDB()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})