/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationDeploymentQueue } from '../models/ApplicationDeploymentQueue';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeploymentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List currently running deployments
     * @returns ApplicationDeploymentQueue Get all currently running deployments.
     * @throws ApiError
     */
    public listDeployments(): CancelablePromise<Array<ApplicationDeploymentQueue>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deployments',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Get
     * Get deployment by UUID.
     * @returns ApplicationDeploymentQueue Get deployment by UUID.
     * @throws ApiError
     */
    public getDeploymentByUuid({
        uuid,
    }: {
        /**
         * Deployment UUID
         */
        uuid: string,
    }): CancelablePromise<ApplicationDeploymentQueue> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deployments/{uuid}',
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
     * Deploy
     * Deploy by tag or uuid. `Post` request also accepted.
     * @returns any Get deployment(s) UUID's
     * @throws ApiError
     */
    public deployByTagOrUuid({
        tag,
        uuid,
        force,
    }: {
        /**
         * Tag name(s). Comma separated list is also accepted.
         */
        tag?: string,
        /**
         * Resource UUID(s). Comma separated list is also accepted.
         */
        uuid?: string,
        /**
         * Force rebuild (without cache)
         */
        force?: boolean,
    }): CancelablePromise<{
        deployments?: Array<{
            message?: string;
            resource_uuid?: string;
            deployment_uuid?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deploy',
            query: {
                'tag': tag,
                'uuid': uuid,
                'force': force,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
}
