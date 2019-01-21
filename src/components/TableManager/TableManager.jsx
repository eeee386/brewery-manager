import React, { Component } from 'react'
import { connect } from 'react-redux';
import { tableSagaTypes, payloadNames } from './types/types';
import {actionCreator} from '../reduxManager';
import s from './TableManager.scss';
import _ from 'lodash';
import TableList from './Components/TableList';
import TableForm from './Components/TableForm';

class TableManager extends Component {
  render() {
    const {table, addNewDistillation} = this.props;
    console.log(table);
    return (
      <div>
        <a href={'/search'}>Keresés</a>
        {_.isEmpty(table) ? "Nincsenek főzetések": <TableList table={table} />}
        <TableForm handleSubmit={addNewDistillation}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  table: state[payloadNames.TABLES],
  tableLoading: state[payloadNames.TABLE_LOADING],
});

const matchDispatchToProps = (dispatch) => ({
  // fetchDistillation: () => dispatch(actionCreator(tableSagaTypes.FETCH_TABLE)),
  addNewDistillation: (newDist) => dispatch(actionCreator(tableSagaTypes.ADD_NEW, newDist)),
  updateDistillation: (updatedDist) => dispatch(actionCreator(tableSagaTypes.UPDATE_ONE, updatedDist)),
  deleteDistillation: (deletedDist) => dispatch(actionCreator(tableSagaTypes.DELETE_ONE, deletedDist)),
});

export default connect(mapStateToProps, matchDispatchToProps)(TableManager);
