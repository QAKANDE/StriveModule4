import React, { Component } from 'react';
import {Row,Col,Form,Button,FormControl,Container} from 'react-bootstrap'
import Card from './Card'

class Albums extends Component {
    state = {
        albums:[],
        search:""
      }
   handleQuery = (event) => {
       let value = event.currentTarget.value;
        this.setState({
            search: value
        })
   }

     handleSearch = async (value) => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+value,{
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "b41254000bmshb62e314b3254f24p1dac92jsn6f1fc3174939"
                }
            })
            let albums = await response.json()
            this.setState({
                albums:albums.data
            })
            console.log(albums)
     }
    render() { 
        console.log(this.props)
        return ( 
            <Container>
                
                <Form inline>
      <FormControl onChange = {(event) => this.handleQuery(event)} type="text" placeholder="Search" value={this.state.search} className="mr-sm-2" />
      <Button variant="outline-success" onClick={()=> this.handleSearch(this.state.search)}>Search</Button>
    </Form>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mt-4 mx-2 text-center">
                  {this.state.albums.length > 0 && this.state.albums.slice(0,6).map((album,index)=>

<>
            <Card key={index} source={album.album.cover} title={album.album.title} id={album.album.id}/>
            {console.log(album)}
                    </>
                  )}
              </Row>
              
            </Container>
            
         );
    }
}
 
export default Albums;