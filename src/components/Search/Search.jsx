import React, { Component } from 'react'
import { connect } from 'react-redux';
import {payloadNames, searchSagaTypes} from './ReduxState/types';

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
  searchByName: (name) => dispatch(searchSagaTypes.SEARCH_BY_NAME, name),
  searchByTaxID: (taxID) => dispatch(searchSagaTypes.SEARCH_BY_TAXID, taxID),
});

export default connect(mapStateToProps, matchDispatchToProps)(Search);