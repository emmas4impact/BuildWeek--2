import React, {Component} from 'react';
import styles from './Profile/profile.module.css';



class Profile extends Component{
    render(){
        return(
            <h1 className={styles.Profile}>Edit public profile & URL</h1>
        )
    }
    
}

export default Profile;