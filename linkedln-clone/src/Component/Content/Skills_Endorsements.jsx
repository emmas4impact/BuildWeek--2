import React, { Component } from 'react';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';

import {Row, Col, Button} from 'react-bootstrap'

import './Skills_Endorsements.css'
class Skills_Endorsements extends Component {
    render() {
        return (<>
         
          
            <Row>
            <Col sm={8}>
              <div id="accordion" className="shadow">
                <div class="card">
                    <div class="card-body">
                       <h4>Skills&Endorsements</h4>
                       <Button style={{background:  "white", color: "blue"}}>Take Skill quiz</Button>   
                       <h6 className="mt-4"><FaPlusCircle /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
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