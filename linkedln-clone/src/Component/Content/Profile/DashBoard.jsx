import React from 'react';
import {Jumbotron, Container, ListGroup} from 'react-bootstrap';
import { MdStarBorder} from "react-icons/md";

const dashBoard=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4 style={{display: 'flex', justifyContent: 'space-between'}}> Your Dashboard <span><MdStarBorder /></span></h4>
                    <small>private to you</small>
                    <ListGroup horizontal fluid> 
                        <ListGroup.Item>Who viewed your profile</ListGroup.Item>
                        <ListGroup.Item>Articles </ListGroup.Item>
                        <ListGroup.Item>Search apprearances</ListGroup.Item>
                        
                    </ListGroup>
                </Container>
         </Jumbotron>
        </>
    )
}

export default dashBoard