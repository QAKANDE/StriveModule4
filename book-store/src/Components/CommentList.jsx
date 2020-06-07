import React from 'react'
import {ListGroup} from 'react-bootstrap'

class CommentList extends React.Component{
    state = {
        Comments : []
    }

    componentDidMount = async () => {
        try{
        let response = await fetch("https://striveschool.herokuapp.com/api/comments/",{
        method:"GET",
        Headers:({
            'Content-Type' : 'Application/json',
            'Authorization':'Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k='
        })
    })
    let comments = await response.json()
    console.log(comments)
    this.setState ({
        Comments:comments
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