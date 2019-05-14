import { FIND_TODO_REQUEST, FIND_TODO_FAILURE, FIND_TODO_SUCCESS, ADD_TODO_REQUEST, ADD_TODO_SUCCESS,ADD_TODO_FAILURE,DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE} from "./actions";
import todosapi from "../todos/api";


export function findTodos() {
    return (dispatch) => {
        dispatch({
            type: FIND_TODO_REQUEST
        })

todosapi.findTodos().then( (todos) => {
        dispatch({
            type: FIND_TODO_SUCCESS,
            payload:todos
        
        }) 
        
    }).catch( (error) => {
        dispatch({
            type: FIND_TODO_FAILURE,
            error: error
        })
    })

    }
}

export function addTodos(input) {
    return(dispatch) => {
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
