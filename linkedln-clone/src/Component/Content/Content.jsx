import React, { Component } from "react";
import Profile from './Profile/Profiles'
import ProfileForm from './Profile/Form'
import Skils from './Skills_Endorsements'

class Content extends Component{
    
    render(){
        return(
            <>
            <Profile />
            <Skils />
            <ProfileForm />
            </>
            
        )
    }
}

export default Content;
