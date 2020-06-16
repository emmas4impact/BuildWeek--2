import React from 'react';
import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';


class App extends React.Component {
  render(){
    return(
      
      <Router>
        <NavBar />
        <Content />
      
      </Router>
    )
    
  }
}

export default App;
