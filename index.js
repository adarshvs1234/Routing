const express = require('express')
const PORT = 5000
const route = require('./router')
const app = express()
app.use(route)
app.listen(PORT,()=>{
    console.log("running http://localhost:5000/");
})

