import { combineReducers } from "redux";
import { reducer as todosReducer } from './todos/reducer'

export const rootReducer = combineReducers({
    todos: todosReducer
})