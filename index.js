// modules
const express = require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
// import files
const frontRouts=require('./routes/front.route')

// app instance
const app=express()

// view engine
app.set('view engine','hbs')

// middleware
app.use(bodyParser.urlencoded({extended:true}))
// routes
app.use(frontRouts)

// database connect
mongoose.connect('mongodb://127.0.0.1:27017/wd11amcrud')
.then(function(){
    console.log("database connected");
}).catch((err)=>{
    console.log(err.message);
})

app.listen(8000,function(){
    console.log("port is listening on port 8000");
})