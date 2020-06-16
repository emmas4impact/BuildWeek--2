import React, { Component } from "react";
import Profile from './Profile/Profiles';
import ProfileForm from './Profile/Form';
import Skils from './Skills_Endorsements';
import {Container} from 'react-bootstrap';

class Content extends Component{
    
    render(){
        return(
            <>
            <Container>
            <div style={{backgroundColor: "whitesmoke"}}>
            
            <Profile />
            <Skils />
            </div>
            </Container>
            </>
            
        )
    }
}

export default Content;
