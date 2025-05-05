/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatabasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List all databases.
     * @returns string Get all databases
     * @throws ApiError
     */
    public listDatabases(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/databases',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Get
     * Get database by UUID.
     * @returns string Get all databases
     * @throws ApiError
     */
    public getDatabaseByUuid({
        uuid,
    }: {
        /**
         * UUID of the database.
         */
        uuid: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/databases/{uuid}',
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
     * Delete database by UUID.
     * @returns any Database deleted.
     * @throws ApiError
     */
    public deleteDatabaseByUuid({
        uuid,
        deleteConfigurations = true,
        deleteVolumes = true,
        dockerCleanup = true,
        deleteConnectedNetworks = true,
    }: {
        /**
         * UUID of the database.
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
            url: '/databases/{uuid}',
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
     * Update database by UUID.
     * @returns any Database updated
     * @throws ApiError
     */
    public updateDatabaseByUuid({
        uuid,
        requestBody,
    }: {
        /**
         * UUID of the database.
         */
        uuid: string,
        /**
         * Database data
         */
        requestBody: {
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * PostgreSQL user
             */
            postgres_user?: string;
            /**
             * PostgreSQL password
             */
            postgres_password?: string;
            /**
             * PostgreSQL database
             */
            postgres_db?: string;
            /**
             * PostgreSQL initdb args
             */
            postgres_initdb_args?: string;
            /**
             * PostgreSQL host auth method
             */
            postgres_host_auth_method?: string;
            /**
             * PostgreSQL conf
             */
            postgres_conf?: string;
            /**
             * Clickhouse admin user
             */
            clickhouse_admin_user?: string;
            /**
             * Clickhouse admin password
             */
            clickhouse_admin_password?: string;
            /**
             * DragonFly password
             */
            dragonfly_password?: string;
            /**
             * Redis password
             */
            redis_password?: string;
            /**
             * Redis conf
             */
            redis_conf?: string;
            /**
             * KeyDB password
             */
            keydb_password?: string;
            /**
             * KeyDB conf
             */
            keydb_conf?: string;
            /**
             * MariaDB conf
             */
            mariadb_conf?: string;
            /**
             * MariaDB root password
             */
            mariadb_root_password?: string;
            /**
             * MariaDB user
             */
            mariadb_user?: string;
            /**
             * MariaDB password
             */
            mariadb_password?: string;
            /**
             * MariaDB database
             */
            mariadb_database?: string;
            /**
             * Mongo conf
             */
            mongo_conf?: string;
            /**
             * Mongo initdb root username
             */
            mongo_initdb_root_username?: string;
            /**
             * Mongo initdb root password
             */
            mongo_initdb_root_password?: string;
            /**
             * Mongo initdb init database
             */
            mongo_initdb_init_database?: string;
            /**
             * MySQL root password
             */
            mysql_root_password?: string;
            /**
             * MySQL user
             */
            mysql_user?: string;
            /**
             * MySQL database
             */
            mysql_database?: string;
            /**
             * MySQL conf
             */
            mysql_conf?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/databases/{uuid}',
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
     * Create (PostgreSQL)
     * Create a new PostgreSQL database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabasePostgresql({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * PostgreSQL user
             */
            postgres_user?: string;
            /**
             * PostgreSQL password
             */
            postgres_password?: string;
            /**
             * PostgreSQL database
             */
            postgres_db?: string;
            /**
             * PostgreSQL initdb args
             */
            postgres_initdb_args?: string;
            /**
             * PostgreSQL host auth method
             */
            postgres_host_auth_method?: string;
            /**
             * PostgreSQL conf
             */
            postgres_conf?: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/postgresql',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Clickhouse)
     * Create a new Clickhouse database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseClickhouse({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * Clickhouse admin user
             */
            clickhouse_admin_user?: string;
            /**
             * Clickhouse admin password
             */
            clickhouse_admin_password?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/clickhouse',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (DragonFly)
     * Create a new DragonFly database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseDragonfly({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * DragonFly password
             */
            dragonfly_password?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/dragonfly',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (Redis)
     * Create a new Redis database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseRedis({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * Redis password
             */
            redis_password?: string;
            /**
             * Redis conf
             */
            redis_conf?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/redis',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (KeyDB)
     * Create a new KeyDB database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseKeydb({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * KeyDB password
             */
            keydb_password?: string;
            /**
             * KeyDB conf
             */
            keydb_conf?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/keydb',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (MariaDB)
     * Create a new MariaDB database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseMariadb({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * MariaDB conf
             */
            mariadb_conf?: string;
            /**
             * MariaDB root password
             */
            mariadb_root_password?: string;
            /**
             * MariaDB user
             */
            mariadb_user?: string;
            /**
             * MariaDB password
             */
            mariadb_password?: string;
            /**
             * MariaDB database
             */
            mariadb_database?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/mariadb',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (MySQL)
     * Create a new MySQL database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseMysql({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * MySQL root password
             */
            mysql_root_password?: string;
            /**
             * MySQL user
             */
            mysql_user?: string;
            /**
             * MySQL database
             */
            mysql_database?: string;
            /**
             * MySQL conf
             */
            mysql_conf?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/mysql',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Create (MongoDB)
     * Create a new MongoDB database.
     * @returns any Database updated
     * @throws ApiError
     */
    public createDatabaseMongodb({
        requestBody,
    }: {
        /**
         * Database data
         */
        requestBody: {
            /**
             * UUID of the server
             */
            server_uuid: string;
            /**
             * UUID of the project
             */
            project_uuid: string;
            /**
             * Name of the environment
             */
            environment_name: string;
            /**
             * UUID of the destination if the server has multiple destinations
             */
            destination_uuid?: string;
            /**
             * MongoDB conf
             */
            mongo_conf?: string;
            /**
             * MongoDB initdb root username
             */
            mongo_initdb_root_username?: string;
            /**
             * Name of the database
             */
            name?: string;
            /**
             * Description of the database
             */
            description?: string;
            /**
             * Docker Image of the database
             */
            image?: string;
            /**
             * Is the database public?
             */
            is_public?: boolean;
            /**
             * Public port of the database
             */
            public_port?: number;
            /**
             * Memory limit of the database
             */
            limits_memory?: string;
            /**
             * Memory swap limit of the database
             */
            limits_memory_swap?: string;
            /**
             * Memory swappiness of the database
             */
            limits_memory_swappiness?: number;
            /**
             * Memory reservation of the database
             */
            limits_memory_reservation?: string;
            /**
             * CPU limit of the database
             */
            limits_cpus?: string;
            /**
             * CPU set of the database
             */
            limits_cpuset?: string;
            /**
             * CPU shares of the database
             */
            limits_cpu_shares?: number;
            /**
             * Instant deploy the database
             */
            instant_deploy?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/databases/mongodb',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Start
     * Start database. `Post` request is also accepted.
     * @returns any Start database.
     * @throws ApiError
     */
    public startDatabaseByUuid({
        uuid,
    }: {
        /**
         * UUID of the database.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/databases/{uuid}/start',
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
     * Stop
     * Stop database. `Post` request is also accepted.
     * @returns any Stop database.
     * @throws ApiError
     */
    public stopDatabaseByUuid({
        uuid,
    }: {
        /**
         * UUID of the database.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/databases/{uuid}/stop',
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
     * Restart database. `Post` request is also accepted.
     * @returns any Restart database.
     * @throws ApiError
     */
    public restartDatabaseByUuid({
        uuid,
    }: {
        /**
         * UUID of the database.
         */
        uuid: string,
    }): CancelablePromise<{
        message?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/databases/{uuid}/restart',
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
}
