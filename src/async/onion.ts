/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Onion
 */

import { AsyncLayer } from "./layer";

export class AsyncOnion {

    public static create(): AsyncOnion {

        return new AsyncOnion();
    }

    private readonly _layers: AsyncLayer[];

    private constructor() {

        this._layers = [];
    }
}
