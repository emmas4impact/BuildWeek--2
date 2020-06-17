import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import {Container,Card, Image} from 'react-bootstrap';

const username="user29";
const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading: true,
       profile: null,
       person: null,
        
   };


componentDidMount=async()=>{
const url="https://striveschool.herokuapp.com/api/profile/" + this.props.match.params.username;
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json', 
   'Authorization':'Basic ' + btoa(username + ':' + password)
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data, loading:false})
}
render(){
 return(
    <Jumbotron fluid>
    <Container>
     
      <Card>
        <Card.Img variant="top" src="./jumboCover.jpeg" />
        <Card.Body>
          <Card.Text>
          {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} roundedCircle style={{width: "60px"}}/></div><div> {this.state.person.id}</div>
          <div>{this.state.person.bio}</div><div>{this.state.person.name}</div><div>{this.state.person.email}</div></div>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </Jumbotron>
 )   
}
}

export default Jumbotrons