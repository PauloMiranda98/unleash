/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */
import type { RequestsPerSecondSchemaDataResultItemMetric } from './requestsPerSecondSchemaDataResultItemMetric';
import type { RequestsPerSecondSchemaDataResultItemValuesItemItem } from './requestsPerSecondSchemaDataResultItemValuesItemItem';

export type RequestsPerSecondSchemaDataResultItem = {
    /** A key value set representing the metric */
    metric?: RequestsPerSecondSchemaDataResultItemMetric;
    /** An array of arrays. Each element of the array is an array of size 2 consisting of the 2 axis for the graph: in position zero the x axis represented as a number and position one the y axis represented as string */
    values?: RequestsPerSecondSchemaDataResultItemValuesItemItem[][];
};
