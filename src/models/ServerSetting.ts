/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Server Settings model
 */
export type ServerSetting = {
    id?: number;
    concurrent_builds?: number;
    dynamic_timeout?: number;
    force_disabled?: boolean;
    force_server_cleanup?: boolean;
    is_build_server?: boolean;
    is_cloudflare_tunnel?: boolean;
    is_jump_server?: boolean;
    is_logdrain_axiom_enabled?: boolean;
    is_logdrain_custom_enabled?: boolean;
    is_logdrain_highlight_enabled?: boolean;
    is_logdrain_newrelic_enabled?: boolean;
    is_metrics_enabled?: boolean;
    is_reachable?: boolean;
    is_sentinel_enabled?: boolean;
    is_swarm_manager?: boolean;
    is_swarm_worker?: boolean;
    is_usable?: boolean;
    logdrain_axiom_api_key?: string;
    logdrain_axiom_dataset_name?: string;
    logdrain_custom_config?: string;
    logdrain_custom_config_parser?: string;
    logdrain_highlight_project_id?: string;
    logdrain_newrelic_base_uri?: string;
    logdrain_newrelic_license_key?: string;
    sentinel_metrics_history_days?: number;
    sentinel_metrics_refresh_rate_seconds?: number;
    sentinel_token?: string;
    docker_cleanup_frequency?: string;
    docker_cleanup_threshold?: number;
    server_id?: number;
    wildcard_domain?: string;
    created_at?: string;
    updated_at?: string;
};

