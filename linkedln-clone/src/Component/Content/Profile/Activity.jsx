import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

const Activity=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="box jumbo-prof">
             <Container>
                <h4>Activity</h4>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
         </Jumbotron>
        </>
    )
}

export default Activity