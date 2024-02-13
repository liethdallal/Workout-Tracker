//GET all workouts
function getAllWorkouts(req, res){
    res.json({mssg:'GET all workouts'})
}

//GET single workout by id
function getOneWorkout(req,res){
    res.json({mssg: 'GET a single workout'})
}

// POST a new Workout 
function postNewWorkout(req,res){
    res.json({mssg: 'POST a workout'})

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