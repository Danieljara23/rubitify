import { FETCH_ARTISTS, FETCH_SONGS, FETCH_SONG } from "./types";

export const  fetchArtists = () =>  dispatch => {
    fetch('https://rubytify.herokuapp.com/api/v1/artists')      
    .then( res => res.json())
    .then( artists => dispatch({
        type: FETCH_ARTISTS,
        payload: artists
    }))

}

