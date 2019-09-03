import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from '../Home/index';
import Artists from '../Artists/index';
import Albums from '../Albums/index';
import Songs from '../Songs/index';
import Genres from '../Genres';
import './styles.css'

 const TopNavbar = () => {
    return (
        <div>
            <Router>
              <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Rubitify</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to={"/"}>Home</Link>
                  <Link to="/artists">Artists</Link>
                  <Link to="/genres">Genres</Link>

                </Nav>
              </Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/artists" component={Artists} />
                <Route path="/genres" component={Genres} />
                <Route path="/artists/:id/albums" component={Albums} />
                <Route path="/albums/:id/songs" component={Songs} />
              </Switch>
            </Router>
        </div>
    )
}

export default TopNavbar