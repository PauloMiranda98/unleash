/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */
import type { PlaygroundRequestSchemaProjects } from './playgroundRequestSchemaProjects';
import type { SdkContextSchema } from './sdkContextSchema';

/**
 * Data for the playground API to evaluate toggles
 */
export interface PlaygroundRequestSchema {
    /** The environment to evaluate toggles in. */
    environment: string;
    projects?: PlaygroundRequestSchemaProjects;
    /** The context to use when evaluating toggles */
    context: SdkContextSchema;
}
