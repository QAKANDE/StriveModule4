import React, { Component } from 'react';
import {Navbar,Nav,InputGroup,FormControl} from 'react-bootstrap'
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <div className="d-flex my-3 my-lg-0">
            <i className="fa fa-search icons mr-3"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons mx-3"></i>
        <i className="fa fa-user icons mx-3"></i>
      </div>
            </Navbar.Collapse>
            </Navbar>
            </>
         );
    }
}
 
export default NavBar;