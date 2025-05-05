/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResourcesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * Get all resources.
     * @returns string Get all resources
     * @throws ApiError
     */
    public listResources(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/resources',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
}
