---
title: "Upgrading the Private Mendix Platform"
url: /private-mendix-platform/upgrade/
description: "Documents the upgrade process for the Private Mendix Platform."
weight: 70
---

## Introduction

If you have installed Private Mendix Platform before, you can upgrade it by doing the following steps:

1. Ensure that your Mendix Operator version is 2.12 or above.
2. If you are upgrading from version 1.24 LTS to 2.8 LTS, make a backup of the Private Mendix Platform database by using the following command. The backup is required if you need to [roll back the upgrade]{#rollback}.

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

3. Ensure that the number of replicas is no higher than 1. If you have manually changed the default value, make sure you revert it to 1 before attempting the upgrade.
4. Run the command `./installer platform -n=<namespace name>`, where `-n` indicates the namespace where your Private Mendix Platform is installed.
5. Click **Upgrade Namespace**.

    {{< figure src="/attachments/private-platform/pmp-upgrade1.png" class="no-border" >}}

6. Verify the following settings:
    
    * **Persist Config** - When enabled, this setting locks the Private Mendix Platform configuration, so that it can no longer be modified from the user interface.
    * **Project Management** - Recommended. Enables you to create and manage your app projects. Enables app projects and related settings across the portal. Must be enabled for CI/CD capabilities.
    * **Marketplace** - Recommended. Enables you to use the Private Platform's Marketplace capabilities to upload, import and manage Marketplace contents. The Marketplace enabled here is hosted entirely within your Private Mendix Platform.
    * **Marketplace Approvals** - Optional. If enabled, contents that users publish to the private Marketplace require administrator approval before publishing.
    * **Marketplace Import** - Optional. Enables content import with an external source.
    * **IdP** - Optional. Enable users to login using SSO by configuring your IdP integration.
    * **Webhook** - Optional. Webhooks allow to send information between platform and external systems, and can be triggered by events around Apps, Users, Groups, Marketplace and CI/CD.

7. Click **Run Upgrade**.

    {{< figure src="/attachments/private-platform/pmp-upgrade2.png" class="no-border" >}}

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
