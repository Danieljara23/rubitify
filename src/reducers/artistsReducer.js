import { FETCH_SONGS, FETCH_ARTISTS, FETCH_ALBUMS, FETCH_SONG } from '../actions/types';

const initialState = {
    data: [],
    albums: [],
    item: {},
    preview_url: "",
    songs: [],
    artists: []
}

export default function( state = initialState, action){
    switch(action.type){
        case FETCH_ARTISTS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        case FETCH_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        case FETCH_SONG:
            return {
                ...state,
                preview_url: action.payload
            }
        default:
            return state;
    }
}