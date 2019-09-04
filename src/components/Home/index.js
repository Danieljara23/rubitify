import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux';
import { fetchRandomSong } from '../../actions/songsActions';
import { fetchGenres } from '../../actions/genresActions';
import Button from 'react-bootstrap/Button';

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
            <>
                {
                    this.props.genres && this.props.genres.data ? (
                    <div className="home-container">
                        <Button variant="success" onClick={() => this.playSong()}>Let's try a song</Button>
                    </div>
                    ):(null)
                }
            </>
        )
    }
}

const mapPropsToState = state => {
    return{
        genres: state.artists.genres
    }
}

export default connect(mapPropsToState, {fetchRandomSong, fetchGenres})(Home)
