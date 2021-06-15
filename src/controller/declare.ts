/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Declare
 */

export type ProcedureRecord<T> = {

    readonly layerId: string;
} & ({

    readonly in: false;
    readonly out: false;
} | {

    readonly in: true;
    readonly beforeIn: T;
    readonly afterIn: T;

    readonly out: false;
} | {

    readonly in: true;
    readonly beforeIn: T;
    readonly afterIn: T;

    readonly out: true;
    readonly beforeOut: T;
    readonly afterOut: T;
});
