import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/albumsActions';
import { Link } from 'react-router-dom';
import '../Artists/styles.css'
class Albums extends Component {

    
    componentWillMount(){
        const { match: {  params } } = this.props;
        console.log("Params:", params)
        this.props.fetchAlbums(params);
    }

    
    
    render() {
        const albumItems = this.props.albums && this.props.albums.data && this.props.albums.data.map( album => (
            <div className="album-container" key={album.id}>
                <Link to={`/artists/${album.id}/albums`}>
                    <img src={album.image} className="artist-image"/>
                    <div className="name-container">
                        <h4 className="artist-name">{album.name}</h4>
                    </div>
                </Link>
            </div>
        ))
        console.log("Album props:", this.props.albums)
        return (
            <>
                <div className="container top-margin">
                    <div className="row albums-container">
                        {albumItems}
                    </div>
                </div>
            </>
        )
    }
}

const mapStatetoProps = state => ({
    albums: state.artists.albums
})

export default connect(mapStatetoProps, { fetchAlbums})(Albums)
