import React from 'react';
import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dropdown, Image} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer'


class App extends React.Component {
  state = {
    data: '',
    search: null,
    status: true,
  
  }
  fetchData = async () => {
  await fetch("https://striveschool.herokuapp.com/api/profile/", {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('user19:Hxx8R4wZfCANamrj'),
        "Content-Type": "application/json",
      }),
    })
      .then(response => response.json())
      .then(respObj => this.setState({
        data: respObj,
      }))

  }
  componentDidMount() {
    this.fetchData()
  }

  searchedField = (searched) => {
    if (searched) {
      this.setState({
        search: searched,
        status: true
      });
    } else {
      this.setState({
        search: '',
        status: false
      });
    }
  }


  render(){
    return(
     
        <> 
       
          <Router>
            <NavBar search={this.searchedField} status={this.state.status} users={this.state.data && this.state.search && 
              this.state.data.filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase())).length > 0 ?
              this.state.data
                .filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase()) )
                .map((user, i) =>
            <Dropdown.Item key={i} href={"/" + user.username}><Image src="{user.image}"/> {user.name } {user.surname} - {user.bio}</Dropdown.Item>
                )
              :
              <Dropdown.Item href="/">No user found</Dropdown.Item>
            }
            />
            <Route path="/:username" component={Content} />
            
            <Footer />
          
      </Router>
     </>
    
    );
    

    }
  }
export default App;
