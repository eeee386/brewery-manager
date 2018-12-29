export const payloadNames = {
    SEARCH_LOADING: 'searchLoading',
    SEARCH_EXCEPTION: 'searchException',
    SEARCH_RESULT: 'searchResult',
}

export const searchSagaTypes = {
    SEARCH_BY_NAME: 'SEARCH_BY_NAME',
    SEARCH_BY_TAXID: 'SEARCH_BY_TAXID',
}

export const searchTypes = {
    START_SEARCH_BY_NUMBER: {typeName: 'START_SEARCH_BY_NUMBER', startType: true, payloadName: payloadNames.SEARCH_LOADING },
    SEARCH_BY_NUMBER_FAILED: {typeName: 'SEARCH_BY_NUMBER_FAILED', failType: true, payloadName: payloadNames.SEARCH_EXCEPTION },
    SEARCH_BY_NUMBER_COMPLETED: {typeName: 'SEARCH_BY_NUMBER_COMPLETED', completeType: true, payloadName: payloadNames.SEARCH_RESULT },
    START_SEARCH_BY_NAME: {typeName: 'START_SEARCH_BY_NAME', startType: true, payloadName: payloadNames.SEARCH_LOADING },
    SEARCH_BY_NAME_FAILED: {typeName: 'SEARCH_BY_NAME_FAILED', failType: true, payloadName: payloadNames.SEARCH_EXCEPTION },
    SEARCH_BY_NAME_COMPLETED: {typeName: 'SEARCH_BY_NAME_COMPLETED', completeType: true, payloadName: payloadNames.SEARCH_RESULT },
}