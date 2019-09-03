import { FETCH_SONGS, FETCH_ARTISTS, FETCH_ALBUMS } from '../actions/types';

const initialState = {
    data: [],
    albums: [],
    item: {},
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
        default:
            return state;
    }
}