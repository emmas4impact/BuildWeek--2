import React, { Component } from 'react';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';
import {Container} from 'react-bootstrap'
import {Row, Col, Dropdown} from 'react-bootstrap'

import './Skills_Endorsements.css'
class Skills_Endorsements extends Component {
    render() {
        return (<>
         
          
            <Row>
            <Col sm={8}>
              <div id="accordion">
                <div class="card">
                    <div class="card-body">
                       <h4>Skills&Endorsements</h4>
                       <h6 className="mt-4"><FaPlusCircle /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                    </div>
                    
                  
                    <h5 class="mb-3" style={{textAlign: "center"}}>
                    <div class="dropdown">
                    <button type="button" >Show More <FaChevronDown /></button>
                        <div class="dropdown-content">
                        
                        
                        <h6 className="mt-4"><FaPlusCircle /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Front-End Development</h6>
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