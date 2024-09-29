const express = require('express')
const app = express()
const path = require('path')
 
app.use(express.static(path.join(__dirname,"public")))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","main.html"))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})
app.get('/main',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","main.html"))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","contact.html"))
})


app.listen(3000,(req,res)=>{
    console.log('server is running on port 3000')
})