/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Project model
 */
export type ApplicationDeploymentQueue = {
    id?: number;
    application_id?: string;
    deployment_uuid?: string;
    pull_request_id?: number;
    force_rebuild?: boolean;
    commit?: string;
    status?: string;
    is_webhook?: boolean;
    is_api?: boolean;
    created_at?: string;
    updated_at?: string;
    logs?: string;
    current_process_id?: string;
    restart_only?: boolean;
    git_type?: string;
    server_id?: number;
    application_name?: string;
    server_name?: string;
    deployment_url?: string;
    destination_id?: string;
    only_this_server?: boolean;
    rollback?: boolean;
    commit_message?: string;
};

