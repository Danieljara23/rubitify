import React, { useState, useEffect }from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
//import { fetchArtists } from '../../actions/artistsActions';
import artistsReducer from '../../reducers/artistsReducer';
import { FETCH_ARTISTS } from '../../actions/types';

const Artists = ({ artistsReducer }) => {
    //const [artists, setArtists] = useState([]);
       
    const artists = useSelector(state => state.artists)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: FETCH_ARTISTS})
        console.log(artists)
    }, [])

    return (
        <div>
            <h2>Artists Works</h2>
        </div>
    )
}


export default connect(null, { artistsReducer })(Artists);
