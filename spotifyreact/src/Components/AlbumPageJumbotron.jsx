import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'

class AlbumPageJumbotron extends Component {
  
    render() { 
        return (
        <Jumbotron style={{background:url(this.props.artistImage)}}>
  <h1>{this.props.artistName}</h1>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        );
    }
}
 
export default AlbumPageJumbotron;