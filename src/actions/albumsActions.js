import { FETCH_ALBUMS } from "./types";

export const fetchAlbums = (params) => dispatch => {
    console.log("Fetching albums...!", params.id);
    fetch(`https://rubytify.herokuapp.com/api/v1/artists/${params.id}/albums`)
    .then( res => res.json())
    .then( albums => dispatch({
        type: FETCH_ALBUMS,
        payload: albums
    }))
}