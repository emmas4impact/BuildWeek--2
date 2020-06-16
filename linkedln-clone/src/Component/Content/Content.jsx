import React, { Component } from "react";
import Profile from './Profile/Profiles';
import ProfileForm from './Profile/Form';
import Skils from './Skills_Endorsements';
import Jumbotron from './Jumbotron';
class Content extends Component{
    
    render(){
        return(
            <>
            <div style={{backgroundColor: "whitesmoke"}}>
            <Jumbotron/>
            <Profile />
            <Skils />
            </div>
            </>
            
        )
    }
}

export default Content;
