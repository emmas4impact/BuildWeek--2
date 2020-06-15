import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

const Recommend=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4>Recommendation</h4>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
         </Jumbotron>
        </>
    )
}

export default Recommend