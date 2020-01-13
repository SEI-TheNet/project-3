import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'

const Nave = () => {
    return (
      <div className="Nav">

  <Navbar bg="light" expand="lg">
  <Navbar.Brand to="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav.Link to="/Parks">Parks</Nav.Link>
  <Nav.Link eventKey="/Exper">Experiences</Nav.Link>

  </Navbar.Collapse>
</Navbar>

       
        </div>
        
     
    );
}

export default Nave