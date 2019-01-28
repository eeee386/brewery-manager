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