import React, { Component } from 'react'
import { connect } from 'react-redux';
import { tableSagaTypes, payloadNames } from './ReduxState/types';
import {actionCreator} from '../reduxManager';
import s from './TableManager.scss';

class TableManager extends Component {
  constructor(props) {
    super(props);
    props.fetchDistillation();
  }

  render() {
    console.log(this.props.table);
    return (
      <div>
        Hello!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  table: state[payloadNames.TABLES],
  tableLoading: state[payloadNames.TABLE_LOADING],
});

const matchDispatchToProps = (dispatch) => ({
  fetchDistillation: () => dispatch(actionCreator(tableSagaTypes.FETCH_TABLE)),
  addNewDistillation: (newDist) => dispatch(actionCreator(tableSagaTypes.ADD_NEW, newDist)),
  updateDistillation: (updatedDist) => dispatch(actionCreator(tableSagaTypes.UPDATE_ONE, updatedDist)),
  deleteDistillation: (deletedDist) => dispatch(actionCreator(tableSagaTypes.DELETE_ONE, deletedDist)),
});

export default connect(mapStateToProps, matchDispatchToProps)(TableManager);
