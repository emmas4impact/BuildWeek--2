import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown, Col, Image, Row} from 'react-bootstrap';
import { Link, Route, withRouter } from 'react-router-dom';
import './NavBar.css';
import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaVideo, FaUserFriends, FaFacebookMessenger, FaBed, FaRing, FaBell, FaColumns, FaCircle } from 'react-icons/fa';


class NavBar extends Component {
  state = {
    users: [],
    user: null
}

componentDidMount = () => {
    const url = "https://striveschool.herokuapp.com/api/profile/";
    const user = this.props.location.pathname.split('/').pop()

    console.log('FROM ROUTER PROPS', user)

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

    fetch(url + user, {
          method: "GET",
          headers: headers,
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
          })
          .then((user) => {
            console.log('user found!', user)
              this.setState({ user:  user})
          })
}
    render() {
      console.log("Nav props", +this.props.users)
        return (
          <>

            <Navbar bg="light" expand="lg" className='navBar'> 
             <div className='container'>
            <a href="/profile/"> <img  src="https://tompfister.files.wordpress.com/2014/06/linkedin-icon-black.png?w=570" style={{width: "40px", borderRadius: "5px"}}></img></a>
            <Navbar.Brand href="#home">
                
            </Navbar.Brand>
            <Dropdown show={this.props.status} className="mt-5">
                        <Dropdown.Menu>
                          
                            {this.props.users}
                        </Dropdown.Menu>
               </Dropdown>
              <Form inline>
               
                <FormControl onChange={(e) => this.props.search(e.currentTarget.value)}  type="text" placeholder="Search" className="mr-sm-2" />
          
              </Form>



            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                
              <Nav className="ml-auto text-white navbar-nav">
              
                <Link className='text-white' to='/postsprofile'>
                    <FaHome />
                    Home</Link>
                <Nav.Link className='text-white'>
                    <FaUserFriends />
                    My Network</Nav.Link>
                <Nav.Link className='text-white'>
                    <FaSuitcase />
                    Jobs</Nav.Link>
                <Nav.Link className='text-white'>
                   <FaFacebookMessenger />
                    Messaging</Nav.Link>
                <Nav.Link className='text-white'>
                     <FaBell />
                    
                    Notifications</Nav.Link>

            

                <div className='navDrop'>  
                  

                {this.state.user && this.state.users.slice(22, 23).map((user, i) => {
                    return (
                       
                            <Col >
                                {user.image === undefined || user.image === ''
                                    ? <Image
                                        src='https://cdn5.vectorstock.com/i/thumb-large/95/64/default-placeholder-businesswoman-half-length-por-vector-20889564.jpg'
                                        style={{ width: "30px", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />
                                    : <Image
                                        src={this.state.user.image}
                                        style={{  width: "30px", border: "1px solid lightgray", borderRadius: "2rem" }}
                                        className="card-img img-fluid"
                                        alt="image"
                                    />

                                }
                            </Col>
                           
                      
                    )
                })}
              
                  
                <NavDropdown className='text-white' title="Dropdown" id="basic-nav-dropdown" title='Me' >
                  
                  <NavDropdown.Item href="#action/3.1">My</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
               </div>  
               <div className='vl'></div>
               <div className='navDrop'>
                <FaColumns/>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" title='Work'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </div>
                <Nav.Link className='text-white' href="#link">
                    <FaVideo />
                    Learningg</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
            </div>
          </Navbar>
        </>
        )
    }
}


export default withRouter(NavBar);