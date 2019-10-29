function addTask() {
    return {
        type: 'ADD_TAREFA',
        payload: {
            text: text
        }
    }
}

function completedTask() {
    return {
        type: 'CONCLUIR_TAREFA',
        payload: {
            id: id
        }
    }
}

function deleteTask() {
    return {
        type: 'DELETAR_TAREFA',
        payload: {
            id: id
        }
    }
}


function allTasks() {
    return {
        type: 'TODAS_TAREFAS',
        payload: {
            filter: filter
        }
    }
}

function allPendingTasks() {
    return {
        type: 'TODAS_TAREFAS_PENDENTES',
        payload: {
            filter: filter
        }
    }
}

function allCompletedTasks() {
    return {
        type: 'TODAS_TAREFAS_CONCLUIDAS',
        payload: {
            filter: filter
        }
    }
}

function RemoveAllCompletedTasks() {
    return {
        type: 'REMOVER_TODAS_TAREFAS_COMPLETAS',
        payload: {
            filter: filter
        }
    }
}

function markAllCompleteTasks() {
    return {
        type: 'MAARCAR_TODAS_TAREFAS_COMO_COMPLETAS',
        payload: {
            filter: filter
        }
    }
}


