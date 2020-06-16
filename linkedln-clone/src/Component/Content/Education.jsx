import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { FaPlus, FaPen, FaAlignJustify } from "react-icons/fa";

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
                        <Col md={10}>
                        </Col>
                        <Col md={2} >
                        <FaAlignJustify />
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



                    <Row>
                        <Col md={10}>
                     <h4 >Licenses&Certifications</h4>
                     </Col>
                     <Col md={2}>
                     <FaPlus />
                     </Col>
                     <Col md={2}>
                    
                     </Col>
                     </Row>
                    <Row >
                        <Row>
                            <Col md={4}>
                            <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" style={{width: '50px'}}/>
                            </Col>
                        
                        </Row>
                        <Col md={8}>
                            <Col>
                            <h6>CSS: Selectors</h6>
                            <p>LinkedIn</p>
                            <p>Issued May 2020 No expiration Date</p>
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
                            <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" style={{width: '50px'}}/>
                            </Col>
                        
                        </Row>
                        <Col md={8}>
                            <Col>
                            <h6>Computer Science Principles: Digital Information</h6>
                            <p>LinkedIn</p>
                            <p>Issued May 2020 No expiration Date</p>
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