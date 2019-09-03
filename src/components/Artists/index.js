import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artistsActions';
import './styles.css'

class Artists extends Component {

    componentWillMount(){
        this.props.fetchArtists();
    }
    render() {
        const artistsItems = this.props.artists && this.props.artists.data && this.props.artists.data.map( artist => (
            <div className="album-container" key={artist.id}>
                <img src={artist.image} className="artist-image"/>
                <div className="name-container">
                    <h4 className="artist-name">{artist.name}</h4>
                </div>
            </div>
        ));
        

        return (
            <>
                <div className="container top-margin">
                    <div className="row albums-container">
                        {artistsItems}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    artists: state.artists.data
})


export default connect(mapStateToProps, { fetchArtists })(Artists)
