const initialState = {
    task: []
}

export const planner = (state = initialState, action) => {
    switch (action.type) {
        case 'PEGAR_TAREFAS':
                return {...state, task: action.payload.task};
            default:
                return state;
    }
}

export default planner;