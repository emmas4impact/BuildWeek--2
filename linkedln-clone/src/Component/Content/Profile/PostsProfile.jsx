import React, { Component } from 'react';
import { Router, withRouter} from 'react-router-dom';
import  { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


import { FaHashtag, FaCamera, FaPhotoVideo, FaPaperPlane, FaShare, FaComment, FaThumbsUp, FaInfo, FaDotCircle, FaSquare, FaBookmark, FaNetworkWired } from 'react-icons/fa';
class PostsProfile extends Component {
    render() {
        return (
            <div className='container'>
                <h6 style={{paddingTop: '80px', textAlign: 'center', paddingBottom: '10px'}}>Download 30 day trial  Design & demo software design solutions with rich, interactive prototypes. </h6>
                <div className='row'>
                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-12'>
                                <Card>
                                   
                                    <Card.Body className='head-prof'>
                                  
                                           <img className='mb-2' style={{width: '50px', borderRadius: '50%' }} src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
                                        <Card.Text style={{lineHeight: '0.5'}}>
                                        <h6 style={{fontWeight: '700'}}>Welcome, NAME!</h6>
                                        <a style={{ color: '#0073B1', fontSize: '12px'}}>Update your profile</a>
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush" style={{fontSize: '12px', fontWeight: '700'}}>
                                        <ListGroupItem style={{lineHeight: '0.5'}}>
                                            <p className='pt-2' style={{lineHeight: '0.1', color: '#666666', display: 'flex', justifyContent: 'space-between'}}>Connections
                                            <small style={{fontWeight: '700', fontSize: '13px', color: '#0073B1'}}>90</small></p>
                                            <p className='pb-2'>Grow your network</p>
                                            <p style={{color: '#666666', display: 'flex', justifyContent: 'space-between'}}>Who viewed your profile
                                            <small style={{fontWeight: '700', fontSize: '13px', color: '#0073B1' }}>47</small></p>
                                        </ListGroupItem>
                                        <ListGroupItem>See all Premium features</ListGroupItem>
                                        <ListGroupItem><FaBookmark className='mr-2'/>Saved items</ListGroupItem>
                                 
                                    </ListGroup>
                                   
                                </Card>
                            </div>
                            <div className='col-12 mt-2'>
                               <Card style={{fontSize: '12px'}}>
                                   <Card.Body>
                        
                                       <p style={{fontWeight: '500'}}>Recent</p>
                                       <ul className='list-unstyled' style={{color: '#666666', fontWeight: '700'}}>
                                           <li><FaNetworkWired /> Premium Career Group</li>
                                           <li><FaHashtag />  programminglife</li>
                                           <li><FaHashtag />  codinglife</li>
                                           <li><FaHashtag />  learntocode</li>
                                           <li><FaNetworkWired />  React learning Gro..</li>
                                       </ul>
                                       <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', color: '#0073B1' }}>Events <small style={{fontSize: '20px', fontWeight: '500'}}>+</small></p>
                                       <p style={{fontWeight: '700', color: '#0073B1' }}>Followed Hashtags</p>
                                       <ul className='list-unstyled' style={{color: '#666666', fontWeight: '700'}}>
                                           <li><FaHashtag />  programming life</li>
                                           <li><FaHashtag />  coding life</li>
                                           <li><FaHashtag />  codinglife</li>
                                           <li><FaHashtag />  learntocode</li>
                                           <li>See all</li>
                                       </ul>

                                   </Card.Body>
                                   <ListGroup className="list-group-flush">
                                        <ListGroupItem style={{textAlign: 'center', fontWeight: '700'}}>
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
                                      <faKey style={{color: '#000'}}/>
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
                                          <div className='col-8' style={{display: 'flex', justifyContent: 'flex-start'}}>
                                              <img className='mr-3' style={{width: '40px', height: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQG_9XYxosKCoA/company-logo_100_100/0?e=1600300800&v=beta&t=T65Ow--w87wk6t7oEmqRaEJw9mnWSttAdLUXk8kRl0c'/>
                                              
                                              <p style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> Swiss Re
                                              <small>299,348 followers</small>
                                              <small>Promoted</small>
                                              </p>
                                          </div>
                                          <div className='col-4 text-right' style={{fontWeight: '700'}}> ...</div>
                                      </div>
                               


                                  </Card.Body>
                                   <img style={{height: '300px'}} src='https://media-exp1.licdn.com/dms/image/sync/C4E18AQHUHo2BCdE25g/companyUpdate-article-image-shrink_627_1200/0?e=1595462400&v=beta&t=QiFtShVXzqzzYdtvWXAGcxvyPByYbBHs9xT1C152c0A' />
                                  <Card.Footer>
                                      <p style={{fontWeight: '700', display: 'flex', justifyContent: 'space-between', fontSize: '15px'}}>Climate change adaptation: What we can learn from the Dutch masters | Swiss Re
                                      <button style={{color: '#0073B1', background: 'none', border: '1px solid #0073B1', fontSize: '15px', fontWeight: '700', borderRadius: '3px'}}>Learn more</button>
                                      </p>
                                     <small>swissre.com</small>
                                  </Card.Footer>
                                  <Card.Body style={{borderBottom: '2px solid #F7F7F7', padding: '5px', paddingLeft:'20px'}}>
                                      <small>7 comments</small>
                                  </Card.Body>
                                  
                                  <Card.Body style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                      <button className='btn-upload' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><FaThumbsUp className='mr-2'/>Like</button>
                                      <button className='btn-upload '><FaComment className='mr-2'/>Comment</button>
                                      <button className='btn-upload '><FaShare className='mr-2'/>Share</button>
                                  </Card.Body>
                               
                               </Card>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                    <div className='row'>
                            <div className='col-12'>
                                <Card>
                                    <Card.Body>
                                        <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Add to you feed <FaInfo style={{borderRadius: '50%', border: '2px solid #000'}}/></p>
                                        <div className='row'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0?e=1600300800&v=beta&t=2HSHzaHWsG78UrBpttEI1UJQmRoxg-a1GttC1shzr1U'/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The New York Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 pt-3'> <small style={{color: 'rgb(0, 115, 177)', fontWeight: '700'}}>View all recommndations</small></div>
                                        </div>                          
                                       
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