const express= require('express')
const app= express()
const ejs=require('ejs')
const path=require('path')
const expressLayout=require('express-js-layouts')
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
res.send('hello From server')
})
// set template engine
app.use(expressLayout)
app.use('views','')
app.listen(PORT, ()=>{
console.log(` listening on port ${PORT}`)
})