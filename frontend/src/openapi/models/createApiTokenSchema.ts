/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */

export interface CreateApiTokenSchema {
    secret?: string;
    username: string;
    /** One of client, admin, frontend */
    type: string;
    environment?: string;
    project?: string;
    projects?: string[];
    expiresAt?: string | null;
}
