/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Procedure
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class OnionProcedureController<T> {

    public static create<T>(): OnionProcedureController<T> {

        return new OnionProcedureController<T>();
    }

    public readonly _records: any[];

    private constructor() {

        this._records = [];
    }
}
