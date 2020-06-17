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

import Jumbotron from '../Jumbotron';
import {Col, Row,Image,ListGroup,Card} from 'react-bootstrap';

const url ="https://striveschool.herokuapp.com/api/profile/"

const username ='user29'
const password = 'w4X9FKLNUDSXwzYu'
const headers =new Headers({
    "Content-Type" : "application/json",
    'Authorization': 'Basic ' + btoa(username + ":" + password),
});



class Profile extends React.Component{
    state = {
      loading:true,
       profile:null,
       person:null,
        
   };


componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/";
const response= await fetch(url ,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + btoa(username + ':' + password)
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data[7], loading:false})
}
   
    render(){
        
        
        return(
            <>
                <div>
                   
                    <Row>
                        <Col md={8} style={{backgroundColor: "transparent"}}>
                            <Jumbotron/>
                            <Strength />
                            <About />
                            <Activity />
                           
                            <DashBoard />
                            <Skills />
                            <Recommendation />
                            <Accomplishment />
                            <Interests  />
                           
                        </Col>
                        <Col md={4} >
                                <p style={{paddingTop: "5rem"}} className="d-flex flex-column">Edit public profile & URL</p>
                            <hr></hr>
                            <a href="#"><p style={{color: "gray"}}>Add profile in another language</p></a>
             <Card style={{ width: '18rem' }}>
             <ListGroup variant="flush">
            <ListGroup.Item>   {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} roundedCircle style={{width: "60px"}}/></div><div> {this.state.person.id}</div>
            <div>{this.state.person.bio}</div><div>{this.state.person.name}</div><div>{this.state.person.email}</div></div>)}
            </ListGroup.Item> 
              </ListGroup>
              <ListGroup variant="flush">
            <ListGroup.Item>   {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} roundedCircle style={{width: "60px"}}/></div><div> {this.state.person.id}</div>
            <div>{this.state.person.bio}</div><div>{this.state.person.name}</div><div>{this.state.person.email}</div></div>)}
            </ListGroup.Item> 
              </ListGroup>
              <ListGroup variant="flush">
            <ListGroup.Item>   {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} roundedCircle style={{width: "60px"}}/></div><div> {this.state.person.id}</div>
            <div>{this.state.person.bio}</div><div>{this.state.person.name}</div><div>{this.state.person.email}</div></div>)}
            </ListGroup.Item> 
              </ListGroup>
               </Card>
                        </Col>
                    </Row>
                   
                </div>
            </>
        )
    }
    
}

export default Profile;