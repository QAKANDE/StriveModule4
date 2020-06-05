import React from 'react'
import {ListGroup} from 'react-bootstrap'

class CommentList extends React.Component{
    state = {
        Comments : []
    }

    componentDidMount = async () => {
        try{
        let response = await fetch("https://striveschool.herokuapp.com/api/comments/{asin}",{
        method:"GET",
        body: JSON.stringify(this.props.selectedBook.comments),
        Headers:({
            'Content-Type' : 'Application/json',
            'Authorization':'Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k='
        })
    })
    let Comments = await response.json()
    this.setState ({
        Comments
    })
}catch(err){
    console.log(err)
}
    }
    render(){
    return<>
    {this.state.Comments.map((comment,index)=>{
        return(
    <ListGroup key={index}>
    <ListGroup.Item>{comment.comment}</ListGroup.Item>
    <ListGroup.Item>{comment.rate}</ListGroup.Item>
    <ListGroup.Item>{comment.elementId}</ListGroup.Item>
    </ListGroup>
        )
    })}
    {this.state.Comments.length === 0 && (<div>No comments yet</div>)}
    </>
    }
}

export default CommentList