import React, { Component } from 'react';
import "./Songs.css"
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
class Songs extends Component {
    render() { 
        return ( 
            <div className="card col-sm-3 col-md-2" >
            <a href='/'>
              <img src={this.props.image} class="card-img-top" alt="..."/>
            </a>
              <div className="card-body">
        <Link  to={'/albumpage/' + this.props.artist} className="card-text">{this.props.title}</Link>
              </div>
          </div>
         );
    }
}
 
export default Songs;