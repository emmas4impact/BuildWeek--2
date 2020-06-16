import React, { Component } from "react";
import Profile from './Profile/Profiles';
import ProfileForm from './Profile/Form';
import Skils from './Skills_Endorsements';
import Jumbotron from './Jumbotron';
import Education from "./Education";

class Content extends Component{
    
    render(){
        return(
            <>
            <Container>
            <div style={{backgroundColor: "whitesmoke"}}>
            
            <Profile />
            <Education />
            <Skils />
            </div>
            </Container>
            </>
            
        )
    }
}

export default Content;
