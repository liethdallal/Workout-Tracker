const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//GET all workouts
async function getAllWorkouts(req, res){
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//GET single workout by id
async function getOneWorkout(req,res){
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
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
async function deleteWorkout(req,res){
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//UPDATE a new workout
async function updateWorkout(req,res){
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)

}


module.exports = {getAllWorkouts, getOneWorkout, postNewWorkout, deleteWorkout, updateWorkout}