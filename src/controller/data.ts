/**
 * @author WMXPY
 * @namespace Onion_Controller
 * @description Data
 */

export class OnionDataController<T> {

    public static create<T>(initialData: T): OnionDataController<T> {

        return new OnionDataController<T>(initialData);
    }

    private _data: T;

    private constructor(initialData: T) {

        this._data = initialData;
    }

    public get data(): T {
        return this._data;
    }

    public replace(newData: T): this {

        this._data = newData;
        return this;
    }
}
