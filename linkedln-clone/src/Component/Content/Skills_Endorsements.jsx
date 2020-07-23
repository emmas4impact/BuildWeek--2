import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import {Row, Col, Button, Card} from 'react-bootstrap'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Skills_Endorsements.css'
class Skills_Endorsements extends Component {
    render() {
        const mystyle = {
           color: '#1a75ff',
            marginRight: "10px",
            fontSize: "10px"
          };
        return (<>
         
          
            <Row style={{marginBottom: "30px"}}>
            <Col sm={12} md={12}>
              <div id="accordion" className="box">
                <div class="card" style={{border: 'none'}}>
                    <div class="card-body">
                       <h4 style={{fontSize: '20px'}} className='pb-2'>Skills  <small>&</small>   Endorsements</h4>
                       <Button className="btn btn-primary btn-quiz">Take Skill quiz</Button>                       
                       <h6 className="mt-4"><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link>Full-Stack Development</h6>
                       <hr></hr>
                       <h6><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Back-End Development</h6>
                       <hr></hr>
                       <h6><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                      
                       
                    
                    </div>
                    
                    <Accordion defaultActiveKey="0" >
                        <Card style={{border: 'none'}}>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center" style={{backgroundColor: "#e6f7ff", textDecoration: 'none'}}><Link to="/profile/:user" style={{ textDecoration: 'none', fontWeight: "bold"}}>
                            Show More<FaChevronDown /></Link>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h4 style={{fontSize: '20px'}} >Tools & Technologies</h4>
                                        <hr></hr>
                                <Row className="text-left">
                                
                                    <Col md={6}>
                                        
                                <ul > 
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Java Script</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> React JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Node JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> HTML</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> CSS</li>
                                    
                                </ul>
                                </Col>
                                <Col md={6} >
                                <ul > 
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Java Script</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> React JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Node JS</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> HTML</li>
                                    <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> CSS</li>
                                    
                                </ul>
                                </Col>
                                </Row>
                                <h4 style={{fontSize: '20px'}} >Languages</h4>
                                        <hr></hr>
                                <Row>
                                     <Col md={12}>
                                        <ul > 
                                          <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> English</li>
                                           
                                        </ul>
                                      </Col>
                                 </Row>
                                 <h4 style={{fontSize: '20px'}} >Other Skills</h4>
                                        <hr></hr>
                                <Row>
                                <Col md={6}>
                                        <ul > 
                                            <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Gulp</li>
                                            <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Animation.css</li>
                                           
                                        </ul>
                                        </Col>
                                        <Col md={6} >
                                        <ul > 
                                            <li><Link to="/me"><FontAwesomeIcon icon={faPlus}  style={mystyle}/></Link> Modernizer.js</li>
                                            
                                        </ul>
                                        </Col>
                                 </Row>
                                
                             </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                   
                
                    </div>
                    </div>
                
            </Col>
                    <Col sm={4}>
                    </Col>
            </Row>
           


  </>
        );
    }
}

export default Skills_Endorsements;