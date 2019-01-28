import { tableTypes } from '../models/Types/TableTypes/TableTypes';
import { searchTypes } from '../models/Types/SearchTypes/SearchTypes';
import { Action } from '../ReduxStoreHandlers/actionFactory';
import {reducer as form} from 'redux-form';
import {combineReducers} from 'redux';

const search = (state: {[key:string]: any} = {}, action: Action) => {
  const {type, payload} = action;
    if(searchTypes[type]){
      return {...state, ...payload}
    } else {
      return state;
    }
  };

const tables = (state: {[key:string]: any} = {}, action: Action) => {
  const {type, payload} = action;
    if (tableTypes[type]) {
      return {...state, ...payload};
    } else {
      return state;
    }
  };

export const rootReducer = combineReducers({
    search,
    tables,
    form,
});