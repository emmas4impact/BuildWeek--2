import React, { Component } from 'react';
import { Router, withRouter} from 'react-router-dom';
import  { Card, ListGroup, ListGroupItem, Form , Row, Col} from 'react-bootstrap';

import { FaPersonBooth, FaCamera, FaPhotoVideo, FaPaperPlane, FaShare, FaComment, FaPenFancy, FaInfo, FaDotCircle } from 'react-icons/fa';
class PostsProfile extends Component {
    state= {
        post: []
    }
    
    componentDidMount=async()=>{
        const username="user29";
        const password="w4X9FKLNUDSXwzYu";
        const url="https://striveschool.herokuapp.com/api/posts/" 
        const response= await fetch(url,{
          method:'Get',
          headers:new Headers({
           'Content-type':'applicationCache/json', 
           'Authorization':'Basic ' + btoa(username + ':' + password)
          })
        })
        const data= await response.json();
        console.log(data);
        
        this.setState({
            post:data, 
            
        })
        }
    
    
    render() {
        console.log("from post profile",this.state.post)
        return (
            <div className='container'>
                <h6 style={{paddingTop: '80px', textAlign: 'center', paddingBottom: '10px'}}>Download 30 day trial  Design & demo software design solutions with rich, interactive prototypes. </h6>
                <div className='row'>
                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-12'>
                                <Card>
                                    <FaPersonBooth />
                                    <Card.Body>
                                        
                                        <Card.Text>
                                         <Card.Title>Welcome, </Card.Title>
                                        <smal>Update your profile</smal>
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            <p>Connections
                                            <small>90</small></p>
                                            <p>Grow your network</p>
                                            <p>Who viewed your profile
                                            <small>47</small></p>
                                        </ListGroupItem>
                                        <ListGroupItem>See all Premium features</ListGroupItem>
                                        <ListGroupItem>Saved items</ListGroupItem>
                                 
                                    </ListGroup>
                                   
                                </Card>
                            </div>
                            <div className='col-12 mt-2'>
                               <Card>
                                   <Card.Body>
                                       <ul>Recent
                                           <li>Premium</li>
                                           <li>#programminglife</li>
                                           <li>#codinglife</li>
                                           <li>#learntocode</li>
                                           <li>React learning Gro..</li>
                                       </ul>
                                       <ul>Recent
                                           <li>Premium</li>
                                           <li>#programminglife</li>
                                           <li>#codinglife</li>
                                           <li>#learntocode</li>
                                           <li>React learning Gro..</li>
                                       </ul>
                                       <p>Events <small>+</small></p>
                                       <ul>Follwed Hashtags
                                           <li>#programming life</li>
                                           <li>#coding life</li>
                                           <li>#codinglife</li>
                                           <li>#learntocode</li>
                                           <li>See all</li>
                                       </ul>

                                   </Card.Body>
                                   <ListGroup className="list-group-flush">
                                        <ListGroupItem>
                                            Discover more
                                        </ListGroupItem>
                                   </ListGroup>
                               </Card>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                    <div className='row'>
                            <div className='col-12'>
                                <Card>
                                    <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <textarea style={{flex: '0.8'}} placeholder=" &#xf044; Start a post"></textarea>
                                      
                                        <div>
                                            <button className='btn-upload'><FaCamera /></button>
                                            <button className='btn-upload ml-5 left-border'><FaPhotoVideo /></button>
                                            <button className='btn-upload ml-5 left-border'><FaPaperPlane/></button>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        Write an article <small>on LinkedIn</small>
                                    </Card.Footer>

                                </Card>
                            </div>
                            <div className='col-12 mt-2'>
                               <Card>
                                   <Card.Body>
                                      <div className='row'>
                                          <div className='col-8' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                              <img className='mr-3' style={{width: '40px', height: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQG_9XYxosKCoA/company-logo_100_100/0?e=1600300800&v=beta&t=T65Ow--w87wk6t7oEmqRaEJw9mnWSttAdLUXk8kRl0c'/>
                                              
                                              <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> Swiss Re
                                              <small>299,348 followers</small>
                                              <small>Promoted</small>
                                              </p>
                                          </div>
                                          <div className='col-4'>+ Follow  ...</div>
                                      </div>
                               


                                  </Card.Body>
                                   <img style={{height: '300px'}} src='https://media-exp1.licdn.com/dms/image/sync/C4E18AQHUHo2BCdE25g/companyUpdate-article-image-shrink_627_1200/0?e=1595462400&v=beta&t=QiFtShVXzqzzYdtvWXAGcxvyPByYbBHs9xT1C152c0A' />
                                  <Card.Footer>
                                      <p>Climate change adaptation: What we can learn from the Dutch masters | Swiss Re</p>
                                      <button>Learn more</button>
                                      <p><small>swissre.com</small></p>
                                  </Card.Footer>
                                  <Card.Body>
                                      7 comments
                                  </Card.Body>
                                  <hr></hr>
                                  <Card.Body>
                                      <button className='btn-upload'>Like</button>
                                      <button className='btn-upload'><FaComment/>Comment</button>
                                      <button className='btn-upload'><FaShare/>Share</button>
                                  </Card.Body>
                               
                               </Card>
                              
                            </div>
                        </div>
                        <Row>
                            <Col>
                            {this.state.post.map((user, i)=>{
                                return(
                                    <Card body key={i}>
                                    <p><img src={user.user.image} style={{width: "40px", borderRadius: "50px", marginRight: "10px"}}/> {user.user.name}</p>
                                    <p>{user.text}</p>
                                    <button className='btn-upload'>Like</button>
                                      <button className='btn-upload'><FaComment/>Comment</button>
                                      <button className='btn-upload'><FaShare/>Share</button>
                                    </Card>
                                )
                                
                                
                            })}
                           
                            </Col>
                               
                        </Row>
                    </div>
                    <div className='col-3'>
                    <div className='row'>
                            <div className='col-12'>
                                <Card>
                                    <Card.Body>
                                        <p>Add to you feed <FaInfo/></p>
                                        <div className='row'>
                                            <div className='col-8'>
                                            <img style={{width: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0?e=1600300800&v=beta&t=2HSHzaHWsG78UrBpttEI1UJQmRoxg-a1GttC1shzr1U'/>
                                            <h6>The New York Times</h6>
                                            <small>Company <FaDotCircle /> Newspapers</small>
                                            </div>
                                            <div className='col-4'>
                                              <button>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-8'></div>
                                            <div className='col-4'></div>
                                        </div>
                                      
                                     
                                        
                                        <p>View all recommndations</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-12'>
                               <Card></Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(PostsProfile);