import React from 'react';
import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

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
