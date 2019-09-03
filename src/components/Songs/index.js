import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSongs, playSong } from '../../actions/songsActions';
import './styles.css'

class Songs extends Component {

    componentWillMount(){
        const { match: { params }} = this.props
        this.props.fetchSongs(params);
        
    }

    clickToPlay(preview_url){
        console.log(preview_url)
        this.props.playSong(preview_url)
    }

    render() {
        const songsItems = this.props.songs && this.props.songs.data && this.props.songs.data.map(song => (
            <div className="song-container" key={song.id}>
                {
                    song.preview_url != null ? (
                        <p onClick={()=> this.clickToPlay(song.preview_url)}>{song.name}</p>
                    ):(
                        <p>No hay preview de la canción</p>
                    )
                }
            </div>
        ))
        console.log(this.props.songs)
        return (
            <div className="songs-container">
                {songsItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.artists.songs
})

export default connect( mapStateToProps, { fetchSongs, playSong })(Songs)
