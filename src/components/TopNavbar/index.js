import React, { Component } from 'react'
import {  Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './styles.css'

class TopNavbar extends Component {
  state = {
    url: localStorage.getItem("url")
  }

  setUrl = () => {
    localStorage.setItem("url", this.state.url)
  }

  render() {
    const url = localStorage.getItem("url")
    
    return (
      <div>             
        <Navbar bg="dark"  fixed="top">
          <Navbar.Brand href="#home">Rubitify</Navbar.Brand>
          <>
            {
              url != "" && (
                <Nav className="mr-auto ml-auto">
                  {/* <Link to={"/"}>Home</Link>
                  <Link to="/artists">Artists</Link>
                  <Link to="/genres">Genres</Link> */}
                  <NavLink exact to={"/"}>Home</NavLink>
                  <NavLink to="/artists">Artists</NavLink>
                  <NavLink to="/genres">Genres</NavLink>

                </Nav>
              )
            }
          </>

          <form onSubmit={this.setUrl}>
            <input 
              type="text" 
              placeholder="API url" 
              size="40"
              onChange={(value) => { this.setState({ url: value.target.value }) }}
              value={this.state.url}
            />
          </form>
        </Navbar>
      </div>
    )
  }
}

export default TopNavbar