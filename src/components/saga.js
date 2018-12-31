import { call, put, take } from 'redux-saga/effects'
import { SQLService } from '../SQLService/SQLService';
import { actionCreator } from './reduxManager';
import { searchTypes, searchSagaTypes } from './Search/ReduxState/types';
import { tableTypes, tableSagaTypes } from './TableManager/ReduxState/types';


let sqlService;
export function* connectSql() {
    yield put(actionCreator(tableTypes.CONNECTION_STARTED));
    try {
        sqlService = new SQLService();
        yield put(actionCreator(tableTypes.DELETE_ONE_COMPLETED));
    } catch (error) {
        yield put(actionCreator(tableTypes.CONNECTION_FAILED));
    }
}

function* watchConnectSql() {
    while(true){
        yield take(tableSagaTypes.CONNECT_SQL.typeName, connectSql);
    }
}

function* disconnectSql() {
    yield put(actionCreator(tableTypes.DISCONNECTION_STARTED));
    try {
        sqlService.closeConnection();
        yield put(actionCreator(tableTypes.DISCONNECTION_COMPLETED));
    } catch (error) {
        yield put(actionCreator(tableTypes.DISCONNECTION_FAILED));
    }
}

function* watchDisconnectSql() {
    while(true){
        yield take(tableSagaTypes.DISCONNECT_SQL.typeName, disconnectSql);
    }
}

function* fetchDistillations() {
    yield put(actionCreator(tableTypes.FETCH_TABLE_STARTED));
    try {
        const distillations = yield call(sqlService.findAll());
        yield put(actionCreator(tableTypes.FETCH_TABLE_COMPLETED, distillations));
    } catch (error) {
        yield put(actionCreator(tableTypes.FETCH_TABLE_FAILED, error));
    }
}

function* watchFetchDistillation() {
    while(true){
        yield take(tableSagaTypes.FETCH_TABLE.typeName, fetchDistillations);
    }
}

function* createDistillation(distillation) {
    yield put(actionCreator(tableTypes.ADD_NEW_STARTED));
    try {
        const newDist = yield call(sqlService.createNewDistillation(distillation));
        yield put(actionCreator(tableTypes.ADD_NEW_COMPLETED, newDist));
    } catch (error) {
        yield put(actionCreator(tableTypes.ADD_NEW_FAILED, error));
    }
}

function* watchCreateDistillation() {
    while(true){
        yield take(tableSagaTypes.ADD_NEW.typeName, createDistillation);
    }
}

function* updateDistillation(distillation) {
    yield put(actionCreator(tableTypes.UPDATE_ONE_STARTED));
    try {
        const updatedDistillation = yield call(sqlService.updateDistillation(distillation));
        yield put(actionCreator(tableTypes.UPDATE_ONE_COMPLETED, updatedDistillation));
    } catch (error) {
        yield put(actionCreator(tableTypes.UPDATE_ONE_FAILED, error));
    }
}

function* watchUpdateDistillation() {
    while(true){
        yield take(tableSagaTypes.UPDATE_ONE.typeName, updateDistillation);
    }
}


function* deleteDistillation(distillation) {
    yield put(actionCreator(tableTypes.DELETE_ONE_STARTED));
    try {
        const deletedDistillation = yield call(sqlService.deleteDistillation(distillation));
        yield put(actionCreator(tableTypes.DELETE_ONE_COMPLETED, deletedDistillation));
    } catch (error) {
        yield put(actionCreator(tableTypes.DELETE_ONE_FAILED, error));
    }
}

function* watchDeleteDistillation() {
    while(true) {
        yield take(tableSagaTypes.DELETE_ONE.typeName, deleteDistillation);
    }
}

function* searchByName(name) {
    yield put(actionCreator(searchTypes.START_SEARCH_BY_NAME));
    try {
        const results = yield call(sqlService.findAllByName(name));
        yield put(actionCreator(searchTypes.SEARCH_BY_NAME_COMPLETED, results));
    } catch (error) {
        yield put(actionCreator(searchTypes.SEARCH_BY_NAME_FAILED, error));
    }
}

function* watchSearchByName() {
    while(true){
        yield take(searchSagaTypes.searchByName.typeName, searchByName);
    }
}

function* searchByTaxID(taxID) {
    yield put(actionCreator(searchTypes.START_SEARCH_BY_NUMBER));
    try {
        const results = yield call(sqlService.findAllByTaxID(taxID));
        yield put(actionCreator(searchTypes.SEARCH_BY_NUMBER_COMPLETED, results));
    } catch (error) {
        yield put(actionCreator(searchTypes.SEARCH_BY_NUMBER_FAILED, error))
    }
}

function* watchSearchByTaxID() {
    while(true){
        yield take(searchSagaTypes.searchByTaxID.typeName, searchByTaxID);
    }
}