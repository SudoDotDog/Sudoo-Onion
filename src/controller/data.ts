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
}
