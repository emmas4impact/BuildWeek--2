import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { FaPlus, FaPen } from "react-icons/fa";

class Education extends Component {
    render() {
        return (
        <Row>
            <Col md={8}>
                <Jumbotron>
                    <Row>
                        <Col md={10}>
                     <h4 >Education</h4>
                     </Col>
                     <Col md={2}>
                     <FaPlus />
                     </Col>
                     </Row>
                    <Row >
                        <Row>
                            <Col md={4}>
                            <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" style={{width: '50px'}}/>
                            </Col>
                        
                        </Row>
                        <Col md={4}>
                            <Col>
                            <h6>Strive School</h6>
                            <p>2020-2020</p>
                            </Col>
                        </Col>
                        <Row>
                       
                        </Row>
                        
                    </Row>
                    <Row>
                    <Col md={10} >
                        
                       
                       
                        </Col>
                    <Col md={2} >
                        
                        <FaPen  />
                       
                        </Col>
                        </Row>
                    <hr></hr>
                    <Row >
                        <Row>
                            <Col md={4}>
                            <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" style={{width: '50px'}}/>
                            </Col>
                        
                        </Row>
                        <Col md={4}>
                            <Col>
                            <h6>Strive School</h6>
                            <p>2020-2020</p>
                            </Col>
                        </Col>
                        <Row>
                       
                        </Row>
                        
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