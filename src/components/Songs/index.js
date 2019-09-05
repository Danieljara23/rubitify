import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSongs, playSong } from '../../actions/songsActions';
import './styles.css'

class Songs extends Component {

    componentWillMount(){
        const { match: { params }} = this.props
        this.props.fetchSongs(params);
        
    }

    componentDidUpdate(nextProps){
        if(nextProps.match.params.id !== this.props.match.params.id){
            const { match: { params }} = this.props
            this.props.fetchSongs(params);
        }
    }
    
    componentWillReceiveProps(nextProps){
    }

    clickToPlay(preview_url){
        this.props.playSong(preview_url)
    }

    render() {
        const songsItems = this.props.songs && this.props.songs.data && this.props.songs.data.map(song => (
            <div className="song-container" key={song.id}>
                {
                    song.preview_url != null ? (
                        <p className="available-song" onClick={()=> this.clickToPlay(song.preview_url)}>{song.name}</p>
                    ):(
                        <p>No hay preview de la canción</p>
                    )
                }
            </div>
        ))
        return (
            <>
                {this.props.album.length > 0 && (
                    <div className="album-info">
                        <div className="album-image">
                            <img src={this.props.album[0].image}/>
                        </div>
                        <div className="album-data">
                            <h3>{this.props.album[0].name}</h3>
                        </div>
                    </div>
                )}
                <div className="songs-container">
                    {songsItems}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.artists.songs,
    album: state.artists.pickedAlbum
})

export default connect( mapStateToProps, { fetchSongs, playSong })(Songs)
