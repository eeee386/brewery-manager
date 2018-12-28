import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sagaTypes, payloadNames } from './ReduxState/types';

class TableManager extends Component {
  constructor() {
    super(props);
    props.fetchDistillation();
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  table: state[payloadNames.TABLES],
  tableLoading: state[payloadNames.TABLE_LOADING],
});

const matchDispatchToProps = (dispatch) => ({
  fetchDistillation: () => dispatch(sagaTypes.FETCH_TABLES),
  addNewDistillation: (newDist) => dispatch(sagaTypes.ADD_NEW, newDist),
  updateDistillation: (updatedDist) => dispatch(sagaTypes.UPDATE_ONE, updatedDist),
  deleteDistillation: (deletedDist) => dispatch(sagaTypes.DELETE_ONE, deletedDist),
});

export default connect(mapStateToProps, matchDispatchToProps)(TableManager);
