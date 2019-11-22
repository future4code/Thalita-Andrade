const initialState = {
    task: []
}

export const planner = (state = initialState, action) => {
    switch (action.type) {
        case 'PEGAR_TAREFAS':
            const newTask = {
                id: new Date().getTime(),
                text: action.payload.text,
                day: action.payload.day
            };
                return {task: [...state.task, newTask] };;
            default:
                return state;
    }
}

export default planner;