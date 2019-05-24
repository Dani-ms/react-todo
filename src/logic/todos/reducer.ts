import { ADD_TODO_REQUEST, FIND_TODO_REQUEST, FIND_TODO_SUCCESS, ADD_TODO_SUCCESS,DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS} from "./actions";

export const initialState = {
    data: undefined,
    isLoading: false,
    error: undefined
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FIND_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                data: action.payload
            }
        case ADD_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                data: action.payload
            }
        case DELETE_TODO_REQUEST:
            return{
                ...state,
                isLoading:true,
                
            }
        case DELETE_TODO_SUCCESS:
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
