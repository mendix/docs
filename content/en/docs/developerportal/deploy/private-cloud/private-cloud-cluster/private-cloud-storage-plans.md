---
title: "Storage plans"
url: /developerportal/deploy/private-cloud-storage-plans/
description: "Describes how to configure storage plans in Mendix for Private Cloud"
weight: 10
tags: ["Private Cloud", "Storage", "Database", "File", "S3", "Minio", "Postgres", "Azure"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## 1 Introduction

Every Mendix app environment needs a database (to store entities), and a blob file storage bucket (to store the contents of System.FileDocument entities).

When an app developer creates a new environment, the Mendix Operator will automatically create ("provision") a database and blob storage bucket for that environment.
This way, an app developer doesn't need to install or configure a database - the Mendix Operator automatically prepare the database and blob storage bucket, and link it with the new environment.
This way, creating a new enviornment is an easy process.

The Mendix Operator has a modular architecture and offers a multitude of options how to create and attach databases and blob storage buckets to environments.
A _Storage plan_ specifies configuration (a blueprint) how to provide a database or blob storage bucket to a new environment.
For example, if you create a `postgres-prod` storage plan and configure it to use a specific Postgres instance, an app developer would be able to choose a `postgres-prod` from the database plan dropdown when creating a new environment.
This plan would create a new Postgres role (user) and a new database (schema/tenant) inside an existing Postgres instance (RDS instance).
The new Mendix app environment would only be able to access its database/tenant and will be isolated from other apps running on the same Postgres instance.

The Mendix Operator supports two storage management operations:

* **Create** will create a new _tenant_, generate credentials and attach them to the new environment.
* **Delete** deletes the environment's _tenant_, and optionally deletes that environment's data (database or files).

{{% alert color="info" %}}
If you would like to have full control over how storage (databases and blob storage buckets) are created and connected to Mendix app environments, the [Secrets Storage](/developerportal/deploy/secret-store-credentials/) option can be used instead of storage plans.
{{% /alert %}}

### 1.1 Classification of storage plans

There are multiple ways to categorize storage options.

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">Basic</text>

**Automated** provisioners can communicate with an API to create an isolated tenant for an environment.
For example, the `minio` provisioner will automatically create a bucket, user and policy for every new environment - so that each environment would get its own user and bucket.
In most cases, automated provisioners require some prerequisites - an existing service (such as a Postgres or MinIO server) and admin credentials - to create or delete tenants.
This way, the Mendix Operator can isolate app environment from one another.

**Basic** provisioners do not communicate with any APIs, and just generate and attach existing credentials to a new environment.
For example, a basic provisioner like Ceph will just provide the same credentials to every app environment (with an option to let each environment use its own bucket prefix).
Basic provisioners don't provide isolation between environments, but in some cases can provide more control over how storage is managed.
For example, this option can be used to attach a pre-created S3 bucket or Oracle database to a new environment.

<text class="badge badge-pill badge-primary">On-Demand</text> <text class="badge badge-pill badge-primary">Dedicated</text>

**On-Demand** storage plans can be used by any number of environment. These provisioners can provide a database/bucket on-demand to any new environment.

**Dedicated** storage plans can only be used by one environment at a time. If a storage plan is marked as dedicated and is already in use by an environment, new environments cannot use it.

Most provisioners have need prerequisites to be created manually. Typically this would be a server (database or blob storage bucket) and/or credentials to access or manage it.

### 1.2 How to configure a storage plan{#typical-workflow}

We recommend to test a storage plan - by creating a new environment and confirming that it's working as expected.
In some cases, even though the Mendix Operator was able to create a database/bucket, an environment might fail to connect because of firewalls, Kubernetes security policies or other reasons.

When creating a new Storage Plan, we recommend following this workflow:

1. Run the `mxpc-cli` Configuration Tool and fill in all the necessary details for the Storage Plan(s)
2. Apply the changes in the `mxpc-cli` Configuration Tool and keep it open.
3. Try to create a new test environment using the new Storage Plan.
4. If the environment was successfully created and able to start, the Storage Plan is ready to use.
5. Otherwise, check the error message displayed in the Cloud Portal and the logs from `{environment-name}-database` and `{environment-name}-file` pods.
6. If necessary, update the Storage Plan configuration in `mxpc-cli` by switching to the `Database Plan` or `Storage Plan` tabs, and apply the configuration.
7. To retry (re-test) the Storage Plan, delete the failed `{environment-name}-database` or `{environment-name}-file` pod.

### 1.3 Limitations

Updating a storage plan will not apply changes to any already existing environments.
For example, if you migrate a database to a new URL, updating the Storage Plan will not update the database URL in any already existing environments.
In addition, any significant changes in the Storage Plan configuration (for example, replacing Postgres with SQL Server) will not migrate data in already existing environments.
For any significant changes, we recommend to
1. Create a new Storage Plan.
2. Create new versions of existing environments using the new Storage Plan.
3. Migrate data from existing environments to their new versions and verify that the migration went successfully.
4. Delete previous environments and disable the previous Storage Plan.

To rotate credentials of an environment, you will need to manually update credentials in that environment's Kubernetes secret.
If your security policy requires regular rotation of credentials, consider using [Secrets Storage](/developerportal/deploy/secret-store-credentials/) instead.

{{% alert color="info" %}}
We're actively working on adding support for passwordless authentication in AWS (IRSA), removing the need to rotate credentials.
This feature will be available very soon in an upcoming version of Mendix for Private Cloud.
{{% /alert %}}

If a provisioner pod fails, it will attempt to roll back any changes it made, but will not automatically retry.
To retry a failed provisioner pod:

1. Check the logs of the failed `{environment-name}-database` or `{environment-name}-file` pod to get the root cause of the problem.
2. Address the root cause.
2. Delete the failed `{environment-name}-database` or `{environment-name}-file` pod to retry.

At the moment, it's not possible to read configuration of an existing Storage Plan.
If you've created a Storage Plan in the past and would like to update it (for example, to change the admin credentials), you will need to fill in the Storage Plan details and use the same name as the currently existing Storage Plan.
The only way to update a Storage Plan configuration is by overwriting it with an updated version.

## 2 Database Plans{#database}

A database plan tells the Operator how the Mendix app needs to connect to a database when it is deployed. Although the database plan might be valid, there also has to be a database instance for it to connect to. This database instance may be created when the database plan is applied, or it may be an existing database instance which the database plan identifies.

{{% alert color="warning" %}}
The database plan does not include any functionality for backing up or restoring data on your database. It is your responsibility to ensure that appropriate provision is made for backing up and restoring your database using the tools provided by your database management system and/or cloud provider.
{{% /alert %}}

Give your plan a **Name** and choose the **Database Type**. See the information below for more help in setting up plans for the different types of database which are supported by Mendix for Private Cloud.

Once you have entered the details you can apply two validation checks by clicking the **Validate** and **Connection Validation** buttons:

* **Validate** – checks that you have provided all the required values and that they are in the correct format
* **Connection validation** –  checks whether the specified storage plan has been successfully created — this does not guarantee that the storage *instance* will be created successfully when the configuration is applied. To fully test a database plan, you will need to test it by [creating a temporary test environment](#typical-workflow).

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/database-plan-config.png" alt="Database Plan Configuration" >}}

{{% alert color="info" %}}
You cannot create multiple database plans at the same time. Run the configuration tool multiple time to apply several database plans.
{{% /alert %}}

The following **Database Types** are supported:

* PostgreSQL
* Ephemeral (non-persistent)
* SQL Server
* Dedicated JDBC

The easiest option is ephemeral databases.

For production-grade databases, the Postgres plan is the most versatile and portable option.

### 2.1 Postgres{#database-postgres}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

The **Postgres** plan offers a good balance between automation, ease of use and security.
If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

**Prerequisites**

* A Postgres server - for example, an RDS instance, or a Postgres server installed from a Helm chart
   {{% alert color="info" %}}
   A Postgres server (cluster) can host multiple databases. Each database can be isolated from one another, this way one Postgres server can be used by multiple independent apps.
   {{% /alert %}}
* A superuser account and its login database - in most cases, this would be the default `postgres` user and `postgres` database.
   {{% alert color="info" %}}
   To connect to a Postgres server, a **login database** is required. This database is not used - but is required, because Postgres needs a default login database to be specified.
   {{% /alert %}}

**Limitations**

* Passwords can only be rotated manually.
* The Postgres server will be shared between environments, which could affect scalability.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a database name, username (Postgres role) and password for the new environment.
* Create a new database in the provided Postgres server. This will be the environment's dedicated database.
* Create a new user (role) for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's user (role).
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

**Configuring a Postgres plan**

In the Postgres plan configuration, enter the following details:

* **Host** is the Postgres server hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local`
* **Port** is the Postgres server port number, in most cases this should be set to `5432`.
* **Database name** is the login database for the admin/superuser, in most cases this is set to `postgres`.
* **Username** is the username for the admin/superuser - used by the Mendix Operator to create/delete tenants for app environments; typically, this is set to `postgres`.
* **Password** is the username for the admin/superuser - used by the Mendix Operator to create/delete tenants for app environments.
* **Strict TLS** specifies if TLS should always be validated.
  * Enabling this option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the PostgreSQL server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.
  * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.

{{% alert color="info" %}}
To connect to an Azure PostgreSQL server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall. For the database name, use `postgres`.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Amazon RDS database, the VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

### 2.2 Ephemeral{#database-ephemeral}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text>

The **Ephemeral** plan will enable you to quickly set up your environment and deploy your app, but any data you store in the database will be lost when you restart your environment.

**Prerequisites**

* None.

**Limitations**

* Data is lost when the app pod is restarted.
* It's not possible to run more than one replica of an app.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Create a Kubernetes secret to provide connection details to the new app environment - to specify that the app should use a local in-memory database.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes database credentials secret.

### 2.3 SQL Server{#database-sqlserver}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

The **SQL Server** plan offers a good balance between automation, ease of use and security when using Microsoft SQL Server or Azure SQL.
If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

**Prerequisites**

* A SQL Server server - for example, an Azure SQL server, or a SQL Server installed from a Helm chart
   {{% alert color="info" %}}
   A SQL Server or Azure SQL server can host multiple databases. Each database can be isolated from one another, this way one SQL Server can be used by multiple independent apps.
   {{% /alert %}}
* An admin user account.

**Limitations**

* Passwords can only be rotated manually.
* A standalone SQL Server will be shared between environments, which could affect scalability.
  Azure SQL allows more flexibility, and is much better at scaling - each database can have reserved capacity and doesn't affect performance of other databases on the same server.
* NetBIOS names are not supported. It's only possible to connect using the server's FQDN.
* Only username/password authentication is supported at the moment.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a database name, username and password for the new environment.
* Create a new database in the provided SQL Server server. This will be the environment's dedicated database.
* Create a new user and login for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's user and login.
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

**Configuring a SQL Server plan**

In the SQL Server plan configuration, enter the following details:

* **Host** is the SQL Server (Azure SQL) server hostname, for example `my-database.database.windows.net`
* **Port** is the SQL Server (Azure SQL) server port number, in most cases this should be set to `1433`.
* **Username** is the username for the admin user - used by the Mendix Operator to create/delete tenants for app environments.
* **Password** is the username for the admin user - used by the Mendix Operator to create/delete tenants for app environments.
* **Strict TLS** specifies if TLS should always be validated.
  * Enabling this option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the SQL Server server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted. Azure SQL supports Strict TLS without any extra TLS configuration.
  * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
* **Is Azure SQL Server** opens additional options that are only available when using Azure SQL (instead of a standalone SQL Server):
  * **Elastic Pool** specifies an existing Elastic Pool to use (can be left empty if the new app's database should not be using an elastic pool)
  * **Edition** specifies the [database edition/tier](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#edition) to use, for example `Basic`. Can be left empty, in this case Azure SQL will use the default `GeneralPurpose` edition.
  * **Service Objective** specifies the [database service objective](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#service_objective) (performance level), for example `Basic`. Can be left empty, in this case Azure SQL will use the default service objective (such as `GP_Gen5_2`).
  * **Maximum Size** specifies the database maximum size, for example `1 GB`. Can be left empty, in this case the default size will be used.

{{% alert color="warning" %}}
By default, Azure SQL will create a production-grade database, which could be too costly for small apps.
Azure SQL allows to change the database configuration parameters after a database was created.

It would make sense to start with a small database plan by default, and adjust it through the Azure Portal if the database starts having performance issues.
The smallest database tier available has the following parameters (keep the **Elastic Pool** value empty):

* **Edition**: `Basic`
* **Service Objective**: `Basic`
* **Maximum Size**: `1 GB`
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Azure SQL Server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall.
{{% /alert %}}

### 2.4 Dedicated JDBC{#database-jdbc}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">Dedicated</text>

The **Dedicated JDBC** will enable you to enter the [database configuration parameters](/refguide/custom-settings/) for an existing database directly, as supported by the Mendix Runtime.
This plan allows to configure and use any database supported by the Mendix Runtime, including Oracle.

**Prerequisites**

* A database server, for example Postgres or Oracle.
* A database in the database server - the database that should be used by the Mendix app environment.
* An user account that has permissions to access the database - the account that should be used by the Mendix app environment.

**Limitations**

* Passwords can only be rotated manually.
* A dedicated JDBC database cannot be used by more than one Mendix app.
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes database credentials secret.

**Configuring a Dedicated JDBC plan**

In the Dedicated JDBC plan configuration, enter the following details:

* **Database type**: The database type, one of the supported [DatabaseType](/refguide/custom-settings/#DatabaseType) values such as `PostgreSQL`.
* **Host**: The database hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432` - specifies the value of [DatabaseHost](/refguide/custom-settings/#DatabaseType).
* **Database name**: The name of the database or schema used by the Mendix app, for example `postgres` - specifies the value of [DatabaseName](/refguide/custom-settings/#DatabaseName).
* **JDBC URL**: The JDBC URL used to connect to the databse, for example `jdbc:postgresql://postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432/myappdb?sslmode=prefer`.
* **User**: Specifies the username to be used by the Mendix app environment to connect to the database.
* **Password**: Specifies the password for **Username**.

## 3 Storage Plans{#blob-storage}

{{% alert color="info" %}}
Storage plans are “blueprints” that specify how to request/decommission a new database or blob storage and pass its credentials to an environment.
{{% /alert %}}

{{% alert color="warning" %}}
The storage plan does not include any functionality for backing up or restoring files used by your app. It is your responsibility to ensure that appropriate provision is made for backing up and restoring these files using the tools provided by your storage and/or cloud provider.
{{% /alert %}}

{{% alert color="info" %}}
You cannot create multiple storage plans at the same time. Run the configuration tool multiple time to apply several storage plans.
{{% /alert %}}

The following **Storage Types** are supported:

* MiniO
* Ephemeral (non-persistent)
* Amazon S3
* Azure Blob Storage
* Google Cloud Storage bucket
* Ceph RADOS

**MinIO** will connect to a [MinIO](https://min.io/product/overview) S3-compatible object storage. You will need to provide all the information about your MinIO storage such as endpoint, access key, and secret key. The MinIO server needs to be a full-featured MinIO server, or a [MinIO Gateway](https://github.com/MinIO/MinIO/tree/master/docs/gateway) with configured etcd.

{{% alert color="info" %}}
To use TLS, specify the MinIO URL with an `https` schema, for example `https://minio.local:9000`. If MinIO has a self-signed certificate, you'll also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.

If the MinIO URL is specified with an `http` schema, TLS will not be used.
{{% /alert %}}

**S3 (create bucket and account with inline policy)** will connect to an AWS account to create S3 buckets and associated IAM user accounts. Each app environment will receive a dedicated S3 bucket and an IAM user account with an inline policy which only has access to that specific S3 bucket. The Mendix Operator will use a **management IAM user account** to create and delete S3 buckets and IAM user accounts. You will need to provide all the information relating to your Amazon S3 storage such as plan name, region, access key, and secret key.

To enable this mode, select the following options: **Create S3 Bucket per environment**, **Create account (IAM user) per environment**, **Create inline policy**.

The **management IAM user account** needs to have the following IAM policy (replace `<account_id>` with your AWS account number):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "bucketPermissions",
            "Effect": "Allow",
            "Action": [
                "s3:CreateBucket",
                "s3:DeleteBucket"
            ],
            "Resource": "arn:aws:s3:::mendix-*"
        },
        {
            "Sid": "iamPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:DeleteAccessKey",
                "iam:PutUserPolicy",
                "iam:DeleteUserPolicy",
                "iam:DeleteUser",
                "iam:CreateUser",
                "iam:CreateAccessKey"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:user/mendix-*"
            ]
        }
    ]
}
```

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.8.0 or later.
{{% /alert %}}

**S3 (create bucket and account with existing policy)** will connect to an AWS account to create S3 buckets and associated IAM user accounts. Each app environment will receive a dedicated S3 bucket and an IAM user account. An existing policy, which you specify, will be attached to the account. The Mendix Operator will use a **management IAM user account** to create and delete S3 buckets and IAM user accounts. You will need to provide all the information relating to your Amazon S3 storage such as plan name, region, policy ARN, access key, and secret key.

To enable this mode, select the following options: **Create S3 Bucket per environment**, **Create account (IAM user) per environment**.

Create an IAM policy that will be attached to IAM user accounts and copy its Policy ARN (specify this value in the **Attach Policy ARN** field):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListingOfUserFolder",
            "Action": [
                "s3:ListBucket"
            ],
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::${aws:username}"
            ],
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "${aws:username}/*",
                        "${aws:username}"
                    ]
                }
            }
        },
        {
            "Sid": "AllowAllS3ActionsInUserFolder",
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::${aws:username}/${aws:username}/*"
            ],
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListMultipartUploadParts",
                "s3:PutObject"
            ]
        }
    ]
}
```

The **management IAM user account** needs to have the following IAM policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the Policy ARN):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LimitedAttachmentPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:AttachUserPolicy",
                "iam:DetachUserPolicy"
            ],
            "Resource": "*",
            "Condition": {
                "ArnEquals": {
                    "iam:PolicyArn": [
                        "<policy_arn>"
                    ]
                }
            }
        },
        {
            "Sid": "iamPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:DeleteAccessKey",
                "iam:DeleteUser",
                "iam:CreateUser",
                "iam:CreateAccessKey"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:user/mendix-*"
            ]
        },
        {
            "Sid": "bucketPermissions",
            "Effect": "Allow",
            "Action": [
                "s3:CreateBucket",
                "s3:DeleteBucket"
            ],
            "Resource": "arn:aws:s3:::mendix-*"
        }
    ]
}
```

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.8.0 or later.
{{% /alert %}}

**S3 (create account with inline policy)** will connect to an AWS account to IAM user accounts. Each app environment will receive a dedicated IAM user account with an inline policy. This inline policy only allows access to objects in the existing S3 bucket if the object name prefix matches the environment's account name (IAM user name). The Mendix Operator will use a **management IAM user account** to create and delete IAM user accounts. You will need to provide all the information relating to your Amazon S3 storage such as plan name, bucket name, region, access key, and secret key.

To enable this mode, select the following options: **Create account (IAM user) per environment**, **Create Inline Policy**.

The **management IAM user account** needs to have the following IAM policy (replace `<account_id>` with your AWS account number):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "iamPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:DeleteAccessKey",
                "iam:PutUserPolicy",
                "iam:DeleteUserPolicy",
                "iam:DeleteUser",
                "iam:CreateUser",
                "iam:CreateAccessKey"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:user/mendix-*"
            ]
        }
    ]
}
```

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.8.0 or later.
{{% /alert %}}

**S3 (create account with existing policy)** will connect to an AWS account to IAM user accounts. Each app environment will receive a dedicated IAM user account. The specified existing policy will be attached to the account and should only allow access to objects in the existing S3 bucket if the object name prefix matches the environment's account name (IAM user name). The Mendix Operator will use a **management IAM user account** to create and delete IAM user accounts. You will need to provide all the information relating to your Amazon S3 storage such as plan name, bucket name, region, policy ARN, access key, and secret key.

To enable this mode, select the following options: **Create account (IAM user) per environment**.

Create an IAM policy that will be attached to app environment IAM user accounts (replacing `<bucket_name>` with the name of the existing bucket) and copy its Policy ARN (specify this value in the **Attach Policy ARN** field):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowListingOfUserFolder",
            "Action": [
                "s3:ListBucket"
            ],
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::<bucket_name>"
            ],
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "${aws:username}/*",
                        "${aws:username}"
                    ]
                }
            }
        },
        {
            "Sid": "AllowAllS3ActionsInUserFolder",
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::<bucket_name>/${aws:username}/*"
            ],
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListMultipartUploadParts",
                "s3:PutObject"
            ]
        }
    ]
}
```

The **management IAM user account** needs to have the following IAM policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the Policy ARN):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LimitedAttachmentPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:AttachUserPolicy",
                "iam:DetachUserPolicy"
            ],
            "Resource": "*",
            "Condition": {
                "ArnEquals": {
                    "iam:PolicyArn": [
                        "<policy_arn>"
                    ]
                }
            }
        },
        {
            "Sid": "iamPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:DeleteAccessKey",
                "iam:DeleteUser",
                "iam:CreateUser",
                "iam:CreateAccessKey"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:user/mendix-*"
            ]
        }
    ]
}
```

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.8.0 or later.
{{% /alert %}}

**S3 (existing bucket and account)** will connect to an existing S3 bucket with the provided IAM user access key and secret keys. All apps (environments) will use the same S3 bucket and an IAM user account. You will need to provide all the information relating to your Amazon S3 storage such as plan name, endpoint, access key, and secret key.

If the Autogenerate Prefix option is selected, Mendix for Private Cloud will generate a unique bucket prefix for each environment to keep data from different apps separate.

This prefix is specified in the `<environment name>-file` secret.

If you want a new environment to reuse/inherit data from an existing environment, you can deselect the Autogenerate Prefix and provide the existing prefix you want to use.

{{% alert color="info" %}}
To use the Autogenerate Prefix option you need Mendix Operator version 2.7.0 or above. See [Upgrading Private Cloud](/developerportal/deploy/private-cloud-upgrade-guide/) for instructions on upgrading the Mendix Operator.
{{% /alert %}}

{{% alert color="warning" %}}
Be sure to follow the naming guidelines for prefixes as described in the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html).
{{% /alert %}}

The associated IAM user account needs to have the following IAM policy (replace `<bucket_name>` with the your S3 bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:AbortMultipartUpload",
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:ListMultipartUploadParts",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::<bucket_name>/*"
      ]
    }
  ]
}
```

{{% alert color="info" %}}
Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.
{{% /alert %}}

{{% alert color="info" %}}

If you select *Yes* to the *Can this storage be used by multiple environments?* question, all environments using that Storage Plan will use the same Access and Secret keys and will have identical permissions. 
Each app will write into its own directory inside the bucket.

To avoid compromising security, answer *No* to the *Can this storage be used by multiple environments?* question. This way, only one app will be able to use this Storage Plan, and attaching another app to the same storage plan will not be possible.
{{% /alert %}}

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.1.0 or later.
{{% /alert %}}

**Azure Blob storage Container (existing)** will connect to an existing Azure Blob storage Container with the provided storage account name and key. All apps will use the same Container bucket and account credentials. You will need to provide all the information about your Azure Blob storage such as plan name, account name, account key, and container name.

{{% alert color="info" %}}
Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there's an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.
{{% /alert %}}

{{% alert color="info" %}}

If you select *Yes* to the *Can this storage be used by multiple environments?* question, all environments using that Storage Plan will be using the same account name and account keys keys and will have identical permissions.
All apps using will write into the root directory of same Azure Blob storage Container.

To avoid compromising security, answer *No* to the *Can this storage be used by multiple environments?* question. This way, only one app will be able to use this Storage Plan, and attaching another app to the same storage plan will not be possible.

{{% /alert %}}

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.1.0 or later.
{{% /alert %}}

**Google Cloud Storage bucket** will connect to an existing Google cloud bucket. You need to create the bucket, get the credentials from the service account, and fill in all the details into the StoragePlan. You will need to provide all the information about your Google cloud storage such as plan name, endpoint, access key, and secret key.

{{% alert color="info" %}}
Please note that the bucket for the Google cloud needs to be created manually. Mx4PC will not create the Google cloud bucket. The format of the endpoint should be *https://storage.googleapis.com/<bucket-name>*. Keep in mind that the all the apps will be created in a separate folder in the bucket.
{{% /alert %}}

**Ephemeral** will enable you to quickly set up your environment and deploy your app, but any data objects you store will be lost when you restart your environment.
