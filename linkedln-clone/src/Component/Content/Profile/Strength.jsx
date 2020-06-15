import React from 'react';
import {Jumbotron, Container, Button} from 'react-bootstrap';
import { MdContacts } from "react-icons/md";

const Strength =(props) =>{
    
    return(
        <>
         <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                <h5>Strengthen your profile</h5>
                    <p>
                    <MdContacts  />
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <Button className="bg-secondary pl-3">Not Now</Button>
                    <Button className="bg-primary pr-3">Update Headline</Button>
                </Container>
         </Jumbotron>
        </>
    )
}

export default Strength