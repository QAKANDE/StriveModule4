// import React from 'react'
// import {ListGroup} from 'react-bootstrap'

// class Comment extends React.Component{

// //   state= {
// //         singleComment:[]
// //     }

//  asin = new URLSearchParams(window.location.search).get("asin")
// componentDidMount = async (asin) => {
//     let response = await fetch("https://striveschool.herokuapp.com/api/comments/{asin}",{
//         method:"GET",
//         body: JSON.stringify(this.props.selectedBook.comments),
//         Headers:({
//             'Content-Type' : 'Application/json',
//             'Authorization':'Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k='
//         })
//     })
//     let comments = await response.json()
//    }

//     render(){
//         return <>
//         {this.props.selectedBook.comments.map((comment,index)=>{
//             return(
//         <ListGroup key={index}>
//         <ListGroup.Item>{comment.comment}</ListGroup.Item>
//             <ListGroup.Item>{comment.rate}</ListGroup.Item>
//             <ListGroup.Item>{comment.elementId}</ListGroup.Item>
//         </ListGroup>
//             );
//         })}
//         {
//         this.state.selectedBook &&
//         <div>No comments to display</div>
//         }
//         </>
//     }
// }
// export default Comment;