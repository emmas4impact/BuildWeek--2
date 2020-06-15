import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

const About=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4>About</h4>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
         </Jumbotron>
        </>
    )
}

export default About