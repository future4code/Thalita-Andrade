import { combineReducers } from "redux";
import addTask from './addTask';
import allTasks from './allTasks';
import deleteTask from './deleteTask';
import completedTask from './completedTask';

const rootReducer = combineReducers({
    allTasks: allTasks,
    addTask: addTask,
    deleteTask: deleteTask,
    completedTask: completedTask,
});

export default rootReducer;
