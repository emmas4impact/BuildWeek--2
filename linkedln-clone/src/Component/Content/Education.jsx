import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Image, Modal, Button, } from 'react-bootstrap'
import { FaPlus, FaPen, FaAlignJustify } from "react-icons/fa";


const username="user9";
const password="sP4YMKhBpqQHAPJN";


class Education extends Component {
    
    state = {
        loading:true,
         profile:null,
         person:[],
         
         showModal: false
          
     }
     open =() => {
        this.setState({ showModal: true });
      }
  
     getInitialState =() =>{
        return { showModal: false };
      }
    
      close =() => {
        this.setState({ showModal: false });
      }
    

   componentDidMount=async()=>{
        const url="https://striveschool.herokuapp.com/api/profile/"+this.props.match.params.username+"/experiences";
        const response= await fetch(url,{
        method:'Get',
        headers:new Headers({
        'Content-type':'applicationCache/json', 
        'Authorization':'Basic ' + btoa(username + ':' + password)
        })
        })
        const data= await response.json();
        console.log(data);
        this.setState({person:data[0], loading:false})
}
    render() {
       


        console.log("EDUCATION", this.props.match.params.username)
        return (
        <Row>
            <Col md={8} >
                <Jumbotron style={{backgroundColor: "White"}} className='box jumbo-prof-1'>
                <Row>
                    <Col md={12} >
                     <div className='exper-btn'>
                     <h4>Experience</h4>
                     <button onClick={this.open} style={{background: 'none', border: 'none', fontSize: '25px', fontWeight: '400', color: '#0073B1'}}>+</button>
                     </div>
                     <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add education</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
             
                        <div className="form-group">
                        <label for="school">School *</label>
                        <input type="text" className="form-control" id="school" placeholder="Ex: Boston Univerity" required/>
                        </div>
                        <div className="form-group">
                        <label for="degree">Degree</label>
                        <input type="text" className="form-control" id="degree" placeholder="Degree" />
                        </div>
              
                    <div className="form-group">
                        <label for="fieldOfStudy">Field of study</label>
                        <input type="text" className="form-control" id="fieldOfStudy" placeholder="Ex: Business" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputState">Start year</label>
                        <select id="inputState" class="form-control">
                        <option selected>Year</option>
                        <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
                         </select>
                        </div>

                       
                        <div className="form-group col-md-6">
                        <label for="degree">End Year or expected</label>
                        <select id="degree" class="form-control">
                        <option selected>Year</option>
                        <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
                         </select>
                        </div>
                   </div>
                   <div className="form-group">
                        <label for="grade">Field of study</label>
                        <input type="text" className="form-control" id="grade"/>
                    </div>
                  
                </form>
                      

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Save</Button>
                    </Modal.Footer>
                    </Modal>
      
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} rounded style={{width: "0px"}}/></div></div>)}
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div> <div><Image src={this.state.person.image} rounded style={{width: "60px", marginTop: "10px"}}/></div></div>)}
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.title}</div>
                        <div>{this.state.person.area}</div></div>)}
                        {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div> {this.state.person.role}</div>
                        <div>{this.state.person.company}</div></div>)}
                                        
                     </Col>
                    
                     </Row>
                     
                     <hr></hr>
                    <Row>
                        <Col md={2}>
                     <h4 style={{fontSize: '13px', fontWeight: '600'}}>Education</h4>
                     <img src="https://strive.school/hosted/images/21/472d398ad64694996ab8189cfc78a7/LOGO.jpg" style={{width: "50px"}}></img>
                     
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.bio}</div>
      <div>{this.state.person.company}</div><div>{this.state.person.role}</div></div>)}
      
                     
                     </Col>
                    
                     </Row>
                  
                   

                     <hr></hr>

                    <Row>
                        <Col md={2}>
                     <h4 style={{fontSize: '13px',  fontWeight: '600'}}>Licenses&Certifications</h4>
                     <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA" style={{width: "50px"}}></img>
                     </Col>
                     <Col md={10}>
                     
                     {this.state.loading || !this.state.person ? (<div>loading...</div>):(<div><br></br><div  style={{marginTop: "15px"}}> {this.state.person.bio}</div>
      <div>{this.state.person.bio}</div><div>{this.state.person.company}</div></div>)}
      
                     
                     </Col>
                    
                     </Row>
                  
                   
                    
                  
                    
                </Jumbotron>
                
                
            </Col>
            <Col md={4}>
                
        
            </Col>
            
        </Row>







        );
    }
}

export default Education;