//all the async types.

export class SagaType implements Type {
    typeName: string;
    payloadName?: string

    constructor(typeName: string, payloadName?: string) {
        this.typeName = typeName;
        this.payloadName = payloadName;
    }
}