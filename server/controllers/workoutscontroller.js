const Workout = require('../models/workoutModel')

//GET all workouts
function getAllWorkouts(req, res){
    res.json({mssg:'GET all workouts'})
}

//GET single workout by id
function getOneWorkout(req,res){
    res.json({mssg: 'GET a single workout'})
}

// POST a new Workout 
async function postNewWorkout(req,res){
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//DELETE a new Workout
function deleteWorkout(req,res){
    res.json({mssg: 'DELETE a workout'})

}

//UPDATE a new workout
function updateWorkout(req,res){
    res.json({mssg: 'UPDATE a workout'})

}


module.exports = {getAllWorkouts, getOneWorkout, postNewWorkout, deleteWorkout, updateWorkout}