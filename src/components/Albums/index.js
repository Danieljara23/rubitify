import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, setRandomAlbums, setAlbum } from '../../actions/albumsActions';
import { Link } from 'react-router-dom';
import '../Artists/styles.css'

const MAX_RANDOM_ALBUMS = 4;

class Albums extends Component {

 
    componentWillMount(){
        const { match: {  params } } = this.props;
        console.log("Params:", params)
        this.props.fetchAlbums(params);
    }

    pickRandomAlbums(){
        const albums = this.props.albums.data;
        const totalItems = albums.length;
        let randomAlbums = [];
        for (let i = 0; i <= MAX_RANDOM_ALBUMS; i++){
            let rand = Math.random();
            let randIndex = Math.floor(rand * totalItems);
            let randomAlbum = albums[randIndex];
            if(randomAlbums.indexOf(randomAlbum) == -1){
                randomAlbums.push(randomAlbum);
            }
        }
        console.log("Random Albums:", randomAlbums)
        this.props.setRandomAlbums(randomAlbums);
    }

    setAlbum(id){
        const pickedUpAlbum = this.props.albums.data.filter((item) => {
            return item.id === id;
        })
        this.props.setAlbum(pickedUpAlbum)
        console.log("Album Picked:", pickedUpAlbum);
    }
    
    render() {
        const albumItems = this.props.albums && this.props.albums.data && this.props.albums.data.map( album => (
            <div className="album-container" key={album.id} onClick={() => {this.pickRandomAlbums(); this.setAlbum(album.id)}}>
                <Link to={`/albums/${album.id}/songs`}>
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

export default connect(mapStatetoProps, { fetchAlbums, setRandomAlbums, setAlbum})(Albums)
