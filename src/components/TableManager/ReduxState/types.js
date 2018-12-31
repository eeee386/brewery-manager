export const payloadNames = {
    TABLE_LOADING: 'tableLoading',
    TABLE_EXCEPTION: 'tableException',
    TABLES: 'tables',
    ADDED_TO_TABLE: 'addedToTable',
    DELETED_FROM_TABLE: 'deletedFromTable',
    UPDATED_IN_TABLE: 'updatedInTable',
}

export const tableSagaTypes = {
    CONNECT_SQL: {typeName: 'CONNECT_SQL'},
    FETCH_TABLE: {typeName: 'FETCH_TABLE'},
    ADD_NEW: {typeName: 'ADD_NEW'},
    DELETE_ONE: {typeName: 'DELETE_ONE'},
    UPDATE_ONE: {typeName: 'UPDATE_ONE'},
    DISCONNECT_SQL: {typeName: 'DISCONNECT_SQL'},
}
// Add new async type, by adding typeName, asyncType (startType, completeType, failType), payloadName.
export const tableTypes = {
    FETCH_TABLE_STARTED: {typeName: 'FETCH_TABLE_STARTED', startType: true, payloadName: payloadNames.TABLE_LOADING},
    FETCH_TABLE_FAILED: {typeName: 'FETCH_TABLE_FAILED', failType: true, payloadName: payloadNames.TABLE_EXCEPTION},
    FETCH_TABLE_COMPLETED: {typeName: 'FETCH_TABLE_COMPLETED', completeType: true, payloadName: payloadNames.TABLES},
    ADD_NEW_STARTED: {typeName: 'ADD_NEW_STARTED', startType: true,  payloadName: payloadNames.TABLE_LOADING },
    ADD_NEW_FAILED: {typeName: 'ADD_NEW_FAILED', failType: true, payloadName: payloadNames.TABLE_EXCEPTION },
    ADD_NEW_COMPLETED: {typeName: 'ADD_NEW_COMPLETED', completeType: true, payloadName: payloadNames.ADDED_TO_TABLE},
    DELETE_ONE_STARTED: {typeName: 'DELETE_ONE_STARTED', startType: true,  payloadName: payloadNames.TABLE_LOADING },
    DELETE_ONE_FAILED: {typeName: 'DELETE_ONE_FAILED', failType: true, payloadName: payloadNames.TABLE_EXCEPTION },
    DELETE_ONE_COMPLETED: {typeName: 'DELETE_ONE_COMPLETED', completeType: true, payloadName: payloadNames.DELETED_FROM_TABLE},
    UPDATE_ONE_STARTED: {typeName: 'UPDATE_ONE_STARTED', startType: true,  payloadName: payloadNames.TABLE_LOADING },
    UPDATE_ONE_FAILED: {typeName: 'UPDATE_ONE_FAILED', failType: true, payloadName: payloadNames.TABLE_EXCEPTION },
    UPDATE_ONE_COMPLETED: {typeName: 'UPDATE_ONE_COMPLETED', completeType: true, payloadName: payloadNames.UPDATED_IN_TABLE},
    CONNECTION_STARTED: {typeName: 'CONNECTION_STARTED', startType: true},
    CONNECTION_FAILED: {typeName: 'CONNECTION_FAILED', failType: true},
    CONNECTION_COMPLETED: {typeName: 'CONNECTION_COMPLETED', completeType: true},
    DISCONNECTION_STARTED: {typeName: 'DISCONNECTION_STARTED', startType: true},
    DISCONNECTION_FAILED: {typeName: 'DISCONNECTION_FAILED', failType: true},
    DISCONNECTION_COMPLETED: {typeName: 'DISCONNECTION_COMPLETED', completeType: true},
}