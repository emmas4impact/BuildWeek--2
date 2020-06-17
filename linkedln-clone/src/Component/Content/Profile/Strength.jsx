import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import { MdContacts } from "react-icons/md";
import ReadMoreReact from 'read-more-react';

const Strength =(props) =>{
    
    return(
        
         <Jumbotron fluid style={{backgroundColor: "white", paddingLeft: "3"}} className="shadow">
             <Container>
                <h5>Strengthen your profile</h5>
                    <p>
                    <MdContacts  />
                        <strong>Let's update your headline to match your current education
                        its parent.</strong>
                        <p> That way, people can easily find and connect with you</p>
                    </p>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button className="btn btn-light" >Not Now</Button>&nbsp;&nbsp;
                    <Button className="btn btn-primary ">Update Headline</Button>
                    </div>
                </Container>
         </Jumbotron>
    )
}

export default Strength