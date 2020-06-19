import React, { Component } from "react";
import Profile from './Profile/Profiles';
import Skils from './Skills_Endorsements';
import Jumbotron from './Jumbotron';
import Education from "./Education";
import {Container} from 'react-bootstrap'

class Content extends Component{
    
    // componentDidMount=()=>{
    //    this.props.user(this.props.match.params.username)
    // }
    
    render(){
        
        console.log('CONTENT PROPS', this.props)
        console.log('CONTENT PROPS from Appjs', this.props.user)
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
