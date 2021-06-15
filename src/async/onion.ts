/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Onion
 */

import { AsyncLayer } from "./layer";

export class AsyncOnion<T extends any = any> {

    public static create<T extends any = any>(): AsyncOnion<T> {

        return new AsyncOnion<T>();
    }

    private readonly _layers: Array<AsyncLayer<T>>;

    private constructor() {

        this._layers = [];
    }

    public get size(): number {
        return this._layers.length;
    }

    public appendEarlier(layer: AsyncLayer<T>): this {

        this._layers.push(layer);
        return this;
    }

    public appendLater(layer: AsyncLayer<T>): this {

        this._layers.unshift(layer);
        return this;
    }
}
