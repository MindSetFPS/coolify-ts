/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Service model
 */
export type Service = {
    /**
     * The unique identifier of the service. Only used for database identification.
     */
    id?: number;
    /**
     * The unique identifier of the service.
     */
    uuid?: string;
    /**
     * The name of the service.
     */
    name?: string;
    /**
     * The unique identifier of the environment where the service is attached to.
     */
    environment_id?: number;
    /**
     * The unique identifier of the server where the service is running.
     */
    server_id?: number;
    /**
     * The description of the service.
     */
    description?: string;
    /**
     * The raw docker-compose.yml file of the service.
     */
    docker_compose_raw?: string;
    /**
     * The docker-compose.yml file that is parsed and modified by Coolify.
     */
    docker_compose?: string;
    /**
     * Destination type.
     */
    destination_type?: string;
    /**
     * The unique identifier of the destination where the service is running.
     */
    destination_id?: number;
    /**
     * The flag to connect the service to the predefined Docker network.
     */
    connect_to_docker_network?: boolean;
    /**
     * The flag to enable the container label escape.
     */
    is_container_label_escape_enabled?: boolean;
    /**
     * The flag to enable the container label readonly.
     */
    is_container_label_readonly_enabled?: boolean;
    /**
     * The hash of the service configuration.
     */
    config_hash?: string;
    /**
     * The type of the service.
     */
    service_type?: string;
    /**
     * The date and time when the service was created.
     */
    created_at?: string;
    /**
     * The date and time when the service was last updated.
     */
    updated_at?: string;
    /**
     * The date and time when the service was deleted.
     */
    deleted_at?: string;
};

