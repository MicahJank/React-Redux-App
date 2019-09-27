import axios from 'axios';

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL';


export const fetchMovies = () => dispatch => {
    dispatch({ type: FETCH_MOVIES_PENDING });
    axios.get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            dispatch({
                type: FETCH_MOVIES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: FETCH_MOVIES_FAIL,
            payload: err
        }))
}