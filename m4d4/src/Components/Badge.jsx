import React from 'react'
import {Badge} from 'react-bootstrap'

let BadgeDisplay = (props) => {
    return<>
      
      <h5>My badge <Badge variant={props.color}>{props.text}</Badge></h5>
    
    </>
}
export default BadgeDisplay;