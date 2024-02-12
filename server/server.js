const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req,res)=>{
    res.json({mssg: "Welcome to the app"})
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})