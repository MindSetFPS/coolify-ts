/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateKey } from '../models/PrivateKey';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PrivateKeysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List all private keys.
     * @returns PrivateKey Get all private keys.
     * @throws ApiError
     */
    public listPrivateKeys(): CancelablePromise<Array<PrivateKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/security/keys',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create
     * Create a new private key.
     * @returns any The created private key's UUID.
     * @throws ApiError
     */
    public createPrivateKey({
        requestBody,
    }: {
        requestBody: {
            name?: string;
            description?: string;
            private_key: string;
        },
    }): CancelablePromise<{
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/security/keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Update
     * Update a private key.
     * @returns any The updated private key's UUID.
     * @throws ApiError
     */
    public updatePrivateKey({
        requestBody,
    }: {
        requestBody: {
            name?: string;
            description?: string;
            private_key: string;
        },
    }): CancelablePromise<{
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/security/keys',
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
     * Get key by UUID.
     * @returns PrivateKey Get all private keys.
     * @throws ApiError
     */
    public getPrivateKeyByUuid({
        uuid,
    }: {
        /**
         * Private Key UUID
         */
        uuid: string,
    }): CancelablePromise<PrivateKey> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/security/keys/{uuid}',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Private Key not found.`,
            },
        });
    }
    /**
     * Delete
     * Delete a private key.
     * @returns any Private Key deleted.
     * @throws ApiError
     */
    public deletePrivateKeyByUuid({
        uuid,
    }: {
        /**
         * Private Key UUID
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/security/keys/{uuid}',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Private Key not found.`,
            },
        });
    }
}
