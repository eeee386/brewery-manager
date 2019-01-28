import React, { Component, Dispatch } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import TableManager from './components/TableManager/TableManager';
import Search from './components/Search/Search';
import "reflect-metadata";
import { ActionFactory, Action } from './ReduxStoreHandlers/actionFactory';
import { tableSagaTypes } from './models/Types/TableTypes/TableTypes';
import { ConnectedComponentProps } from './models/ConnectTypes/ConnectTypes';

class App extends Component<ConnectedComponentProps> {
  constructor(props: ConnectedComponentProps) {
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

const matchDispatchToProps = (dispatch: Dispatch<Action>) => ({
  connectSQL: () => dispatch(ActionFactory(tableSagaTypes.CONNECT_SQL)),
  disconnectSQL: () => dispatch(ActionFactory(tableSagaTypes.DISCONNECT_SQL)) 
});

export default connect(null, matchDispatchToProps) (App);