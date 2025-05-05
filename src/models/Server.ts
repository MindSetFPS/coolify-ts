/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Server model
 */
export type Server = {
    /**
     * The server ID.
     */
    id?: number;
    /**
     * The server UUID.
     */
    uuid?: string;
    /**
     * The server name.
     */
    name?: string;
    /**
     * The server description.
     */
    description?: string;
    /**
     * The IP address.
     */
    ip?: string;
    /**
     * The user.
     */
    user?: string;
    /**
     * The port number.
     */
    port?: number;
    /**
     * The proxy configuration.
     */
    proxy?: Record<string, any>;
    /**
     * The proxy type.
     */
    proxy_type?: Server.proxy_type;
    /**
     * The flag to indicate if the high disk usage notification has been sent.
     */
    high_disk_usage_notification_sent?: boolean;
    /**
     * The flag to indicate if the unreachable notification has been sent.
     */
    unreachable_notification_sent?: boolean;
    /**
     * The unreachable count for your server.
     */
    unreachable_count?: number;
    /**
     * The validation logs.
     */
    validation_logs?: string;
    /**
     * The flag to indicate if the log drain notification has been sent.
     */
    log_drain_notification_sent?: boolean;
    /**
     * The swarm cluster configuration.
     */
    swarm_cluster?: string;
    /**
     * The flag to indicate if the unused volumes should be deleted.
     */
    delete_unused_volumes?: boolean;
    /**
     * The flag to indicate if the unused networks should be deleted.
     */
    delete_unused_networks?: boolean;
};
export namespace Server {
    /**
     * The proxy type.
     */
    export enum proxy_type {
        TRAEFIK = 'traefik',
        CADDY = 'caddy',
        NONE = 'none',
    }
}

