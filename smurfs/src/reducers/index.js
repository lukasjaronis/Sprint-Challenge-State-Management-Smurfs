 
import {
    FETCH_POST_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL, 
   
  } from '../actions';

  const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {



        case FETCH_POST_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCH_POSTS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADD_POST || ADD_POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }

            case ADD_POST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }
        default:
            return state
    }
} 
        
    export default reducer; 