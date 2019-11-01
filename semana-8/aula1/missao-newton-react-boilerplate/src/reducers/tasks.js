const initialState =  {
    allTasks: [],
    currentTaskTitle: "",
}

export const tasks = (state = initialState, action) => {
    switch (action.type) {

        case 'CREATE_TASK':
            const newTask = {
                id: action.payload.id,
                text: state.currentTaskTitle, 
                completed: false
            };

            const newTasks = [...state.allTasks, newTask]

            return { ...state, allTasks: newTasks, currentTaskTitle: "" };

        case 'UPDATE_TASK_TITLE':

            return { ...state, currentTaskTitle: action.payload.newTitle};
        
        case 'COMPLETE_TASK':

            const indexToEdit = state.allTasks.findIndex(
                task => task.id === action.payload.id
            );
            const newAllTasks = [...state.allTasks];

            const oldTaskValue = state.allTasks[indexToEdit].done;

            newAllTasks[indexToEdit].done = !oldTaskValue;

            return { ...state, allTasks: newAllTasks};

        case 'DELETE_TASK':
            const indexToRemove = state.allTasks.findIndex(
                task => task.id === action.payload.id
            );

            const allTasksWithoutRemoved = [...state.allTasks];

            allTasksWithoutRemoved.splice(indexToRemove, 1);

            return { ...state, allTasks: allTasksWithoutRemoved};
            
        case 'SET_TASKS': 
            return { ...state, allTasks: action.payload.allTasks };
        
        default: 
            return state;
    }
}

export default tasks;