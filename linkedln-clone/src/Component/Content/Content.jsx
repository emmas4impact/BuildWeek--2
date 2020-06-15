import React, { Component } from "react";
import Profile from './Profiles'
import ProfileForm from './Profile/Form'

class Content extends Component{
    
    render(){
        return(
            <>
            <Profile />
            <ProfileForm />
            </>
            
        )
    }
}

export default Content;
