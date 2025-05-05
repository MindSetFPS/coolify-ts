/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ApplicationsService } from './services/ApplicationsService';
import { DatabasesService } from './services/DatabasesService';
import { DefaultService } from './services/DefaultService';
import { DeploymentsService } from './services/DeploymentsService';
import { PrivateKeysService } from './services/PrivateKeysService';
import { ProjectsService } from './services/ProjectsService';
import { ResourcesService } from './services/ResourcesService';
import { ServersService } from './services/ServersService';
import { ServicesService } from './services/ServicesService';
import { TeamsService } from './services/TeamsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Coolify {
    public readonly applications: ApplicationsService;
    public readonly databases: DatabasesService;
    public readonly default: DefaultService;
    public readonly deployments: DeploymentsService;
    public readonly privateKeys: PrivateKeysService;
    public readonly projects: ProjectsService;
    public readonly resources: ResourcesService;
    public readonly servers: ServersService;
    public readonly services: ServicesService;
    public readonly teams: TeamsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://app.coolify.io/api/v1',
            VERSION: config?.VERSION ?? '0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.applications = new ApplicationsService(this.request);
        this.databases = new DatabasesService(this.request);
        this.default = new DefaultService(this.request);
        this.deployments = new DeploymentsService(this.request);
        this.privateKeys = new PrivateKeysService(this.request);
        this.projects = new ProjectsService(this.request);
        this.resources = new ResourcesService(this.request);
        this.servers = new ServersService(this.request);
        this.services = new ServicesService(this.request);
        this.teams = new TeamsService(this.request);
    }
}

