import React from 'react';

import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
import Jumbotron from './Component/Content/Jumbotron';

class App extends React.Component {
  render(){
    return(
      
      <Router>
        <NavBar />
        <Jumbotron className='mt-3'/>
        <Content />
      
      </Router>
    )
    

    }
  }
export default App;
