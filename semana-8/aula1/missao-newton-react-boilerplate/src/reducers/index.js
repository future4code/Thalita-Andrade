import { combineReducers } from "redux";
import tasksReducer from './Tasks'

const rootReducer = combineReducers({
    Tasks: tasksReducer, 
});

export default rootReducer;
