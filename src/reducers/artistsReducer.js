import { FETCH_SONGS, FETCH_ARTISTS } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    artists: []
}

export default function( state = initialState, action){
    switch(action.type){
        case FETCH_ARTISTS:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}