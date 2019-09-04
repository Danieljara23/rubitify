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
        console.log(this.props)
        // if(this.props.genres && this.props.genres.data ){
        //     const genresList = this.props.genres.data;
        //     console.log("GenresList:", JSON.stringify(genresList))
        //     let normalizedGenres = [];
        //     // genresList.map(item => {
        //     //     console.log(item.replace('_',' '))
        //     //     normalizedGenres.push(item.replace('_',' '))
        //     // })
        //     // console.log(genresList)
        // }

        return (
            <div className="genres-container">
                <h2 className="white-title">Genres</h2>
                <div className="genres-list-container">
                    {
                        this.props.genres && this.props.genres.data ?(
                            this.props.genres.data.map(item => 
                                <div className="genre-item">
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