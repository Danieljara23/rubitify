import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux';
import RandomSuggest from './randomSuggest';

class Player extends Component {
    render() {
        return (
            this.props.preview_url ? (
                <div className="player-container">
                    <audio src={this.props.preview_url} controls autoPlay>	
                        <p>Fallback content goes here.</p>
                    </audio>
                    <RandomSuggest/>
                </div>
            ):(
                <div className="player-container">
                    <audio src="" controls>	
                        <p>Fallback content goes here.</p>
                    </audio>
                </div>
            )
            
        )
    }
}

const mapStateToProps = state => {
    return{
        preview_url: state.artists.preview_url
    }
}

export default connect( mapStateToProps )(Player)
