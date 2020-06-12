import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap'
class Genre extends Component {
    render() { 
       return(
           <>
        <div className='d-flex d-inline'>
            <h3 className= 'mx-2'>TV SHOWS</h3>
            <Dropdown className = 'dropdown'>
            <Dropdown.Toggle  id="dropdown-basic">
        Genre
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdownmenu">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
           </>
       )
    }
}
 
export default Genre;