import React from 'react'
import {Container,Row,Col,Card,DropdownButton,Dropdown,InputGroup,FormControl} from 'react-bootstrap'
let bookCategory = ['history' , 'horror' , 'romance' , 'scifi' , 'fantasy' ]
let books = {
fantasy:require('../Data/fantasy.json'),
history :require( '../Data/history.json'),
horror :require( '../Data/horror.json'),
romance :require( '../Data/romance.json'),
scifi :require( '../Data/scifi.json')
}
class Home extends React.Component{
    state = {
        categorySelected : "fantasy",
        books: books.fantasy.slice(0, 12)
    }

     handleDropDown= (category) => {
        this.setState({
            categorySelected: category,
            books:books[category].slice(0,12)
        })
    }
    handleFilter = (search) => {
        let category = this.state.categorySelected;
        if(search){
            let filteredBooks = books[category].filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          );
          this.setState({ books: filteredBooks.slice(0, 12) });
        }
        else{
            this.setState({ books: books[category].slice(0, 12) });
        }
        }
    
    render(){
        return<>
      <Container>
      <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={this.state.categorySelected}
      id="input-group-dropdown-1"
    >
     {bookCategory.map((category , index)=>{
              return(
                <Dropdown.Item href="#/action-1" key ={index} onClick={()=>this.handleDropDown(category)}>
                    {category}
                </Dropdown.Item>
              )
          })}
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" placeholder="Search by title" onChange={(e)=>this.handleFilter(e.target.value)}/>
  </InputGroup>
        <Row>
        {this.state.books.map((book)=>{
                  return (
        <Col xs={4} key={book.asin}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
        ${book.price}
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        )
        })}
          </Row>
      </Container>
        </>
    }
}
export default Home