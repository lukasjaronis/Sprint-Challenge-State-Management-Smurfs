import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';

// fetching
export const fetchPosts = () => (dispatch) => {
    dispatch({ type: FETCH_POSTS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => { console.log(`ACTION INDEX`,res)
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res})
      })
      .catch(error => 
        dispatch({type: FETCH_POSTS_FAIL, payload: error.response})
        )
  };
  
  // adding
  export const addPost = (post) => (dispatch) => {
    axios 
      .post('http://localhost:3333/smurfs', post)
      .then (res => {
        dispatch({ 
          type: ADD_POST, payload: res});
      })
      .catch(error => 
        dispatch({type: ADD_POST_FAIL, payload: error.response})
        )
    }