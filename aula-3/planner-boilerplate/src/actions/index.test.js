import axios from "axios";
import { getTasksAPI, createTaskAPI } from './index';

describe("planner actions", () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
    });

    const mockPlanner = {
        text: "Estudar React",
        day: "Segunda"
    };

    describe("getTasksAPI", () => {
        test("dispatch was called with the proper action", async () => {
            const mockPlanners = [mockPlanner];
            axios.get = jest.fn(() => ({
                data: mockPlanners
            }));

            const expectedAction = {
                type: 'PEGAR_TAREFAS',
                payload: {
                    planner: mockPlanners
                }
            };

            await getTasksAPI()(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);

        });
    });

    describe("createTaskAPI", () => {
        test("axios correct response is being handled", async () => {
            axios.post = jest.fn(() => ({
                status: 200
            }));

            const { text, day} = mockPlanner;

            await createTaskAPI(text, day)(mockDispatch);

            expect(axios.post).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-thalita', mockPlanner);

            expect(mockDispatch).toHaveBeenCalledTimes(1);
        });
    });
});