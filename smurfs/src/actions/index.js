import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';


// fetching posts
export const fetchPosts = () => (dispatch) => {
    dispatch ({type: FETCH_POSTS });
    axios
    .get('http://localhost:3333/smurfs')
    .then (response => {
        console.log('action', response)
        dispatch ({ type: FETCH_POSTS_SUCCESS, payload: response });
    })
    .catch(error => 
        dispatch ({ type: FETCH_POSTS_FAIL, payload: error.response })
        )
};

// adding posts

export const addPost = (post) => (dispatch) => {
    axios
    .post('http://localhost:3333/smurfs', post)
    .then(response => {
        dispatch ({ type: ADD_POST_SUCCESS, payload: response });
    })
    .catch(error => 
        dispatch ({ type: ADD_POST_FAIL, payload: error.response })
        )
};