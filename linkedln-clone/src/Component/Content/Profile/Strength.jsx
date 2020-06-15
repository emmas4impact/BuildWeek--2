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
                    <div className='d-flex justify-between'>
                    <Button className="btn btn-secondary ">Not Now</Button>
                    <Button className="btn btn-primary ">Update Headline</Button>
                    </div>
                </Container>
         </Jumbotron>
        </>
    )
}

export default Strength