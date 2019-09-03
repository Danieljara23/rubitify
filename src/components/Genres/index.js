import React, { Component } from 'react'
import { connect } from 'react-redux';


class RandomSongs extends Component {
    


    render() {
        const randomAlbums= this.props.artist && fetch(`https://rubytify.herokuapp.com/api/v1/albums/${this.props.artist}/songs`)
                                                    .then( res => res.json())
                                                    .then( songs => console.log(songs) )
        console.log(randomAlbums)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        artist: state.artists.artist
    }
}

export default connect( mapStateToProps )(RandomSongs)