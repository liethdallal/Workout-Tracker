const express = require('express')
const app = express()
require('dotenv').config();
require('./connection/db')
const PORT = process.env.PORT 
const workoutRoutes = require('./routes/workoutsrouter')

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})