/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Procedure
 */

import { ProcedureRecord } from "./declare";

export class OnionProcedureController<T> {

    public static create<T>(): OnionProcedureController<T> {

        return new OnionProcedureController<T>();
    }

    public readonly _records: Array<ProcedureRecord<T>>;

    private constructor() {

        this._records = [];
    }
}
