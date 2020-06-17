import React, { Component } from "react";
import Profile from './Profile/Profiles';
import ProfileForm from './Profile/Form';
import Skils from './Skills_Endorsements';
import Jumbotron from './Jumbotron';
import Education from "./Education";
import {Container} from 'react-bootstrap'

class Content extends Component{
    
    render(){
        
        console.log('CONTENT PROPS', this.props)
        return(
            <>
            <Container>
            <div style={{backgroundColor: "transparent"}}>
            
                <Profile  {...this.props}/>
                <Education {...this.props} />
                <Skils />
                
            
            </div>
            </Container>
            </>
            
        )
    }
}

export default Content;
