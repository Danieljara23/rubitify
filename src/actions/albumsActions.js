import { FETCH_ALBUMS, SET_ALBUMS, SET_ALBUM } from "./types";

export const fetchAlbums = (params) => dispatch => {
    fetch(`https://rubytify.herokuapp.com/api/v1/artists/${params.id}/albums`)
    .then( res => res.json())
    .then( albums => dispatch({
        type: FETCH_ALBUMS,
        payload: albums
    }))
}

export const setRandomAlbums = (randomAlbums) => dispatch => {
     dispatch({
        type: SET_ALBUMS,
        payload: randomAlbums
    })
}

export const setAlbum = (pickedAlbum) => dispatch => {
    dispatch({
        type: SET_ALBUM,
        payload: pickedAlbum
    })
}