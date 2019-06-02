import { TodosActions } from "./actions";
import { Reducer } from "redux";

type InitialState = {
    data: any,
    isLoading: boolean,
    error:undefined
}

export const initialState = {
    data: undefined,
    isLoading: false,
    error: undefined
}

export const reducer: Reducer<InitialState, TodosActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'FIND_TODOS_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'FIND_TODOS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: undefined,
                data: action.payload
            }
        case 'ADD_TODO_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: undefined,
                data: action.payload
            }
        case 'DELETE_TODO_REQUEST':
            return{
                ...state,
                isLoading:true,
                
            }
        case 'DELETE_TODO_SUCCESS':
            return{
                ...state,
                isLoading:false,
                error:undefined,
                data: action.payload
            }
        
        default:
            return state;
    }
}
