import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap'
import { FaPlus, FaPen, FaAlignJustify } from "react-icons/fa";


const username="user29";
const password="w4X9FKLNUDSXwzYu";


class Education extends Component {
    state = {
        loading:true,
         profile:null,
         person:null,
          
     };




   componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/";
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + btoa(username + ':' + password)
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data[24], loading:false})
}
    render() {
        return (
        <Row >
            <Col md={8}>
                <Jumbotron className="shadow" style={{backgroundColor: "White"}}>
                <Row>
                        <Col md={10}>
                     <h4 >Experience</h4>
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} rounded style={{width: "60px"}}/></div><br></br><div> {this.state.person.title}</div>
      <div>{this.state.person.bio}</div><div>{this.state.person.email}</div></div>)}
                     </Col>
                    
                     </Row>
                     <hr></hr>
                    <Row>
                        <Col md={10}>
                     <h4 >Education</h4>
                     </Col>
                    
                     </Row>
                  
                   

                     <hr></hr>

                    <Row>
                        <Col md={10}>
                     <h4 >Licenses&Certifications</h4>
                     </Col>
                    
                     </Row>
                  
                   
                    
                  
                    
                </Jumbotron>
                
                
            </Col>
            <Col md={4}>
                
        
            </Col>
            
        </Row>







        );
    }
}

export default Education;