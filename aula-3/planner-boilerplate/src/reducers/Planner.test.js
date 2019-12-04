import planner from './Planner';

describe("Planner Reducer", () => {
    test("PEGAR TAREFAS", () => {
        const testAction = {
            type: 'PEGAR_TAREFAS',
            payload: {
                text: 'Nova Tarefa',
                day: 'Segunda'
            }
        };
        const newState = planner(undefined, testAction);
        expect(newState.task).toHaveLength(1);
        expect(newState.task [0].text).toBe("Nova Tarefa");
    });
});