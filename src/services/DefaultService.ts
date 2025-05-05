/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Version
     * Get Coolify version.
     * @returns string Returns the version of the application
     * @throws ApiError
     */
    public version(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/version',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Enable API
     * Enable API (only with root permissions).
     * @returns any Enable API.
     * @throws ApiError
     */
    public enableApi(): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enable',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                403: `You are not allowed to enable the API.`,
            },
        });
    }
    /**
     * Disable API
     * Disable API (only with root permissions).
     * @returns any Disable API.
     * @throws ApiError
     */
    public disableApi(): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/disable',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                403: `You are not allowed to disable the API.`,
            },
        });
    }
    /**
     * Healthcheck
     * Healthcheck endpoint.
     * @returns string Healthcheck endpoint.
     * @throws ApiError
     */
    public healthcheck(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
}
