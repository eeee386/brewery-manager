import React, { Component, Dispatch } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import TableManager from './components/TableManager/TableManager';
import Search from './components/Search/Search';
import "reflect-metadata";
import { actionCreator } from './components/reduxManager';
import { tableSagaTypes } from './components/TableManager/types/types';

class App extends Component<> {
  constructor(props) {
    super(props);
    props.connectSQL();
  }

  componentWillUnmount() {
    this.props.disconnectSQL();
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

const matchDispatchToProps = (dispatch: Dispatch<>) => ({
  connectSQL: () => dispatch(actionCreator(tableSagaTypes.CONNECT_SQL)),
  disconnectSQL: () => dispatch(actionCreator(tableSagaTypes.DISCONNECT_SQL)) 
});

export default connect(null, matchDispatchToProps) (App);