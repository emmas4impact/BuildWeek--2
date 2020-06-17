import React, {Component} from 'react';
import Interests from './Interest'
import Accomplishment from './accomplish';
import Recommendation from './Recommend';
import DashBoard from './DashBoard'
import Strength from './Strength'
import About from './About'
import Skills from './Skills'
import {Link, withRouter} from 'react-router-dom'
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
       person:[]
        
   };


componentDidMount=async()=>{
    
const url="https://striveschool.herokuapp.com/api/profile/";
const response= await fetch(url ,{
  method:'Get',
  headers:headers,
})
const data= await response.json();
console.log("data from profile",data);
this.setState({person:data, loading:false})
}
   
    render(){
        console.log("data from state",this.state.person);
        
        return(
            <>
                <div>
                   
                    <Row>
                        <Col md={8} style={{backgroundColor: "transparent"}} >
                            <Jumbotron {...this.props}/>
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
                            {this.state.person.map((users, i)=>{
                                return(
                                    <div key={i}>
                                    <Link to={"/"+ this.props.match.params.username} >    <p> {users.name} {users.surname}</p></Link>
                                    </div>
                                )
                            })}
            
                        </Col>
                    </Row>
                   
                </div>
            </>
        )
    }
    
}

export default withRouter(Profile);