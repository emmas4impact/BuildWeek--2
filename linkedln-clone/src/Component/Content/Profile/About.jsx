import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import { GiPencil } from "react-icons/gi";


const About=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4>About<span style={{padding: "29rem", Color: "blue", paddingTop: "15px"}}><GiPencil/></span></h4>
                    
                        
                </Container>
         </Jumbotron>
        </>
    )
}

export default About