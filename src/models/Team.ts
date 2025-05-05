/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Team model
 */
export type Team = {
    /**
     * The unique identifier of the team.
     */
    id?: number;
    /**
     * The name of the team.
     */
    name?: string;
    /**
     * The description of the team.
     */
    description?: string;
    /**
     * Whether the team is personal or not.
     */
    personal_team?: boolean;
    /**
     * The date and time the team was created.
     */
    created_at?: string;
    /**
     * The date and time the team was last updated.
     */
    updated_at?: string;
    /**
     * Whether SMTP is enabled or not.
     */
    smtp_enabled?: boolean;
    /**
     * The email address to send emails from.
     */
    smtp_from_address?: string;
    /**
     * The name to send emails from.
     */
    smtp_from_name?: string;
    /**
     * The email addresses to send emails to.
     */
    smtp_recipients?: string;
    /**
     * The SMTP host.
     */
    smtp_host?: string;
    /**
     * The SMTP port.
     */
    smtp_port?: string;
    /**
     * The SMTP encryption.
     */
    smtp_encryption?: string;
    /**
     * The SMTP username.
     */
    smtp_username?: string;
    /**
     * The SMTP password.
     */
    smtp_password?: string;
    /**
     * The SMTP timeout.
     */
    smtp_timeout?: string;
    /**
     * Whether to send test notifications via SMTP.
     */
    smtp_notifications_test?: boolean;
    /**
     * Whether to send deployment notifications via SMTP.
     */
    smtp_notifications_deployments?: boolean;
    /**
     * Whether to send status change notifications via SMTP.
     */
    smtp_notifications_status_changes?: boolean;
    /**
     * Whether to send scheduled task notifications via SMTP.
     */
    smtp_notifications_scheduled_tasks?: boolean;
    /**
     * Whether to send database backup notifications via SMTP.
     */
    smtp_notifications_database_backups?: boolean;
    /**
     * Whether to send server disk usage notifications via SMTP.
     */
    smtp_notifications_server_disk_usage?: boolean;
    /**
     * Whether Discord is enabled or not.
     */
    discord_enabled?: boolean;
    /**
     * The Discord webhook URL.
     */
    discord_webhook_url?: string;
    /**
     * Whether to send test notifications via Discord.
     */
    discord_notifications_test?: boolean;
    /**
     * Whether to send deployment notifications via Discord.
     */
    discord_notifications_deployments?: boolean;
    /**
     * Whether to send status change notifications via Discord.
     */
    discord_notifications_status_changes?: boolean;
    /**
     * Whether to send database backup notifications via Discord.
     */
    discord_notifications_database_backups?: boolean;
    /**
     * Whether to send scheduled task notifications via Discord.
     */
    discord_notifications_scheduled_tasks?: boolean;
    /**
     * Whether to send server disk usage notifications via Discord.
     */
    discord_notifications_server_disk_usage?: boolean;
    /**
     * Whether to show the boarding screen or not.
     */
    show_boarding?: boolean;
    /**
     * Whether to enable resending or not.
     */
    resend_enabled?: boolean;
    /**
     * The resending API key.
     */
    resend_api_key?: string;
    /**
     * Whether to use instance email settings or not.
     */
    use_instance_email_settings?: boolean;
    /**
     * Whether Telegram is enabled or not.
     */
    telegram_enabled?: boolean;
    /**
     * The Telegram token.
     */
    telegram_token?: string;
    /**
     * The Telegram chat ID.
     */
    telegram_chat_id?: string;
    /**
     * Whether to send test notifications via Telegram.
     */
    telegram_notifications_test?: boolean;
    /**
     * Whether to send deployment notifications via Telegram.
     */
    telegram_notifications_deployments?: boolean;
    /**
     * Whether to send status change notifications via Telegram.
     */
    telegram_notifications_status_changes?: boolean;
    /**
     * Whether to send database backup notifications via Telegram.
     */
    telegram_notifications_database_backups?: boolean;
    /**
     * The Telegram test message thread ID.
     */
    telegram_notifications_test_message_thread_id?: string;
    /**
     * The Telegram deployment message thread ID.
     */
    telegram_notifications_deployments_message_thread_id?: string;
    /**
     * The Telegram status change message thread ID.
     */
    telegram_notifications_status_changes_message_thread_id?: string;
    /**
     * The Telegram database backup message thread ID.
     */
    telegram_notifications_database_backups_message_thread_id?: string;
    /**
     * The custom server limit.
     */
    custom_server_limit?: string;
    /**
     * Whether to send scheduled task notifications via Telegram.
     */
    telegram_notifications_scheduled_tasks?: boolean;
    /**
     * The Telegram scheduled task message thread ID.
     */
    telegram_notifications_scheduled_tasks_thread_id?: string;
    /**
     * The members of the team.
     */
    members?: Array<User>;
};

