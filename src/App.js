import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import TableManager from './components/TableManager/TableManager';
import Search from './components/Search/Search';
import connectSql from './components/saga';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={TableManager} />
          <Route exact path='/search' component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
