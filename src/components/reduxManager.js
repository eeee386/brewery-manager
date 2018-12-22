import {combineReducers} from 'redux';
import { searchTypes } from './Search/ReduxState/types';
import { tableTypes } from './TableManager/ReduxState/types';

const search = (state = {}, { type, payload }) => {
    if(searchTypes[type]){
      return {...state, ...payload}
    } else {
      return state;
    }
  }

const tables = (state = {}, { type, payload }) => {
    if (tableTypes[type]) {
      return {...state, ...payload};
    } else {
      return state;
    }
  }

export const rootReducer = combineReducers({
    search,
    tables
})

export const actionCreator = (typeObject, payloadContent) => ({
    type: typeObject.typeName,
    payload: {[typeObject.payloadName]: payloadContent},
    loading: typeObject.startType,
});