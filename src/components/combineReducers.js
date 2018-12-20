import combineReducers from 'redux';
import search from './Search/ReduxState/reducer';
import tables from './TableManager/ReduxState/reducer';


export const rootReducer = combineReducers({
    search,
    tables
})