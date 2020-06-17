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
                       <h6 className="mt-4"><FaPlusCircle /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                       <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            See more...
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul> 
                                    <li> Web Service developer</li>
                                    <li>Web Services API</li>
                                    <li>Algorithms and Data Structure</li>
                                    <li>Software Developer</li>
                                    <li>Automation Tester</li>
                                    <li> backend developer.</li>
                                
                                </ul>
                             </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                    </div>
                    
                  
                    <h5 class="mb-1" style={{textAlign: "center"}}>
                    <div class="dropdown">
                    <button type="button" >Show More <FaChevronDown /></button>
                        <div class="dropdown-content">
                        
                        
                        <h6 className="mt-3"><FaPlusCircle /> Java Script</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> React JS</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Node JS</h6>
                       <hr></hr>
                        </div>
                        </div>
                 
                    </h5>
                
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