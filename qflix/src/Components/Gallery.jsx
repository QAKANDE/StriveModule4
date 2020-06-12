import React, { Component } from 'react';
import Movie from './Movie'
import {Row,Container} from 'react-bootstrap'

class Gallery extends Component {
    state = { 
        harryPotter:[],
        starWars:[],
        spiderMan:[]
     }
     url = "http://www.omdbapi.com/?i=tt3896198&apikey=809d53f5"
     componentDidMount = () => {
        Promise.all([
            fetch(this.url + "&s=harry%20potter")
              .then((response) => response.json())
              .then((responseObject) =>
                this.setState({ harryPotter: responseObject.Search })
              ),
            fetch(this.url + "&s=spider%20man")
              .then((response) => response.json())
              .then((responseObject) =>
                this.setState({ spiderMan: responseObject.Search })
              ),
            fetch(this.url + "&s=star%20wars")
              .then((response) => response.json())
              .then((responseObject) =>
                this.setState({ starWars: responseObject.Search })
              ),
          ]).catch((err) => {
              alert("err")
          })
     }
    render() { 
       return(
         <>
       <h4 className="mx-2 mt-2">Harry Potter</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
        {this.state.harryPotter.slice(0,6).map((movie , index) => 
        <Movie key={index} poster={movie.Poster} ></Movie>
        )}
        </Row>  
        <h4 className="mx-2 mt-2">Star Wars</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
         {this.state.starWars.slice(0,6).map((movie , index) => 
        <Movie key={index} poster={movie.Poster} ></Movie>
        )}
        </Row>
        <h4 className="mx-2 mt-2">Spider Man</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
         {this.state.spiderMan.slice(0,6).map((movie , index) => 
        <Movie key={index} poster={movie.Poster} ></Movie>
        )}
        </Row>
        </>
       )
    }
}
 
export default Gallery;