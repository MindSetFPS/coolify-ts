/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Application model
 */
export type Application = {
    /**
     * The application identifier in the database.
     */
    id?: number;
    /**
     * The application description.
     */
    description?: string | null;
    /**
     * The repository project identifier.
     */
    repository_project_id?: number | null;
    /**
     * The application UUID.
     */
    uuid?: string;
    /**
     * The application name.
     */
    name?: string;
    /**
     * The application domains.
     */
    fqdn?: string | null;
    /**
     * Configuration hash.
     */
    config_hash?: string;
    /**
     * Git repository URL.
     */
    git_repository?: string;
    /**
     * Git branch.
     */
    git_branch?: string;
    /**
     * Git commit SHA.
     */
    git_commit_sha?: string;
    /**
     * Git full URL.
     */
    git_full_url?: string | null;
    /**
     * Docker registry image name.
     */
    docker_registry_image_name?: string | null;
    /**
     * Docker registry image tag.
     */
    docker_registry_image_tag?: string | null;
    /**
     * Build pack.
     */
    build_pack?: Application.build_pack;
    /**
     * Static image used when static site is deployed.
     */
    static_image?: string;
    /**
     * Install command.
     */
    install_command?: string;
    /**
     * Build command.
     */
    build_command?: string;
    /**
     * Start command.
     */
    start_command?: string;
    /**
     * Ports exposes.
     */
    ports_exposes?: string;
    /**
     * Ports mappings.
     */
    ports_mappings?: string | null;
    /**
     * Base directory for all commands.
     */
    base_directory?: string;
    /**
     * Publish directory.
     */
    publish_directory?: string;
    /**
     * Health check enabled.
     */
    health_check_enabled?: boolean;
    /**
     * Health check path.
     */
    health_check_path?: string;
    /**
     * Health check port.
     */
    health_check_port?: string | null;
    /**
     * Health check host.
     */
    health_check_host?: string | null;
    /**
     * Health check method.
     */
    health_check_method?: string;
    /**
     * Health check return code.
     */
    health_check_return_code?: number;
    /**
     * Health check scheme.
     */
    health_check_scheme?: string;
    /**
     * Health check response text.
     */
    health_check_response_text?: string | null;
    /**
     * Health check interval in seconds.
     */
    health_check_interval?: number;
    /**
     * Health check timeout in seconds.
     */
    health_check_timeout?: number;
    /**
     * Health check retries count.
     */
    health_check_retries?: number;
    /**
     * Health check start period in seconds.
     */
    health_check_start_period?: number;
    /**
     * Memory limit.
     */
    limits_memory?: string;
    /**
     * Memory swap limit.
     */
    limits_memory_swap?: string;
    /**
     * Memory swappiness.
     */
    limits_memory_swappiness?: number;
    /**
     * Memory reservation.
     */
    limits_memory_reservation?: string;
    /**
     * CPU limit.
     */
    limits_cpus?: string;
    /**
     * CPU set.
     */
    limits_cpuset?: string | null;
    /**
     * CPU shares.
     */
    limits_cpu_shares?: number;
    /**
     * Application status.
     */
    status?: string;
    /**
     * Preview URL template.
     */
    preview_url_template?: string;
    /**
     * Destination type.
     */
    destination_type?: string;
    /**
     * Destination identifier.
     */
    destination_id?: number;
    /**
     * Source identifier.
     */
    source_id?: number | null;
    /**
     * Private key identifier.
     */
    private_key_id?: number | null;
    /**
     * Environment identifier.
     */
    environment_id?: number;
    /**
     * Dockerfile content. Used for dockerfile build pack.
     */
    dockerfile?: string | null;
    /**
     * Dockerfile location.
     */
    dockerfile_location?: string;
    /**
     * Custom labels.
     */
    custom_labels?: string | null;
    /**
     * Dockerfile target build.
     */
    dockerfile_target_build?: string | null;
    /**
     * Manual webhook secret for GitHub.
     */
    manual_webhook_secret_github?: string | null;
    /**
     * Manual webhook secret for GitLab.
     */
    manual_webhook_secret_gitlab?: string | null;
    /**
     * Manual webhook secret for Bitbucket.
     */
    manual_webhook_secret_bitbucket?: string | null;
    /**
     * Manual webhook secret for Gitea.
     */
    manual_webhook_secret_gitea?: string | null;
    /**
     * Docker compose location.
     */
    docker_compose_location?: string;
    /**
     * Docker compose content. Used for docker compose build pack.
     */
    docker_compose?: string | null;
    /**
     * Docker compose raw content.
     */
    docker_compose_raw?: string | null;
    /**
     * Docker compose domains.
     */
    docker_compose_domains?: string | null;
    /**
     * Docker compose custom start command.
     */
    docker_compose_custom_start_command?: string | null;
    /**
     * Docker compose custom build command.
     */
    docker_compose_custom_build_command?: string | null;
    /**
     * Swarm replicas. Only used for swarm deployments.
     */
    swarm_replicas?: number | null;
    /**
     * Swarm placement constraints. Only used for swarm deployments.
     */
    swarm_placement_constraints?: string | null;
    /**
     * Custom docker run options.
     */
    custom_docker_run_options?: string | null;
    /**
     * Post deployment command.
     */
    post_deployment_command?: string | null;
    /**
     * Post deployment command container.
     */
    post_deployment_command_container?: string | null;
    /**
     * Pre deployment command.
     */
    pre_deployment_command?: string | null;
    /**
     * Pre deployment command container.
     */
    pre_deployment_command_container?: string | null;
    /**
     * Watch paths.
     */
    watch_paths?: string | null;
    /**
     * Custom healthcheck found.
     */
    custom_healthcheck_found?: boolean;
    /**
     * How to set redirect with Traefik / Caddy. www<->non-www.
     */
    redirect?: Application.redirect | null;
    /**
     * The date and time when the application was created.
     */
    created_at?: string;
    /**
     * The date and time when the application was last updated.
     */
    updated_at?: string;
    /**
     * The date and time when the application was deleted.
     */
    deleted_at?: string | null;
    /**
     * How Coolify parse the compose file.
     */
    compose_parsing_version?: string;
    /**
     * Custom Nginx configuration base64 encoded.
     */
    custom_nginx_configuration?: string | null;
};
export namespace Application {
    /**
     * Build pack.
     */
    export enum build_pack {
        NIXPACKS = 'nixpacks',
        STATIC = 'static',
        DOCKERFILE = 'dockerfile',
        DOCKERCOMPOSE = 'dockercompose',
    }
    /**
     * How to set redirect with Traefik / Caddy. www<->non-www.
     */
    export enum redirect {
        WWW = 'www',
        NON_WWW = 'non-www',
        BOTH = 'both',
    }
}

