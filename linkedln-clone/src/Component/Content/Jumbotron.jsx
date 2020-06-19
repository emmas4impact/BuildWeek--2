import React from 'react'
import {Jumbotron, Dropdown} from 'react-bootstrap';
import {Container,Card, Image,Button} from 'react-bootstrap';
import { FaCamera } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
const username="user29";
const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading: true,
       profile: null,
       person: [],
        
   };


componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/" + this.props.match.params.username;
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + " dXNlcjk6c1A0WU1LaEJwcVFIQVBKTg=="
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data, loading:false})
}
render(){
 return(
    <Jumbotron fluid className='box jumbo-box'>
    <Container style={{padding: '0'}} className='ommit '>
    
      <Card style={{position: 'relative'}} style={{border: 'none'}}>
      
        <Card.Img variant="top" src="/jumboCover.jpeg" style={{paddingTop: '0'}}/>

<div class="image-upload" style={{position:'absolute',top:'0.5rem',right:'20px', cursor:'pointer'}}>
    <label for="file-input">
    <FaCamera style={{width:'20px'}}/>
    </label>

    <input id="file-input" type="file" style={{display:'none'}}/>
</div>
       
        <Card.Body>
        <Button className="btn btn-light"  style={{position:'absolute',bottom:'5rem', right:'4rem', background:'rgb(250,250,250)', color:'#626262', border: '1px solid #626262',  fontWeight: '700'}} >More...</Button>&nbsp;&nbsp;
                    <Dropdown style={{position:'absolute', bottom:'5rem',right:'10rem'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{background:'rgb(0,115,175)',color:'#fff', fontWeight: '700'}}> Add section profile </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item>Intro
                    </Dropdown.Item>
                    <Dropdown.Item>About
                    </Dropdown.Item>
                    <Dropdown.Item>Featured
                    </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <GiPencil style={{position:'absolute',bottom:'5.5rem',right:'1.5rem', fontSize: '25px'}}/>
        <Card.Text>
          {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image className='img-jumbo' src={this.state.person.image}/></div><div> {this.state.person.id}</div>
          <div className='name pt-4'>{this.state.person.name}</div><div className='bio'>{this.state.person.bio}</div><div className='email'>{this.state.person.email}</div></div>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </Jumbotron>
 )   
}
}

export default Jumbotrons