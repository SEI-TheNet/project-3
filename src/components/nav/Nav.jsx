import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'

const Nave = () => {
    return (
      <div className="Nav">

  <Navbar bg="light" expand="lg">
  <Navbar.Brand to="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav.Link><NavLink to="/Parks">Parks</NavLink></Nav.Link>
  <Nav.Link><NavLink to="/Exper">Experiences</NavLink></Nav.Link>


  </Navbar.Collapse>
</Navbar>

       
        </div>
        
     
    );
}

export default Nave