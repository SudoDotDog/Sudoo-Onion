/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Declare
 */

type ProcedureInRecord<T> = {

    readonly in: false;
} | {

    readonly in: true;
    readonly beforeIn: T;
    readonly afterIn: T;
};

type ProcedureOutRecord<T> = {

    readonly out: false;
} | {

    readonly out: true;
    readonly beforeOut: T;
    readonly afterOut: T;
};

export type ProcedureRecord<T> = {

    readonly layerId: string;
} & ProcedureInRecord<T> & ProcedureOutRecord<T>;
