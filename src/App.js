import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Players from './Pages/Players';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Home} />
        <Route path="/players/" component={Players} />    
      </div>
    </Router>
  );
}

export default App;
