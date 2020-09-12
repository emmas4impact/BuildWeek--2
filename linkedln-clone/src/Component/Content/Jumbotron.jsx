import React from 'react'
import {Jumbotron, Dropdown} from 'react-bootstrap';
import {Container,Card, Image,Button} from 'react-bootstrap';
import { FaCamera, FaPen, FaClosedCaptioning, FaTimes } from 'react-icons/fa';
import { GiPencil } from "react-icons/gi";
// const username="user29";
// const password="w4X9FKLNUDSXwzYu";

class Jumbotrons extends React.Component{
    state = {
      loading: true,
       profile: null,
       person: [],
       image: null,
       
        
   };


componentDidMount=async()=>{
this.fetchUserData()
}

fetchUserData = async () => {
  const url="http://localhost:3003/profile/me" 
const response= await fetch(url,{
  method:'Get',
  credentials: "include",
  headers:new Headers({
   'Content-type':'application/json'
  
  })
})
const data= await response.json();
console.log(data);
this.setState({person: data, loading:false})

}

uploadPicture = async () =>{
        
  // const username="user29";
  
  const url="http://localhost:3003/profile/me" + this.state.person._id+"/upload"
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

<div class="image-upload" style={{position:'absolute', top:'0.5rem', right: '-60px', width:'100px',cursor:'pointer'}} onSubmit={this.uploadPicture}>
    <label for="file-input">
    <FaCamera style={{width:'20px'}}/>
    </label>

    <input id="file-input" type="file" style={{display:'none'}} onChange={(e)=> this.onChange(e)}/>
</div>
       
        <Card.Body>
           <div className='jumb-small' style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Dropdown className="mr-2 right-mrg" >
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
                    
                    <Dropdown className="btn mr-3"  style={{ background:'#fff',color:'#666666', fontWeight: '700', borderRadius: '2px'}} >
                    <Dropdown.Toggle className="dropdown-basic drop-grey right-mrg" style={{background:'#fff', color:'#666666', outline: 'none', fontWeight: '700'}}> More...</Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item>Download picture
                    </Dropdown.Item>
                    <Dropdown.Item>Save as pdf
                    </Dropdown.Item>
                  
                    </Dropdown.Menu>
                    </Dropdown>
                   
                    <GiPencil style={{fontSize: '27px'}}/>
              </div>      
                    <Card.Text>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          {this.state.loading || !this.state.person ? (<div>loading...</div>):(
            
            <div> 
              <div><Image className='img-jumbo' src={this.state.person.image}/></div>
              <div> {this.state.person.id}</div>
              <div className='name'>{this.state.person.name}</div>
              <div className='bio'>{this.state.person.bio}</div>
              <div className='email'>{this.state.person.email}</div>
            </div>
      )}
       
            <div style={{display :'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img src="https://ignite.strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" style={{width: "30px", paddingRight: '10px'}}></img>
                <h6 style={{paddingTop: '10px'}}>Strive School</h6>

            </div>
            </div>
          </Card.Text>
          <div className='mt-2 height-mg' style={{lineHeight: '0.5', fontWeight: '600', padding: '20px 20px 5px', border: "1px dashed #B3B6B9", margin: '0 auto'}}>
              <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Show recruiters you're open to work - you control who sees this<FaTimes style={{fontSize: '15px'}} /> </p>
              <p style={{color: '#006097'}}>Get started</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </Jumbotron>
 )   
}
}

export default Jumbotrons