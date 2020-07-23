import React, {Component} from 'react';
import Interests from './Interest'
import Accomplishment from './accomplish';
import Recommendation from './Recommend';
import DashBoard from './DashBoard'
import Strength from './Strength'
import About from './About'
import Skills from './Skills'
import {Link, withRouter} from 'react-router-dom'
import Activity from './Activity'
import { TiMessages } from "react-icons/ti";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Jumbotron from '../Jumbotron';
import {Col, Row,Image,ListGroup,Card} from 'react-bootstrap';
import Education from '../Education';




class Profile extends React.Component{
    state = {
        users: []
    }

    componentDidMount = async() => {
        const url = "https://linkedln-backend.herokuapp.com/api/profile";

        const response = await fetch(url, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        
        const data = await response.json()
        console.log(data)
         this.setState({
             users: data.profiles
         })
    }

    render(){
       console.log(this.state.users)
        
        return(
            <>
                <div>
                   
                    <Row>
                        <Col lg={8} md={12} sm={12} style={{backgroundColor: "transparent"}} >
                            <Jumbotron {...this.props}/>
                            <Strength />
                            
                            <About />
                            <Activity />
                           
                            <DashBoard {...this.props}/>
                      
                            <Recommendation />
                            <Accomplishment />
                            <Interests  />
                            <Education {...this.props} />
                            <Skills />
                           
                        </Col>
                        <Col lg={4} className='pt-4  d-xsm-none d-sm-none d-md-none'>
                        <p className='just-betw' style={{paddingTop: "5rem"}}>
                            <a href="#">  <p style={{  color: "#626262", fontWeight: '700'}} >Edit public profile </p></a>
                            <AiOutlineQuestionCircle style={{marginBottom: "15px"}}/>
                        </p>
                            <hr style={{marginTop: '-20px'}}></hr>
                        <p className='just-betw'>
                            <a href="#"><p style={{color: "#626262", fontWeight: '700'}}>Add profile in another language</p></a>
                            <AiOutlineQuestionCircle style={{marginBottom: "15px"}}/>
                        </p> 
                          
                            <Col md={12} className='box' style={{background:'#fff'}}>
                            <p className="mt-3" style={{fontSize: '20px', fontWeight: '500'}}>People also viewed</p>
                            {this.state.users.slice(1, 25).map((user, i) => {
                    return (
                        <a href={'/profile/' + user.username} style={{color: "black", textDecoration: "none"}}>
                            
                        <Row className="pb-3 betw-col" key={i}>
                            <Col md={4}>
                                {user.image === undefined || user.image === ''
                                    ? <Image
                                        src='https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg'
                                        style={{ height: "4rem", width: "4rem", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />
                                    : <Image
                                        src={user.image}
                                        style={{ height: "4rem", width: "4rem", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />

                                }
                            </Col>
                            <Col style={{ display: 'flex', justifyContent: 'space-between'}} md={8} className="d-flex pt-3 pb-4 border-bottom">
                               
                          
                                <div className="d-flex flex-column ">
                                    <strong>{user.name} {user.surname} &#9900;</strong>
                                    <span>{user.title}</span>
                                </div>
                               
                                
                                <TiMessages size={22}/>
                               
                              
                             
                                
                            </Col>
                        </Row>
                        </a>
                    )
                })}
                </Col>
            
                        </Col>
                    </Row>
                   
                </div>
            </>
        )
    }
    
}
export default withRouter(Profile);