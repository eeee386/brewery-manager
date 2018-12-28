import React, { Component } from 'react'
import { connect } from 'react-redux';
import {payloadNames, sagaTypes} from './ReduxState/types';

class Search extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  results: state[payloadNames.SEARCH_RESULT],
  loading: state[payloadNames.SEARCH_LOADING],
});

const matchDispatchToProps = (dispatch) => ({
  searchByName: (name) => dispatch(sagaTypes.SEARCH_BY_NAME, name),
  searchByTaxID: (taxID) => dispatch(sagaTypes.SEARCH_BY_TAXID, taxID),
});

export default connect(mapStateToProps, matchDispatchToProps)(Search);