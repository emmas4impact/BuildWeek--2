import React, {Component} from 'react';

import {BsPersonLinesFill } from "react-icons/bs";
import {Form,InputGroup, List, Image, Col, Row, Button,Jumbotron, Container} from 'react-bootstrap';
import './Skills_Endorsements.css'
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
                             <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>Strengthen your profile</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                            
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>About</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>Activity</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>Your DashBoard</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                           
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <Button className="bg-primary">Take Skill quiz</Button>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                         
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>Accomplishment</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
                           
                            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
                                <Container>
                                    <h4>Interest</h4>
                                    <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                    </p>
                                </Container>
                            </Jumbotron>
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