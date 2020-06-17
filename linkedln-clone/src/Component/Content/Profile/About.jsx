import React from 'react';
import {Jumbotron, Container, Card} from 'react-bootstrap';
import { GiPencil } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';


const About=(props) =>{
    
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4>About<span style={{padding: "29rem", Color: "blue", paddingTop: "15px"}}><GiPencil/></span></h4>
                <p>Software developer</p>
                <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            See more...
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul> 
                                    <li> Web Service developer</li>
                                    <li>Web Services API</li>
                                    <li>Algorithms and Data Structure</li>
                                    <li>Software Developer</li>
                                    <li>Automation Tester</li>
                                    <li> backend developer.</li>
                                
                                </ul>
                             </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                        
                </Container>
         </Jumbotron>
        </>
    )
}

export default About