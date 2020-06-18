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

    componentDidMount = () => {
        const url = "https://striveschool.herokuapp.com/api/profile/";

        const username = 'user19';
        const password = 'Hxx8R4wZfCANamrj';

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((users) => {
                this.setState({ users })
            })
    }

    render(){
       
        console.log("data from state",this.state.person);
        
        return(
            <>
                <div>
                   
                    <Row>
                        <Col md={8} style={{backgroundColor: "transparent"}} >
                            <Jumbotron {...this.props}/>
                            <Strength />
                            
                            <About />
                            <Activity />
                           
                            <DashBoard {...this.props}/>
                            <Skills />
                            <Recommendation />
                            <Accomplishment />
                            <Interests  />
                       
                           
                        </Col>
                        <Col md={4} >
                        <a href="#">  <p style={{paddingTop: "5rem", color: "gray"}} >Edit public profile & URL <AiOutlineQuestionCircle /></p></a>
                            <hr></hr>
                            <a href="#"><p style={{color: "gray"}}>Add profile in another language <AiOutlineQuestionCircle /></p></a>
                            <p className="mt-5">People also viewed</p>
                            {this.state.users.slice(1, 25).map((user, i) => {
                    return (
                        <a href={'/profile/' + user.username} style={{color: "black", textDecoration: "none"}}>
                        <Row className="pb-3" key={i}>
                            <Col md={3}>
                                {user.image === undefined || user.image === ''
                                    ? <Image
                                        src='https://cdn5.vectorstock.com/i/thumb-large/95/64/default-placeholder-businesswoman-half-length-por-vector-20889564.jpg'
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
                            <Col className="col col-8 d-flex justify-content-between pt-3 border-bottom" md={9}>
                               
                                    <Col md={10}>
                                <div className="d-flex flex-column ">
                                    <strong>{user.name} {user.surname} &#9900;</strong>
                                    <span>{user.title}</span>
                                </div>
                                </Col>
                                <Col md={2}>
                                <div className="d-flex flex-column text-right ">
                                <TiMessages size={22}/>
                                </div>
                                </Col>
                             
                                
                            </Col>
                        </Row>
                        </a>
                    )
                })}
            
                        </Col>
                    </Row>
                   
                </div>
            </>
        )
    }
    
}
export default withRouter(Profile);