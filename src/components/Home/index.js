import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux';
import { fetchRandomSong } from '../../actions/songsActions';
import { fetchGenres } from '../../actions/genresActions';

class Home extends Component {

    componentDidMount(){
        this.props.fetchGenres();
    }

    playSong(){
        console.log(this.props)
        const genresArray = this.props.genres.data;
        const totalItems = genresArray.length;
        let randomIndex = Math.floor(Math.random() * totalItems)
        console.log(randomIndex)
        this.props.fetchRandomSong(genresArray[randomIndex]);
    }

    render() {
        return (
            <div className="home-container">
                <button onClick={() => this.playSong()}>Let's try a song</button>
            </div>
        )
    }
}

const mapPropsToState = state => {
    return{
        genres: state.artists.genres
    }
}

export default connect(mapPropsToState, {fetchRandomSong, fetchGenres})(Home)
