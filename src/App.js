import React from 'react';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        
      </div>
    </Router>
  );
}

export default App;
