import { FETCH_SONGS, FETCH_SONG } from "./types";

export const fetchSongs = (params) => dispatch => {
    console.log("Fetching SONGS...!", params.id);
    fetch(`https://rubytify.herokuapp.com/api/v1/albums/${params.id}/songs`)
    .then( res => res.json())
    .then( songs => dispatch({
        type: FETCH_SONGS,
        payload: songs
    }))
}

export const playSong = (preview_url) => dispatch => {
    console.log("Fetching to play song...", preview_url);
    dispatch({
        type: FETCH_SONG,
        payload: preview_url
    })
}