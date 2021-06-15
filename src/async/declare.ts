/**
 * @author WMXPY
 * @namespace Onion_Async
 * @description Declare
 */

import { OnionDataController } from "../controller/data";
import { OnionProcedureController } from "../controller/procedure";

export type AsyncResolver<T> = (
    dataController: OnionDataController<T>,
    procedureController: OnionProcedureController<T>,
) => Promise<(
    dataController: OnionDataController<T>,
    procedureController: OnionProcedureController<T>,
) => any>;
