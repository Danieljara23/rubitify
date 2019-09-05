import React, { Component } from 'react'
import { connect } from 'react-redux';
import './styles.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link  } from 'react-router-dom';
import { setAlbum } from '../../actions/albumsActions';

class RandomSuggest extends Component {

    setAlbum(pickedAlbum){
        this.props.setAlbum([pickedAlbum])
    }

    render() {
        return (
            <div>
                {
                    this.props.randomAlbums.length > 0 && (<Dropdown className="custom-dropdown">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Ver albums sugeridos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {this.props.randomAlbums && this.props.randomAlbums.map( item => (
                                <Dropdown.Item key={item.id} as="div" onClick={() => this.setAlbum(item)}><Link to={`/albums/${item.id}/songs`}>{item.name}</Link></Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        randomAlbums: state.artists.randomAlbums
    }
}

export default connect(mapStateToProps, {setAlbum})(RandomSuggest)