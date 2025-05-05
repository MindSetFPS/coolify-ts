/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentVariable } from '../models/EnvironmentVariable';
import type { Service } from '../models/Service';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServicesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List all services.
     * @returns Service Get all services
     * @throws ApiError
     */
    public listServices(): CancelablePromise<Array<Service>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create
     * Create a one-click service
     * @returns any Create a service.
     * @throws ApiError
     */
    public createService({
        requestBody,
    }: {
        requestBody: {
            /**
             * The one-click service type
             */
            type: 'activepieces' | 'appsmith' | 'appwrite' | 'authentik' | 'babybuddy' | 'budge' | 'changedetection' | 'chatwoot' | 'classicpress-with-mariadb' | 'classicpress-with-mysql' | 'classicpress-without-database' | 'cloudflared' | 'code-server' | 'dashboard' | 'directus' | 'directus-with-postgresql' | 'docker-registry' | 'docuseal' | 'docuseal-with-postgres' | 'dokuwiki' | 'duplicati' | 'emby' | 'embystat' | 'fider' | 'filebrowser' | 'firefly' | 'formbricks' | 'ghost' | 'gitea' | 'gitea-with-mariadb' | 'gitea-with-mysql' | 'gitea-with-postgresql' | 'glance' | 'glances' | 'glitchtip' | 'grafana' | 'grafana-with-postgresql' | 'grocy' | 'heimdall' | 'homepage' | 'jellyfin' | 'jenkins' | 'kuzzle' | 'listmonk' | 'logto' | 'mediawiki' | 'meilisearch' | 'metabase' | 'metube' | 'minio' | 'moodle' | 'mosquitto' | 'n8n' | 'n8n-with-postgresql' | 'next-image-transformation' | 'nextcloud' | 'nocodb' | 'odoo' | 'openblocks' | 'pairdrop' | 'penpot' | 'phpmyadmin' | 'pocketbase' | 'posthog' | 'reactive-resume' | 'rocketchat' | 'shlink' | 'slash' | 'snapdrop' | 'statusnook' | 'stirling-pdf' | 'supabase' | 'syncthing' | 'tolgee' | 'trigger' | 'trigger-with-external-database' | 'twenty' | 'umami' | 'unleash-with-postgresql' | 'unleash-without-database' | 'uptime-kuma' | 'vaultwarden' | 'vikunja' | 'weblate' | 'whoogle' | 'wordpress-with-mariadb' | 'wordpress-with-mysql' | 'wordpress-without-database';
            /**
             * Name of the service.
             */
            name?: string;
            /**
             * Description of the service.
             */
            description?: string | null;
            /**
             * Project UUID.
             */
            project_uuid: string;
            /**
             * Environment name.
             */
            environment_name: string;
            /**
             * Server UUID.
             */
            server_uuid: string;
            /**
             * Destination UUID. Required if server has multiple destinations.
             */
            destination_uuid?: string;
            /**
             * Start the service immediately after creation.
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<{
        /**
         * Service UUID.
         */
        uuid?: string;
        /**
         * Service domains.
         */
        domains?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Get
     * Get service by UUID.
     * @returns Service Get a service by UUID.
     * @throws ApiError
     */
    public getServiceByUuid({
        uuid,
    }: {
        /**
         * Service UUID
         */
        uuid: string,
    }): CancelablePromise<Service> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{uuid}',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Delete
     * Delete service by UUID.
     * @returns any Delete a service by UUID
     * @throws ApiError
     */
    public deleteServiceByUuid({
        uuid,
        deleteConfigurations = true,
        deleteVolumes = true,
        dockerCleanup = true,
        deleteConnectedNetworks = true,
    }: {
        /**
         * Service UUID
         */
        uuid: string,
        /**
         * Delete configurations.
         */
        deleteConfigurations?: boolean,
        /**
         * Delete volumes.
         */
        deleteVolumes?: boolean,
        /**
         * Run docker cleanup.
         */
        dockerCleanup?: boolean,
        /**
         * Delete connected networks.
         */
        deleteConnectedNetworks?: boolean,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/services/{uuid}',
            path: {
                'uuid': uuid,
            },
            query: {
                'delete_configurations': deleteConfigurations,
                'delete_volumes': deleteVolumes,
                'docker_cleanup': dockerCleanup,
                'delete_connected_networks': deleteConnectedNetworks,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * List Envs
     * List all envs by service UUID.
     * @returns EnvironmentVariable All environment variables by service UUID.
     * @throws ApiError
     */
    public listEnvsByServiceUuid({
        uuid,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
    }): CancelablePromise<Array<EnvironmentVariable>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{uuid}/envs',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Create Env
     * Create env by service UUID.
     * @returns any Environment variable created.
     * @throws ApiError
     */
    public createEnvByServiceUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
        /**
         * Env created.
         */
        requestBody: {
            /**
             * The key of the environment variable.
             */
            key?: string;
            /**
             * The value of the environment variable.
             */
            value?: string;
            /**
             * The flag to indicate if the environment variable is used in preview deployments.
             */
            is_preview?: boolean;
            /**
             * The flag to indicate if the environment variable is used in build time.
             */
            is_build_time?: boolean;
            /**
             * The flag to indicate if the environment variable is a literal, nothing espaced.
             */
            is_literal?: boolean;
            /**
             * The flag to indicate if the environment variable is multiline.
             */
            is_multiline?: boolean;
            /**
             * The flag to indicate if the environment variable's value is shown on the UI.
             */
            is_shown_once?: boolean;
        },
    }): CancelablePromise<{
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/services/{uuid}/envs',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Update Env
     * Update env by service UUID.
     * @returns any Environment variable updated.
     * @throws ApiError
     */
    public updateEnvByServiceUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
        /**
         * Env updated.
         */
        requestBody: {
            /**
             * The key of the environment variable.
             */
            key: string;
            /**
             * The value of the environment variable.
             */
            value: string;
            /**
             * The flag to indicate if the environment variable is used in preview deployments.
             */
            is_preview?: boolean;
            /**
             * The flag to indicate if the environment variable is used in build time.
             */
            is_build_time?: boolean;
            /**
             * The flag to indicate if the environment variable is a literal, nothing espaced.
             */
            is_literal?: boolean;
            /**
             * The flag to indicate if the environment variable is multiline.
             */
            is_multiline?: boolean;
            /**
             * The flag to indicate if the environment variable's value is shown on the UI.
             */
            is_shown_once?: boolean;
        },
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/services/{uuid}/envs',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Update Envs (Bulk)
     * Update multiple envs by service UUID.
     * @returns any Environment variables updated.
     * @throws ApiError
     */
    public updateEnvsByServiceUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
        /**
         * Bulk envs updated.
         */
        requestBody: {
            data: Array<{
                /**
                 * The key of the environment variable.
                 */
                key?: string;
                /**
                 * The value of the environment variable.
                 */
                value?: string;
                /**
                 * The flag to indicate if the environment variable is used in preview deployments.
                 */
                is_preview?: boolean;
                /**
                 * The flag to indicate if the environment variable is used in build time.
                 */
                is_build_time?: boolean;
                /**
                 * The flag to indicate if the environment variable is a literal, nothing espaced.
                 */
                is_literal?: boolean;
                /**
                 * The flag to indicate if the environment variable is multiline.
                 */
                is_multiline?: boolean;
                /**
                 * The flag to indicate if the environment variable's value is shown on the UI.
                 */
                is_shown_once?: boolean;
            }>;
        },
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/services/{uuid}/envs/bulk',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Delete Env
     * Delete env by UUID.
     * @returns any Environment variable deleted.
     * @throws ApiError
     */
    public deleteEnvByServiceUuid({
        uuid,
        envUuid,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
        /**
         * UUID of the environment variable.
         */
        envUuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/services/{uuid}/envs/{env_uuid}',
            path: {
                'uuid': uuid,
                'env_uuid': envUuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Start
     * Start service. `Post` request is also accepted.
     * @returns any Start service.
     * @throws ApiError
     */
    public startServiceByUuid({
        uuid,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{uuid}/start',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Stop
     * Stop service. `Post` request is also accepted.
     * @returns any Stop service.
     * @throws ApiError
     */
    public stopServiceByUuid({
        uuid,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{uuid}/stop',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Restart
     * Restart service. `Post` request is also accepted.
     * @returns any Restart service.
     * @throws ApiError
     */
    public restartServiceByUuid({
        uuid,
    }: {
        /**
         * UUID of the service.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{uuid}/restart',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
}
