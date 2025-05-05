/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';
import type { EnvironmentVariable } from '../models/EnvironmentVariable';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApplicationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List all applications.
     * @returns Application Get all applications.
     * @throws ApiError
     */
    public listApplications(): CancelablePromise<Array<Application>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Public)
     * Create new application based on a public git repository.
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createPublicApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The git repository URL.
             */
            git_repository: string;
            /**
             * The git branch.
             */
            git_branch: string;
            /**
             * The build pack type.
             */
            build_pack: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
            /**
             * The ports to expose.
             */
            ports_exposes: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The git commit SHA.
             */
            git_commit_sha?: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name?: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The flag to indicate if the application is static.
             */
            is_static?: boolean;
            /**
             * The static image.
             */
            static_image?: 'nginx:alpine';
            /**
             * The install command.
             */
            install_command?: string;
            /**
             * The build command.
             */
            build_command?: string;
            /**
             * The start command.
             */
            start_command?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
            /**
             * The base directory for all commands.
             */
            base_directory?: string;
            /**
             * The publish directory.
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * The Dockerfile content.
             */
            dockerfile?: string;
            /**
             * The Docker Compose location.
             */
            docker_compose_location?: string;
            /**
             * The Docker Compose raw content.
             */
            docker_compose_raw?: string;
            /**
             * The Docker Compose custom start command.
             */
            docker_compose_custom_start_command?: string;
            /**
             * The Docker Compose custom build command.
             */
            docker_compose_custom_build_command?: string;
            /**
             * The Docker Compose domains.
             */
            docker_compose_domains?: any[];
            /**
             * The watch paths.
             */
            watch_paths?: string;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/public',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Private - GH App)
     * Create new application based on a private repository through a Github App.
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createPrivateGithubAppApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The Github App UUID.
             */
            github_app_uuid: string;
            /**
             * The git repository URL.
             */
            git_repository: string;
            /**
             * The git branch.
             */
            git_branch: string;
            /**
             * The ports to expose.
             */
            ports_exposes: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The build pack type.
             */
            build_pack: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The git commit SHA.
             */
            git_commit_sha?: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name?: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The flag to indicate if the application is static.
             */
            is_static?: boolean;
            /**
             * The static image.
             */
            static_image?: 'nginx:alpine';
            /**
             * The install command.
             */
            install_command?: string;
            /**
             * The build command.
             */
            build_command?: string;
            /**
             * The start command.
             */
            start_command?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
            /**
             * The base directory for all commands.
             */
            base_directory?: string;
            /**
             * The publish directory.
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * The Dockerfile content.
             */
            dockerfile?: string;
            /**
             * The Docker Compose location.
             */
            docker_compose_location?: string;
            /**
             * The Docker Compose raw content.
             */
            docker_compose_raw?: string;
            /**
             * The Docker Compose custom start command.
             */
            docker_compose_custom_start_command?: string;
            /**
             * The Docker Compose custom build command.
             */
            docker_compose_custom_build_command?: string;
            /**
             * The Docker Compose domains.
             */
            docker_compose_domains?: any[];
            /**
             * The watch paths.
             */
            watch_paths?: string;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/private-github-app',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Private - Deploy Key)
     * Create new application based on a private repository through a Deploy Key.
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createPrivateDeployKeyApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The private key UUID.
             */
            private_key_uuid: string;
            /**
             * The git repository URL.
             */
            git_repository: string;
            /**
             * The git branch.
             */
            git_branch: string;
            /**
             * The ports to expose.
             */
            ports_exposes: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The build pack type.
             */
            build_pack: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The git commit SHA.
             */
            git_commit_sha?: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name?: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The flag to indicate if the application is static.
             */
            is_static?: boolean;
            /**
             * The static image.
             */
            static_image?: 'nginx:alpine';
            /**
             * The install command.
             */
            install_command?: string;
            /**
             * The build command.
             */
            build_command?: string;
            /**
             * The start command.
             */
            start_command?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
            /**
             * The base directory for all commands.
             */
            base_directory?: string;
            /**
             * The publish directory.
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * The Dockerfile content.
             */
            dockerfile?: string;
            /**
             * The Docker Compose location.
             */
            docker_compose_location?: string;
            /**
             * The Docker Compose raw content.
             */
            docker_compose_raw?: string;
            /**
             * The Docker Compose custom start command.
             */
            docker_compose_custom_start_command?: string;
            /**
             * The Docker Compose custom build command.
             */
            docker_compose_custom_build_command?: string;
            /**
             * The Docker Compose domains.
             */
            docker_compose_domains?: any[];
            /**
             * The watch paths.
             */
            watch_paths?: string;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/private-deploy-key',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Dockerfile)
     * Create new application based on a simple Dockerfile.
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createDockerfileApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The Dockerfile content.
             */
            dockerfile: string;
            /**
             * The build pack type.
             */
            build_pack?: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
            /**
             * The ports to expose.
             */
            ports_exposes?: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name?: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
            /**
             * The base directory for all commands.
             */
            base_directory?: string;
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/dockerfile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Docker Image)
     * Create new application based on a prebuilt docker image
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createDockerimageApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The ports to expose.
             */
            ports_exposes: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/dockerimage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Docker Compose)
     * Create new application based on a docker-compose file.
     * @returns any Application created successfully.
     * @throws ApiError
     */
    public createDockercomposeApplication({
        requestBody,
    }: {
        /**
         * Application object that needs to be created.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid: string;
            /**
             * The server UUID.
             */
            server_uuid: string;
            /**
             * The environment name.
             */
            environment_name: string;
            /**
             * The Docker Compose raw content.
             */
            docker_compose_raw: string;
            /**
             * The destination UUID if the server has more than one destinations.
             */
            destination_uuid?: string;
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/dockercompose',
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
     * Get application by UUID.
     * @returns Application Get application by UUID.
     * @throws ApiError
     */
    public getApplicationByUuid({
        uuid,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
    }): CancelablePromise<Application> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{uuid}',
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
     * Delete application by UUID.
     * @returns any Application deleted.
     * @throws ApiError
     */
    public deleteApplicationByUuid({
        uuid,
        deleteConfigurations = true,
        deleteVolumes = true,
        dockerCleanup = true,
        deleteConnectedNetworks = true,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Delete configurations.
         */
        deleteConfigurations?: boolean,
        /**
         * Delete volumes.
         */
        deleteVolumes?: boolean,
        /**
         * Run docker cleanup.
         */
        dockerCleanup?: boolean,
        /**
         * Delete connected networks.
         */
        deleteConnectedNetworks?: boolean,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/applications/{uuid}',
            path: {
                'uuid': uuid,
            },
            query: {
                'delete_configurations': deleteConfigurations,
                'delete_volumes': deleteVolumes,
                'docker_cleanup': dockerCleanup,
                'delete_connected_networks': deleteConnectedNetworks,
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
     * Update application by UUID.
     * @returns any Application updated.
     * @throws ApiError
     */
    public updateApplicationByUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Application updated.
         */
        requestBody: {
            /**
             * The project UUID.
             */
            project_uuid?: string;
            /**
             * The server UUID.
             */
            server_uuid?: string;
            /**
             * The environment name.
             */
            environment_name?: string;
            /**
             * The Github App UUID.
             */
            github_app_uuid?: string;
            /**
             * The git repository URL.
             */
            git_repository?: string;
            /**
             * The git branch.
             */
            git_branch?: string;
            /**
             * The ports to expose.
             */
            ports_exposes?: string;
            /**
             * The destination UUID.
             */
            destination_uuid?: string;
            /**
             * The build pack type.
             */
            build_pack?: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
            /**
             * The application name.
             */
            name?: string;
            /**
             * The application description.
             */
            description?: string;
            /**
             * The application domains.
             */
            domains?: string;
            /**
             * The git commit SHA.
             */
            git_commit_sha?: string;
            /**
             * The docker registry image name.
             */
            docker_registry_image_name?: string;
            /**
             * The docker registry image tag.
             */
            docker_registry_image_tag?: string;
            /**
             * The flag to indicate if the application is static.
             */
            is_static?: boolean;
            /**
             * The install command.
             */
            install_command?: string;
            /**
             * The build command.
             */
            build_command?: string;
            /**
             * The start command.
             */
            start_command?: string;
            /**
             * The ports mappings.
             */
            ports_mappings?: string;
            /**
             * The base directory for all commands.
             */
            base_directory?: string;
            /**
             * The publish directory.
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
             * Custom labels.
             */
            custom_labels?: string;
            /**
             * Custom docker run options.
             */
            custom_docker_run_options?: string;
            /**
             * Post deployment command.
             */
            post_deployment_command?: string;
            /**
             * Post deployment command container.
             */
            post_deployment_command_container?: string;
            /**
             * Pre deployment command.
             */
            pre_deployment_command?: string;
            /**
             * Pre deployment command container.
             */
            pre_deployment_command_container?: string;
            /**
             * Manual webhook secret for Github.
             */
            manual_webhook_secret_github?: string;
            /**
             * Manual webhook secret for Gitlab.
             */
            manual_webhook_secret_gitlab?: string;
            /**
             * Manual webhook secret for Bitbucket.
             */
            manual_webhook_secret_bitbucket?: string;
            /**
             * Manual webhook secret for Gitea.
             */
            manual_webhook_secret_gitea?: string;
            /**
             * How to set redirect with Traefik / Caddy. www<->non-www.
             */
            redirect?: 'www' | 'non-www' | 'both' | null;
            /**
             * The flag to indicate if the application should be deployed instantly.
             */
            instant_deploy?: boolean;
            /**
             * The Dockerfile content.
             */
            dockerfile?: string;
            /**
             * The Docker Compose location.
             */
            docker_compose_location?: string;
            /**
             * The Docker Compose raw content.
             */
            docker_compose_raw?: string;
            /**
             * The Docker Compose custom start command.
             */
            docker_compose_custom_start_command?: string;
            /**
             * The Docker Compose custom build command.
             */
            docker_compose_custom_build_command?: string;
            /**
             * The Docker Compose domains.
             */
            docker_compose_domains?: any[];
            /**
             * The watch paths.
             */
            watch_paths?: string;
            /**
             * Use build server.
             */
            use_build_server?: boolean | null;
        },
    }): CancelablePromise<{
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/applications/{uuid}',
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
     * List Envs
     * List all envs by application UUID.
     * @returns EnvironmentVariable All environment variables by application UUID.
     * @throws ApiError
     */
    public listEnvsByApplicationUuid({
        uuid,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
    }): CancelablePromise<Array<EnvironmentVariable>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{uuid}/envs',
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
     * Create Env
     * Create env by application UUID.
     * @returns any Environment variable created.
     * @throws ApiError
     */
    public createEnvByApplicationUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Env created.
         */
        requestBody: {
            /**
             * The key of the environment variable.
             */
            key?: string;
            /**
             * The value of the environment variable.
             */
            value?: string;
            /**
             * The flag to indicate if the environment variable is used in preview deployments.
             */
            is_preview?: boolean;
            /**
             * The flag to indicate if the environment variable is used in build time.
             */
            is_build_time?: boolean;
            /**
             * The flag to indicate if the environment variable is a literal, nothing espaced.
             */
            is_literal?: boolean;
            /**
             * The flag to indicate if the environment variable is multiline.
             */
            is_multiline?: boolean;
            /**
             * The flag to indicate if the environment variable's value is shown on the UI.
             */
            is_shown_once?: boolean;
        },
    }): CancelablePromise<{
        uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/{uuid}/envs',
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
     * Update Env
     * Update env by application UUID.
     * @returns any Environment variable updated.
     * @throws ApiError
     */
    public updateEnvByApplicationUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Env updated.
         */
        requestBody: {
            /**
             * The key of the environment variable.
             */
            key: string;
            /**
             * The value of the environment variable.
             */
            value: string;
            /**
             * The flag to indicate if the environment variable is used in preview deployments.
             */
            is_preview?: boolean;
            /**
             * The flag to indicate if the environment variable is used in build time.
             */
            is_build_time?: boolean;
            /**
             * The flag to indicate if the environment variable is a literal, nothing espaced.
             */
            is_literal?: boolean;
            /**
             * The flag to indicate if the environment variable is multiline.
             */
            is_multiline?: boolean;
            /**
             * The flag to indicate if the environment variable's value is shown on the UI.
             */
            is_shown_once?: boolean;
        },
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/applications/{uuid}/envs',
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
     * Update Envs (Bulk)
     * Update multiple envs by application UUID.
     * @returns any Environment variables updated.
     * @throws ApiError
     */
    public updateEnvsByApplicationUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Bulk envs updated.
         */
        requestBody: {
            data: Array<{
                /**
                 * The key of the environment variable.
                 */
                key?: string;
                /**
                 * The value of the environment variable.
                 */
                value?: string;
                /**
                 * The flag to indicate if the environment variable is used in preview deployments.
                 */
                is_preview?: boolean;
                /**
                 * The flag to indicate if the environment variable is used in build time.
                 */
                is_build_time?: boolean;
                /**
                 * The flag to indicate if the environment variable is a literal, nothing espaced.
                 */
                is_literal?: boolean;
                /**
                 * The flag to indicate if the environment variable is multiline.
                 */
                is_multiline?: boolean;
                /**
                 * The flag to indicate if the environment variable's value is shown on the UI.
                 */
                is_shown_once?: boolean;
            }>;
        },
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/applications/{uuid}/envs/bulk',
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
     * Delete Env
     * Delete env by UUID.
     * @returns any Environment variable deleted.
     * @throws ApiError
     */
    public deleteEnvByApplicationUuid({
        uuid,
        envUuid,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * UUID of the environment variable.
         */
        envUuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/applications/{uuid}/envs/{env_uuid}',
            path: {
                'uuid': uuid,
                'env_uuid': envUuid,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Start
     * Start application. `Post` request is also accepted.
     * @returns any Start application.
     * @throws ApiError
     */
    public startApplicationByUuid({
        uuid,
        force = false,
        instantDeploy = false,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Force rebuild.
         */
        force?: boolean,
        /**
         * Instant deploy (skip queuing).
         */
        instantDeploy?: boolean,
    }): CancelablePromise<{
        /**
         * Message.
         */
        message?: string;
        /**
         * UUID of the deployment.
         */
        deployment_uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{uuid}/start',
            path: {
                'uuid': uuid,
            },
            query: {
                'force': force,
                'instant_deploy': instantDeploy,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Stop
     * Stop application. `Post` request is also accepted.
     * @returns any Stop application.
     * @throws ApiError
     */
    public stopApplicationByUuid({
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
            method: 'GET',
            url: '/applications/{uuid}/stop',
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
     * Restart
     * Restart application. `Post` request is also accepted.
     * @returns any Restart application.
     * @throws ApiError
     */
    public restartApplicationByUuid({
        uuid,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
        /**
         * UUID of the deployment.
         */
        deployment_uuid?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{uuid}/restart',
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
     * Execute Command
     * Execute a command on the application's current container.
     * @returns any Execute a command on the application's current container.
     * @throws ApiError
     */
    public executeCommandApplication({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the application.
         */
        uuid: string,
        /**
         * Command to execute.
         */
        requestBody: {
            /**
             * Command to execute.
             */
            command?: string;
        },
    }): CancelablePromise<{
        message?: string;
        response?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/applications/{uuid}/execute',
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
}
