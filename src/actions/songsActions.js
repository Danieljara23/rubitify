import { FETCH_SONGS, FETCH_SONG, FETCH_RANDOM_SONG } from "./types";

export const fetchSongs = (params) => dispatch => {
    fetch(`https://rubytify.herokuapp.com/api/v1/albums/${params.id}/songs`)
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
    fetch(`https://rubytify.herokuapp.com/api/v1/genres/${randomSong}/random_song`)
    .then( res => res.json())
    .then( song => dispatch({
        type: FETCH_RANDOM_SONG,
        payload: song.data.preview_url
    }))
}