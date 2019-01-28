// All the types that directly modifies the redux state.

class ReduxType implements SyncType {
    typeName: string;
    asyncType: AsyncTypes;
    payloadName?: string;
    constructor(typeName: string, asyncType:  AsyncTypes, payloadName?: string) {
        this.typeName = typeName;
        this.asyncType = asyncType;
        this.payloadName = payloadName;
    }
}