import React from 'react'
import {  Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles.css'

 const TopNavbar = () => {
    return (
        <div>
            
              <Navbar bg="dark"  fixed="top">
                <Navbar.Brand href="#home">Rubitify</Navbar.Brand>
                <Nav className="mr-auto ml-auto">
                  {/* <Link to={"/"}>Home</Link>
                  <Link to="/artists">Artists</Link>
                  <Link to="/genres">Genres</Link> */}
                  <NavLink exact to={"/"}>Home</NavLink>
                  <NavLink to="/artists">Artists</NavLink>
                  <NavLink to="/genres">Genres</NavLink>

                </Nav>
              </Navbar>
              
            
        </div>
    )
}

export default TopNavbar