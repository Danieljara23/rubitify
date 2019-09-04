import React from 'react'
import {  Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles.css'

 const TopNavbar = () => {
    return (
        <div>
            
              <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Rubitify</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to={"/"}>Home</Link>
                  <Link to="/artists">Artists</Link>
                  <Link to="/genres">Genres</Link>

                </Nav>
              </Navbar>
              
            
        </div>
    )
}

export default TopNavbar