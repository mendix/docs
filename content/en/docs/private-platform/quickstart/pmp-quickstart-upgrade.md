---
title: "Upgrading the Private Mendix Platform"
url: /private-mendix-platform/upgrade/
description: "Documents the upgrade process for the Private Mendix Platform."
weight: 70
---

## Introduction

If you have installed Private Mendix Platform before, you can upgrade it by doing the following steps, depending on whether you are running the upgrade manually or through a Helm chart.

### Upgrading Private Mendix Platform in Manual Mode

1. Ensure that your Mendix Operator is upgraded to a version compatible with the version of Private Mendix Platform to which you are upgrading.

    For information about the required Mendix Operator version, refer to the [Private Mendix Platform Release Notes](/releasenotes/private-platform/) for your target release, for example, [2.8.1](/releasenotes/private-platform/2-8/#example). The required version of the Mendix Operator is listed in the *Updates: Other Platform Components* section.

2. If required, use the mxpc-cli configuration tool to upgrade your Mendix Operator. For more information about accessing the tool, see [Install Private Mendix Platform in GUI Mode](/private-mendix-platform/interactive-installation/).
2. If you are upgrading from version 1.24 LTS to 2.8 LTS, make a backup of the Private Mendix Platform database by using the following command. The backup is required if you need to [roll back the upgrade](#rollback).

    {{% alert color="info" %}}
    Private Mendix Platform does not support direct upgrades from versions older than 1.24 LTS. To upgrade from a version older than 1.24 LTS, upgrade first to version 1.24, and then upgrade to version 2.8 LTS by following the instructions below.
    {{% /alert %}}

    ```tex
    pg_dump -h <DB host> -U <DB mster username> -d <database name like mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx> -Fc  -f <local path like /tmp/pmp_db_backup.dump>
    ```
    
    A `pg_dump` tool with a version equal to or higher than database POSTGRES version is required.
    
    If you are working within a pod that contains `pg_dump`, make sure to use the kubectl cp command to copy the backup to your local computer. This helps prevent the loss of the backup if the pod is deleted:

    ```text
    kubectl cp -n <psql-client-pod namespace> psql-client-pod-name:/tmp/pmp_backup.dump ./pmp_backup.dump
    ```

    To obtain the database name, use the following command:

    ```text
    kubectl get secret mxplatform-database -n <namespace for installing PMP> -o jsonpath='{.data.config}' | base64 -d
    ```

4. Ensure that the number of replicas is no higher than 1. If you have manually changed the default value, make sure you revert it to 1 before attempting the upgrade.
5. Run the command `./installer platform -n=<namespace name>`, where `-n` indicates the namespace where your Private Mendix Platform is installed.
6. Click **Upgrade Namespace**.

    {{< figure src="/attachments/private-platform/pmp-upgrade1.png" class="no-border" >}}

7. Verify the following settings:
    
    * **Persist Config** - When enabled, this setting locks the Private Mendix Platform configuration, so that it can no longer be modified from the user interface.
    * **Project Management** - Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.
    * **Marketplace** - Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
    * **Marketplace Approvals** - Optional. If enabled, contents that users publish to the private Marketplace require administrator approval before publishing.
    * **Marketplace Import** - Optional. Enables content import with an external source.
    * **IdP** - Optional. Enable users to login using SSO by configuring your IdP integration.
    * **Webhook** - Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

8. Click **Run Upgrade**.

    {{< figure src="/attachments/private-platform/pmp-upgrade2.png" class="no-border" >}}

## Post-Upgrade Steps

After upgrading your Private Mendix Platform, you may need to perform some additional steps, depending on your starting and target releases. For more information about these post-upgrade considerations, refer to the sections below.

### Pipeline Changes When Upgrading to Version 2.8.1 and Newer

Private Mendix Platform versions older than 2.8.1 used a single, unnamed pipeline for all apps. Version 2.8.1 adds the option to designate multiple draft pipelines, in addition to the main pipeline. For more information, see [Configuring the Pipeline Type](/private-mendix-platform/reference-guide/admin/system/#configuring-pipeline-type).

When upgrading to Private Mendix Platform 2.8.1 or newer, the following changes are made automatically:

* Pipelines must now have names, so the existing pipeline is given the placeholder name **(No name)**.
* The existing pipeline becomes the main pipeline for all apps. Apps continue to build and deploy through it with no interruption.

You can rename the pipeline at any time (for example to **Production-Build**). You can also create draft pipelines for individual apps while MAIN continues to serve everything else. Builds or deployments already in progress during the upgrade either complete or fail gracefully and can be re-triggered.

### Role Permissions Change When Upgrading to Version 2.8.0 and Newer

Private Mendix Platform version 2.8.0 adds the option to configure dynamic role management on a more granular level than before. Because of that, you may encounter an issue where previously created environments are not visible after an upgrade from a version older than 2.8.0.

This issue is caused by missing deployment-related permissions for custom CI/CD roles after the upgrade. To fix it, reassig the required deployment permissions.

### Rolling Back An Upgrade {#rollback}

To restore the Private Mendix Platform database to version 1.24 LTS and downgrade Private Mendix Platform from version 2.8 LTS to 1.24 LTS, perform the following steps:

1. Take note of the current number of Private Mendix Platform replicas, and then scale the number down to 0.
2. Ensure that the Private Mendix Platform pods have been terminated.
3. For security, back up your Private Mendix Platform 2.8 database (`mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx`).
4. Delete the Private Mendix Platform 2.8 database and create a new database with the same name by using the following commands:

    1. `DROP DATABASE mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx;`
    2. `CREATE DATABASE mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx;`

5. Restore the Private Mendix Platform 1.24 database by using the following command:

    ```text
    pg_restore -U <DB master user> -h <DB host> -d <database name like mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx> -v /tmp/pmp_db_backup.dump
    ```

6. Connect to the `mendix_mxplatform_database_xxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxx` database, and verify that all required Private Mendix Platform tables are present and have been successfully restored.
7. Use the Private Mendix Platform 1.24 installer to change the Private Mendix Platform image from 2.8 to 1.24.
8. Scale the number of Private Mendix Platform replicas to the previous value, ensure that at least one Private Mendix Platform pod is running.
9. Check the Private Mendix Platform pod status and logs. 
10. If any permissions are missing after rebuilding the database, manually reconfigure the Database Owner and the required Database, Schema, Table, and Sequence permissions.
