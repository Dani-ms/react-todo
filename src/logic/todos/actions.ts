import { Todo } from "./types";

export type TodosActions = {
    type: 'FIND_TODOS_REQUEST'
} | {
    type: 'FIND_TODOS_SUCCESS',
    payload: Todo[]
} | {
    type: 'FIND_TODOS_FAILURE',
    error: unknown
} | {
    type:'ADD_TODO_REQUEST',
    payload: Todo
} | {
    type: 'ADD_TODO_SUCCESS',
    payload: Todo[]
} | {
    type: 'ADD_TODO_FAILURE',
    error: unknown
} | {
    type:'DELETE_TODO_REQUEST',
    payload: Todo
} | {
    type:'DELETE_TODO_SUCCESS',
    payload: Todo[]
} | {
    type: 'DELETE_TODO_FAILURE',
    error: unknown
}