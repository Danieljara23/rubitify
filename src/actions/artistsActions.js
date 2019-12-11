import { FETCH_ARTISTS, FETCH_ARTIST } from "./types";

export const  fetchArtists = () =>  dispatch => {
    const url = localStorage.getItem("url")
    fetch(`${url}/artists`)      
    .then( res => res.json())
    .then( artists => dispatch({
        type: FETCH_ARTISTS,
        payload: artists
    }))
}

export const setArtist = (id) => dispatch => {
    dispatch({
        type: FETCH_ARTIST,
        payload: id
    })
}
