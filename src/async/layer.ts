/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Layer
 */

import { AsyncResolver } from "./declare";

export class AsyncLayer<T extends any = any> {

    public static create<T extends any = any>(resolver: AsyncResolver<T>): AsyncLayer<T> {

        return new AsyncLayer<T>(resolver);
    }

    private readonly _resolver: AsyncResolver<T>;

    private constructor(resolver: AsyncResolver<T>) {

        this._resolver = resolver;
    }
}
