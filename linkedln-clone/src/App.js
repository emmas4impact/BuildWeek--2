import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
import Jumbotron from './Component/Content/Jumbotron';

function App() {
  return (
    <div className="App">
     <Jumbotron className='mt-3'/>
    </div>
  );
>>>>>>> Jumbotron
}

export default App;
