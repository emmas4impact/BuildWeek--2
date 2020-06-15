import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Skills_Endorsements from "./Component/Content/Skills_Endorsements";
import Recommendations from "./Component/Content/Recommendations"

function App() {
  return (
    <div className="App">
      <Skills_Endorsements />
      <Recommendations />
    </div>
  );
}

export default App;
