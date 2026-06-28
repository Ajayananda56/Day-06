const mongoose = require("mongoose")

function connectToDB(){
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log('database connected')
  })
  .catch((err)=>{
    console.error('database connection failed', err)
  })
}

module.exports = connectToDB