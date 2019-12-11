import { FETCH_GENRES } from "./types";

export const fetchGenres = () => dispatch => {
    const url = localStorage.getItem("url")
    fetch(`${url}/genres`)
    .then(res => res.json())
    .then( genres => dispatch({
        type: FETCH_GENRES,
        payload: genres
    }) )
}