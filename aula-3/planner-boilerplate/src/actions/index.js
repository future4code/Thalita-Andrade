import axios from "axios"

export const getTasks = tasks => {
    return {
        type: 'PEGAR_TAREFAS',
        payload: {
           tasks: tasks
        }
    }
}

export const getTasksAPI = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/generic/planner-thalita`,
        )
        dispatch(getTasks(response.data.tasks))
}


export const createTaskAPI = (text, day) => async dispatch => {
    const newTask = {
        text,
        day,
    }
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/generic/planner-thalita`, newTask
    )
    if (response.status === 200){
        dispatch(getTasksAPI())
    }
}

