import {combineReducers} from 'redux';
import { searchTypes } from './Search/types/types';
import { tableTypes } from './TableManager/types/types';
import {reducer as form} from 'redux-form';

const search = (state = {}, { type, payload }) => {
    if(searchTypes[type]){
      return {...state, ...payload}
    } else {
      return state;
    }
  };

const tables = (state = {}, { type, payload }) => {
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

export const actionCreator = (typeObject, payloadContent) => {
    const action = {
        type: typeObject.typeName,
    };

    if (typeObject.payloadName){
        action.payload = {[typeObject.payloadName]: payloadContent}
    }

    action.payload = action.payload ? {...action.payload, loading: typeObject.startType} : {loading: typeObject.startType};

    return action;
};