import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// react hot-toast
import toast, { Toaster } from 'react-hot-toast';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'




const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const  response = await fetch('/api/workouts/' + workout._id , {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <p>
          <strong>reps : </strong>
          {workout.reps}
        </p>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>

        <span
          className="material-symbols-outlined"
          id="delete-icon"
          onClick={() => handleClick(toast.success("Deleted successfully"))}
        >
          delete
        </span>
        <Toaster />
      </div>
    );
}

export default WorkoutDetails