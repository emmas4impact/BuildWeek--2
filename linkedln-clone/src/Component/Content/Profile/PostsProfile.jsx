import React, { Component } from 'react';
import { Router, withRouter} from 'react-router-dom';
import  { Card, ListGroup, ListGroupItem, Form , Modal, Button, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { FaHashtag, FaCamera, FaPhotoVideo, FaPaperPlane, FaShare, FaComment, FaThumbsUp, FaInfo, FaPodcast, FaSquare, FaBookmark, FaNetworkWired } from 'react-icons/fa';
import { text } from '@fortawesome/fontawesome-svg-core';
class PostsProfile extends Component {
    state= {
        post: [],
        postId: null,
        newPost: [],
        person: [],
        image: '',
        likes: 0,
        oldPostText: '',
        sendStatus: {
            text:"",
            image: null
        },
       
        
        }
       
    
    handleChange = (event) => {
        this.setState({
            newsFeed: event.currentTarget.value
        });

    }

    saveImg = (event) => {
        let photo = new FormData()
        photo.append('post', event.target.files[0])
        this.setState({
            image: photo
        });
    }

    open = async(postId) => {
        const username="user29";
        const password="w4X9FKLNUDSXwzYu";
        const url="https://linkedln-backend.herokuapp.com/posts/" + postId 
        const response= await fetch(url,{
          method:'GET'
          
        })
        const postInfo= await response.json();
        
        const postText = postInfo.text
        
        this.setState({ showModal: true, postId: postId, oldPostText: postText });
      }
  
     getInitialState =() =>{
        return { showModal: false };
      }
    
      close =() => {
        this.setState({ showModal: false });
      }
    
    componentDidMount=async()=>{
       
        const url="https://linkedln-backend.herokuapp.com/api/posts/" 
        const response= await fetch(url,{
          method:'Get',
          headers:new Headers({
           'Content-type':'applicationCache/json'
        
          })
        })
        const data= await response.json();
        console.log(data);
        
        this.setState({
            post:data, 
            
        })

        
       
        const responses= await fetch("https://linkedln-backend.herokuapp.com/api/posts/" + this.props.match.params.username,{
        method:'Get',
        headers:new Headers({
        'Content-type':'applicationCache/json'
      
        })
        })
        const datas= await responses.json();
        console.log(datas);
        this.setState({person:datas, loading:false})
        }
        sendPost=(e)=>{
            const newPost = this.state.sendStatus
            newPost.text = e.currentTarget.value

            this.setState({
                sendStatus: {
                    text: e.currentTarget.value
                }
            })
            console.log("from post profile: ", newPost)
        }
    postStatus = async ()=>{
        
       
        const url="https://linkedln-backend.herokuapp.com/api/posts"
        const response= await fetch(url,{
          method:'POST',
          body: JSON.stringify(this.state.sendStatus),
          headers:new Headers({
           'Content-type':'application/json', 
        
          })
        })
        const id = await response
                
        setTimeout(async () => {
            const response = await fetch('https://linkedln-backend.herokuapp.com/api/posts/'+ id, {
                method: "POST",
                body: this.state.image,
               
            }, 2000)
        })


        
        if(response.ok){
            alert("Post successfully!")
        }
   
    }
    
    deleteStatus = async ()=>{
        
        const username="user29";
        const password="w4X9FKLNUDSXwzYu";
        const url="https://linkedln-backend.herokuapp.com/api/posts"
        const response= await fetch(url+this.props.match.params.username,{
          method:'DELETE',
       
         
        })

        
        if(response.ok){
            alert("Deleted successfully!")
        }else{
            alert("Cant delete another users post!")
        }
   
    }
    
    editStatus = async ()=>{
        
       
        const url="http://localhost:2250/api/posts/"+this.state.postId
        const response= await fetch(url,{
          method:'PUT',
          body: JSON.stringify(this.state.sendStatus),
          headers:new Headers({
           'Content-type':'application/json', 
          
          })
        })

        
        if(response.ok){
            alert("Post successfully!")
        }
   
    }
   
   fileSelectedHandler = event=>{
       let photo =new FormData()
       photo.append('post', event.target.files[0])
       this.setState({
           image: photo
       })
       console.log(photo)
   }
   addLikes = (id) => {
       
        this.setState({ likes:  this.state.likes + 1})
    
   }
    
  
    
    
    render() {
        console.log("from post profile: ",this.state.sendStatus)
        console.log("from props profile",this.props)
        return (
            
            <div className='container'>
                
                <h6 style={{paddingTop: '80px', textAlign: 'center', paddingBottom: '10px'}}>Download 30 day trial  Design & demo software design solutions with rich, interactive prototypes. </h6>
                <div className='row'>
                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-12'>
                                <Card style={{border: '1px solid #DFDFDF'}}>
                                   
                                    <Card.Body className='head-prof' style={{position: 'relative', height: '100px'}}>
                                    {this.state.post.filter(post => post.user).slice(0, 1).map((user, i)=>{ 
                                        return (
                                           <>
                                           <div style={{position: 'absolute', top: '40px', zIndex: '999'}}>
                                           <img className='mb-2' style={{width: '80px', borderRadius: '50%', border: '3px solid #fff'}} src={user.user.image} />
                                       
                                              <div style={{lineHeight: '0.4',  margin: '0 auto'}}>
                                                <h6 style={{fontWeight: '700', width: '100%'}}>Welcome, {user.user.name}</h6>
                                                <small style={{fontWeight: '500'}}>{user.user.bio}</small>
                                              </div>
                                             
                                              </div> 
                                            </>
                                        )
                                        })}
                                         
                                    </Card.Body>
                                    <ListGroup className="list-group-flush" style={{fontSize: '12px', fontWeight: '700', paddingTop: '80px', borderTop: '1px solid #66666'}}>
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
                                        <textarea style={{flex: '0.8', border: 'none'}} 
                                        placeholder="Start a post"
                                        
                                        onChange={this.sendPost}
                                        type="text"
                                      ></textarea>
                                      <faKey style={{color: '#000'}}/>
                                        <div>
                                            <button style={{background: 'transparent'}} className='btn-upload'><div class="image-upload" style={{cursor:'pointer'}}>
                                                <label for="file-input">
                                                <FaCamera style={{width:'20px'}}/>
                                                </label>

                                                <input id="file-input" type="file" onChange={this.fileSelectedHandler} style={{display:'none'}}/>
                                            </div>  
                                            </button>
                                            <button style={{background: 'transparent'}} className='btn-upload ml-5 left-border'><FaPhotoVideo  />
                                              
                                            </button>
                                            <button style={{background: 'transparent'}} className='btn-upload ml-5 left-border' onClick={this.postStatus}><FaPaperPlane/></button>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small style={{color: 'rgb(0, 115, 177)', fontSize: '15px', fontWeight: '700'}}>Write an article</small> <small>on LinkedIn</small>
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
                                   <img style={{height: '300px', marginTop: '-20px'}} src='https://media-exp1.licdn.com/dms/image/sync/C4E18AQHUHo2BCdE25g/companyUpdate-article-image-shrink_627_1200/0?e=1595462400&v=beta&t=QiFtShVXzqzzYdtvWXAGcxvyPByYbBHs9xT1C152c0A' />
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
                                      <button className='btn-upload' style={{ background: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                          {this.state.likes}
                                      <FaThumbsUp className='mr-2 ml-2'/>Like</button>
                                      <button style={{background: 'transparent'}} className='btn-upload '><FaComment className='mr-2'/>Comment</button>
                                      <button style={{background: 'transparent'}} className='btn-upload '><FaShare className='mr-2'/>Share</button>
                                  </Card.Body>
                               
                               </Card>
                              
                            </div>
                        </div>
                        <Row>
                            <Col>
                            {this.state.post.filter(post => post.user).map((user, i)=>{
                                console.log(user)
                                if (user.user)
                                return(
                                    <>
                                    <Card body key={i} className='mt-2' style={{borderBottom: 'none'}}> 
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: '700', fontSize: '14px'}}>
                                    <img src={user.user.image} style={{width: "40px", height: '40px', borderRadius: "50%", marginRight: "10px" }}/> {user.user.name}</p> 
                                    
                                    <Dropdown>
                                    <Dropdown.Toggle style={{background: 'none', color: '#000', border: 'none'}}>
                                       
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.open(user._id)}>Edit</Dropdown.Item>


                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                        
                                      


                                    </Dropdown.Menu>
                                    </Dropdown>
                                    <Modal show={this.state.showModal} onHide={this.close}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit message</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body><textarea value={this.state.oldPostText} style={{width: '100%', border: 'none'}}></textarea></Modal.Body>
                                      
                                        <Modal.Footer>
                                            <Button onClick={this.close}>Save</Button>
                                        </Modal.Footer>
                                        </Modal>
                                    </div>
                                  
                                   
                                    <small style={{letterSpacing: '3px'}}><FaPodcast className='mr-3'/>{user.text}</small>
                                    <div className='mt-4' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <button className='btn-upload like-btn' onClick={() => this.addLikes(user._id)} style={{background: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>{this.state.likes}<FaThumbsUp className='mr-2 ml-2'/>Like</button>
                                      <button className='btn-upload ' style={{background: 'transparent'}}> <FaComment className='mr-2'/>Comment</button>
                                      <button className='btn-upload ' style={{background: 'transparent'}}><FaShare className='mr-2'/>Share</button>
                                   </div>
                                   
                                    </Card>
                                    <Card.Footer style={{borderTop: 'none', border: '1px solid #DFDFDF', fontSize: '12px'}}>Be the first to comment on this</Card.Footer>
                                    </>
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
                                    <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Add to you feed <AiOutlineQuestionCircle/></p>
                                        <div className='row'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0?e=1600300800&v=beta&t=2HSHzaHWsG78UrBpttEI1UJQmRoxg-a1GttC1shzr1U'/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The New York Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src='https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0?e=1600300800&v=beta&t=2HSHzaHWsG78UrBpttEI1UJQmRoxg-a1GttC1shzr1U'/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The New York Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
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
                            <div className='col-12 mt-3'>
                             
                                                                
                                        <Card>
                                    <Card.Body>
                                        <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Learning <AiOutlineQuestionCircle/></p>
                                        <p style={{fontSize: '12px', marginTop: '-15px'}}>Advance Your Career</p>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <img style={{width: '50px'}} src='data:image/png;base64,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'/>
                                                <h6  style={{fontSize: '12px'}}>React.js</h6>
                                        
                                            </div>
                                           
                                        </div>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                              <img style={{width: '50px'}}  src='https://catethysis.ru/wp-content/uploads/2013/09/nodejslogo.png'/>
                                                <h6 style={{fontSize: '12px'}}>Node.js</h6>
                                        
                                            </div>
                                           
                                        </div>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <img style={{width: '50px'}}  src='https://ploshadka.net/wp-content/uploads/logo/webpack2.png'/>
                                          
                                                <h6 style={{fontSize: '12px'}}>Webpack</h6>
                                        
                                            </div>
                                           
                                        </div>
                                       
                                       
                                      
                                    </Card.Body>
                                    
                                </Card>
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(PostsProfile);