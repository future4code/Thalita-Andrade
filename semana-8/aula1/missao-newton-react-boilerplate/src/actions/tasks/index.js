import axios from "axios";

const createTaskAction = (id) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            id: id,
        }
    };
};

export const updateTaskTitle = newTitle => ({
    type: 'UPDATE_TASK_TITLE',
    payload: {
        newTitle: newTitle,
    }
});

const completeTaskAction = id => ({
    type: 'COMPLETE_TASK',
    payload: {
        id: id
    }
});

const deleteTaskAction = id => ({
    type: 'DELETE_TASK',
    payload: {
        id: id
    }
});

const setTasks = allTasks => ({
    type: 'SET_TASKS',
    payload: {
        allTasks: allTasks
    }
})

export const fetchTasks = () => async (dispatch, getState) => {
    const response = await axios.get (
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/thalita/todos" 
    );
    console.log(response.data)
    dispatch(setTasks(response.data.todos));
};

export const createTask = () => async (dispatch, getState) => {
    const newTaskTitle =getState().tasks.currentTaskTitle;

    const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/thalita/todos",
        {
          text: newTaskTitle
        }
    );

    const { id } = response.data.todo

    dispatch(createTaskAction(id, newTaskTitle));
}

export const completeTask = (id) => async (dispatch, getState) => {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/thalita/todos/${id}/toggle`)

    dispatch(completeTaskAction(id));
}

export const deleteTask = (id) => async (dispatch, getState) => {
    await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/thalita/todos/${id}`)

    dispatch(deleteTaskAction(id));
}

export const markAllTasksAsDone = () => async (dispatch, getState) => {
    const allTasks = getState().tasks.allTasks;
    const undoneTasks = allTasks.filter(task => !task.done);
    const undoneTasksId = undoneTasks.map(task => task.id)

    for(let taskId of undoneTasksId) {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/thalita/todos/${taskId}/toggle`)
        dispatch(completeTaskAction(taskId));
    }
}
