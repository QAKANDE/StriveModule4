import React, { Component } from 'react';
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Card extends Component {
   
    render() { 
        return ( 
            
        <div>
            <Col>

            <img src={this.props.source}/>
   
        <p>{this.props.title}</p>
            </Col>
        </div>
         );
    }
}
 
export default Card;