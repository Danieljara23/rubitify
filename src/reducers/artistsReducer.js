import { FETCH_SONGS, 
    FETCH_ARTISTS, 
    FETCH_ARTIST, 
    FETCH_ALBUMS, 
    FETCH_SONG, 
    SET_ALBUMS, 
    SET_ALBUM, 
    FETCH_RANDOM_SONG, 
    FETCH_GENRES} from '../actions/types';

const initialState = {
    data: [],
    albums: [],
    item: {},
    preview_url: [],
    songs: [],
    artists: [],
    artist: 0,
    genres:[],
    randomAlbums: [],
    pickedAlbum : []
}

export default function( state = initialState, action){
    switch(action.type){
        case FETCH_ARTISTS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_ARTIST:
            return {
                ...state,
                artist: action.payload
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
        case SET_ALBUMS:
            return {
                ...state,
                randomAlbums: action.payload
            }
        case SET_ALBUM:
            return {
                ...state,
                pickedAlbum: action.payload
            }
        case FETCH_RANDOM_SONG:
            return {
                ...state,
                preview_url: action.payload
            }
        case FETCH_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}