/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */
import type { UiConfigSchemaFlags } from './uiConfigSchemaFlags';
import type { UiConfigSchemaLinksItem } from './uiConfigSchemaLinksItem';
import type { UiConfigSchemaAuthenticationType } from './uiConfigSchemaAuthenticationType';
import type { VersionSchema } from './versionSchema';

export interface UiConfigSchema {
    slogan?: string;
    name?: string;
    version: string;
    environment?: string;
    unleashUrl: string;
    baseUriPath: string;
    disablePasswordAuth?: boolean;
    emailEnabled?: boolean;
    maintenanceMode?: boolean;
    segmentValuesLimit?: number;
    strategySegmentsLimit?: number;
    frontendApiOrigins?: string[];
    flags?: UiConfigSchemaFlags;
    links?: UiConfigSchemaLinksItem[];
    authenticationType?: UiConfigSchemaAuthenticationType;
    versionInfo: VersionSchema;
}
