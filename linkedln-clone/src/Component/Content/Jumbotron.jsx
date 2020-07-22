import React from 'react'
import {Jumbotron, Dropdown} from 'react-bootstrap';
import {Container,Card, Image,Button} from 'react-bootstrap';
import { FaCamera, FaPen } from 'react-icons/fa';
import { GiPencil } from "react-icons/gi";
const username="user29";
const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading: true,
       profile: null,
       person: [],
       image: null
        
   };


componentDidMount=async()=>{
this.fetchUserData()
}

fetchUserData = async () => {
  const url="https://linkedln-backend.herokuapp.com/api/experience/profile/" + this.props.match.params.username;
const response= await fetch(url,{
  method:'Get',
  headers:new Headers({
   'Content-type':'applicationCache/json'
  
  })
})
const data= await response.json();
console.log(data);
this.setState({person:data, loading:false})
}

uploadPicture= async ()=>{
        
  const username="user29";
  const password="w4X9FKLNUDSXwzYu";
  const url="https://linkedln-backend.herokuapp.com/api/profile/" + this.props.match.params.username+"/picture"
  const response= await fetch(url,{
    method:'POST',
    body: this.state.image,
   
  })
  
  if(response.ok){
      alert("Post successfully!")
      this.fetchUserData()
  }

}


onChange=(e)=>{
  let photo =new FormData()
  photo.append('profile', e.target.files[0])
  this.setState({
      image: photo
  }, () => {
    this.uploadPicture()
  })
  console.log(photo)
}

render(){
 return(
    <Jumbotron fluid className='box jumbo-box'>
    <Container style={{padding: '0'}} className='ommit '>
    
      <Card style={{position: 'relative'}} style={{border: 'none'}}>
      
        <Card.Img variant="top" src="/jumboCover.jpeg"/>

<div class="image-upload" style={{position:'absolute',top:'0.5rem', right: '-60px', width:'100px',cursor:'pointer'}} onSubmit={this.uploadPicture}>
    <label for="file-input">
    <FaCamera style={{width:'20px'}}/>
    </label>

    <input id="file-input" type="file" style={{display:'none'}} onChange={(e)=> this.onChange(e)}/>
</div>
       
        <Card.Body>
        <Button className="btn btn-light"  style={{position:'absolute',bottom:'4.5rem',right:'3rem', padding: '5px 15px', background:'#fff',color:'#3D3D3D', border: '1px solid #3D3D3D', fontWeight: '700', borderRadius: '2px'}} >More..</Button>
        <GiPencil style={{position:'absolute',bottom:'5rem',right:'1rem', fontSize: '25px'}}/>
                    <Dropdown style={{position:'absolute',bottom:'4.5rem',right:'9rem'}}>
                    <Dropdown.Toggle className="dropdown-basic" style={{backgroundColor:'#006097', outline: 'none', fontWeight: '700'}}> Add section profile </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item>Intro
                    </Dropdown.Item>
                    <Dropdown.Item>About
                    </Dropdown.Item>
                    <Dropdown.Item>Featured
                    </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
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