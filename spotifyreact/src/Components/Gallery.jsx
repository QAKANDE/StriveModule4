import React, { Component } from 'react';
import {Row} from 'react-bootstrap'
import Songs from './Songs'
import {Container} from 'react-bootstrap'
class Gallery extends Component {
    state = { 
        eminem:[],
        queen:[],
     }

     componentDidMount = () => {
         Promise.all([
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "b41254000bmshb62e314b3254f24p1dac92jsn6f1fc3174939"
                }
            })
             .then((response) => response.json())
             .then((data)=>
             this.setState({
                 eminem:data.data
             })
             ),
             fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "b41254000bmshb62e314b3254f24p1dac92jsn6f1fc3174939"
                }
            })
             .then((response) => response.json())
             .then((data)=>
             this.setState({
                 queen:data.data
             })
             )
         ]).catch((err)=>
         alert("err")
         )
     }
    render() { 
        return ( 
            <Container>
            <h4>Eminem</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
                {this.state.eminem.slice(0,6).map((song,index) => 
                    <Songs key={index} image={song.album.cover_xl} title={song.title} artist={song.artist.name}/>
                )}
            </Row>
            <h4>Metallica</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
                {this.state.queen.slice(0,6).map((song,index) => 
                    <Songs key={index} image={song.album.cover_xl} title={song.title} artist={song.artist.name} name={song.artist.name}/>
                )}
            </Row>
            </Container>
         );
    }
}
 
export default Gallery;