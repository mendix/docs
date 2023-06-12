---
title: "Storage Plans"
url: /developerportal/deploy/private-cloud-storage-plans/
description: "Describes how to configure storage plans in Mendix for Private Cloud."
weight: 10
tags: ["Private Cloud","Storage","Database","File","S3","Minio","Postgres","Azure"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## 1 Introduction

Every Mendix app environment needs a database to store entities, and a blob file storage bucket to store the contents of `System.FileDocument` entities. When an app developer creates a new environment, the Mendix Operator will automatically create (provision) a database and blob file storage bucket for that environment. In this way, an app developer does not need to install or configure a database - the Mendix Operator automatically prepares the database and blob file storage bucket, and links it with the new environment. Creating a new enviornment can be completely automated, and can be done by an app developer without assistance from the infrastructure team.

The Mendix Operator has a modular architecture and offers a multitude of options how to create and attach databases and blob file storage buckets to environments.
A storage plan specifies a configuration blueprint for providing a database or blob file storage bucket to a new environment. For example, if you create a `postgres-prod` storage plan and configure it to use a specific Postgres instance, an app developer will be able to choose a `postgres-prod` from the database plan dropdown when creating a new environment. This plan will create a new Postgres role (user) and a new database (schema and tenant) inside an existing Postgres instance (RDS instance). The new Mendix app environment will only be able to access its database and tenant, and will be isolated from other apps running on the same Postgres instance.

The Mendix Operator supports two storage management operations:

* **Create** - Creates a new tenant, generate credentials and attach them to the new environment.
* **Delete** - Deletes the environment's tenant, and optionally deletes that environment's data (database or files).

{{% alert color="info" %}}
If you would like to have full control over how storage (databases and blob file storage buckets) are created and connected to Mendix app environments, the [Secrets Storage](/developerportal/deploy/secret-store-credentials/) option can be used instead of storage plans.
{{% /alert %}}

{{% alert color="info" %}}
In this document, *storage plan* means a general database or blob file bucket - an external server that can store data (entities in a database, or contents of `System.FileDocument` entities in a blob storage bucket).

To be as specific as possible, this document refers to file storage buckets as *blob file storage buckets*, and to their associated storage plans as *blob file storage plans*. To save screen space, the `mxpc-cli` Configuration Tool calls them storage plans.
{{% /alert %}}

### 1.1 Classification of Storage Plans

There are multiple ways to categorize storage options.

#### 1.1.1 Automated Storage Options

Automated provisioners can communicate with an API to create an isolated tenant for an environment. For example, the *minio* provisioner will automatically create a bucket, user and policy for every new environment. In this way, each environment gets its own user and bucket, and the Mendix Operator can isolate app environments from one another.

In most cases, automated provisioners require some prerequisites to create or delete tenants. This usually means an existing service (such as a Postgres or MinIO server) and admin credentials.

#### 1.1.2 Basic Storage Options

Basic provisioners do not communicate with any APIs. Instead, they generate and attach existing credentials to a new environment. For example, a basic provisioner like Ceph provides the same credentials to every app environment (with an option to let each environment use its own bucket prefix).

Basic provisioners do not provide isolation between environments, but in some cases can provide more control over how storage is managed. For example, this option can be used to attach a pre-created S3 bucket or on-premise SQL Server database to a new environment.

#### 1.1.3 On-Demand Options

On-demand storage plans can be used by any number of environments. These provisioners can provide a database and bucket on demand to any new environment.

#### 1.1.4 Dedicated Options

Dedicated storage plans can only be used by one environment at a time. If a storage plan is marked as dedicated and is already in use by an environment, new environments cannot use it.

Most provisioners have require some prerequisites to be created manually. Typically this would be a server (database or blob file storage bucket) and credentials to access or manage it.

### 1.2 Creating and Testing a Storage Plan {#typical-workflow}

As a best practice, test your new storage plan by creating a new environment and confirming that it is working as expected. In some cases, even though the Mendix Operator was able to create a database and bucket, an environment may fail to connect because of firewalls, Kubernetes security policies, or other reasons.

To create a new storage plan, do the following steps:

1. Run the [mxpc-cli configuration tool](/developerportal/deploy/private-cloud-cluster/#download-configuration-tool) and fill in all the necessary details for the storage plan or plans.
2. Apply the changes but keep the `mxpc-cli` configuration tool open.
3. Try to create a new test environment using the new storage plan.
    If the environment is successfully created and able to start, the storage plan is ready to use.
4. If the environment cannot be successfully created or started, check the error message displayed in the Cloud Portal and the logs from the `{environment-name}-database` and `{environment-name}-file` pods.
5. If necessary, update the storage plan configuration in `mxpc-cli` by switching to the **Database Plan** or **Storage Plan** tabs, and apply the configuration.
6. Delete the failed `{environment-name}-database` or `{environment-name}-file` pod, and then test the storage plan again.

### 1.3 Known Limitations

The following sections outline some limitations to keep in mind when using storage plans, as well as potential ways to mitigate those limitations.

#### 1.3.1 Updating a Plan Does Not Update Existing Environments

Updating a storage plan does not update any already existing environments. For example, if you migrate a database to a new URL, updating the storage plan will not update the database URL in any already existing environments. In addition, any significant changes to the storage plan configuration (such as replacing Postgres with SQL Server) will not migrate the data in already existing environments.

To apply significant changes to your environments, do the following steps:

1. Create a new storage plan.
2. Create new versions of existing environments for the new storage plan.
3. Migrate data from existing environments to their new versions and verify that the migration was successful.
4. Delete previous environments and disable the previous storage plan.

#### 1.3.2 Rotating Credentials Requires Manual Updates

To rotate credentials of an environment, you must manually update the credentials in the environment's Kubernetes secret. If your security policy requires a regular rotation of credentials, consider using [Secrets Storage](/developerportal/deploy/secret-store-credentials/) instead.

{{% alert color="info" %}}
We are working on adding support for passwordless authentication in AWS (IRSA), removing the need to rotate credentials. This feature will be available in a future version of Mendix for Private Cloud.
{{% /alert %}}

#### 1.3.3 Provisioner Pods Do Not Automatically Retry after Failing

If a provisioner pod fails, it will attempt to roll back any changes it made, but will not automatically retry.

To retry a failed provisioner pod, do the following steps:

1. Check the logs of the failed `{environment-name}-database` or `{environment-name}-file` pod to find the root cause of the problem.
2. Resolve the cause of the problem.
2. Delete the failed `{environment-name}-database` or `{environment-name}-file` pod to retry.

#### 1.3.4 The Configuration of an Existing Storage Plan Cannot Be Read

It is not currently possible to read the configuration of an existing storage plan. The only way to update the configuration of a storage plan is by overwriting it with an updated version. If you have created a storage plan in the past and would like to update it, for example, to change the admin credentials, you must create a new storage plan and give it the same name as the currently existing storage plan. This new configuration will overwrite and replace the existing plan.

{{% alert color="info" %}}
Giving a storage plan (database or blob file bucket) a non-unique name always overwrites any previously created storage plans with the same name. To prevent your data from accitentally being overwritten, when you configure a new namespace, make sure that the database and blob file storage plans use unique, different names.
{{% /alert %}}

#### 1.3.5 You Are Responsible for Backing up and Restoring Files

{{% alert color="info" %}}
The storage plan does not include any functionality for backing up or restoring files used by your app. It is your responsibility to ensure that appropriate provision is made for backing up and restoring these files using the tools offered by your storage provider or cloud provider.
{{% /alert %}}

#### 1.3.6 The Mxpc-cli Configuration Tool Creates One Storage Plan at a Time

You can only create up to one database and one blob file storage plan when running the `mxpc-cli` configuration tool. Run the configuration tool multiple time to create additional database and blob file storage plans.

#### 1.3.7 Some UI Elements May Be Hidden When Not in Fullscreen Mode

If the screen or terminal cannot fit all the elements, some UI elements may be hidden. As a best practice, open the `mxpc-cli` Configuration Tool in fullscreen mode, or increase the terminal window size to at least 180x60 characters.

#### 1.3.8 Deleting an Environment Must Be Verified Manually

If you delete an environment, make sure that it is completely deleted by running the following commands:

* `kubectl -n {namespace} get storageinstance {environment-name}-file`
* `kubectl get storageinstance {environment-name}-database` 

If the commands return a *not found* response, your environment database and blob file storage have been fully removed. If either the database or the blob file storage were not deleted, you must find and troubleshoot the reason, and then do a [manual cleanup](/developerportal/deploy/private-cloud-deploy/#delete-storage) if necessary. Until the cleanup is done, you should not create a new environment that uses the same name as the environment that is still being deleted.

## 2 Database Plans {#database}

Every Mendix app needs a database to store persistent and non-persistent entities. A database plan tells the Mendix Operator how to provide a database to a new Mendix app environment.

{{% alert color="warning" %}}
The database plan does not include any functionality for backing up or restoring data on your database. It is your responsibility to ensure that appropriate planning is made for backing up and restoring your database using the tools provided by your database management system or cloud provider.
{{% /alert %}}

### 2.1 Creating a Database

To create a new database, do the following steps:

1. Give your plan a **Name** and choose the **Database Type**. See the information below for more help in setting up plans for the different types of database which are supported by Mendix for Private Cloud.
2. Apply two validation checks by clicking the **Validate** and **Connection Validation** buttons:
    * **Validate** – Checks that you have provided all the required values and that they are in the correct format.
    * **Connection validation** –  Checks whether the specified storage plan has been successfully created. This does not guarantee that the storage instance will be created successfully when the configuration is applied, so to fully test a database plan, you will need to test it by [creating a temporary test environment](#typical-workflow).

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/database-plan-config.png" alt="Database Plan Configuration" >}}

{{% alert color="info" %}}
You cannot create multiple database plans at the same time. Run the configuration tool multiple times to create several database plans.
{{% /alert %}}

### 2.2 Supported Database Types

The following database types are supported:

* [PostgreSQL](#database-postgres)
* [Ephemeral (non-persistent)](#database-ephemeral)
* [SQL Server](#database-sqlserver)
* [Dedicated JDBC](#database-jdbc)

  To use a dedicated database, or to have more control over the database connection parameters, use the JDBC plan.

#### 2.2.1 Postgres {#database-postgres}

The Postgres database is an automated, on-demanad database. The Postgres plan offers a good balance between automation, ease of use, and security. It is the most versatile and portable option for production-grade databases. If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

##### 2.2.1.1 Prerequisites

* A Postgres server - for example, an RDS instance, or a Postgres server installed from a Helm chart
   {{% alert color="info" %}}
   A Postgres server (cluster) can host multiple databases. Each database can be isolated from one another, this way one Postgres server can be used by multiple independent apps.
   {{% /alert %}}
* A superuser account and its login database - in most cases, this would be the default `postgres` user and `postgres` database.
   {{% alert color="info" %}}
   To connect to a Postgres server, a login database is required. This database is not used - but is required, because Postgres needs a default login database to be specified.
   {{% /alert %}}

##### 2.2.1.2 Environment Isolation

* Unique user (Postgres role) for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### 2.2.1.3 Limitations

* Passwords can only be rotated manually.
* The Postgres server will be shared between environments, which could affect scalability.

##### 2.2.1.4 Create Workflow 

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a database name, username (Postgres role) and password for the new environment.
* Create a new database in the provided Postgres server. This will be the environment's dedicated database.
* Create a new user (role) for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 2.2.1.5 Delete Workflow 

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user (role).
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

##### 2.2.1.6 Configuring a Postgres Plan

In the Postgres plan configuration, enter the following details:

* **Host** - Postgres server hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local`.
* **Port** - Postgres server port number; in most cases this should be set to `5432`.
* **Database name** - login database for the admin/superuser; in most cases this is set to `postgres`.
* **Username** - username of the admin/superuser, used by the Mendix Operator to create or delete tenants for app environments; typically, this is set to `postgres`.
* **Password** - username of the admin/superuser; used by the Mendix Operator to create or delete tenants for app environments.
* **Strict TLS** - specifies if the TLS should always be validated.
  * Enabling this option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the PostgreSQL server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.
  * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.

{{% alert color="info" %}}
To connect to an Azure PostgreSQL server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall. For the database name, use `postgres`.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Amazon RDS database, the VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

#### 2.2.2 Ephemeral {#database-ephemeral}

Ephemeral databases are basic, on-demand databases. Ephemeral databases are the simplest option to implement. The Ephemeral plan will enable you to quickly set up your environment and deploy your app, but any data you store in the database will be lost when you restart your environment.

##### 2.2.2.1 Prerequisites

None.

##### 2.2.2.2 Limitations

* Data is lost when the app pod is restarted.
* It is not possible to run more than one replica of an app.

##### 2.2.2.3 Environment Isolation

* Each environment (Kubernetes pod) stores its data in memory.
* An environment cannot access data from other environments.

##### 2.2.2.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment and specify that the app should use a local in-memory database.

##### 2.2.2.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes database credentials secret.

#### 2.2.3 SQL Server {#database-sqlserver}

SQL server databases are automated, on-demand databases. The **SQL Server** plan offers a good balance between automation, ease of use, and security when using Microsoft SQL Server or Azure SQL. If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

##### 2.2.3.1 Prerequisites

* An SQL Server server - for example, an Azure SQL server, or a SQL Server installed from a Helm chart.

   {{% alert color="info" %}}
   An SQL server can host multiple databases. Each database can be isolated from one another - in this way, one SQL Server can be used by multiple independent apps.
   {{% /alert %}}
   
* An admin user account.

##### 2.2.3.2 Limitations

* Passwords can only be rotated manually.
* A standalone SQL Server will be shared between environments, which could affect scalability. Azure SQL allows more flexibility, and is much better at scaling - each database can have reserved capacity and does not  affect performance of other databases on the same server.
* NetBIOS names are not supported. It is only possible to connect using the server's FQDN.
* Only username/password authentication is supported at the moment.

##### 2.2.3.3 Environment Isolation

* Unique user, login for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### 2.2.3.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a database name, username and password for the new environment.
* Create a new database in the provided SQL Server server. This will be the environment's dedicated database.
* Create a new user and login for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 2.2.3.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user and login.
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

##### 2.2.3.6 Configuring an SQL Server Plan

In the SQL Server plan configuration, enter the following details:

* **Host** - SQL Server (Azure SQL) server hostname, for example `my-database.database.windows.net`
* **Port** - SQL Server (Azure SQL) server port number, in most cases this should be set to `1433`.
* **Username** - Username for the admin user, used by the Mendix Operator to create or delete tenants for app environments.
* **Password** - Password for the admin user, used by the Mendix Operator to create or delete tenants for app environments.
* **Strict TLS** - Specifies if TLS should always be validated.
    * Enabling this option will enable full TLS certificate validation and require encryption when connecting to SQL Server. If the SQL Server server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted. Azure SQL supports Strict TLS without any extra TLS configuration - no additional *custom TLS* configuration is required.
    * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
* **Is Azure SQL Server** - Opens additional options that are only available when using Azure SQL (instead of a standalone SQL Server):
    * **Elastic Pool** - Specifies an existing Elastic Pool to use (can be left empty if the new app's database should not be using an elastic pool)
    * **Edition** - Specifies the [database edition/tier](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#edition) to use, for example `Basic`. Can be left empty, in this case Azure SQL will use the default `GeneralPurpose` edition.
    * **Service Objective** - Specifies the [database service objective](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#service_objective) (performance level), for example `Basic`. Can be left empty, in which case Azure SQL will use the default service objective (such as `GP_Gen5_2`).
    * **Maximum Size** - Specifies the database maximum size, for example `1 GB`. Can be left empty, in this case the default size will be used.

{{% alert color="warning" %}}
By default, Azure SQL will create a production-grade database, which could be too costly for small apps. Azure SQL allows to change the database configuration parameters after a database was created.

As a best practice, start with a small database plan by default, and adjust it through the Azure Portal if the database starts having performance issues.
The smallest database tier available has the following parameters:

* **Edition** - `Basic`
* **Service Objective** - `Basic`
* **Maximum Size** - `1 GB`
* **Elastic Pool** - Leave blank
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Azure SQL Server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall.
{{% /alert %}}

#### 2.2.4 Dedicated JDBC {#database-jdbc}

JDBC databases are dedicated, basic databases. The **Dedicated JDBC** plan enables you to enter the [database configuration parameters](/refguide/custom-settings/) for an existing database directly, as supported by the Mendix Runtime. This plan allows to configure and use any database supported by the Mendix Runtime, including Oracle.

##### 2.2.4.1 Prerequisites

* A database server, for example Postgres or Oracle.
* A database in the database server - the database that should be used by the Mendix app environment.
* An user account that has permissions to access the database - the account that should be used by the Mendix app environment.

##### 2.2.4.2 Limitations

* Passwords can only be rotated manually.
* A dedicated JDBC database cannot be used by more than one Mendix app.
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear stuck with **Replicas running** and **Runtime** showing a spinner.

##### 2.2.4.3 Environment Isolation

* Database plan can only be used by one environment at a time.
* Other environments will not be able to use the database plan if it's already in use.

##### 2.2.4.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 2.2.4.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes database credentials secret.

##### 2.2.4.6 Configuring a Dedicated JDBC Plan

In the Dedicated JDBC plan configuration, enter the following details:

* **Database type** - The database type, one of the supported [DatabaseType](/refguide/custom-settings/#DatabaseType) values such as `PostgreSQL`.
* **Host** - The database hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432` - specifies the value of [DatabaseHost](/refguide/custom-settings/#DatabaseType).
* **Database name** - The name of the database or schema used by the Mendix app, for example `postgres` - specifies the value of [DatabaseName](/refguide/custom-settings/#DatabaseName).
* **JDBC URL** - The JDBC URL used to connect to the databse, for example `jdbc:postgresql://postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432/myappdb?sslmode=prefer`.
* **User** - Specifies the username to be used by the Mendix app environment to connect to the database.
* **Password** - Specifies the password for **Username**.

## 3 Blob File Storage Plans {#blob-storage}

{{% alert color="info" %}}
In this document, *storage plan* means a general database or blob file bucket - an external server that can store data (entities in a database, or contents of `System.FileDocument` entities in a blob storage bucket). To be as specific as possible, this document refers to file storage buckets as *blob file storage buckets*, and to their associated storage plans as *blob file storage plans*. To save screen space, the `mxpc-cli` Configuration Tool calls them *Storage Plans*.
{{% /alert %}}

{{% alert color="info" %}}
The **Prevent Data Deletion** option switches the bucket into immutable mode:

* When a `System.FileDocument` entity is removed, its actual file will remain in the storage bucket.
* When a `System.FileDocument` entity is modified, a new blob file will be uploaded into the storage bucket.
* When an environment is deleted, its files will not be cleaned up (deleted) from the storage bucket.

This can increase storage costs, but in exchange removes the need to run file backups. To roll back an app environment to an earlier stage, only the database needs to be rolled back. All files referenced by that database shapshot are already available in the blob storage bucket.

If **Prevent Data Deletion** is enabled, you can remove `s3:DeleteObject` and `s3:DeleteBucket` permissions from example IAM policies.
{{% /alert %}}

The following **Blob File Storage Types** are supported:

* [MinIO](#blob-minio) - Easiest option to use for a cloud vendor-agnostic solution, if the MinIO server license terms are acceptable
* [Ephemeral (non-persistent)](#blob-ephemeral) - Simplest option; the contents of `System.FileDocument` will only be stored locally in a pod and will be lost when a pod is restarted
* [Amazon S3](#blob-s3) - Solution hosted by Amazon S3
* [Azure Blob Storage](#blob-azure) - Solution hosted by Azure Blob Storage
* [Google Cloud Storage](#blob-gcp-storage-bucket) - Solution hosted by Google Cloud Storage
* [Ceph RADOS](#blob-ceph) - Allows the use of a pre-created bucket from an S3-compatible vendor. This option also works with other S3-compatible storage options (not listed in this document)

### 3.1 MinIO {#blob-minio}

[MinIO](https://min.io/product/overview) is an automated, on-demand S3-compatible object storage. The **MinIO** plan offers a good balance between automation, ease of use and security, and doesn't depend on any cloud vendors. 

#### 3.1.1 Prerequisites

* A MinIO server - for example, installed from a Helm chart or using the official MinIO Kubernetes Operator.

   {{% alert color="warning" %}}
   MinIO [changed the license](https://blog.min.io/from-open-source-to-free-and-open-source-minio-is-now-fully-licensed-under-gnu-agplv3/) from Apache License 2.0 to GNU AGPLv3.
   This means that for use in most production environments, MinIO needs a licensed subscription.
   {{% /alert %}}
   
* An admin user account - with permissions to create/delete users, policies and buckets.

#### 3.1.2 Limitations

* Access and Secret keys used by existing environments can only be rotated manually.
* The MinIO server needs to be a full-featured MinIO server, or a [MinIO Gateway](https://github.com/MinIO/MinIO/tree/master/docs/gateway) with configured `etcd`. MinIO Gateway without `etcd` can only have one user, and won't support environment isolation.

#### 3.1.3 Environment Isolation

* Every environment has its own IAM user.
* An environment can only access its own blob file storage bucket.

#### 3.1.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a bucket name and an IAM username for the new environment.
* Create a new IAM user for the new environment.
* Create a new policy that allows the environment's user to access the environment's bucket.
* Attach this new policy to the new environment's user.
* Create a new bucket for the new environment.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### 3.1.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete that environment's bucket and its contents.
* Delete that environment's IAM user.
* Delete that environment's policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

{{% alert color="info" %}}
To use TLS, specify the MinIO URL with an `https` schema, for example `https://minio.local:9000`. If MinIO has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.

If the MinIO URL is specified with an `http` schema, TLS will not be used.
{{% /alert %}}

#### 3.1.6 Configuring a MinIO Plan

In the MinIO plan configuration, enter the following details:

* **Endpoint** is the MinIO server API endpoint, for example `http://minio-shared.privatecloud-storage.svc.cluster.local:9000`
  * To use TLS, change `http` to `https`. If the MinIO server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.
* **Access Key** is the admin user account access key (username), used by Mendix Operator to create tenants for new environments.
* **Secret Key** is the admin user account secret key (password), used by Mendix Operator to create tenants for new environments.

### 3.2 Ephemeral {#blob-ephemeral}

The **Ephemeral** plan is a basic, on-demand way to quickly set up your environment and deploy your app, but any data objects you store will be lost when you restart your environment.

#### 3.2.1 Prerequisites

* None.

#### 3.2.2 Limitations

* Data is lost when the app pod is restarted.
* If an app has more than one replica, behavior can be unpredictable unless the ingress controller has session affinity.

#### 3.2.3 Environment Isolation

* Each environment (Kubernetes pod) stores its data in the local filesystem.
* An environment cannot access data from other environments.

#### 3.2.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment and specify that the app should use the default file storage option (local files in a pod).

#### 3.2.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

### 3.3 Amazon S3 {#blob-s3}

Mendix for Private Cloud provides a variety of options for storing files in Amazon S3. Each option uses its own approach to isolation between environments, and to attaching a bucket (and IAM user/policy) to a new environment.

If you would like to have Mendix Operator with automation, and have full isolation between environment, use the [Create account with existing policy](#s3-create-account-existing-policy) option. This option works with the least possible AWS privileges.

If you would like to simply share a bucket between environments, or to manually create a bucket and account per environment, use the [existing bucket and account](#s3-existing-bucket-account) option.

{{% alert color="info" %}}
Although we offer additional flexibility and provide other options, we recommend using one of the options listed above.
{{% /alert %}}

#### 3.3.1 Create Account with Existing Policy {#s3-create-account-existing-policy}

This automated, on-demand option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

##### 3.3.1.1 Prerequisites

* An S3 bucket
* An environment template policy which will be attached to every new environment's user; the policy allows access to the S3 bucket, as in the following example (replace `<bucket_name>` with the S3 bucket name):

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

* An admin user account - with the following policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the environment template policy ARN):
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

##### 3.3.1.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.

##### 3.3.1.3 Environment Isolation

* Every environment has its own IAM user.
* The S3 bucket is shared. 
  * The environment template policy uses the IAM username as a template, so that a user can only access a certain prefix (path or directory) in the bucket.
  * In practice, this means that any environment can only access files if those files' prefix matches the environment's IAM username.
  * An environment cannot access files from other environments.
* The Mendix Operator does not need permissions to create new policies, only to attach a manually created policy.

##### 3.3.1.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username.
* Create the new IAM user and attach the existing environment template policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment and to automatically configure the new environment.

##### 3.3.1.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if the **Prevent Data Deletion** is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.1.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **no**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - Set to **yes**.
* **Attach policy ARN** - The environment template policy ARN; this is the existing policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** credentials for the admin user account - Used to create or delete environment IAM users.

#### 3.3.2 Existing bucket and account {#s3-existing-bucket-account}

This basic, on-demand option allows you to attach an existing S3 bucket and IAM account credentials (access and secret keys) to one or more environments. All apps (environments) will use the same S3 bucket and an IAM user account.

##### 3.3.2.1 Prerequisites

* An S3 bucket.
* An **environment** user account, with the following IAM policy (replace `<bucket_name>` with the S3 bucket name):

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

##### 3.3.2.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the **Share bucket between environments** option is checked).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to be stuck with **Replicas running** and **Runtime** showing a spinner.
* To configure the **Autogenerate Prefix** option you need Mendix Operator version 2.7.0 or above. See [Upgrading Private Cloud](/developerportal/deploy/private-cloud-upgrade-guide/) for instructions on upgrading the Mendix Operator.

##### 3.3.2.3 Environment Isolation

* The S3 bucket and IAM credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By unchecking the **Share bucket between environments** option, this plan switches into **Dedicated** mode - so that only one environment can use it.

##### 3.3.2.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* (Optional, if **Autogenerate Prefix** is checked) - generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 3.3.2.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.2.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **no**.
* **Create account (IAM user) per environment** - Set to **no**.
* **Endpoint** - The S3 bucket's endpoint address, for example `https://mendix-apps-production-example.s3.eu-west-1.amazonaws.com`.
* **Access Key** and **Secret Key** - The credentials for the environment user account.
* **Autogenerate prefix** - Can be used to specify if the Mendix Operator should generate a unique bucket prefix (folder) for each environment, or to use a fixed, predefined prefix. If you want a new environment to reuse/inherit data from an existing environment, you can deselect the Autogenerate Prefix and provide the existing prefix you want to use.
* **Share bucket between environments** - Specifies is the bucket can be shared between environments (create an on-demand storage plan); if unchecked, the bucket can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, do not enable this option.

{{% alert color="info" %}}
Be sure to follow the naming guidelines for prefixes as described in the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html).
{{% /alert %}}

#### 3.3.3 Create Bucket and Account with Inline Policy {#s3-create-bucket-account-inline-policy}

This automated, on-demand option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We do not recommend using this option, as it is not possible to customize the bucket settings (encryption or default file access). In addition, this option needs admin-like IAM permissions to create inline policies - which might not be acceptable in regulated environments. This option is primarily here for historical reasons.

Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### 3.3.3.1 Prerequisites

* An admin user account - with the following policy (replace `<account_id>` with your AWS account number):
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

##### 3.3.3.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how an S3 bucket is created (for example, encryption or default file access).
* It is not possible to customize how the inline IAM policy is created.

##### 3.3.3.3 Environment Isolation

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.

##### 3.3.3.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 3.3.3.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user and inline policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.3.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - Set to **yes**.
* **Access Key** and **Secret Key** - Credentials for the admin user account, used to create or delete environment buckets and IAM users.

#### 3.3.4 Create Bucket and Account with Existing Policy {#s3-create-bucket-account-existing-policy}

This automated, on-demand option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We do not recommend using this option, as it is not possible to customize the bucket settings (encryption or default file access). This option is primarily available for historical reasons.

Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### 3.3.4.1 Prerequisites

* An environment template policy (will be attached to every new environment's user), allowing access to the environment's S3 bucket:

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

* An admin user account - with the following policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the environment template policy ARN):

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

##### 3.3.4.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how an S3 bucket is created (for example, encryption or default file access).

##### 3.3.4.3 Environment Isolation

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.
  * The environment template policy uses the IAM username as a template - so that a user can only access an S3 bucket that matches the IAM username.
* The Mendix Operator does not need permissions to create IAM policies.

##### 3.3.4.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user and attach the _environment template_ policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 3.3.4.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.4.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - Set to **no**.
* **Attach policy ARN** - The environment template policy ARN; this is the policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** - The credentials for the admin user account, used to create or delete environment buckets and IAM users.

#### 3.3.5 Create account with inline policy {#s3-create-account-inline-policy}

This automated, on-demand option allows the sharing of an existing bucket between environments, and isolates environments from accessing each other's data.

{{% alert color="warning" %}}
We do not recommend using this option, as it needs admin-like IAM permissions to create inline policies, which might not be acceptable in regulated environments. This option is primarily available for historical reasons.

Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### 3.3.5.1 Prerequisites

* An S3 bucket.
* An admin user account - with the following policy (replace `<account_id>` with your AWS account number):

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

##### 3.3.5.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how the inline IAM policy is created.

##### 3.3.5.3 Environment Isolation

* Every environment has its own IAM user.
* The S3 bucket is shared. 
    * The Mendix Operator will generate an IAM policy for every user that only allows access to files in a specific prefix (directory) in the bucket.
    * An environment cannot access files from other environments.
* The Mendix Operator does no need permissions to create new buckets, only to create IAM users and inline policies.

##### 3.3.5.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 3.3.5.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.5.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **no**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - Set to **yes**.
* **Access Key** and **Secret Key** - Credentials for the "admin" user account, used to create or delete environment IAM users.

#### 3.3.6 Create Account with Inline Policy {#s3-create-account-inline-policy}

This automated, on-demand option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

{{% alert color="warning" %}}
We do not recommend using this option, as it needs admin-like IAM permissions to create inline policies - which might not be acceptable in regulated environments. This option is primarily here for historical reasons.

Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### 3.3.6.1 Prerequisites

* An S3 bucket.
* An admin user account - with the following policy (replace `<account_id>` with your AWS account number):

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

##### 3.3.6.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how the inline IAM policy is created.

##### 3.3.6.3 Environment Isolation

* Every environment has its own IAM user.
* The S3 bucket is shared. 
    * The Mendix Operator will generate an IAM policy for every user that only allows access to files in a specific prefix (directory) in the bucket.
    * An environment cannot access files from other environments.
* The Mendix Operator does not need permissions to create new buckets, only to create IAM users and inline policies.

##### 3.3.6.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### 3.3.6.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if _Prevent Data Deletion_ is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### 3.3.6.6 Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - Set to **no**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - Set to **yes**.
* **Access Key** and **Secret Key** - Credentials for the admin user account, used to create or delete environment IAM users.

### 3.4 Azure Blob Storage {#blob-azure}

This basic, on-demand option allows you to attach an existing Azure Blob Storage container and credentials (account name and secret key) to one or more environments. All apps (environments) will use the same Azure Blob Storage container and credentials.

#### 3.4.1 Prerequisites

* An Azure Blob storage container and credentials to access it.

#### 3.4.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

#### 3.4.3 Environment Isolation

* The Azure Blob storage container and credentials are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* All environments will store their data in the root directory of the blob storage container.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

#### 3.4.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### 3.4.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

#### 3.4.6 Configuring the Plan

In the Azure Blob plan configuration, enter the following details:

* **Account Name** and **Account Key** - Credentials for the blob storage container.
* **Container name** - Name of the blob storage container.
* **Type** - Specifies is the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### 3.5 Google Cloud Storage {#blob-gcp-storage-bucket}

This basic, on-demand option allows you to attach an existing GCP Cloud Storage bucket and credentials (access and secret keys) to one or more environments. All apps (environments) will use the same GCP Cloud Storage bucket and credentials (access and secret keys).

#### 3.5.1 Prerequisites

* A GCP Cloud Storage bucket bucket.
* An Access and Secret key with permissions to access the bucket.

#### 3.5.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

#### 3.5.3 Environment Isolation

* The GCP Cloud Storage bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

#### 3.5.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### 3.5.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

#### 3.5.6 Configuring the Plan

In the GCP Cloud Storage plan configuration, enter the following details:

* **Endpoint** - The GCP bucket's endpoint address, for example, `https://storage.googleapis.com/<bucket-name>`.
* **Access Key** and **Secret Key** - Credentials to access the bucket.
* **Type** - Specifies is the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### 3.6 Ceph {#blob-ceph}

This basic, on-demand option allows to attach an existing Ceph or S3-compatible bucket and credentials (access and secret keys) to one or more environments.
All apps (environments) will use the same bucket and credentials (access and secret keys).

#### 3.6.1 Prerequisites

* A Ceph or S3-compatible bucket.
* An Access and Secret key with permissions to access the bucket.

#### 3.6.2 Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is **On-Demand**).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

#### 3.6.3 Environment Isolation

* The Ceph or S3-compatible bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the Dedicated type, this plan switches into **Dedicated** mode, so that only one environment can use it.

#### 3.6.4 Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### 3.6.5 Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

#### 3.6.6 Configuring the Plan

In the Ceph plan configuration, enter the following details:

* **Endpoint** - The Ceph bucket's endpoint address, for example `https://ceph-instance.local:9000/<bucket-name>`.
* **Access Key** and **Secret Key** - Credentials to access the bucket.
* **Type** - Specifies if the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select **Dedicated**.
