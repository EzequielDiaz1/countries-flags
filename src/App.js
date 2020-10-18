import React from 'react';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import CountryDetail from './Components/CountryDetail';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div >
        <Route path='/' component={NavBar} />
        <Route path='/detail/:name' render={() => <CountryDetail />} />
        <Route exact path='/' render={() => <Home />}/>
      </div>
    </Router>
  );
}

export default App;
