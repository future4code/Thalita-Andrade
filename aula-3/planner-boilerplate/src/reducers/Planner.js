const initialState = {
    task: []
}

export const planner = (state = initialState, action) => {
    switch (action.type) {
        case 'ADICIONAR_TAREFAS':
            return {...state, task: action.payload.text};
        case 'PEGAR_TAREFAS':
                return {...state, task: action.payload.task};
            default:
                return state;
    }
}

export default planner;