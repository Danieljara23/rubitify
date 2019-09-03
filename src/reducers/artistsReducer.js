import { FETCH_SONGS, FETCH_ARTISTS } from '../actions/types';

const initialState = {
    data: [],
    item: {},
    artists: []
}

export default function( state = initialState, action){
    switch(action.type){
        case FETCH_ARTISTS:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}