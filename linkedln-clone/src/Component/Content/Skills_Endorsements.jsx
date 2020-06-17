import React, { Component } from 'react';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import {Row, Col, Button, Card} from 'react-bootstrap'

import './Skills_Endorsements.css'
class Skills_Endorsements extends Component {
    render() {
        return (<>
         
          
            <Row style={{marginBottom: "30px"}}>
            <Col sm={8}>
              <div id="accordion" className="shadow">
                <div class="card">
                    <div class="card-body">
                       <h4>Skills&Endorsements</h4>
                       <Button id="quiz">Take Skill quiz</Button>   
                       <h6 className="mt-4"><FaPlusCircle size="20px" /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle size="20px" /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle size="20px" /> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                      
                       
                    
                    </div>
                    
                    <Accordion defaultActiveKey="0" >
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                            See more <FaChevronDown />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h4>Tools & Technologies</h4>
                                        <hr></hr>
                                <Row className="text-left">
                                
                                    <Col md={6}>
                                        
                                <ul > 
                                    <li><FaPlusCircle size="20px" /> Java Script</li>
                                    <li><FaPlusCircle size="20px" /> React JS</li>
                                    <li><FaPlusCircle size="20px" /> Node JS</li>
                                    <li><FaPlusCircle size="20px" /> HTML</li>
                                    <li><FaPlusCircle size="20px" /> CSS</li>
                                    
                                </ul>
                                </Col>
                                <Col md={6} >
                                <ul > 
                                    <li><FaPlusCircle size="20px" /> Java Script</li>
                                    <li><FaPlusCircle size="20px" /> React JS</li>
                                    <li><FaPlusCircle size="20px" /> Node JS</li>
                                    <li><FaPlusCircle size="20px" /> HTML</li>
                                    <li><FaPlusCircle size="20px" /> CSS</li>
                                    
                                </ul>
                                </Col>
                                </Row>
                                <h4>Languages</h4>
                                        <hr></hr>
                                <Row>
                                     <Col md={12}>
                                        <ul > 
                                          <li><FaPlusCircle size="20px" /> English</li>
                                           
                                        </ul>
                                      </Col>
                                 </Row>
                                 <h4>Other Skills</h4>
                                        <hr></hr>
                                <Row>
                                <Col md={6}>
                                        <ul > 
                                            <li><FaPlusCircle size="20px" /> Gulp</li>
                                            <li><FaPlusCircle size="20px" /> Animation.css</li>
                                           
                                        </ul>
                                        </Col>
                                        <Col md={6} >
                                        <ul > 
                                            <li><FaPlusCircle size="20px" /> Modernizer.js</li>
                                            
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