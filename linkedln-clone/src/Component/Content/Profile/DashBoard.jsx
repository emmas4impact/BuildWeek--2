import React from 'react';
import {Jumbotron, Container, ListGroup} from 'react-bootstrap';
import { MdStarBorder} from "react-icons/md";

const dashBoard=(props) =>{
    
    return(
        <>
         <Jumbotron fluid className="box jumbo-prof back-blue">
             <Container>
                <h4 style={{display: 'flex', justifyContent: 'space-between'}}> Your Dashboard <span><MdStarBorder /></span></h4>
                    <i>Private to you</i>
                    <ListGroup horizontal fluid> 
                        <ListGroup.Item>
                            <p className='numb'>0</p>
                            Who viewed your profile</ListGroup.Item>
                        <ListGroup.Item>
                        <p className='numb'>0</p>
                        Articles </ListGroup.Item>
                        <ListGroup.Item>
                        <p className='numb'>0</p>
                        Search apprearances</ListGroup.Item>
                        
                    </ListGroup>
                </Container>
         </Jumbotron>
        </>
    )
}

export default dashBoard