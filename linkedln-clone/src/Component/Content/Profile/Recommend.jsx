import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';


const Recommend=(props) =>{
    
    return(
        <>
            <Jumbotron fluid style={{backgroundColor: "white"}} className="shadow">
             <Container>
                                    
                  <Row>
                                       
                              <Col sm={3}>
                                            <h6>Recommendations</h6>
                            </Col>
                                            <Col sm={2}>
                                            
                                            </Col>
                                            <Col sm={4}>
                                            <h6 >Ask for a Recommendations</h6>
                                            
                                            </Col>
                                            <Col sm={3}>
                                            <h6 className="ml-3">Recommend Person</h6>
                                            </Col>
                                            </Row>

                                        <Row>
                                       
                                       <Col sm={3}>
                                       <a href="/" className="mr-5">Received</a>
                                       <a href="/">Given</a>
                                       
                                       </Col>
                                       <Col sm={2}>
                                       
                                       </Col>
                                       <Col sm={4}>
                                       
                                       
                                       </Col>
                                       <Col sm={3}>
                                      
                                       </Col>
                                      
                                       </Row>
                                       <hr></hr>
                                       <Row>
                                       
                                       <Col sm={2}>
                                         
                                           <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></img>
                                         
                                            
                                       </Col>
                                       <Col sm={2}>
                                         
                                           
                                          <p>Jane Doe</p>
                                          <p>Web Developer</p>
                                            
                                       </Col>
                                       
                                       <Col sm={8}>
                                       Jane Doe is an hardworking lady, team player and committed to whatever task given to her.
                                       </Col>
                                      
                                       </Row>
                                       </Container>
                                       
          </Jumbotron>
        </>
    )
}

export default Recommend