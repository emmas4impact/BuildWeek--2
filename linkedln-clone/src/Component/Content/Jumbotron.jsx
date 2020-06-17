import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import {Container,Card, Image} from 'react-bootstrap';

const username="user29";
const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading:true,
       profile:null,
       person:null,
        
   };


componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/";
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + btoa(username + ':' + password)
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data[6], loading:false})
}
render(){
 return(
    <Jumbotron fluid>
    <Container>
     <>
      <Card style={{position: 'relative'}}>
        <Card.Img variant="top" src="./jumboCover.jpeg" />
        <Card.Body>
          
          <Card.Text>
         
          {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image className='img-jumbo' src={this.state.person.image}/></div><div> {this.state.person.id}</div>
          <div className='name pt-4'>{this.state.person.name}</div><div className='bio'>{this.state.person.bio}</div><div className='email'>{this.state.person.email}</div></div>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
    </Container>
  </Jumbotron>
 )   
}
}

export default Jumbotrons