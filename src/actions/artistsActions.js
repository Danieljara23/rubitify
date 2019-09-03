import { FETCH_ARTISTS } from "./types";

export const  fetchArtists = () =>  dispatch => {
    console.log("fetching...!")
    fetch('https://rubytify.herokuapp.com/api/v1/artists')      
    .then( res => res.json())
    .then( artists => dispatch({
        type: FETCH_ARTISTS,
        payload: artists
    }))

}

