/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateFeatureSchemaOneOfOnefourAction } from './changeRequestCreateFeatureSchemaOneOfOnefourAction';
import type { SetStrategySortOrderSchema } from './setStrategySortOrderSchema';

/**
 * Reorder strategies for this feature
 */
export type ChangeRequestCreateFeatureSchemaOneOfOnefour = {
    /** The name of this action. */
    action: ChangeRequestCreateFeatureSchemaOneOfOnefourAction;
    payload: SetStrategySortOrderSchema;
};