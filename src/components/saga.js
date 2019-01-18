import { call, put, all, takeEvery } from 'redux-saga/effects'
import { SQLService } from '../SQLService/SQLService';
import { actionCreator } from './reduxManager';
import { searchTypes, searchSagaTypes } from './Search/types/types';
import { tableTypes, tableSagaTypes } from './TableManager/types/types';


const sqlService = new SQLService();
export function* connectSql() {
    console.log('connectSQL is called');
    yield put(actionCreator(tableTypes.CONNECTION_STARTED));
    try {
        console.log('SQLService is called');
        yield call(sqlService.createConnection);
        console.log('sqlService: ', sqlService);
        yield put(actionCreator(tableTypes.CONNECTION_COMPLETED));
        console.log('fetchTableCalled');
        yield put(actionCreator(tableSagaTypes.FETCH_TABLE));
    } catch (error) {
        console.log('connectError: ', error);
        yield put(actionCreator(tableTypes.CONNECTION_FAILED, error));
    }
}

function* watchConnectSql() {
        console.log('it is called');
        console.log(tableSagaTypes.CONNECT_SQL.typeName);
        yield takeEvery(tableSagaTypes.CONNECT_SQL.typeName, connectSql);
}

function* disconnectSql() {
    yield put(actionCreator(tableTypes.DISCONNECTION_STARTED));
    try {
        yield call(sqlService.closeConnection);
        yield put(actionCreator(tableTypes.DISCONNECTION_COMPLETED));
    } catch (error) {
        yield put(actionCreator(tableTypes.DISCONNECTION_FAILED));
    }
}

function* watchDisconnectSql() {
    yield takeEvery(tableSagaTypes.DISCONNECT_SQL.typeName, disconnectSql);
}

function* fetchDistillations() {
    yield put(actionCreator(tableTypes.FETCH_TABLE_STARTED));
    try {
        const distillations = yield call(sqlService.findAll);
        yield put(actionCreator(tableTypes.FETCH_TABLE_COMPLETED, distillations));
    } catch (error) {
        yield put(actionCreator(tableTypes.FETCH_TABLE_FAILED, error));
    }
}

export function* watchFetchDistillation() {
    yield takeEvery(tableSagaTypes.FETCH_TABLE.typeName, fetchDistillations);
}

function* createDistillation(action) {
    yield put(actionCreator(tableTypes.ADD_NEW_STARTED));
    try {
        const newDist = yield call(sqlService.createNewDistillation(action.payload[tableSagaTypes.ADD_NEW.payloadName]));
        yield put(actionCreator(tableTypes.ADD_NEW_COMPLETED, newDist));
    } catch (error) {
        yield put(actionCreator(tableTypes.ADD_NEW_FAILED, error));
    }
}

function* watchCreateDistillation() {
    yield takeEvery(tableSagaTypes.ADD_NEW.typeName, createDistillation);
}

function* updateDistillation(action) {
    yield put(actionCreator(tableTypes.UPDATE_ONE_STARTED));
    try {
        const updatedDistillation = yield call(sqlService.updateDistillation(action.payload[tableSagaTypes.UPDATE_ONE.payloadName]));
        yield put(actionCreator(tableTypes.UPDATE_ONE_COMPLETED, updatedDistillation));
    } catch (error) {
        yield put(actionCreator(tableTypes.UPDATE_ONE_FAILED, error));
    }
}

function* watchUpdateDistillation() {
    yield takeEvery(tableSagaTypes.UPDATE_ONE.typeName, updateDistillation);

}


function* deleteDistillation(action) {
    yield put(actionCreator(tableTypes.DELETE_ONE_STARTED));
    try {
        const deletedDistillation = yield call(sqlService.deleteDistillation(action.payload[tableSagaTypes.DELETE_ONE.payloadName]));
        yield put(actionCreator(tableTypes.DELETE_ONE_COMPLETED, deletedDistillation));
    } catch (error) {
        yield put(actionCreator(tableTypes.DELETE_ONE_FAILED, error));
    }
}

function* watchDeleteDistillation() {
    yield takeEvery(tableSagaTypes.DELETE_ONE.typeName, deleteDistillation);
}

function* searchByName(action) {
    yield put(actionCreator(searchTypes.START_SEARCH_BY_NAME));
    try {
        const results = yield call(sqlService.findAllByName(action.payload));
        yield put(actionCreator(searchTypes.SEARCH_BY_NAME_COMPLETED, results));
    } catch (error) {
        yield put(actionCreator(searchTypes.SEARCH_BY_NAME_FAILED, error));
    }
}

function* watchSearchByName() {
    yield takeEvery(searchSagaTypes.SEARCH_BY_NAME.typeName, searchByName);
}

function* searchByTaxID(action) {
    yield put(actionCreator(searchTypes.START_SEARCH_BY_NUMBER));
    try {
        const results = yield call(sqlService.findAllByTaxID(action.payload));
        yield put(actionCreator(searchTypes.SEARCH_BY_NUMBER_COMPLETED, results));
    } catch (error) {
        yield put(actionCreator(searchTypes.SEARCH_BY_NUMBER_FAILED, error))
    }
}

function* watchSearchByTaxID() {
    yield takeEvery(searchSagaTypes.SEARCH_BY_TAXID.typeName, searchByTaxID);
}

export function* watcherSagas() {
    yield all([
        watchConnectSql(),
        watchDisconnectSql(),
        watchFetchDistillation(),
        watchCreateDistillation(),
        watchUpdateDistillation(),
        watchDeleteDistillation(),
        watchSearchByName(),
        watchSearchByTaxID(),
    ])
}