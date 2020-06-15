import React from 'react';
import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

class App extends React.Component {
  render(){
    return(
      
      <Router>
        <Content />
      
      </Router>
    )
  }
}

export default App;
