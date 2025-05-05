/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * User model
 */
export type User = {
    /**
     * The user identifier in the database.
     */
    id?: number;
    /**
     * The user name.
     */
    name?: string;
    /**
     * The user email.
     */
    email?: string;
    /**
     * The date when the user email was verified.
     */
    email_verified_at?: string;
    /**
     * The date when the user was created.
     */
    created_at?: string;
    /**
     * The date when the user was updated.
     */
    updated_at?: string;
    /**
     * The date when the user two factor was confirmed.
     */
    two_factor_confirmed_at?: string;
    /**
     * The flag to force the user to reset the password.
     */
    force_password_reset?: boolean;
    /**
     * The flag to receive marketing emails.
     */
    marketing_emails?: boolean;
};

