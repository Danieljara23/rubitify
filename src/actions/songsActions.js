import { FETCH_SONGS, FETCH_SONG, FETCH_RANDOM_SONG } from "./types";

export const fetchSongs = (params) => dispatch => {
    const url = localStorage.getItem("url")
    fetch(`${url}/albums/${params.id}/songs`)
    .then( res => res.json())
    .then( songs => dispatch({
        type: FETCH_SONGS,
        payload: songs
    }))
}

export const playSong = (preview_url) => dispatch => {
    dispatch({
        type: FETCH_SONG,
        payload: preview_url
    })
}

export const fetchRandomSong = (randomSong) => dispatch => {
    const url = localStorage.getItem("url")
    fetch(`${url}/genres/${randomSong}/random_song`)
    .then( res => res.json())
    .then( song => dispatch({
        type: FETCH_RANDOM_SONG,
        payload: song.data.preview_url
    }))
}