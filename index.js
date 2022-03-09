const express = require("express")
const app=express()
app.get('/',(req,res)=>{
    console.log("index page logged in logs")
    res.send("<h1>WELCOME TO THE NODE JS APP</h1>")
})
app.get('/about',(req, res)=>{
    console.log("About Page logged in the logs")
    res.send("<h1> this is about page</h1>")
})
app.listen(3000);