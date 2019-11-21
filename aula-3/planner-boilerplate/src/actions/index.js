import axios from "axios"

const createTask = (text, day) => {
    return {
        type: 'ADICIONAR_TAREFAS',
        payload: {
            text: text,
            day: day,
        }
    }
}

const getTasks = (tasks) => {
    return {
        type: 'PEGAR_TAREFAS',
        payload: {
           tasks: tasks
        }
    }
}

export const getTasksAPI = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-thalita`,
        dispatch(getTasks(response.data.tasks))
    )
    console.log("Tarefa", response)
}


export const createTaskAPI = () => async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-thalita`, 
        dispatch(createTask(response.data.text.day))
    )

    console.log("Criar", response)
}

