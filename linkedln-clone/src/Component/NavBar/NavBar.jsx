import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './NavBar.css';
import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaVideo } from 'react-icons/fa';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
    render() {
        return (
          <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
           <FaLinkedin  className='linkedIn'/>
           <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      
    </form>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>
            <Navbar bg="light" expand="lg" className='navBar'> 
             <div className='container'>
                <FaLinkedin  className='linkedIn'/>
            <Navbar.Brand href="#home">
                
            </Navbar.Brand>
             
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          
              </Form>



            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                
              <Nav className="mr-auto" className='text-white'>
                <Nav.Link className='text-white' href="#home">
                    <FaHome />
                    Home</Nav.Link>
                <Nav.Link className='text-white'>
                    
                    My Network</Nav.Link>
                <Nav.Link className='text-white'>
                    <FaSuitcase />
                    Jobs</Nav.Link>
                <Nav.Link className='text-white'>
                   
                    Messaging</Nav.Link>
                <Nav.Link className='text-white'>
                    
                    Notifications</Nav.Link>
                <NavDropdown className='text-white' title="Dropdown" id="basic-nav-dropdown" title='Me'>
                  <NavDropdown.Item href="#action/3.1">My</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" title='Work'>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
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