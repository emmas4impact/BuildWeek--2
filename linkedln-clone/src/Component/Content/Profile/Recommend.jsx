import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';


const Recommend=(props) =>{
    
    return(
        <>
            <Jumbotron fluid style={{backgroundColor: "white"}} className="box jumbo-prof">
             <Container>
                                    
                  <Row className='rec'>
                                       
                              <Col sm={3}>
                                            <h6>Recommendations</h6>
                            </Col>
                                            
                                            <Col sm={6}>
                                            <h6>Ask for a Recommendations</h6>
                                            
                                            </Col>
                                            <Col sm={3}>
                                            <button className='recommend-btn'>Recommend</button>
                                            </Col>
                                            </Row>

                                        <Row className='mt-2'>
                                       
                                       <Col sm={12} >
                                       <a href="/" className='small-reccomend mr-3 grey'>Received (0)</a>
                                    
                                       
                                       <a href="/" className='small-reccomend underl' style={{color: '#006097'}}>Given (0)</a>
                                       </Col>
                                   
                                       
                                       </Row>
                                       <hr></hr>
                                       <Row>
                                       
                                       <Col sm={2}>
                                         
                                           <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></img>
                                         
                                            
                                       </Col>
                                       <Col sm={2}>
                                         
                                           
                                          <p style={{fontWeight: '600'}}>Jane Doe</p>
                                          <p style={{fontSize: '14px'}}>Web Developer</p>
                                            
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