/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Environment } from './Environment';
/**
 * Project model
 */
export type Project = {
    id?: number;
    uuid?: string;
    name?: string;
    description?: string;
    /**
     * The environments of the project.
     */
    environments?: Array<Environment>;
};

