import React, { Component } from 'react';
import {Col,Image} from 'react-bootstrap'
class Movie extends Component {
    render() { 
        return ( 
            <Col>
            <Image fluid src={this.props.poster}/>
            </Col>
         );
    }
}
 
export default Movie;