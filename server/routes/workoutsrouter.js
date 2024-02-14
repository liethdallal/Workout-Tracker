const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workoutController')

router.get('/', workoutController.getAllWorkouts)

router.get('/:id', workoutController.getOneWorkout)

router.post('/', workoutController.postNewWorkout)

router.patch('/:id', workoutController.updateWorkout)

router.delete('/:id', workoutController.deleteWorkout)

module.exports = router