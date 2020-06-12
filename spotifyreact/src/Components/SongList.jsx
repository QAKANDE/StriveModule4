import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
class SongList extends Component {
    state = { 
        songs:[]
     }
     componentDidMount = async () => {
        let albumid = this.props.match.params.id
         let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" +albumid,{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
            }
         })
         let data=  await response.json()
         console.log('DATA', data)
         this.setState({
             songs:data.tracks.data
         })
         console.log("songs",this.state.songs.data)
     }
    render() { 
        console.log('STATE.SONGS', this.state.songs)
        return <>
        <Row>
            {this.state.songs.map((song,index)=>
            <Col key={index}>
                <img src={song.cover}/>
            </Col>
            )}
            <Col>Q
            </Col>
        </Row>
        </>
    }
}
 
export default SongList;