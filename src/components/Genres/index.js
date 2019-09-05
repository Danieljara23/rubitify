import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchGenres } from '../../actions/genresActions';
import '../../App.css'
import './styles.css'

class Genres extends Component {

    componentDidMount(){
        this.props.fetchGenres();
    }
    
    render() {

        return (
            <div className="genres-container">
                <h2 className="white-title">Genres</h2>
                <div className="genres-list-container">
                    {
                        this.props.genres && this.props.genres.data ?(
                            this.props.genres.data.map(item => 
                                <div className="genre-item" key={item+Math.floor(Math.random)}>
                                    <p>{item.replace('_', ' ').replace('-', ' ')}</p>
                                </div>
                            )
                        ):(
                            null
                        )
                    
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        genres: state.artists.genres
    }
}

export default connect( mapStateToProps, {fetchGenres } )(Genres)