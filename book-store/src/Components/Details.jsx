import React from 'react';
class Details extends React.Component {
    state = { 
        book:null,
        loading:true
     }

     componentDidMount = () => {
         const bookID = this.props.match.params.id
         console.log("id",bookID)
     }


    render() { 
        return ( 
          <>

          </>
         );
    }
}
 
export default Details;