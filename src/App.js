import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Players from './Pages/Players';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './Components/Footer';
import SocialBubble from './Components/SocialBubble';
import Donate from './Pages/Donate';

const socialIcons = [
  {'name':'facebook', 'link':'https://facebook.com'},
  {'name':'twitter', 'link':'https://twitter.com/'}, 
  {'link':'https://vimeo.com', 'name':'vimeo'}
]

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <SocialBubble icons={socialIcons}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/players" component={Players} />  
        <Route exact path="/donate" component={Donate} />  
        <Footer/>  
      </div>
    </Router>
  );
}

export default App;
