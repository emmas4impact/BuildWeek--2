import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import './NavBar.css';
import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaVideo, FaUserFriends, FaFacebookMessenger, FaBed, FaRing, FaBell, FaColumns, FaCircle } from 'react-icons/fa';


class NavBar extends Component {
    render() {
        return (
          <>

            <Navbar bg="light" expand="lg" className='navBar'> 
             <div className='container'>
            <a href="/me"> <img  src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA" style={{width: "40px", borderRadius: "5px"}}></img></a>
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
                  <FaCircle />
                <NavDropdown className='text-white' title="Dropdown" id="basic-nav-dropdown" title='Me'>
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
                    Learning</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
            </div>
          </Navbar>
        </>
        )
    }
}


export default NavBar;