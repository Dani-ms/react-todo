import todosapi from "./api";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../store";
import { TodosActions } from "./actions";

type TodosThunk<R> = ThunkAction<R, StoreState, undefined, TodosActions>

export function findTodos(): TodosThunk<void> {
    return (dispatch) => {
        dispatch({
            type: 'FIND_TODOS_REQUEST'
        })

todosapi.findTodos().then( (todos) => {
        dispatch({
            type: 'FIND_TODOS_SUCCESS',
            payload:todos
        
        }) 
        
    }).catch( (error) => {
        dispatch({
            type: 'FIND_TODOS_FAILURE',
            error: error
        })
    })

    }
}

export function addTodos(input) {
    return(dispatch:Dispatch) => {
        dispatch({
            type: ADD_TODO_REQUEST
        })

    todosapi.addTodo(input).then((todos) =>{
            dispatch({
                type:ADD_TODO_SUCCESS,
                payload:todos
            })
        }).catch( (error) => {
            dispatch({
                type:ADD_TODO_FAILURE,
                error: error
            })
        })
    }
}

export function deleteTodos(button){
    return(dispatch) => {
        dispatch({
            type: DELETE_TODO_REQUEST
        })
    todosapi.deleteTodo(button).then((todos) =>{
        dispatch({
            type:DELETE_TODO_SUCCESS,
            payload:todos
        })
    }).catch( (error) => {
        dispatch({
            type:DELETE_TODO_FAILURE,
            error:error
        })
    })

    }
}
