/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Declare
 */

import { OnionDataController } from "../controller/data";

export type AsyncResolver<T> = (
    data: OnionDataController<T>,
) => Promise<(
    data: OnionDataController<T>,
) => any>;
