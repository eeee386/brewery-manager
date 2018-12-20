import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import TableManager from './components/TableManager/TableManager';
import Search from './components/Search/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/tables' component={TableManager} />
        <Route exact path='/search' component={Search} />
      </Router>
    );
  }
}

export default App;
