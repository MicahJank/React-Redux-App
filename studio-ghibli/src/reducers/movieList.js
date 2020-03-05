// import action variables
 import { FETCH_MOVIES_FAIL, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_PENDING } from '../actions'; 


const initialState = {
    movies: [],
    error: '',
    isPending: false
}

export const movieListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                isPending: true,
                error: ''
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                error: '',
                isPending: false
            }
        case FETCH_MOVIES_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state;
    }

}
