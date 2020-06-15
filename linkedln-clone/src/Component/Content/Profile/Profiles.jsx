import React, {Component} from 'react';
import Interests from './Interest'
import Accomplishment from './accomplish';
import Recommendation from './Recommend';
import DashBoard from './DashBoard'
import Strength from './Strength'
import About from './About'
import Skills from './Skills'
import Skils from '../Skills_Endorsements'
import Activity from './Activity'

import {Col, Row} from 'react-bootstrap';

const url ="https://striveschool.herokuapp.com/api/profile/"

const username ='user9'
const password = 'sP4YMKhBpqQHAPJN'
const headers =new Headers({
    "Content-Type" : "application/json",
    'Authorization': 'Basic ' + btoa(username + ":" + password),
});


class Profile extends Component{
  
        
    
    
    componentDidMount(){
        let response = fetch(url, {
            method :'GET',
            
            headers: headers,
        });
        console.log(response);
        return response;
        
        
    }
   
    render(){
        
        
        return(
            <>
                <div>
                   
                    <Row>
                        <Col md={8} style={{backgroundColor: "white"}}>
                            <Strength />
                            <About />
                            <Activity />
                           
                            <DashBoard />
                            <Skills />
                            <Recommendation />
                            <Accomplishment />
                            <Interests  />
                        </Col>
                        <Col md={4}>
                                <p className="d-flex flex-column">Edit public profile & URL</p>
                            <hr></hr>
                            <a href="#"><p style={{color: "gray"}}>Add profile in another language</p></a>
                        </Col>
                    </Row>
                   
                </div>
            </>
        )
    }
    
}

export default Profile;