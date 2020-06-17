import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap'
import { FaPlus, FaPen, FaAlignJustify } from "react-icons/fa";


const username="user9";
const password="sP4YMKhBpqQHAPJN";


class Education extends Component {
    state = {
        loading:true,
         profile:null,
         person:null,
          
     };




   componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/user9/experiences";
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + btoa(username + ':' + password)
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data, loading:false})
}
    render() {
        return (
        <Row >
            <Col md={8}>
                <Jumbotron className="shadow" style={{backgroundColor: "White"}}>
                <Row>
                        <Col md={2}>
                     <h4 className="mb-3">Experience</h4>
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} rounded style={{width: "60px"}}/></div></div>)}
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} rounded style={{width: "60px", marginTop: "10px"}}/></div></div>)}
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.title}</div>
                        <div>{this.state.person.email}</div></div>)}
                        {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div> {this.state.person.title}</div>
                        <div>{this.state.person.email}</div></div>)}
                                        
                     </Col>
                    
                     </Row>
                     
                     <hr></hr>
                    <Row>
                        <Col md={2}>
                     <h4 >Education</h4>
                     <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" style={{width: "50px"}}></img>
                     
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.bio}</div>
      <div>{this.state.person.bio}</div><div>{this.state.person.email}</div></div>)}
      
                     
                     </Col>
                    
                     </Row>
                  
                   

                     <hr></hr>

                    <Row>
                        <Col md={2}>
                     <h4 >Licenses&Certifications</h4>
                     <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA" style={{width: "50px"}}></img>
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.bio}</div>
      <div>{this.state.person.bio}</div><div>{this.state.person.email}</div></div>)}
      
                     
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