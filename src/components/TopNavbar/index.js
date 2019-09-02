import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from '../Home/index';
import Artists from '../Artists/index';
import './styles.css'

 const TopNavbar = () => {
    return (
        <div>
            <Router>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Rubitify</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to={"/"}>Home</Link>
                  <Link to="/artists">Artists</Link>
                </Nav>
              </Navbar>

              <Route exact path="/" component={Home} />
              <Route path="/artists" component={Artists} />
            </Router>
        </div>
    )
}

export default TopNavbar