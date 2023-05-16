---
title: "Storage plans"
url: /developerportal/deploy/private-cloud-storage-plans/
description: "Describes how to configure storage plans in Mendix for Private Cloud"
weight: 10
tags: ["Private Cloud", "Storage", "Database", "File", "S3", "Minio", "Postgres", "Azure"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## 1 Introduction

Every Mendix app environment needs a database (to store entities), and a blob file storage bucket (to store the contents of `System.FileDocument` entities).

When an app developer creates a new environment, the Mendix Operator will automatically create ("provision") a database and blob file storage bucket for that environment.
This way, an app developer doesn't need to install or configure a database - the Mendix Operator automatically prepare the database and blob file storage bucket, and link it with the new environment.
This way, creating a new enviornment is an easy process.

The Mendix Operator has a modular architecture and offers a multitude of options how to create and attach databases and blob file storage buckets to environments.
A _Storage plan_ specifies configuration (a blueprint) how to provide a database or blob file storage bucket to a new environment.
For example, if you create a `postgres-prod` storage plan and configure it to use a specific Postgres instance, an app developer would be able to choose a `postgres-prod` from the database plan dropdown when creating a new environment.
This plan would create a new Postgres role (user) and a new database (schema/tenant) inside an existing Postgres instance (RDS instance).
The new Mendix app environment would only be able to access its database/tenant and will be isolated from other apps running on the same Postgres instance.

The Mendix Operator supports two storage management operations:

* **Create** will create a new _tenant_, generate credentials and attach them to the new environment.
* **Delete** deletes the environment's _tenant_, and optionally deletes that environment's data (database or files).

{{% alert color="info" %}}
If you would like to have full control over how storage (databases and blob file storage buckets) are created and connected to Mendix app environments, the [Secrets Storage](/developerportal/deploy/secret-store-credentials/) option can be used instead of storage plans.
{{% /alert %}}

{{% alert color="info" %}}
In this document, _Storage plan_ means a general database or blob file bucket - an external server that can store data (entities in a database, or contents of `System.FileDocument` entities in a blob storage bucket).

To be as specific as possible, this document refers to file storage buckets as _blob file storage buckets_, and to their associated storage plans as _blob file storage plans_.
To save screen space, the `mxpc-cli` Configuration Tool calls them _Storage Plans_.
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

Most provisioners have need prerequisites to be created manually. Typically this would be a server (database or blob file storage bucket) and/or credentials to access or manage it.

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

{{% alert color="warning" %}}
Each storage plan (database or blob file bucket) needs to have a unique name.
If you create a plan that uses a name that already in use, this new plan will overwrite an existing plan.

When you configure a new namespace, make sure that the database and blob file storage plans use unique, different names.
{{% /alert %}}

{{% alert color="warning" %}}
The storage plan does not include any functionality for backing up or restoring files used by your app. It is your responsibility to ensure that appropriate provision is made for backing up and restoring these files using the tools provided by your storage and/or cloud provider.
{{% /alert %}}

You can only create up to one database and one blob file storage plan when running the `mxpc-cli` Configuration Tool. Run the configuration tool multiple time to create additional database and blob file storage plans.

If the screen (terminal) cannot fit all elements, some UI elements might overflow and become hidden.
We recommend opening the `mxpc-cli` Configuration Tool in fullscreen mode, or to at least increase the terminal window size to 180x60.

{{% alert color="warning" %}}
If you delete an environment, make sure that it's completely deleted - `kubectl -n {namespace} get storageinstance {environment-name}-file` and `kubectl get storageinstance {environment-name}-database` should return a _not found_ response.

Otherwise, you will need to check the reason why the environment's database or blob file storage is not being deleted, and do a [manual cleanup](/developerportal/deploy/private-cloud-deploy/#delete-storage) if necessary.

Until the cleanup is done, you should not create a new environment that uses the same name as the environment that's still being deleted.
{{% /alert %}}

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

The easiest option is [ephemeral](#database-ephemeral) databases.

For production-grade databases, the [Postgres](#database-postgres) plan is the most versatile and portable option.

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

**Environment Isolation**

* Unique user (role) for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

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

**Environment Isolation**

* Each environment (Kubernetes pod) stores its data in-memory.
* An environment cannot access data from other environments.

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

**Environment Isolation**

* Unique user, login for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

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
  * Enabling this option will enable full TLS certificate validation and require encryption when connecting to SQL Server. If the SQL Server server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted. Azure SQL supports Strict TLS without any extra TLS configuration.
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

**Environment Isolation**

* Database plan can only be used by one environment at a time.
* Other environments will not be able to use the database plan if it's already in use.

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

## 3 Blob File Storage Plans{#blob-storage}

{{% alert color="info" %}}
In this document, _Storage plan_ means a general database or blob file bucket - an external server that can store data (entities in a database, or contents of `System.FileDocument` entities in a blob storage bucket).

To be as specific as possible, this document refers to file storage buckets as _blob file storage buckets_, and to their associated storage plans as _blob file storage plans_.
To save screen space, the `mxpc-cli` Configuration Tool calls them _Storage Plans_.
{{% /alert %}}

{{% alert color="info" %}}
The _Prevent Data Deletion_ option switches the bucket into immutable mode:

* When a `System.FileDocument` entity is removed, its actual file will remain in the storage bucket.
* When a `System.FileDocument` entity is modified, a new blob file will be uploaded into the storage bucket.
* When an environment is deleted, its files will not be cleaned up (deleted) from the storage bucket.

This can increase storage costs, but in exchange removes the need to run file backups.
To roll back an app environment to an earlier stage, only the database needs to be rolled back.
All files referenced by that database shapshot are already available in the blob storage bucket.
{{% /alert %}}

The following **Blob File Storage Types** are supported:

* MinIO
* Ephemeral (non-persistent)
* Amazon S3
* Azure Blob Storage
* Google Cloud Storage bucket
* Ceph RADOS

The easiest option is [ephemeral](#blob-ephemeral) file storage. The contents of `System.FileDocument` will only be stored locally in a pod and will be lost when a pod is restarted.

For a cloud vendor-agnostic solution, [MinIO](#blob-minio) is easiest option to use - if the MinIO server license terms are acceptable.

To use a solution hosted by your cloud vendor, choose [Amazon S3](#blob-s3), [Azure Blob Storage](#blob-azure) or [Google Cloud Storage](#blob-gcp-storage-bucket).

**Ceph RADOS** allows to use a pre-created bucket from an S3-compatible vendor. This option also works with other S3-compatible storage options (not listed in this document)

### 3.1 MinIO{#blob-minio}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

The **MinIO** plan offers a good balance between automation, ease of use and security, and doesn't depend on any cloud vendors.
[MinIO](https://min.io/product/overview) is an S3-compatible object storage. 

**Prerequisites**

* A MinIO server - for example, installed from a Helm chart or using the official MinIO Kubernetes Operator.

   {{% alert color="warning" %}}
   MinIO [changed the license](https://blog.min.io/from-open-source-to-free-and-open-source-minio-is-now-fully-licensed-under-gnu-agplv3/) from Apache License 2.0 to GNU AGPLv3.
   This means that for use in most production environments, MinIO needs a licensed subscription.
   {{% /alert %}} 
* An admin user account - with permissions to create/delete users, policies and buckets.

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* The MinIO server needs to be a full-featured MinIO server, or a [MinIO Gateway](https://github.com/MinIO/MinIO/tree/master/docs/gateway) with configured `etcd`. MinIO Gateway without `etcd` can only have one user, and won't support envioronment isolation.

**Environment Isolation**

* Every environment has its own IAM user.
* An environment can only access its own blob file storage bucket.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a bucket name and an IAM username for the new environment.
* Create a new IAM user for the new environment.
* Create a new policy that allows the environment's user to access the environment's bucket.
* Attach this new policy to the new environment's user.
* Create a new bucket for the new environment.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete that environment's bucket and its contents.
* Delete that environment's IAM user.
* Delete that environment's policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

{{% alert color="info" %}}
To use TLS, specify the MinIO URL with an `https` schema, for example `https://minio.local:9000`. If MinIO has a self-signed certificate, you'll also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.

If the MinIO URL is specified with an `http` schema, TLS will not be used.
{{% /alert %}}

**Configuring a MinIO plan**

In the MinIO plan configuration, enter the following details:

* **Endpoint** is the MinIO server API endpoint, for example `http://minio-shared.privatecloud-storage.svc.cluster.local:9000`
  * To use TLS, change `http` to `https`. If the MinIO server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.
* **Access Key** is the admin user account access key (username), used by Mendix Operator to create tenants for new environments.
* **Secret Key** is the admin user account secret key (password), used by Mendix Operator to create tenants for new environments.

### 3.2 Ephemeral{#blob-ephemeral}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text>

The **Ephemeral** plan will enable you to quickly set up your environment and deploy your app, but any data objects you store will be lost when you restart your environment.

**Prerequisites**

* None.

**Limitations**

* Data is lost when the app pod is restarted.
* If an app has more than one replica, behavior can be unpredictable unless the ingress controller had session affinity.

**Environment Isolation**

* Each environment (Kubernetes pod) stores its data in the local filesystem.
* An environment cannot access data from other environments.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Create a Kubernetes secret to provide connection details to the new app environment - to specify that the app should use the default file storage option (local files in a pod).

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes blob file storage credentials secret.

### 3.3 Amazon S3{#blob-s3}

Mendix for Private Cloud provides a variety of options how to store files in Amazon S3.
Each option uses its own approach to isolation between environments, and how a bucket (and IAM user/policy) would be attached to a new environment.

If you'd like to have Mendix Operator with automation, and have full isolation between environment, use the [Create account with existing policy](#s3-create-account-existing-policy) option. This option works with the least possible AWS privileges.

If you'd like to simply share a bucket between environments, or to manually create a bucket/account per environment, use the [existing bucket and account](#s3-existing-bucket-account) option.

Other options are mainly provided for historical reasons, and are not recommended for new installations.

#### 3.3.1 Create account with existing policy{#s3-create-account-existing-policy}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

This option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

**Prerequisites**

* An S3 bucket.
* An _environment template_ policy (will be attached to every new environment's user) - allowing access to the S3 bucket (replace `<bucket_name>` with the S3 bucket name):

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

* An "admin" user account - with the following policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the _environment template_ policy ARN):
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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.

**Environment Isolation**

* Every environment has its own IAM user.
* The S3 bucket is shared. 
  * The _environment template_ policy uses the IAM username as a template - so that a user can only access a certain prefix (path/directory) in the bucket.
  * In practice, this means that any environment can only access files if those files' prefix matches the environment's IAM username.
* The Mendix Operator doesn't need permissions to create new policies, only to attach a manually created policy.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a new IAM username.
* Create the new IAM user and attach the _environment template_ policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - unchecked.
* **Create account (IAM user) per environment** - checked.
* **Bucket region** - the existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - the existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - unchecked.
* **Attach policy ARN** - the _environment template_ policy ARN; this is the policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** credentials for the "admin" user account.

#### 3.3.2 Existing bucket and account{#s3-existing-bucket-account}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text> <text class="badge badge-pill badge-primary">Dedicated</text>

This option allows to attach an existing S3 bucket and IAM account credentials (access and secret keys) to one or more environments.
All apps (environments) will use the same S3 bucket and an IAM user account.

**Prerequisites**

* An S3 bucket.
* An "environment" user account, with the following IAM policy (replace `<bucket_name>` with the S3 bucket name):

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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (unless the **Share bucket between environments** option is unchecked).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.
* To use the **Autogenerate Prefix** option you need Mendix Operator version 2.7.0 or above. See [Upgrading Private Cloud](/developerportal/deploy/private-cloud-upgrade-guide/) for instructions on upgrading the Mendix Operator.

**Environment Isolation**

* The S3 bucket and IAM credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By unchecking the **Share bucket between environments** option, this plan switches into **Dedicated** mode - so that only one environment can use it.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* (Optional, if **Autogenerate Prefix** is checked) - generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - unchecked.
* **Create account (IAM user) per environment** - unchecked.
* **Endpoint** - the S3 bucket's endpoint address, for example `https://mendix-apps-production-example.s3.eu-west-1.amazonaws.com`.
* **Access Key** and **Secret Key** credentials for the environment user account.
* **Autogenerate prefix** - can be used to specify if the Mendix Operator should generate a unique bucket prefix (folder) for each environment, or to use a fixed, predefined prefix. If you want a new environment to reuse/inherit data from an existing environment, you can deselect the Autogenerate Prefix and provide the existing prefix you want to use.
* **Share bucket between environments** - specifies is the bucket can be shared between environments (create an <text class="badge badge-pill badge-primary">On-Demand</text> storage plan); if unchecked, the bucket can only be used by one environment (create a <text class="badge badge-pill badge-primary">Dedicated</text> storage plan). To increase security and prevent environments from being able to access each other's data, do not enable this option.

{{% alert color="warning" %}}
Be sure to follow the naming guidelines for prefixes as described in the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html).
{{% /alert %}}

#### 3.3.3 Create bucket and account with inline policy{#s3-create-bucket-account-inline-policy}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

This option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We don't recommend using this option, as it's not possible to customize the bucket settings (encryption or default file access).
In addition, this option needs IAM admin permissions to create inline policies - which might not be acceptable in regulated environments.
This option is primarily here for historical reasons.
Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

**Prerequisites**

* An "admin" user account - with the following policy (replace `<account_id>` with your AWS account number):
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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* It's not possible to customize how an S3 bucket is created (for example, encryption or default file access).
* It's not possible to customize how the inline IAM policy is created.

**Environment Isolation**

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user and inline policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - checked.
* **Create account (IAM user) per environment** - checked.
* **Bucket region** - the region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - checked.
* **Access Key** and **Secret Key** credentials for the "admin" user account.

#### 3.3.4 Create bucket and account with existing policy{#s3-create-bucket-account-existing-policy}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

This option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We don't recommend using this option, as it's not possible to customize the bucket settings (encryption or default file access).
This option is primarily here for historical reasons.
Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

**Prerequisites**

* An _environment template_ policy (will be attached to every new environment's user) - allowing access to the environment's S3 bucket:

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

* An "admin" user account - with the following policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the Policy ARN):

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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* It's not possible to customize how an S3 bucket is created (for example, encryption or default file access).

**Environment Isolation**

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.
  * The _environment template_ policy uses the IAM username as a template - so that a user can only access an S3 bucket that matches the IAM username.
* The Mendix Operator doesn't need permissions to create IAM policies.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user and attach the _environment template_ policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - checked.
* **Create account (IAM user) per environment** - checked.
* **Bucket region** - the region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - unchecked.
* **Attach policy ARN** - the _environment template_ policy ARN; this is the policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** credentials for the "admin" user account.

#### 3.3.5 Create account with inline policy{#s3-create-account-inline-policy}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

This option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

{{% alert color="warning" %}}
We don't recommend using this option, as it needs IAM admin permissions to create inline policies - which might not be acceptable in regulated environments.
This option is primarily here for historical reasons.
Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

**Prerequisites**

* An S3 bucket.
* An "admin" user account - with the following policy (replace `<account_id>` with your AWS account number):

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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* It's not possible to customize how the inline IAM policy is created.

**Environment Isolation**

* Every environment has its own IAM user.
* The S3 bucket is shared. 
  * The Mendix Operator will generate an IAM policy for every user that only allows access to files in a specific prefix (directory) in the bucket.
* The Mendix Operator doesn't need permissions to create new buckets, only to create IAM users and inline policies.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a new IAM username.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - unchecked.
* **Create account (IAM user) per environment** - checked.
* **Bucket region** - the existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - the existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - checked.
* **Access Key** and **Secret Key** credentials for the "admin" user account.

#### 3.3.6 Create account with inline policy{#s3-create-account-inline-policy}

<text class="badge badge-pill badge-primary">Automated</text> <text class="badge badge-pill badge-primary">On-Demand</text>

This option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

{{% alert color="warning" %}}
We don't recommend using this option, as it needs IAM admin permissions to create inline policies - which might not be acceptable in regulated environments.
This option is primarily here for historical reasons.
Instead, we recommend using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

**Prerequisites**

* An S3 bucket.
* An "admin" user account - with the following policy (replace `<account_id>` with your AWS account number):

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

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* It's not possible to customize how the inline IAM policy is created.

**Environment Isolation**

* Every environment has its own IAM user.
* The S3 bucket is shared. 
  * The Mendix Operator will generate an IAM policy for every user that only allows access to files in a specific prefix (directory) in the bucket.
* The Mendix Operator doesn't need permissions to create new buckets, only to create IAM users and inline policies.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a new IAM username.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* (Only if _Prevent Data Deletion_ is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Amazon S3 plan configuration, enter the following details:

* **Create bucket per environment** - unchecked.
* **Create account (IAM user) per environment** - checked.
* **Bucket region** - the existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - the existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - checked.
* **Access Key** and **Secret Key** credentials for the "admin" user account.

### 3.4 Azure Blob storage{#blob-azure}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text> <text class="badge badge-pill badge-primary">Dedicated</text>

This option allows to attach an existing Azure Blob Storage container and credentials (account name and secret key) to one or more environments.
All apps (environments) will use the same Azure Blob Storage container and credentials.

**Prerequisites**

* An Azure Blob storage container and credentials to access it.

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

**Environment Isolation**

* The Azure Blob storage container and credentials are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* All environments will store their data in the root directory of the blob storage container.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Azure Blob plan configuration, enter the following details:

* **Account Name** and **Account Key** credentials for the blob storage container.
* **Container name** - name of the blob storage container..
* **Type** - specifies is the container can be shared between environments (create an <text class="badge badge-pill badge-primary">On-Demand</text> storage plan); or that the container can only be used by one environment (create a <text class="badge badge-pill badge-primary">Dedicated</text> storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### 3.5 Google Cloud Storage{#blob-gcp-storage-bucket}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text> <text class="badge badge-pill badge-primary">Dedicated</text>

This option allows to attach an existing GCP Cloud Storage bucket and credentials (access and secret keys) to one or more environments.
All apps (environments) will use the same GCP Cloud Storage bucket and credentials (access and secret keys).

**Prerequisites**

* A GCP Cloud Storage bucket bucket.
* An Access and Secret key with permissions to access the bucket.

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

**Environment Isolation**

* The GCP Cloud Storage bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the GCP Cloud Storage plan configuration, enter the following details:

* **Endpoint** - the GCP bucket's endpoint address, for example `https://storage.googleapis.com/<bucket-name>`.
* **Access Key** and **Secret Key** credentials to access the bucket.
* **Type** - specifies is the container can be shared between environments (create an <text class="badge badge-pill badge-primary">On-Demand</text> storage plan); or that the container can only be used by one environment (create a <text class="badge badge-pill badge-primary">Dedicated</text> storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### 3.6 Ceph{#blob-ceph}

<text class="badge badge-pill badge-primary">Basic</text> <text class="badge badge-pill badge-primary">On-Demand</text> <text class="badge badge-pill badge-primary">Dedicated</text>

This option allows to attach an existing Ceph or S3-compatible bucket and credentials (access and secret keys) to one or more environments.
All apps (environments) will use the same bucket and credentials (access and secret keys).

**Prerequisites**

* A Ceph or S3-compatible bucket.
* An Access and Secret key with permissions to access the bucket.

**Limitations**

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

**Environment Isolation**

* The Ceph or S3-compatible bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

**Create workflow** (what the Mendix Operator will do when a new environment is created):

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

**Delete workflow** (what the Mendix Operator will do when an existing environment is deleted):

* Delete that environment's Kubernetes blob file storage credentials secret.

**Configuring this plan**

In the Ceph plan configuration, enter the following details:

* **Endpoint** - the Ceph bucket's endpoint address, for example `https://ceph-instance.local:9000/<bucket-name>`.
* **Access Key** and **Secret Key** credentials to access the bucket.
* **Type** - specifies is the container can be shared between environments (create an <text class="badge badge-pill badge-primary">On-Demand</text> storage plan); or that the container can only be used by one environment (create a <text class="badge badge-pill badge-primary">Dedicated</text> storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.
