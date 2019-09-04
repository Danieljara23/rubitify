import { FETCH_GENRES } from "./types";

export const fetchGenres = () => dispatch => {
    fetch('https://rubytify.herokuapp.com/api/v1/genres')
    .then(res => res.json())
    .then( genres => dispatch({
        type: FETCH_GENRES,
        payload: genres
    }) )
}