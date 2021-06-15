/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Declare
 */

export type ProcedureRecord<T> = {

    readonly layerId: string;

    readonly beforeIn?: T;
    readonly inExecuted: boolean;
    readonly afterIn?: T;

    readonly beforeOut?: T;
    readonly outExecuted: boolean;
    readonly afterOut?: T;
};
