/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Environment } from '../models/Environment';
import type { Project } from '../models/Project';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List projects.
     * @returns Project Get all projects.
     * @throws ApiError
     */
    public listProjects(): CancelablePromise<Array<Project>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create
     * Create Project.
     * @returns any Project created.
     * @throws ApiError
     */
    public createProject({
        requestBody,
    }: {
        /**
         * Project created.
         */
        requestBody: {
            /**
             * The name of the project.
             */
            name?: string;
            /**
             * The description of the project.
             */
            description?: string;
        },
    }): CancelablePromise<{
        /**
         * The UUID of the project.
         */
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects',
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
     * Get project by UUID.
     * @returns Project Project details
     * @throws ApiError
     */
    public getProjectByUuid({
        uuid,
    }: {
        /**
         * Project UUID
         */
        uuid: string,
    }): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{uuid}',
            path: {
                'uuid': uuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Project not found.`,
            },
        });
    }
    /**
     * Delete
     * Delete project by UUID.
     * @returns any Project deleted.
     * @throws ApiError
     */
    public deleteProjectByUuid({
        uuid,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{uuid}',
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
     * Update Project.
     * @returns any Project updated.
     * @throws ApiError
     */
    public updateProjectByUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Project updated.
         */
        requestBody: {
            /**
             * The name of the project.
             */
            name?: string;
            /**
             * The description of the project.
             */
            description?: string;
        },
    }): CancelablePromise<{
        uuid?: string;
        name?: string;
        description?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{uuid}',
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
     * Environment
     * Get environment by name.
     * @returns Environment Environment details
     * @throws ApiError
     */
    public getEnvironmentByName({
        uuid,
        environmentName,
    }: {
        /**
         * Project UUID
         */
        uuid: string,
        /**
         * Environment name
         */
        environmentName: string,
    }): CancelablePromise<Environment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{uuid}/{environment_name}',
            path: {
                'uuid': uuid,
                'environment_name': environmentName,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
}
