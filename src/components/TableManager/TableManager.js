import React, { Component } from 'react'
import { connect } from 'react-redux';
import { tableSagaTypes, payloadNames } from './ReduxState/types';
import s from './TableManager.scss';

class TableManager extends Component {
  constructor(props) {
    super(props);
    props.fetchDistillation();
  }

  render() {
    return (
      <div>
        {this.props.table}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  table: state[payloadNames.TABLES],
  tableLoading: state[payloadNames.TABLE_LOADING],
});

const matchDispatchToProps = (dispatch) => ({
  fetchDistillation: () => dispatch(tableSagaTypes.FETCH_TABLES),
  addNewDistillation: (newDist) => dispatch(tableSagaTypes.ADD_NEW, newDist),
  updateDistillation: (updatedDist) => dispatch(tableSagaTypes.UPDATE_ONE, updatedDist),
  deleteDistillation: (deletedDist) => dispatch(tableSagaTypes.DELETE_ONE, deletedDist),
});

export default connect(mapStateToProps, matchDispatchToProps)(TableManager);
