import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import { GiPencil } from "react-icons/gi";
import ReadMoreReact from 'read-more-react';

const About=(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h4>About<span style={{padding: "29rem", Color: "blue", paddingTop: "15px"}}><GiPencil/></span></h4>
                    
                        <ReadMoreReact 
                            text={"This is a modified jumbotron that occupies the entire horizontal space ofits parent"}
                            min={10}
                            ideal={20}
                            max={25} 
                            readMoreText="click here"
                        />
                    
                </Container>
         </Jumbotron>
        </>
    )
}

export default About