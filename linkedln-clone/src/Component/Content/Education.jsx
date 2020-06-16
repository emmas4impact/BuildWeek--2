import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { FaPlus, FaPen, FaAlignJustify } from "react-icons/fa";

class Education extends Component {
    render() {
        return (
        <Row>
            <Col md={8}>
                <Jumbotron className="shadow" style={{backgroundColor: "White"}}>
                <Row>
                        <Col md={10}>
                     <h4 >Experience</h4>
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