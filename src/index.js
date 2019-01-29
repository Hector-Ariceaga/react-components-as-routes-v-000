import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home.js'
import About from './about.js'
import Login from './login.js'

ReactDOM.render((
  <Router>
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path="/login" component={Login} />
    </>
  </Router>),
  document.getElementById('root')
);
