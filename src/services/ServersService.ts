/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Server } from '../models/Server';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List all servers.
     * @returns Server Get all servers.
     * @throws ApiError
     */
    public listServers(): CancelablePromise<Array<Server>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/servers',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create
     * Create Server.
     * @returns any Server created.
     * @throws ApiError
     */
    public createServer({
        requestBody,
    }: {
        /**
         * Server created.
         */
        requestBody: {
            /**
             * The name of the server.
             */
            name?: string;
            /**
             * The description of the server.
             */
            description?: string;
            /**
             * The IP of the server.
             */
            ip?: string;
            /**
             * The port of the server.
             */
            port?: number;
            /**
             * The user of the server.
             */
            user?: string;
            /**
             * The UUID of the private key.
             */
            private_key_uuid?: string;
            /**
             * Is build server.
             */
            is_build_server?: boolean;
            /**
             * Instant validate.
             */
            instant_validate?: boolean;
            /**
             * The proxy type.
             */
            proxy_type?: 'traefik' | 'caddy' | 'none';
        },
    }): CancelablePromise<{
        /**
         * The UUID of the server.
         */
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/servers',
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
     * Get
     * Get server by UUID.
     * @returns Server Get server by UUID
     * @throws ApiError
     */
    public getServerByUuid({
        uuid,
    }: {
        /**
         * Server's UUID
         */
        uuid: string,
    }): CancelablePromise<Server> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/servers/{uuid}',
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
     * Delete server by UUID.
     * @returns any Server deleted.
     * @throws ApiError
     */
    public deleteServerByUuid({
        uuid,
    }: {
        /**
         * UUID of the server.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/servers/{uuid}',
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
     * Update
     * Update Server.
     * @returns Server Server updated.
     * @throws ApiError
     */
    public updateServerByUuid({
        uuid,
        requestBody,
    }: {
        /**
         * Server's UUID
         */
        uuid: string,
        /**
         * Server updated.
         */
        requestBody: {
            /**
             * The name of the server.
             */
            name?: string;
            /**
             * The description of the server.
             */
            description?: string;
            /**
             * The IP of the server.
             */
            ip?: string;
            /**
             * The port of the server.
             */
            port?: number;
            /**
             * The user of the server.
             */
            user?: string;
            /**
             * The UUID of the private key.
             */
            private_key_uuid?: string;
            /**
             * Is build server.
             */
            is_build_server?: boolean;
            /**
             * Instant validate.
             */
            instant_validate?: boolean;
            /**
             * The proxy type.
             */
            proxy_type?: 'traefik' | 'caddy' | 'none';
        },
    }): CancelablePromise<Array<Server>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/servers/{uuid}',
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
     * Resources
     * Get resources by server.
     * @returns any Get resources by server
     * @throws ApiError
     */
    public getResourcesByServerUuid({
        uuid,
    }: {
        /**
         * Server's UUID
         */
        uuid: string,
    }): CancelablePromise<Array<{
        id?: number;
        uuid?: string;
        name?: string;
        type?: string;
        created_at?: string;
        updated_at?: string;
        status?: string;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/servers/{uuid}/resources',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Domains
     * Get domains by server.
     * @returns any Get domains by server
     * @throws ApiError
     */
    public getDomainsByServerUuid({
        uuid,
    }: {
        /**
         * Server's UUID
         */
        uuid: string,
    }): CancelablePromise<Array<{
        ip?: string;
        domains?: Array<string>;
    }>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/servers/{uuid}/domains',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Validate
     * Validate server by UUID.
     * @returns any Server validation started.
     * @throws ApiError
     */
    public validateServerByUuid({
        uuid,
    }: {
        /**
         * Server UUID
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/servers/{uuid}/validate',
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
