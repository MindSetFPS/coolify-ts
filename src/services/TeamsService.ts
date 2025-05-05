/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Team } from '../models/Team';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * Get all teams.
     * @returns Team List of teams.
     * @throws ApiError
     */
    public listTeams(): CancelablePromise<Array<Team>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Get
     * Get team by TeamId.
     * @returns Team List of teams.
     * @throws ApiError
     */
    public getTeamById({
        id,
    }: {
        /**
         * Team ID
         */
        id: number,
    }): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Members
     * Get members by TeamId.
     * @returns User List of members.
     * @throws ApiError
     */
    public getMembersByTeamId({
        id,
    }: {
        /**
         * Team ID
         */
        id: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{id}/members',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
                404: `Resource not found.`,
            },
        });
    }
    /**
     * Authenticated Team
     * Get currently authenticated team.
     * @returns Team Current Team.
     * @throws ApiError
     */
    public getCurrentTeam(): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/current',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
    /**
     * Authenticated Team Members
     * Get currently authenticated team members.
     * @returns User Currently authenticated team members.
     * @throws ApiError
     */
    public getCurrentTeamMembers(): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/current/members',
            errors: {
                400: `Invalid token.`,
                401: `Unauthenticated.`,
            },
        });
    }
}
