function addTask() {
    return {
        type: 'ADD_TAREFA'
        payload: {
            text: text
        }
    }
}

function completeTask() {
    return {
        type: 'CONCLUIR_TAREFA'
        payload: {
            id: id
        }
    }
}

function deleteTask() {
    return {
        type: 'DELETAR_TAREFA'
        payload: {
            id: id
        }
    }
}


function allTasks() {
    return {
        type: 'TODAS_TAREFAS'
        payload: {
            filter: filter
        }
    }
}

function allPendingTasks() {
    return {
        type: 'TODAS_TAREFAS_PENDENTES'
        payload: {
            filter: filter
        }
    }
}

function allCompletedTasks() {
    return {
        type: 'TODAS_TAREFAS_CONCLUIDAS'
        payload: {
            filter: filter
        }
    }
}

function removeAllCompleteTask() {
    return {
        type: 'REMOVER_TODAS_TAREFAS_COMPLETAS'
        payload: {
            filter: filter
            
        }
    }
}

