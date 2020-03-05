import axios from 'axios';

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL';
// export const FETCH_MOVIE_IMG_SUCCESS = 'FETCH_MOVIE_IMG_SUCCESS';
// export const FETCH_MOVIE_IMG_FAIL = 'FETCH_MOVIE_IMG_FAIL';

// google api key - AIzaSyDsd-sbL87BbRkkoPULq8C8HCmf2kkNxls

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

// export const fetchMovieImg = movieName => dispatch => {
//     axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDsd-sbL87BbRkkoPULq8C8HCmf2kkNxls&cx=008720248914585967468:wztetgyxeuz&q=howls+moving+castle&searchType=image`)
//         .then(res => {
//             dispatch({
//                 type: FETCH_MOVIE_IMG_SUCCESS,
//                 payload: res.data.items[0].link
//             })
//             console.log(res);
//         })
//         .catch(err => {
//             dispatch({
//                 type: FETCH_MOVIE_IMG_FAIL,
//                 payload: err
//             })
//         })
// }