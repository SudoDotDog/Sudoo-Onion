/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Declare
 */

export type AsyncResolver<T> = (data: T) => (data: T) => T;
