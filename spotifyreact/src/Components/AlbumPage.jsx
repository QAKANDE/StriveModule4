import React, { Component } from 'react';
import {Row,Col,Container,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class AlbumPage extends Component {
    state = { 
        artistAlbum:[]
     }

    componentDidMount = async () => {
       let artistName = this.props.match.params.artist
        let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" +artistName, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b41254000bmshb62e314b3254f24p1dac92jsn6f1fc3174939"
            }
        })
        let data = await response.json()
        console.log("dat",data)
       this.setState({
           artistAlbum:data.data
       })
    }
    render() { 
        console.log(this.props)
        return (
            <Container>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
                    {this.state.artistAlbum.slice(0,12).map((album,index)=>
                  <Col className="card">
                  <Card.Img variant="top" src={album.album.cover} />
                  <Card.Body>
                      <Link to={'/songlist/' + album.album.id}className='card-title'>
               {album.album.title}
                      </Link>
                  </Card.Body>
                </Col>
                    )}
                </Row>

            </Container>
        )
         
           
        
    }
}
 
export default AlbumPage ;