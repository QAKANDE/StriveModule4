import React, { Component } from 'react';
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Card extends Component {
   
    render() { 
        return ( 
            
        <div>
            <Col>
            <Link to={`/details/${this.props.id}`}> 
            <img src={this.props.source}/>
            </Link>
        <p>{this.props.title}</p>
            </Col>
        </div>
         );
    }
}
 
export default Card;