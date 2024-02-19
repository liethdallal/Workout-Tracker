import { useWorkoutsContext } from "../hooks/UseWorkoutsContext"

//date fns 
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({workout}){
    const { dispatch } = useWorkoutsContext()

    async function handleClick(){
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT', payload:json})
        }
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (lb): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails