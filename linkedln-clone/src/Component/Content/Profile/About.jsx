import React from 'react';
import {Jumbotron, Container, Card} from 'react-bootstrap';
import { GiPencil } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';


const About=(props) =>{
    
    
    return(
        <>
         <Jumbotron fluid className="box jumbo-prof">
             <Container>
                <h4 style={{display: 'flex', justifyContent: 'space-between'}}>About<GiPencil/></h4>
                <div style={{border: '1px dashed #000', padding: '10px'}}>
                    <p className='colorBlue'> + Add summary</p>
                    We’ve written one for you: “Experienced Senior Credit Risk Analyst with a demonstrated history of working in the international affairs industry. Skilled in English, SASS, Front-end Development, AJAX, and </div>
                
                        
                </Container>
         </Jumbotron>
        </>
    )
}

export default About