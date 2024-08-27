---
title: "Storage Plans"
url: /developerportal/deploy/private-cloud-storage-plans/
description: "Describes how to configure storage plans in Mendix for Private Cloud."
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## Introduction

Every Mendix app environment needs a database to store entities, and a blob file storage bucket to store the contents of `System.FileDocument` entities. When an app developer creates a new environment, the Mendix Operator will automatically create (provision) a database and blob file storage bucket for that environment. In this way, an app developer does not need to install or configure a database - the Mendix Operator automatically prepares the database and blob file storage bucket, and links it with the new environment. Creating a new environment can be completely automated, and can be done by an app developer without assistance from the infrastructure team.

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

### Classification of Storage Plans

There are multiple ways to categorize storage options.

#### Automated Storage Options

Automated provisioners can communicate with an API to create an isolated tenant for an environment. For example, the *minio* provisioner will automatically create a bucket, user and policy for every new environment. In this way, each environment gets its own user and bucket, and the Mendix Operator can isolate app environments from one another.

In most cases, automated provisioners require some prerequisites to create or delete tenants. This usually means an existing service (such as a Postgres or MinIO server) and admin credentials.

#### Basic Storage Options

Basic provisioners do not communicate with any APIs. Instead, they generate and attach existing credentials to a new environment. For example, a basic provisioner like Ceph provides the same credentials to every app environment (with an option to let each environment use its own bucket prefix).

Basic provisioners do not provide isolation between environments, but in some cases can provide more control over how storage is managed. For example, this option can be used to attach a pre-created S3 bucket or on-premise SQL Server database to a new environment.

#### On-Demand Options

On-demand storage plans can be used by any number of environments. These provisioners can provide a database and bucket on demand to any new environment.

#### Dedicated Options

Dedicated storage plans can only be used by one environment at a time. If a storage plan is marked as dedicated and is already in use by an environment, new environments cannot use it.

Most provisioners have require some prerequisites to be created manually. Typically this would be a server (database or blob file storage bucket) and credentials to access or manage it.

### Creating and Testing a Storage Plan {#typical-workflow}

As a best practice, test your new storage plan by creating a new environment and confirming that it is working as expected. In some cases, even though the Mendix Operator was able to create a database and bucket, an environment may fail to connect because of firewalls, Kubernetes security policies, or other reasons.

To create a new storage plan, do the following steps:

1. Run the [mxpc-cli configuration tool](/developerportal/deploy/standard-operator/#download-configuration-tool) and fill in all the necessary details for the storage plan or plans.
2. Apply the changes but keep the `mxpc-cli` configuration tool open.
3. Try to create a new test environment using the new storage plan.
    If the environment is successfully created and able to start, the storage plan is ready to use.
4. If the environment cannot be successfully created or started, check the error message displayed in the Cloud Portal and the logs from the `{environment-name}-database` and `{environment-name}-file` pods.
5. If necessary, update the storage plan configuration in `mxpc-cli` by switching to the **Database Plan** or **Storage Plan** tabs, and apply the configuration.
6. Delete the failed `{environment-name}-database` or `{environment-name}-file` pod, and then test the storage plan again.

### Known Limitations

The following sections outline some limitations to keep in mind when using storage plans, as well as potential ways to mitigate those limitations.

#### Updating a Plan Does Not Update Existing Environments

Updating a storage plan does not update any already existing environments. For example, if you migrate a database to a new URL, updating the storage plan will not update the database URL in any already existing environments. In addition, any significant changes to the storage plan configuration (such as replacing Postgres with SQL Server) will not migrate the data in already existing environments.

To apply significant changes to your environments, do the following steps:

1. Create a new storage plan.
2. Create new versions of existing environments for the new storage plan.
3. Migrate data from existing environments to their new versions and verify that the migration was successful.
4. Delete previous environments and disable the previous storage plan.

#### Rotating Credentials Requires Manual Updates

To rotate credentials of an environment, you must manually update the credentials in the environment's Kubernetes secret. If your security policy requires a regular rotation of credentials, consider using [Secrets Storage](/developerportal/deploy/secret-store-credentials/) instead.

{{% alert color="info" %}}
Mendix Operator version 2.12 and later versions can use [IRSA authentication](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) instead of static credentials to authenticate with AWS RDS databases and S3 buckets.

When using IRSA, static passwords are replaced with short-lived tokens - which are automatically maintained by EKS.

IRSA removes any static passwords that might be used by the Mendix Operator or Mendix apps.
{{% /alert %}}

{{% alert color="info" %}}
Mendix Operator version 2.17 and later versions can use [managed identity authentication](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview) instead of static credentials to authenticate with Azure SQL, Postgres (Flexible Server) and Blob Storage.

When using managed identity authentication, static passwords are replaced with short-lived tokens, which are automatically maintained by AKS.

Managed identity authentication removes any static passwords that might be used by the Mendix Operator or Mendix apps.
{{% /alert %}}

#### Provisioner Pods Do Not Automatically Retry after Failing

If a provisioner pod fails, it will attempt to roll back any changes it made, but will not automatically retry.

To retry a failed provisioner pod, do the following steps:

1. Check the logs of the failed `{environment-name}-database` or `{environment-name}-file` pod to find the root cause of the problem.
2. Resolve the cause of the problem.
3. Delete the failed `{environment-name}-database` or `{environment-name}-file` pod to retry.

#### The Configuration of an Existing Storage Plan Cannot Be Read

It is not currently possible to read the configuration of an existing storage plan. The only way to update the configuration of a storage plan is by overwriting it with an updated version. If you have created a storage plan in the past and would like to update it, for example, to change the admin credentials, you must create a new storage plan and give it the same name as the currently existing storage plan. This new configuration will overwrite and replace the existing plan.

{{% alert color="info" %}}
Giving a storage plan (database or blob file bucket) a non-unique name always overwrites any previously created storage plans with the same name. To prevent your data from accidentally being overwritten, when you configure a new namespace, make sure that the database and blob file storage plans use unique, different names.
{{% /alert %}}

#### You Are Responsible for Backing up and Restoring Files

{{% alert color="info" %}}
The storage plan does not include any functionality for backing up or restoring files used by your app. It is your responsibility to ensure that appropriate provision is made for backing up and restoring these files using the tools offered by your storage provider or cloud provider.
{{% /alert %}}

#### The Mxpc-cli Configuration Tool Creates One Storage Plan at a Time

You can only create up to one database and one blob file storage plan when running the `mxpc-cli` configuration tool. Run the configuration tool multiple time to create additional database and blob file storage plans.

#### Some UI Elements May Be Hidden When Not in Fullscreen Mode

If the screen or terminal cannot fit all the elements, some UI elements may be hidden. As a best practice, open the `mxpc-cli` Configuration Tool in fullscreen mode, or increase the terminal window size to at least 180x60 characters.

#### Deleting an Environment Must Be Verified Manually

If you delete an environment, make sure that it is completely deleted by running the following commands:

* `kubectl -n {namespace} get storageinstance {environment-name}-file`
* `kubectl get storageinstance {environment-name}-database` 

If the commands return a *not found* response, your environment database and blob file storage have been fully removed. If either the database or the blob file storage were not deleted, you must find and troubleshoot the reason, and then do a [manual cleanup](/developerportal/deploy/private-cloud-deploy/#delete-storage) if necessary. Until the cleanup is done, you should not create a new environment that uses the same name as the environment that is still being deleted.

## Database Plans {#database}

Every Mendix app needs a database to store persistent and non-persistent entities. A database plan tells the Mendix Operator how to provide a database to a new Mendix app environment.

{{% alert color="warning" %}}
The database plan does not include any functionality for backing up or restoring data on your database. It is your responsibility to ensure that appropriate planning is made for backing up and restoring your database using the tools provided by your database management system or cloud provider.
{{% /alert %}}

### Creating a Database

To create a new database, do the following steps:

1. Give your plan a **Name** and choose the **Database Type**. See the information below for more help in setting up plans for the different types of database which are supported by Mendix for Private Cloud.
2. Apply two validation checks by clicking the **Validate** and **Connection Validation** buttons:
    * **Validate** – Checks that you have provided all the required values and that they are in the correct format.
    * **Connection validation** – Checks whether the specified storage plan has been successfully created. This does not guarantee that the storage instance will be created successfully when the configuration is applied, so to fully test a database plan, you will need to test it by [creating a temporary test environment](#typical-workflow).

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/database-plan-config.png" alt="Database Plan Configuration" class="no-border" >}}

{{% alert color="info" %}}
You cannot create multiple database plans at the same time. Run the configuration tool multiple times to create several database plans.
{{% /alert %}}

### Supported Database Types

The following database types are supported:

* [PostgreSQL and Aurora PostgreSQL](#database-postgres)
* [Ephemeral (non-persistent)](#database-ephemeral)
* [SQL Server](#database-sqlserver)
* [Dedicated JDBC](#database-jdbc)

  To use a dedicated database, or to have more control over the database connection parameters, use the JDBC plan.

### Postgres {#database-postgres}

Postgres databases can be used with [static authentication](#database-postgres-static).

If the Postgres instance is an AWS RDS database, you can use [IAM authentication](#database-postgres-iam) for additional security.

If the Postgres instance is an Azure Postgres (Flexible Server) database, you can use [managed identity authentication](#database-postgres-azwi) for additional security.

#### Postgres (static credentials) {#database-postgres-static}

The Postgres database is an automated, on-demand database. The Postgres plan offers a good balance between automation, ease of use, and security. It is the most versatile and portable option for production-grade databases.
If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.
If your provider is AWS, [Postgres IAM authentication](#database-postgres-iam) can be used instead to increase security.
If your provider is Azure, [Postgres managed identity authentication](#database-postgres-azwi) can be used instead to increase security.

##### Prerequisites

* A Postgres server - for example, an RDS instance, or a Postgres server installed from a Helm chart
   {{% alert color="info" %}}
   A Postgres server (cluster) can host multiple databases. Each database can be isolated from one another, this way one Postgres server can be used by multiple independent apps.
   {{% /alert %}}
* A superuser account and its login database - in most cases, this would be the default `postgres` user and `postgres` database.
   {{% alert color="info" %}}
   To connect to a Postgres server, a login database is required. This database is not used - but is required, because Postgres needs a default login database to be specified.
   {{% /alert %}}

##### Environment Isolation

* Unique user (Postgres role) for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### Limitations

* Passwords can only be rotated manually.
* The Postgres server will be shared between environments, which could affect scalability.

##### Create Workflow 

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a database name, username (Postgres role) and password for the new environment.
* Create a new database in the provided Postgres server. This will be the environment's dedicated database.
* Create a new user (role) for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow 

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user (role).
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

##### Configuring a Postgres Plan

In the Postgres plan configuration, enter the following details:

* **Host** - Postgres server hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local`.
* **Port** - Postgres server port number; in most cases this should be set to `5432`.
* **Strict TLS** - specifies if the TLS should always be validated.

    * Enabling this option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the PostgreSQL server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.
    * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.

* **Database name** - login database for the admin/superuser; in most cases this is set to `postgres`.
* **Authentication** - select `static` from the dropdown.
* **Username** - username of the admin or superuser, used by the Mendix Operator to create or delete tenants for app environments; typically, this is set to `postgres`.
* **Password** - username of the admin or superuser; used by the Mendix Operator to create or delete tenants for app environments.

{{% alert color="info" %}}
To connect to an Azure PostgreSQL server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall. For the database name, use `postgres`.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Amazon RDS database, the VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

#### Postgres (IAM authentication){#database-postgres-iam}

The Postgres database is an automated, on-demand database. The Postgres plan offers a good balance between automation, ease of use, and security.
[IRSA authentication](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) removes static passwords and instead uses IAM roles for authentication.

{{% alert color="info" %}}
This section provides technical details on how IAM authentication works with Postgres. If you just need instructions to get started, the [AWS IAM-based storage walkthrough](#walkthrough-aws-irsa) provides a quick start guide to set the Mendix Operator to manage an RDS database and S3 bucket.
{{% /alert %}}

{{% alert color="info" %}}
When dealing with an Aurora PostgreSQL database, an additional procedural step is required. To employ IAM authentication in conjunction with PostgreSQL, establish a connection to the designated database instance by using either the master user or an alternative user with admin privileges. Once the connection is established, assign the `rds_iam` role to the user, as shown in the following example:

```shell
GRANT rds_iam TO db_userx;
```

{{% /alert %}}

##### Prerequisites

* An RDS Postgres server with IAM authentication enabled
   {{% alert color="info" %}}
   A Postgres server (cluster) can host multiple databases. Each database can be isolated from one another, this way one Postgres server can be used by multiple independent apps.
   {{% /alert %}}
* A superuser account and its login database - in most cases, this would be the default `postgres` user and `postgres` database.
   {{% alert color="info" %}}
   To connect to a Postgres server, a login database is required. This database is not used - but is required, because Postgres needs a default login database to be specified.
   {{% /alert %}}
* A *Postgres Admin* IAM role with permissions to access the database, with the following inline policy (replace `<aws_region>` with the database's region, `<account_id>` with your AWS account number, `<database_id>` with the RDS database instance identifier and `<database_user>` with the Postgres superuser account name):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "AllowCreateTenants",
                "Action": [
                    "rds-db:connect"
                ],
                "Resource": [
                    "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/<database_user>"
                ]
            }
        ]
    }
    ```

    {{% alert color="info" %}}The `<database_id>` parameter is not the database name (or ARN), but the uniquely generated AWS resource ID.
    For more information and instructions how to write this policy, see the [IAM policy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html) document. In the case of Aurora DB, ensure that the `database_id` is from the cluster and not the instance.{{% /alert %}}

* An IAM-based S3 blob storage plan.
   
   {{% alert color="info" %}}
   For IAM authentication to work, every app environment relies on an IAM role and Kubernetes Service Account to authenticate with the database.
   Since an app environment can only have one IAM role and Service Account, these will be managed by the S3 blob storage plan instead.
   The Postgres provisioner will only create a Postgres user, but not manage any credentials.
   {{% /alert %}}

##### Environment Isolation

* Unique user (Postgres role) for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### Limitations

* The Postgres server will be shared between environments, which could affect scalability.
* To use this feature, your app needs to be upgraded to Mendix 9.22 (or later), and your namespace needs to use Mendix Operator version 2.12.0 (or later).

##### Create Workflow 

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a database name and username (Postgres role) for the new environment.
* Create a new database in the provided Postgres server. This will be the environment's dedicated database.
* Create a new user (Postgres role) for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.
   Since the app environment will authenticate through an IAM role, this secret will not contain any static passwords - only the database hostname, username and other non-sensitive connection details.

##### Delete Workflow 

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user (role).
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

##### Configuring a Postgres Plan

In the Postgres plan configuration, enter the following details:

* **Host** - Postgres server hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local`.
* **Port** - Postgres server port number; in most cases this should be set to `5432`.
* **Strict TLS** - specifies if the TLS should always be validated.
    * Enabling this option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the PostgreSQL server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.
    * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
* **Database name** - login database for the admin/superuser; in most cases this is set to `postgres`.
* **Authentication** - select `aws-iam` from the dropdown.
* **Username** - username of the admin or superuser, used by the Mendix Operator to create or delete tenants for app environments; typically, this is set to `postgres`.
* **IAM Role ARN** - the *Postgres Admin* IAM role ARN.
    * Mendix recommends using the same IAM role to manage Postgres databases and S3 buckets, as this would be easier to set up and maintain.
* **K8s Service Account** - the Kubernetes Service Account to create and attach to the IAM role.
  {{% alert color="warning" %}}
  Do not use the name of an existing Service Account (environment name), or one of the reserved Kubernetes Service Account names:
    * `mendix-operator`
    * `mendix-agent`
    * `mendix-storage-provisioner`
  {{% /alert %}}

{{% alert color="info" %}}
To connect to an Amazon RDS database, the VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

AWS IRSA allows a Kubernetes Service Account to assume an IAM role. For this to work correctly, the IAM role's trust policy needs to trust the Kubernetes Service Account:

1. Open the role for editing and add an entry for the ServiceAccount (or ServiceAccounts) to the list of conditions:

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

    {{% alert color="info" %}}For Global Operator installations, you must specify the managed namespace in the **Namespace** field.{{% /alert %}}    

2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`.

    See [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough) for more details.

    The role ARN is required, you can use the **Copy** button next to the ARN name in the role details.

#### Postgres (Azure managed identity authentication){#database-postgres-azwi}

The Postgres database is an automated, on-demand database. The Postgres plan offers a good balance between automation, ease of use, and security.
[Managed identity authentication](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-connect-with-managed-identity) removes static passwords and instead uses IAM roles for authentication.

This section provides technical details on how managed identity authentication works with Postgres. If you just need instructions to get started, the [Azure Managed Identity-based storage walkthrough](#walkthrough-azure-azwi) provides a quick start guide to set the Mendix Operator to manage a Postgres database, SQL Server and Blob Storage account using managed identity authentication.

##### Prerequisites

* An Azure Postgres (Flexible Server) with Entra authentication enabled
 
{{% alert color="info" %}}
A Postgres server (cluster) can host multiple databases. Each database can be isolated from one another, this way one Postgres server can be used by multiple independent apps.
{{% /alert %}}

* A *Postgres Admin* managed identity that the Mendix Operator would use to create/delete databases and managed identities for app environments.
  This managed identity needs the following permissions:
    * Entra Admin permissions in the Postgres database;
    * A [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

##### Environment Isolation

* Unique user (Postgres role) for every environment.
* Unique managed identity for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### Limitations

* The Postgres server will be shared between environments, which could affect scalability.
* To use this feature, your app needs to be upgraded to Mendix 9.22 (or later), and your namespace needs to use Mendix Operator version 2.17.0 (or later).

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Managed Identity for an environment. This Managed Identity will be created in the same resource group, subscription and region as the *Postgres Admin* managed identity.
* Create a Kubernetes Service Account and attach it to the environment's Managed Identity. This Service Account acts as a replacement for static credentials, and can also be used to authenticate with Azure Postgres databases.
* Generate a database name and username (Postgres role) for the new environment.
* Create a new database in the provided Postgres server. This will be the environment's dedicated database.
* Create a new user (Postgres role) for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Link the environment's Postgres user (role) with the environment's Managed Identity by [adding a security label](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-manage-azure-ad-users#enable-microsoft-entra-authentication-for-an-existing-postgresql-role-using-sql) to the Postgres user (role).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.
   Since the app environment will authenticate through a managed identity role, this secret will not contain any static passwords - only the database hostname, username and other non-sensitive connection details.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user (role).
* Delete that environment's database.
* Delete that environment's Managed Identity.
* Delete that environment's Kubernetes Service Account.
* Delete that environment's Kubernetes database credentials secret.

##### Configuring a Postgres Plan

In the Postgres plan configuration, enter the following details:

* **Host** - Postgres server hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local`.
* **Port** - Postgres server port number; in most cases this should be set to `5432`.
* **Strict TLS** - Set to **yes**, as Azure Postgres supports TLS without any extra configuration.
* **Database name** - login database for the *Postgres Admin* managed identity; in most cases this is set to `postgres`.
* **Authentication** - select `azure-wi` from the dropdown.
* **Managed Identity Name** - name for the *Postgres Admin* managed identity, used by the Mendix Operator to create or delete tenants for app environments.
* **Managed Identity Client ID** - the *Postgres Admin* managed identity Client ID.
    * Mendix recommends using the same *storage admin* managed identity to manage Azure databases and blob storage containers, as this would be easier to set up and maintain. One *storage admin* Service Account can be used for multiple storage plans, and only one Federated Credential would be needed to link it with a *storage admin* Managed Identity.
* **K8s Service Account** - the Kubernetes Service Account to create and attach to the *Postgres Admin* managed identity (will be created automatically by the `mxpc-cli` installation and configuration tool).

{{% alert color="warning" %}}
Do not use the name of an existing Service Account (environment name), or one of the reserved Kubernetes Service Account names:
    
* `mendix-operator`
* `mendix-agent`
* `mendix-storage-provisioner`

{{% /alert %}}

{{% alert color="info" %}}
To connect to an Azure Postgres database, the firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

Azure workload identities allow a Kubernetes Service Account to authenticate itself as a specific Managed Identity. For this to work correctly, add a Federated Credential to the *Postgres Admin* managed identity:

1. Enable managed identities for your AKS cluster as [described in the Azure documentation](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). This only need to be done once per cluster.

    Ensure that you have the [Cluster OIDC Issuer URL](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). You will need the URL to complete the configuration.

2. Add a **Federated Credential** to the **Managed identity** by using [az identity federated-credential create](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#establish-federated-identity-credential) command, or going to the **Federated credentials** tab and using the **Add Credential** wizard. This will allow the *Postgres Admin* Kubernetes Service Account to be associated with its **Managed identity**.

3. Fill in the following details:

    * **Federated credential scenario** - Kubernetes accessing Azure resources
    * **Cluster Issuer URL** - the Cluster OIDC URL from step 1
    * **Namespace** - the Kubernetes namespace where the Operator is installed; for Global Operator installations, you must specify the managed namespace in the **Namespace** field.
    * **Service Account** - the **K8s Service Account** specified in the Postgres plan configuration
    * **Name** - any value

4. Assign this *Postgres Admin* Managed Identity a [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

5. Add this *Postgres Admin* Managed Identity as an Entra Admin in the Postgres database.

### Ephemeral {#database-ephemeral}

Ephemeral databases are basic, on-demand databases. Ephemeral databases are the simplest option to implement. The Ephemeral plan will enable you to quickly set up your environment and deploy your app, but any data you store in the database will be lost when you restart your environment.

#### Prerequisites

None.

#### Limitations

* Data is lost when the app pod is restarted.
* It is not possible to run more than one replica of an app.

#### Environment Isolation

* Each environment (Kubernetes pod) stores its data in memory.
* An environment cannot access data from other environments.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment and specify that the app should use a local in-memory database.

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes database credentials secret.

### SQL Server {#database-sqlserver}

SQL Server databases can be used with [static authentication](#database-sqlserver-static).
If the SQL Server instance is an Azure SQL database, you can use [managed identity authentication](#database-sqlserver-azwi) for additional security.

#### SQL Server (static credentials){#database-sqlserver-static}

SQL server databases are automated, on-demand databases. The **SQL Server** plan offers a good balance between automation, ease of use, and security when using Microsoft SQL Server or Azure SQL. If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

If your app is using Mendix 10.10 (or a later version) consider using the [Azure managed identity authentication](#database-sqlserver-azwi) instead, for additional security.

##### Prerequisites

* An SQL Server server - for example, an Azure SQL server, or a SQL Server installed from a Helm chart.

   {{% alert color="info" %}}
   An SQL server can host multiple databases. Each database can be isolated from one another - in this way, one SQL Server can be used by multiple independent apps.
   {{% /alert %}}
   
* An admin user account.

##### Limitations

* Passwords can only be rotated manually.
* A standalone SQL Server will be shared between environments, which could affect scalability. Azure SQL allows more flexibility, and is much better at scaling - each database can have reserved capacity and does not affect performance of other databases on the same server.
* NetBIOS names are not supported. It is only possible to connect using the server's FQDN.
* Only username/password authentication is supported at the moment.

##### Environment Isolation

* Unique user, login for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a database name, username and password for the new environment.
* Create a new database in the provided SQL Server server. This will be the environment's dedicated database.
* Create a new user and login for the new environment, and allow this user to access only the new environment's database. This will be the environment's user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's user and login.
* Delete that environment's database.
* Delete that environment's Kubernetes database credentials secret.

##### Configuring an SQL Server Plan

In the SQL Server plan configuration, enter the following details:

* **Host** - SQL Server (Azure SQL) server hostname, for example `my-database.database.windows.net`
* **Port** - SQL Server (Azure SQL) server port number, in most cases this should be set to `1433`.
* **Strict TLS** - Specifies if TLS should always be validated.
    * Enabling this option will enable full TLS certificate validation and require encryption when connecting to SQL Server. If the SQL Server server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted. Azure SQL supports Strict TLS without any extra TLS configuration - no additional *custom TLS* configuration is required.
    * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
* **Authentication** - select `static` from the dropdown.
* **Username** - Username for the admin user, used by the Mendix Operator to create or delete tenants for app environments.
* **Password** - Password for the admin user, used by the Mendix Operator to create or delete tenants for app environments.
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

#### SQL Server (Azure managed identity authentication){#database-sqlserver-azwi}

SQL server databases are automated, on-demand databases. The **SQL Server** plan offers a good balance between automation, ease of use, and security when using Microsoft SQL Server or Azure SQL. If you would like to have more control over database configuration, consider using the [JDBC plan](#database-jdbc) instead.

{{% alert color="info" %}}
This section provides technical details on how managed identity authentication works with Azure SQL. If you just need instructions to get started, the [Azure managed Identity-based storage walkthrough](#walkthrough-azure-azwi) provides a quick start guide to set the Mendix Operator to manage a Postgres database, SQL Server and Blob Storage account using managed identity authentication.
{{% /alert %}}

##### Prerequisites

* An Azure SQL Server with Entra authentication enabled.

   {{% alert color="info" %}}
   An SQL server can host multiple databases. Each database can be isolated from one another - in this way, one SQL Server can be used by multiple independent apps.
   {{% /alert %}}

* A *SQL Admin* managed identity that the Mendix Operator would use to create/delete databases and managed identities for app environments.
  This managed identity needs the following permissions:
    * Permissions to authenticate with Azure SQL using its managed identity;
    * A `dbmanager` role in the master database;
    * A [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

##### Limitations

* To use this feature, your app needs to be upgraded to Mendix 10.10 (or later), and your namespace needs to use Mendix Operator version 2.17.0 (or later).

##### Environment Isolation

* Unique user for every environment.
* Unique managed identity for every environment.
* Unique database for every environment.
* Environment has full access only to its own database, cannot access data from other environments.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Managed Identity for an environment. This Managed Identity will be created in the same resource group, subscription and region as the *SQL Admin* managed identity.
* Create a Kubernetes Service Account and attach it to the environment's Managed Identity. This Service Account acts as a replacement for static credentials, and can also be used to authenticate with Azure SQL databases.
* Generate a database name for the new environment.
* Create a new database in the provided SQL Server server. This will be the environment's dedicated database.
* Generate a username for the new environment.
* Create a new contained database user for the new environment. This will be the environment's user, which only exists in the environment's database. This user will be [linked with the environment's Managed Identity](https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?view=azuresql&tabs=azure-powershell#create-contained-users-mapped-to-microsoft-entra-identities).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.
   Since the app environment will authenticate through a managed identity role, this secret will not contain any static passwords - only the database hostname, username and other non-sensitive connection details.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's database (which also deletes the contained database user).
* Delete that environment's Managed Identity.
* Delete that environment's Kubernetes Service Account.
* Delete that environment's Kubernetes database credentials secret.

##### Configuring an SQL Server Plan

In the SQL Server plan configuration, enter the following details:

* **Host** - SQL Server (Azure SQL) server hostname, for example `my-database.database.windows.net`
* **Port** - SQL Server (Azure SQL) server port number, in most cases this should be set to `1433`.
* **Strict TLS** - Set to **yes**, as Azure SQL supports TLS without any extra configuration.
    * Enabling this option will enable full TLS certificate validation and require encryption when connecting to SQL Server. If the SQL Server server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted. Azure SQL supports Strict TLS without any extra TLS configuration - no additional *custom TLS* configuration is required.
    * Disabling this option will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
* **Authentication** - select `azure-wi` from the dropdown.
* **Managed Identity Client ID** - the *SQL Admin* managed identity Client ID.
    * Mendix recommends using the same *storage admin* managed identity to manage Azure databases and blob storage containers, as this would be easier to set up and maintain. One *storage admin* Service Account can be used for multiple storage plans, and only one Federated Credential would be needed to link it with a *storage admin* Managed Identity.
* **K8s Service Account** - the Kubernetes Service Account to create and attach to the *SQL Admin* managed identity (will be created automatically by the `mxpc-cli` installation and configuration tool).

{{% alert color="warning" %}}
Do not use the name of an existing Service Account (environment name), or one of the reserved Kubernetes Service Account names:
    
* `mendix-operator`
* `mendix-agent`
* `mendix-storage-provisioner`

{{% /alert %}}

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

Azure workload identities allow a Kubernetes Service Account to authenticate itself as a specific Managed Identity. For this to work correctly, add a Federated Credential to the *SQL Admin* managed identity:

1. Enable managed identities for your AKS cluster as [described in the Azure documentation](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). This only need to be done once per cluster.

    Ensure that you have the [Cluster OIDC Issuer URL](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). You will need the URL to complete the configuration.

2. Add a **Federated Credential** to the **Managed identity** by using [az identity federated-credential create](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#establish-federated-identity-credential) command, or going to the **Federated credentials** tab and using the **Add Credential** wizard. This will allow the *SQL Admin* Kubernetes Service Account to be associated with its **Managed identity**.

3. Fill in the following details:

    * **Federated credential scenario** - Kubernetes accessing Azure resources
    * **Cluster Issuer URL** - the Cluster OIDC URL from step 1
    * **Namespace** - the Kubernetes namespace where the Operator is installed; for Global Operator installations, you must specify the managed namespace in the **Namespace** field.
    * **Service Account** - the **K8s Service Account** specified in the SQL Server plan configuration
    * **Name** - any value

4. Assign this *SQL Admin* Managed Identity a [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

5. Open a Bash-compatible shell (or Azure Console in Bash mode), and run the following command to connect to the Azure SQL master database using [sqlcmd managed identity authentication](https://learn.microsoft.com/en-us/sql/connect/odbc/linux-mac/connecting-with-sqlcmd?view=sql-server-ver16), replacing `<hostname>` with the SQL Server server hostname (e.g. `example.database.windows.net`):

   ```shell
   az account get-access-token --resource https://database.windows.net --output tsv | cut -f 1 | tr -d '\n' | iconv -f ascii -t UTF-16LE > /tmp/token && sqlcmd -S <hostname> -G -P /tmp/token && rm /tmp/token
   ```

6. In the sqlcmd client, run the following commands (replace `<sql-admin-managed-identity>` with the *SQL Admin* Managed Identity name):

   ```sql
   CREATE USER [<sql-admin-identity-name>] FROM EXTERNAL PROVIDER;
   GO
   ALTER ROLE dbmanager ADD MEMBER [<sql-admin-identity-name>];
   GO
   quit
   ```

### Dedicated JDBC {#database-jdbc}

JDBC databases are dedicated, basic databases. The **Dedicated JDBC** plan enables you to enter the [database configuration parameters](/refguide/custom-settings/) for an existing database directly, as supported by the Mendix Runtime. This plan allows to configure and use any database supported by the Mendix Runtime, including Oracle.

#### Prerequisites

* A database server, for example Postgres or Oracle.
* A database in the database server - the database that should be used by the Mendix app environment.
* An user account that has permissions to access the database - the account that should be used by the Mendix app environment.

#### Limitations

* Passwords can only be rotated manually.
* A dedicated JDBC database cannot be used by more than one Mendix app.
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear stuck with **Replicas running** and **Runtime** showing a spinner.

#### Environment Isolation

* Database plan can only be used by one environment at a time.
* Other environments will not be able to use the database plan if it's already in use.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes database credentials secret.

#### Configuring a Dedicated JDBC Plan

In the Dedicated JDBC plan configuration, enter the following details:

* **Database type** - The database type, one of the supported [DatabaseType](/refguide/custom-settings/#DatabaseType) values such as `PostgreSQL`.
* **Host** - The database hostname, for example `postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432` - specifies the value of [DatabaseHost](/refguide/custom-settings/#DatabaseType).
* **Database name** - The name of the database or schema used by the Mendix app, for example `postgres` - specifies the value of [DatabaseName](/refguide/custom-settings/#DatabaseName).
* **JDBC URL** - The JDBC URL used to connect to the database, for example `jdbc:postgresql://postgres-shared-postgresql.privatecloud-storage.svc.cluster.local:5432/myappdb?sslmode=prefer`.
* **User** - Specifies the username to be used by the Mendix app environment to connect to the database.
* **Password** - Specifies the password for **Username**.

## Blob File Storage Plans {#blob-storage}

{{% alert color="info" %}}
In this document, *storage plan* means a general database or blob file bucket - an external server that can store data (entities in a database, or contents of `System.FileDocument` entities in a blob storage bucket). To be as specific as possible, this document refers to file storage buckets as *blob file storage buckets*, and to their associated storage plans as *blob file storage plans*. To save screen space, the `mxpc-cli` Configuration Tool calls them *Storage Plans*.
{{% /alert %}}

{{% alert color="info" %}}
The **Prevent Data Deletion** option switches the bucket into immutable mode:

* When a `System.FileDocument` entity is removed, its actual file will remain in the storage bucket.
* When a `System.FileDocument` entity is modified, a new blob file will be uploaded into the storage bucket.
* When an environment is deleted, its files will not be cleaned up (deleted) from the storage bucket.

This can increase storage costs, but in exchange removes the need to run file backups. To roll back an app environment to an earlier stage, only the database needs to be rolled back. All files referenced by that database snapshot are already available in the blob storage bucket.

If **Prevent Data Deletion** is enabled, you can remove `s3:DeleteObject` and `s3:DeleteBucket` permissions from example IAM policies.
{{% /alert %}}

The following **Blob File Storage Types** are supported:

* [MinIO](#blob-minio) - Easiest option to use for a cloud vendor-agnostic solution, if the MinIO server license terms are acceptable
* [Ephemeral (non-persistent)](#blob-ephemeral) - Simplest option; the contents of `System.FileDocument` will only be stored locally in a pod and will be lost when a pod is restarted
* [Amazon S3](#blob-s3) - Solution hosted by Amazon S3
* [Azure Blob Storage](#blob-azure) - Solution hosted by Azure Blob Storage
* [Google Cloud Storage](#blob-gcp-storage-bucket) - Solution hosted by Google Cloud Storage
* [Ceph RADOS](#blob-ceph) - Allows the use of a pre-created bucket from an S3-compatible vendor. This option also works with other S3-compatible storage options (not listed in this document)

### MinIO {#blob-minio}

[MinIO](https://min.io/product/overview) is an automated, on-demand S3-compatible object storage. The **MinIO** plan offers a good balance between automation, ease of use and security, and doesn't depend on any cloud vendors. 

#### Prerequisites

* A MinIO server - for example, installed from a Helm chart or using the official MinIO Kubernetes Operator.

   {{% alert color="warning" %}}
   MinIO [changed the license](https://blog.min.io/from-open-source-to-free-and-open-source-minio-is-now-fully-licensed-under-gnu-agplv3/) from Apache License 2.0 to GNU AGPLv3.
   This means that for use in most production environments, MinIO needs a licensed subscription.
   {{% /alert %}}
   
* An admin user account - with permissions to create/delete users, policies and buckets.

#### Limitations

* Access and Secret keys used by existing environments can only be rotated manually.
* The MinIO server needs to be a full-featured MinIO server, or a [MinIO Gateway](https://github.com/MinIO/MinIO/tree/master/docs/gateway) with configured `etcd`. MinIO Gateway without `etcd` can only have one user, and won't support environment isolation.

#### Environment Isolation

* Every environment has its own IAM user.
* An environment can only access its own blob file storage bucket.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a bucket name and an IAM username for the new environment.
* Create a new IAM user for the new environment.
* Create a new policy that allows the environment's user to access the environment's bucket.
* Attach this new policy to the new environment's user.
* Create a new bucket for the new environment.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete that environment's bucket and its contents.
* Delete that environment's IAM user.
* Delete that environment's policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

{{% alert color="info" %}}
To use TLS, specify the MinIO URL with an `https` schema, for example `https://minio.local:9000`. If MinIO has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.

If the MinIO URL is specified with an `http` schema, TLS will not be used.
{{% /alert %}}

#### Configuring a MinIO Plan

In the MinIO plan configuration, enter the following details:

* **Endpoint** is the MinIO server API endpoint, for example `http://minio-shared.privatecloud-storage.svc.cluster.local:9000`
    * To use TLS, change `http` to `https`. If the MinIO server has a self-signed certificate, you will also need to configure custom TLS so that the self-signed certificate is accepted.
* **Access Key** is the admin user account access key (username), used by Mendix Operator to create tenants for new environments.
* **Secret Key** is the admin user account secret key (password), used by Mendix Operator to create tenants for new environments.

### Ephemeral {#blob-ephemeral}

The **Ephemeral** plan is a basic, on-demand way to quickly set up your environment and deploy your app, but any data objects you store will be lost when you restart your environment.

#### Prerequisites

* None.

#### Limitations

* Data is lost when the app pod is restarted.
* If an app has more than one replica, behavior can be unpredictable unless the ingress controller has session affinity.

#### Environment Isolation

* Each environment (Kubernetes pod) stores its data in the local filesystem.
* An environment cannot access data from other environments.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment and specify that the app should use the default file storage option (local files in a pod).

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

### Amazon S3 {#blob-s3}

Mendix for Private Cloud provides a variety of options for storing files in Amazon S3. Each option uses its own approach to isolation between environments, and to attaching a bucket (and IAM user/policy) to a new environment.

If you would like to have Mendix Operator with automation, and have full isolation between environments, use the [Create account with existing policy](#s3-create-account-existing-policy) option. This option works with the least possible AWS privileges.
For apps using Mendix 9.22 (or a later version), the [IRSA Mode](#s3-irsa-mode) option provides the same features and additional security.

If you would like to simply share a bucket between environments, or to manually create a bucket and account per environment, use the [existing bucket and account](#s3-existing-bucket-account) option.

{{% alert color="info" %}}
Although we offer additional flexibility and provide other options, Mendix recommends using one of the options listed above.
{{% /alert %}}

#### Create Account with Existing Policy {#s3-create-account-existing-policy}

This automated, on-demand option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.

If your app is using Mendix 9.22 (or a later version) consider using the [IRSA Mode](#s3-irsa-mode) instead, for additional security.

##### Prerequisites

* An existing S3 bucket
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

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.

##### Environment Isolation

* Every environment has its own IAM user.
* The S3 bucket is shared. 
    * The environment template policy uses the IAM username as a template, so that a user can only access a certain prefix (path or directory) in the bucket.
    * In practice, this means that any environment can only access files if those files' prefix matches the environment's IAM username.
    * An environment cannot access files from other environments.
* The Mendix Operator does not need permissions to create new policies, only to attach a manually created policy.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username.
* Create the new IAM user and attach the existing environment template policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment and to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if the **Prevent Data Deletion** is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **no**.
* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - Set to **yes**.
* **Attach policy ARN** - The environment template policy ARN; this is the existing policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** credentials for the admin user account - Used to create or delete environment IAM users.

#### IRSA mode{#s3-irsa-mode}

This automated, on-demand option allows to share an existing bucket between environments, and isolates environments from accessing each other's data.
It's similar to the [Create account with existing policy](#s3-create-account-existing-policy) option, but instead of static credentials, uses IAM roles for authentication.

{{% alert color="info" %}}
This section provides technical details how IAM authentication works with S3.
If you just need instructions how to get started, the [AWS IAM-based storage walkthrough](#walkthrough-aws-irsa) provides a quick start guide - to set the Mendix Operator to manage an RDS database and S3 bucket.
{{% /alert %}}

##### Prerequisites

* An existing S3 bucket
* An environment template policy which will be attached to every new environment's user; the policy allows access to the S3 bucket and RDS database, as in the following example (replace `<bucket_name>` with the S3 bucket name, `<aws_region>` with the database's region, `<account_id>` with your AWS account number, `<database_id>` with the RDS database instance identifier and `<database_user>` with the Postgres superuser account name):

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
                            "${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}/*",
                            "${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}"
                        ]
                    }
                }
            },
            {
                "Sid": "AllowAllS3ActionsInUserFolder",
                "Effect": "Allow",
                "Resource": [
                    "arn:aws:s3:::<bucket_name>/${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}/*"
                ],
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:DeleteObject",
                    "s3:GetObject",
                    "s3:ListMultipartUploadParts",
                    "s3:PutObject"
                ]
            },
            {
                "Sid": "AllowConnectionToDatabase",
                "Effect": "Allow",
                "Action": "rds-db:connect",
                "Resource": "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/${aws:PrincipalTag/privatecloud.mendix.com/database-user}"
            }
        ]
    }
    ```

    {{% alert color="info" %}}The `AllowConnectionToDatabase` statement is optional and is only needed when using a Postgres database with IAM authentication.
    All permissions to an app's environment will be granted through by the S3 provisioner, through this environment template policy.{{% /alert %}}

    {{% alert color="info" %}}If an environment needs additional permissions (for example, to access KMS keys), they can be added to this policy as well.{{% /alert %}}

* An admin user role - with the following policy (replace `<account_id>` with your AWS account number, and `<policy_arn>` with the environment template policy ARN, `<aws_region>` with the database's region, `<account_id>` with your AWS account number, `<database_id>` with the RDS database instance identifier and `<database_user>` with the Postgres superuser account name):

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "LimitedAttachmentPermissions",
                "Effect": "Allow",
                "Action": [
                    "iam:AttachRolePolicy",
                    "iam:DetachRolePolicy"
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
                "Sid": "ManageRoles",
                "Effect": "Allow",
                "Action": [
                    "iam:CreateRole",
                    "iam:TagRole",
                    "iam:DeleteRole"
                ],
                "Resource": [
                    "arn:aws:iam::<account_id>:role/mendix-*"
                ]
            },
            {
                "Sid": "AllowFileCleanup",
                "Effect": "Allow",
                "Resource": [
                    "arn:aws:s3:::<bucket_name>"
                ],
                "Action": [
                    "s3:AbortMultipartUpload",
                    "s3:DeleteObject",
                    "s3:GetObject",
                    "s3:ListMultipartUploadParts",
                    "s3:PutObject",
                    "s3:ListBucket"
                ]
            },
            {
                "Sid": "AllowCreateRDSTenants",
                "Effect": "Allow",
                "Action": [
                    "rds-db:connect"
                ],
                "Resource": [
                    "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/<database_user>"
                ]
            }
        ]
    }
    ```

    {{% alert color="info" %}}The `AllowFileCleanup` statement is optional and is only needed if the **Prevent file deletion** option is not enabled.
    This allows the Mendix Operator to delete an environment's files when that environment is deleted.{{% /alert %}}

    {{% alert color="info" %}}The `AllowCreateRDSTenants` statement is optional, and is only needed if the admin role will be shared by the Postgres and S3 provisioners.
    For more information on Postgres IAM authentication, see the [Postgres (IAM authentication)](#database-postgres-iam) plan.{{% /alert %}}

##### Limitations

* To use this feature, your app needs to be upgraded to Mendix 9.22 (or later), and your namespace needs to use Mendix Operator version 2.12.0 (or later).

##### Environment Isolation

* Every environment has its own IAM role and associated Kubernetes Service Account.
* The S3 bucket is shared. 
    * The environment template policy uses the IAM role tags as a template, so that a user can only access a certain prefix (path or directory) in the bucket.
    * In practice, this means that any environment can only access files if those files' prefix matches the environment's IAM role tags.
    * An environment cannot access files from other environments.
* The Mendix Operator does not need permissions to create new policies, only to attach a manually created policy.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a new IAM role (the *environment role*).
* Add `privatecloud.mendix.com/s3-prefix` and `privatecloud.mendix.com/database-user` tags to the *environment role*. These tags will be used as values in IAM policies, and can be used to limit which S3 bucket prefix the environment can access. Modifying or removing these tags will change the environment's permissions.
* Create a Kubernetes Service Account and attach it to the *environment role*. This Service Account acts as a replacement for AWS access/secret keys, and can also be used to authenticate with RDS Postgres databases.
* Create a Kubernetes secret to provide connection details to the new app environment and to automatically configure the new environment.
   Since the app environment will authenticate through an IAM role, this secret will not contain any static passwords - only non-sensitive connection details such as the bucket endpoint and prefix.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if the **Prevent Data Deletion** is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM role.
* Delete that environment's Kubernetes Kubernetes Service Account.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **yes**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Attach policy ARN** - The environment template policy ARN; this is the existing policy that will be attached to every environment's IAM role.
* **EKS OIDC URL** - The OIDC URL of the EKS cluster; in most cases, the OIDC provider is [created automatically](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html), and its URL can be found in the AWS Management Console.
* **IAM Role ARN** - the admin user role ARN.
    * Mendix recommends using the same IAM role to manage Postgres databases and S3 buckets, as this would be easier to set up and maintain.
* **K8s Service Account** - the Kubernetes Service Account to create and attach to the IAM role.

  {{% alert color="warning" %}}
  Do not use the name of an existing Service Account (environment name), or one of the reserved Kubernetes Service Account names:
    * `mendix-operator`
    * `mendix-agent`
    * `mendix-storage-provisioner`
  {{% /alert %}}

AWS IRSA allows a Kubernetes Service Account to assume an IAM role. For this to work correctly, the IAM role's trust policy needs to trust the Kubernetes Service Account:

1. Open the role for editing and add an entry for the ServiceAccount (or ServiceAccounts) to the list of conditions:

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`.

    {{% alert color="info" %}}
    For Global Operator installations, you must specify the managed namespace in the **Namespace** field. For more information, see [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough).
    The role ARN is required. You can use the **Copy** button next to the ARN name in the role details.
    {{% /alert %}}  

#### Existing bucket and account {#s3-existing-bucket-account}

This basic, on-demand option allows you to attach an existing S3 bucket and IAM account credentials (access and secret keys) to one or more environments. All apps (environments) will use the same S3 bucket and an IAM user account.

##### Prerequisites

* An existing S3 bucket
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

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the **Share bucket between environments** option is checked).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to be stuck with **Replicas running** and **Runtime** showing a spinner.
* To configure the **Autogenerate Prefix** option you need Mendix Operator version 2.7.0 or above. See [Upgrading Private Cloud](/developerportal/deploy/private-cloud-upgrade-guide/) for instructions on upgrading the Mendix Operator.

##### Environment Isolation

* The S3 bucket and IAM credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By unchecking the **Share bucket between environments** option, this plan switches into **Dedicated** mode - so that only one environment can use it.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* (Optional, if **Autogenerate Prefix** is checked) - generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **no**.
* **Create bucket per environment** - Set to **no**.
* **Create account (IAM user) per environment** - Set to **no**.
* **Endpoint** - The S3 bucket's endpoint address, for example `https://mendix-apps-production-example.s3.eu-west-1.amazonaws.com`.
* **Access Key** and **Secret Key** - The credentials for the environment user account.
* **Autogenerate prefix** - Can be used to specify if the Mendix Operator should generate a unique bucket prefix (folder) for each environment, or to use a fixed, predefined prefix. If you want a new environment to reuse/inherit data from an existing environment, you can deselect the Autogenerate Prefix and provide the existing prefix you want to use.
* **Share bucket between environments** - Specifies is the bucket can be shared between environments (create an on-demand storage plan); if unchecked, the bucket can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, do not enable this option.

{{% alert color="info" %}}
Be sure to follow the naming guidelines for prefixes as described in the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html).
{{% /alert %}}

#### Create Bucket and Account with Inline Policy {#s3-create-bucket-account-inline-policy}

This automated, on-demand option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We do not recommend using this option, as it is not possible to customize the bucket settings (encryption or default file access). In addition, this option needs admin-like IAM permissions to create inline policies - which might not be acceptable in regulated environments. This option is primarily here for historical reasons.

Instead, Mendix recommends using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### Prerequisites

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

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how an S3 bucket is created (for example, encryption or default file access).
* It is not possible to customize how the inline IAM policy is created.

##### Environment Isolation

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user and inline policy.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **no**.
* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - Set to **yes**.
* **Access Key** and **Secret Key** - Credentials for the admin user account, used to create or delete environment buckets and IAM users.

#### Create Bucket and Account with Existing Policy {#s3-create-bucket-account-existing-policy}

This automated, on-demand option will create an S3 bucket and IAM account for every new environment.

{{% alert color="warning" %}}
We do not recommend using this option, as it is not possible to customize the bucket settings (encryption or default file access). This option is primarily available for historical reasons.

Instead, Mendix recommends using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### Prerequisites

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

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how an S3 bucket is created (for example, encryption or default file access).

##### Environment Isolation

* Every environment has its own IAM user.
* Every environment has its own S3 bucket, which can only be accessed by that environment's IAM user.
    * The environment template policy uses the IAM username as a template - so that a user can only access an S3 bucket that matches the IAM username.
* The Mendix Operator does not need permissions to create IAM policies.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username and S3 bucket name for the environment.
* Create a new S3 bucket for the environment.
* Create the new IAM user and attach the *environment template* policy to this user.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete the environment's bucket and all of its contents.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **no**.
* **Create bucket per environment** - Set to **yes**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The region where buckets will be created, for example `eu-west-1`.
* **Create inline policy** - Set to **no**.
* **Attach policy ARN** - The environment template policy ARN; this is the policy that will be attached to every environment's user.
* **Access Key** and **Secret Key** - The credentials for the admin user account, used to create or delete environment buckets and IAM users.

#### Create account with inline policy {#s3-create-account-inline-policy}

This automated, on-demand option allows the sharing of an existing bucket between environments, and isolates environments from accessing each other's data.

{{% alert color="warning" %}}
We do not recommend using this option, as it needs admin-like IAM permissions to create inline policies, which might not be acceptable in regulated environments. This option is primarily available for historical reasons.

Instead, Mendix recommends using the [Create account with existing policy](#s3-create-account-existing-policy) option if you need automation.
{{% /alert %}}

##### Prerequisites

* An existing S3 bucket
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

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* It is not possible to customize how the inline IAM policy is created.

##### Environment Isolation

* Every environment has its own IAM user.
* The S3 bucket is shared. 
    * The Mendix Operator will generate an IAM policy for every user that only allows access to files in a specific prefix (directory) in the bucket.
    * An environment cannot access files from other environments.
* The Mendix Operator does no need permissions to create new buckets, only to create IAM users and inline policies.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a new IAM username.
* Create the new IAM user with an inline policy - allowing that user to access the environment's S3 bucket.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* (Only if **Prevent Data Deletion** is not enabled) Delete files from that environment's prefix (directory). Files from other apps (in other prefixes/directories) will not be affected.
* Delete that environment's IAM user.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Amazon S3 plan configuration, enter the following details:

* **IRSA Authentication** - Set to **no**.
* **Create bucket per environment** - Set to **no**.
* **Create account (IAM user) per environment** - Set to **yes**.
* **Bucket region** - The existing shared bucket's region, for example `eu-west-1`.
* **Bucket name** - The existing shared bucket's name, for example `mendix-apps-production-example`.
* **Create inline policy** - Set to **yes**.
* **Access Key** and **Secret Key** - Credentials for the "admin" user account, used to create or delete environment IAM users.

### Azure Blob Storage {#blob-azure}

If you would like to have Mendix Operator with automation, and have full isolation between environments, use the [Azure managed identity authentication](#blob-azure-azwi) option. This option works with apps using Mendix 10.10 (or a later version).

If you would like to simply share a container between environments, or to manually create a container and account per environment, use the [static credentials](#blob-azure-static) option.

#### Azure Blob Storage (Azure managed identity authentication){#blob-azure-azwi}

This automated, on-demand option allows to use an existing blob storage accounts in multiple environments, and isolates environments from accessing each other's data.

{{% alert color="info" %}}
This section provides technical details on how managed identity authentication works with Azure Blob Storage. If you just need instructions to get started, the [Azure Managed Identity-based storage walkthrough](#walkthrough-azure-azwi) provides a quick start guide to set the Mendix Operator to manage a Postgres database, SQL Server and Blob Storage account using managed identity authentication.
{{% /alert %}}

##### Prerequisites

* An Azure Blob storage account.
* A *Blob Storage Admin* managed identity that the Mendix Operator would use to create/delete containers and managed identities for app environments.
  This managed identity needs the following permissions:
    * A [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role scoped to the blob storage account.
    * A [Role Based Access Control Administrator](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#role-based-access-control-administrator) role scoped to the blob storage account, and constrained to only have permissions to add the [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role to Service principals. This ensures that the *Blob Storage Admin* managed identity can only grant limited permissions to environment managed identities (service principals).
    * A [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

##### Limitations

* To use this feature, your app needs to be upgraded to Mendix 10.10 (or later), and your namespace needs to use Mendix Operator version 2.17.0 (or later).

##### Environment Isolation

* Unique managed identity for every environment.
* Unique container for every environment.
* The storage account is shared.
* Environment has full access only to its own container, cannot access data from other environments.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Managed Identity for an environment. This Managed Identity will be created in the same resource group, subscription and region as the *Blob Storage Admin* managed identity.
* Create a Kubernetes Service Account and attach it to the environment's Managed Identity. This Service Account acts as a replacement for static credentials, and can also be used to authenticate with the environment's Blob Storage Container.
* Create a new container in the shared blob storage account. This will be the environment's dedicated container.
* Add the [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role to an environment's Managed Identity, scoped to its container.
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.
   Since the app environment will authenticate through a managed identity role, this secret will not contain any static passwords - only the blob storage endpoint, container name and other non-sensitive connection details.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's role assignment.
* Delete that environment's container and its files.
* Delete that environment's Managed Identity.
* Delete that environment's Kubernetes Service Account.
* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Azure Blob plan configuration, enter the following details:

* **Account Name** - Blob Storage account name.
* **Managed Identity authentication** - Set to **yes**.
* **Account Subscription ID** - subscription ID of the blob storage account.
* **Account Resource Group** - resource group of the blob storage account.
* **Managed Identity Client ID** - the *Blob Storage Admin* managed identity Client ID.
    * Mendix recommends using the same *storage admin* managed identity to manage Azure databases and blob storage containers, as this would be easier to set up and maintain. One *storage admin* Service Account can be used for multiple storage plans, and only one Federated Credential would be needed to link it with a *storage admin* Managed Identity.
* **K8s Service Account** - the Kubernetes Service Account to create and attach to the *Blob Storage Admin* managed identity (will be created automatically by the `mxpc-cli` installation and configuration tool).
  {{% alert color="warning" %}}
  Do not use the name of an existing Service Account (environment name), or one of the reserved Kubernetes Service Account names:
    * `mendix-operator`
    * `mendix-agent`
    * `mendix-storage-provisioner`
  {{% /alert %}}

Azure workload identities allow a Kubernetes Service Account to authenticate itself as a specific Managed Identity. For this to work correctly, add a Federated Credential to the *Blob Storage Admin* managed identity:

1. Enable managed identities for your AKS cluster as [described in the Azure documentation](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). This only need to be done once per cluster.

    Ensure that you have the [Cluster OIDC Issuer URL](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). You will need the URL to complete the configuration.

2. Add a **Federated Credential** to the **Managed identity** by using [az identity federated-credential create](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#establish-federated-identity-credential) command, or by going to the **Federated credentials** tab and using the **Add Credential** wizard. This will allow the *Blob Storage Admin* Kubernetes Service Account to be associated with its **Managed identity**.

3. Fill in the following details:

    * **Federated credential scenario** - Kubernetes accessing Azure resources
    * **Cluster Issuer URL** - the Cluster OIDC URL from step 1
    * **Namespace** - the Kubernetes namespace where the Operator is installed; for Global Operator installations, you must specify the managed namespace in the **Namespace** field.
    * **Service Account** - the **K8s Service Account** specified in the Blob Storage plan configuration
    * **Name** - any value

4. Grant the *Blob Storage Admin* Managed Identity the following permissions:

    * A [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role scoped to the blob storage account.
    * A [Role Based Access Control Administrator](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#role-based-access-control-administrator) role scoped to the blob storage account, and constrained to only have permissions to add the [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role to Service principals.
    * A [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

#### Azure Blob Storage (static credentials){#blob-azure-static}

This basic, on-demand option allows you to attach an existing Azure Blob Storage container and credentials (account name and secret key) to one or more environments. All apps (environments) will use the same Azure Blob Storage container and credentials.

If your app is using Mendix 10.10 (or a later version) consider using the [Azure managed identity authentication](#blob-azure-azwi) instead, for additional security.

##### Prerequisites

* An Azure Blob storage container and credentials to access it.

##### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

##### Environment Isolation

* The Azure Blob storage container and credentials are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* All environments will store their data in the root directory of the blob storage container.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

##### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

##### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

##### Configuring the Plan

In the Azure Blob plan configuration, enter the following details:

* **Account Name** - Blob Storage account name.
* **Managed Identity authentication** - Set to **no**
* **Account Key** - Access key for the blob storage container.
* **Container name** - Name of the blob storage container.
* **Type** - Specifies is the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### Google Cloud Storage {#blob-gcp-storage-bucket}

This basic, on-demand option allows you to attach an existing GCP Cloud Storage bucket and credentials (access and secret keys) to one or more environments. All apps (environments) will use the same GCP Cloud Storage bucket and credentials (access and secret keys).

#### Prerequisites

* A GCP Cloud Storage bucket.
* An Access and Secret key with permissions to access the bucket.

#### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is `On-Demand`).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

#### Environment Isolation

* The GCP Cloud Storage bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the `Dedicated` **Type**, this plan switches into **Dedicated** mode - so that only one environment can use it.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

#### Configuring the Plan

In the GCP Cloud Storage plan configuration, enter the following details:

* **Endpoint** - The GCP bucket's endpoint address, for example, `https://storage.googleapis.com/<bucket-name>`.
* **Access Key** and **Secret Key** - Credentials to access the bucket.
* **Type** - Specifies is the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select `Dedicated`.

### Ceph {#blob-ceph}

This basic, on-demand option allows to attach an existing Ceph or S3-compatible bucket and credentials (access and secret keys) to one or more environments.
All apps (environments) will use the same bucket and credentials (access and secret keys).

#### Prerequisites

* A Ceph or S3-compatible bucket.
* An Access and Secret key with permissions to access the bucket.

#### Limitations

* Access/Secret keys used by existing environments can only be rotated manually.
* No isolation between environments using this blob storage plan (if the plan **Type** is **On-Demand**).
* Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

#### Environment Isolation

* The Ceph or S3-compatible bucket and credentials (access and secret keys) are shared between all environments using this plan.
* An environment can access data from other environments using this Storage Plan.
* By using the Dedicated type, this plan switches into **Dedicated** mode, so that only one environment can use it.

#### Create Workflow

When a new environment is created, the Mendix Operator performs the following actions:

* Generate a unique prefix based on the environment's name, so that each environment stores files in a separate prefix (directory).
* Create a Kubernetes secret to provide connection details to the new app environment - to automatically configure the new environment.

#### Delete Workflow

When an existing environment is deleted, the Mendix Operator performs the following actions:

* Delete that environment's Kubernetes blob file storage credentials secret.

#### Configuring the Plan

In the Ceph plan configuration, enter the following details:

* **Endpoint** - The Ceph bucket's endpoint address, for example `https://ceph-instance.local:9000/<bucket-name>`.
* **Access Key** and **Secret Key** - Credentials to access the bucket.
* **Type** - Specifies if the container can be shared between environments (create an on-demand storage plan); or that the container can only be used by one environment (create a dedicated storage plan). To increase security and prevent environments from being able to access each other's data, select **Dedicated**.

## Walkthroughs

This section provides instructions how to set up storage for the most typical use cases.

### AWS IAM-based Storage{#walkthrough-aws-irsa}

AWS recommends using [IRSA authentication](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) instead of static credentials.
This guide explains how to set up and use a database and blob file storage plan using AWS best practices.

{{% alert color="warning" %}}
This feature requires an Mendix app based on Mendix 9.22 (or later) and Mendix Operator version 2.12 (or later).
{{% /alert %}}

Before you begin, you need to create an EKS cluster and install Mendix for Private Cloud in that cluster.

Navigate to the EKS cluster details and write down the **OpenID Connect provider URL**:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-storage-plans/IRSA-OIDC.png" class="no-border" >}}

IRSA authentication uses the same AWS IAM Role and Kubernetes Service Account to authenticate with AWS services. It is not possible to assign more than one IAM Role or Kubernetes Service Account to a Mendix app environment. To avoid conflicts, IAM roles and service accounts will be managed by the S3 blob file storage provisioner.
The Postgres provisioner only creates a database and Postgres user (Postgres role), but does not manage IAM roles. To use IAM authentication, the database and blob file storage plans need to be managed together - the IAM policy is shared, and grants access to the database and S3 bucket.

{{% alert color="warning" %}}
To prevent authentication or connectivity issues, create all AWS resources in the same account and region.
{{% /alert %}}

For more details, see the [Postgres (IAM authentication)](#database-postgres-iam) and [S3 IRSA mode](#s3-irsa-mode) plan details.

#### RDS Database

To configure the required settings for an RDS database, do the following steps:

1. Create a Postgres RDS instance and enable **Password and IAM database authentication**, or enable **Password and IAM database authentication** for an existing instance.
2. Enable [IAM authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.DBAccounts.html#UsingWithRDS.IAMDBAuth.DBAccounts.PostgreSQL) and grant `rds_iam` role to `database-username` role by using the below `psql` commandline to run the following jump pod commands (replacing `<database-username>` with the username specified in `database-username` and `<database-host>` with the database host):

    ```sql
    kubectl run postgrestools docker.io/bitnami/postgresql:14 -ti --restart=Never --rm=true -- /bin/sh
    export PGDATABASE=postgres
    export PGUSER=<database-username>
    export PGHOST=<database-host>
    export PGPASSWORD=""
    psql    
    GRANT rds_iam TO <database-username>;
    ALTER ROLE <database-username> WITH PASSWORD NULL;
    ```

    See the [RDS IAM documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html) for more details on enabling IAM authentication.

    {{% alert color="info" %}}The VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster. When creating the RDS instance, as a best practice, make sure that it uses the same VPC as the Kubernetes cluster. Alternatively, you can also use a publicly accessible cluster. After an RDS instance has been created, it is not possible to modify its VPC.{{% /alert %}}

    {{% alert color="info" %}}In the case of Aurora DB, ensure that the `rds_iam` role is granted to the master database user{{% /alert %}}

3. Navigate to the RDS instance details, and write down the following information:

    * The database **Endpoint** from the **Connectivity & security** tab:

       {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-storage-plans/RDS-Endpoint.png" class="no-border" >}}

    * The **Master username** and **Resource ID** from the **Configuration** tab:

       {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/private-cloud-storage-plans/RDS-Connection.png" class="no-border" >}}

4. Download the [RDS TLS certificates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html#UsingWithRDS.SSL.CertificatesAllRegions)
and save them into a Kubernetes secret (replace `{namespace}` with the namespace where the Mendix Operator is installed):

{{% alert color="info" %}}For Global Operator, replace `{namespace}` with the managed namespace name.{{% /alert %}}

```shell
curl -L -o custom.crt https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
kubectl -n {namespace} create secret generic mendix-custom-tls --from-file=custom.crt=custom.crt
```

{{% alert color="info" %}}
If IAM authentication is not working as expected, check the RDS database's logs.

* A `password authentication` failed for user error means that the user does not have IAM authentication enabled.
* A `PAM authentication failed for user` error means that IAM authentication is enabled, but the IAM policy does not allow the user to connect.
{{% /alert %}}

#### S3 Bucket

To configure the required settings for an S3 bucket, do the following steps:

1. Create an S3 bucket using default parameters.
2. Write down the **Bucket name** and **Region**.

{{% alert color="info" %}}
While it is possible to enable SSE-KMS encryption, it requires additional configuration steps, which are not covered by this guide.
For a Mendix app environment to use SSE-KMS keys, the *environment template policy* (explained in the next step) needs `kms:GenerateDataKey` and `kms:Decrypt` permissions to access the KMS key.
{{% /alert %}}

#### Environment Template Policy

Create a new IAM policy with the following JSON:

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
                        "${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}/*",
                        "${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}"
                    ]
                }
            }
        },
        {
            "Sid": "AllowAllS3ActionsInUserFolder",
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::<bucket_name>/${aws:PrincipalTag/privatecloud.mendix.com/s3-prefix}/*"
            ],
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListMultipartUploadParts",
                "s3:PutObject"
            ]
        },
        {
            "Sid": "AllowConnectionToDatabase",
            "Effect": "Allow",
            "Action": "rds-db:connect",
            "Resource": "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/${aws:PrincipalTag/privatecloud.mendix.com/database-user}"
        }
    ]
}
```

In this template, replace:

* `<bucket_name>` with the S3 **Bucket name**
* `<aws_region>` with the RDS Instance's AWS region
* `<account_id>` with the AWS account ID
* `<database_id>` with the **Resource ID** from the RDS database **Configuration** tab (it should look like `db-ABCDEFGHIJKL01234`, and is not the database name or ARN). In the case of Aurora DB, ensure that the `database_id` is from the cluster and not the instance.

This environment template policy will be attached to every new environment's role. Write down its ARN.

For every new environment, the Mendix Operator will automatically create a new role and fill in the `privatecloud.mendix.com/database-user` and `privatecloud.mendix.com/s3-prefix` tags.

{{% alert color="warning" %}}
Do not modify `${aws:PrincipalTag/...}` placeholders. They are used to ensure that an environment only has limited access to:

* The database (Postgres user/role) specified in the environment IAM role's `privatecloud.mendix.com/database-user` tag
* The S3 prefix specified in the environment IAM role's `privatecloud.mendix.com/s3-prefix` tag

To find more details about how tags can be used as a variable (placeholder) in an IAM policy and limit the scope, see the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html#policy-vars-tags).
{{% /alert %}}

#### Storage Provisioner Admin Role

Create a new IAM role.

1. In the first screen of the creation wizard, select the following values:
    * **Trusted entity type** - Select **Web identity**
    * **Identity provider** - Select **OpenID Connect provider URL**
    * **Audience** - Leave as `sts.amazonaws.com`
2. Complete the wizard with default options, without adding any permissions in the second screen of the creation wizard.
3. Write down the **Storage Provisioner admin role** ARN.
4. Allow a Kubernetes ServiceAccount to assume the Storage Provisioner admin role.
    This will be the **storage provisioner** admin-like service account that manages permissions for new environments, and revokes permissions of an environment when it is deleted. To avoid conflicts with existing ServiceAccounts, as a best practice, use `mendix-storage-provisioner-iam` as the Kubernetes ServiceAccount name.
   
    1. Open the role for editing and add an entry for the ServiceAccount to the list of conditions:

        {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/awsserviceaccountlinktorole.png" class="no-border" >}}

    2. For the second condition, copy and paste the `sts.amazonaws.com` line; replace `:aud` with `:sub` and set it to `system:serviceaccount:<Kubernetes namespace>:<Kubernetes serviceaccount name>`.

    {{% alert color="info" %}}For Global Operator installation, replace `Kubernetes namespace` with the managed namespace name. For more information, see [Amazon EKS Pod Identity Webhook – EKS Walkthrough](https://github.com/aws/amazon-eks-pod-identity-webhook#eks-walkthrough). After this, the specified service account in the specified namespace is able to assume this role.{{% /alert %}}

5. Attach the following IAM policy to this Storage Provisioner admin IAM role:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "LimitedAttachmentPermissions",
            "Effect": "Allow",
            "Action": [
                "iam:AttachRolePolicy",
                "iam:DetachRolePolicy"
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
            "Sid": "ManageRoles",
            "Effect": "Allow",
            "Action": [
                "iam:CreateRole",
                "iam:TagRole",
                "iam:DeleteRole"
            ],
            "Resource": [
                "arn:aws:iam::<account_id>:role/mendix-*"
            ]
        },
        {
            "Sid": "AllowFileCleanup",
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::<bucket_name>"
            ],
            "Action": [
                "s3:AbortMultipartUpload",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListMultipartUploadParts",
                "s3:PutObject",
                "s3:ListBucket"
            ]
        },
        {
            "Sid": "AllowCreateRDSTenants",
            "Effect": "Allow",
            "Action": [
                "rds-db:connect"
            ],
            "Resource": [
                "arn:aws:rds-db:<aws_region>:<account_id>:dbuser:<database_id>/<database_user>"
            ]
        }
    ]
}
```

In this template, replace:

* `<policy_arn>` with the *environment template policy* ARN
* `<bucket_name>` with the S3 **Bucket name**
* `<aws_region>`, with the RDS Instance's AWS region
* `<account_id>`, with the AWS account ID
* `<database_id>`, with the **Resource ID** from the RDS database **Configuration** tab (it should look like `db-ABCDEFGHIJKL01234`, and is **not** the database name or ARN). In the case of Aurora DB, ensure that the `database_id` is from the cluster and not the instance.
* `<database-user>` with the Postgres superuser account name

This role allows the Mendix Operator to create and delete IAM roles for Mendix app environments.

In addition, the optional `AllowFileCleanup` permissions will be used to clean up a deleted environment's files (if **Prevent Data Deletion** is disabled).
Only files from a deleted environment will be cleaned up, files from other environments will remain unaffected.

#### Creating the Storage Plans

To create the required storage plans, do the following steps:

1. Run the `mxpc-cli` configuration tool and select to configure the **Database Plan**, **Storage Plan** and **Custom TLS**.
2. In the **Database** configuration tab, select `postgres` as the database type, and provide the following details:

    * **Host** should be set to the **Endpoint** of the RDS database instance
    * **Port** should be set to `5432` (or custom port if the RDS instance is using a non-standard port)
    * **Database Name** should be set to `postgres` (or a custom login database if the default database is not available)
    * **Authentication** should be set to `aws-iam`
    * **Username** should be set to the **Master username** of the RDS database instance
    * **IAM Role ARN** should be set to the *Storage Provisioner admin role* ARN
    * **K8s Service Account** should use the same Kubernetes Service Account that was specified in the *Storage Provisioner admin role* trust policy. If you used the recommended Service Account name, paste `mendix-storage-provisioner-iam` in this field.

3. In the **Storage Plan** configuration tab, select `amazon-s3` as the storage type, and provide the following details:

    * **IRSA Authentication** should be set to *yes*
    * **Bucket Region** and **Bucket Name** should be set to the bucket's region and name
    * **Attach policy ARN** should be set to the *environment template policy* ARN
    * **EKS OIDC URL** should be set to the **OpenID Connect provider URL** value
    * **IAM Role ARN** should be set to the *Storage Provisioner admin role* ARN
    * **K8s Service Account** should use the same Kubernetes Service Account that was specified in the *Storage Provisioner admin role* trust policy. If you used the recommended Service Account name, paste `mendix-storage-provisioner-iam` in this field.

4. In the **Custom TLS** tab, paste `mendix-custom-tls` into the `CA Certificates Secret Name` field.
5. Apply the changes - you can now use the new Postgres and S3 plans to create new environments with IRSA authentication.

{{% alert color="warning" %}}
The Mendix Operator will create an IAM role for every new environment.
Do not remove or modify `privatecloud.mendix.com/s3-prefix` or `privatecloud.mendix.com/database-user` tags from that role - those tags are used by the *environment template policy* to limit the environment's scope and prevent an environment from accessing data from other apps using the same S3 bucket or RDS instance.
{{% /alert %}}

### Azure Managed Identity-based Storage{#walkthrough-azure-azwi}

Azure recommends using [managed identity authentication](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview) instead of static credentials.
This guide explains how to set up and use a database and blob file storage plan using Azure best practices.

{{% alert color="warning" %}}
This feature requires an Mendix app based on Mendix 10.10 (or later) and Mendix Operator version 2.17 (or later).
{{% /alert %}}

Before you begin, you need to create an AKS cluster and install Mendix for Private Cloud in that cluster.

{{% alert color="warning" %}}
This walkthrough provides examples for two database types: Postgres and Azure SQL, and you only need to create one of them.
{{% /alert %}}

1. Enable managed identities for your AKS cluster as [described in the Azure documentation](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). This only need to be done once per cluster.

    Ensure that you have the [Cluster OIDC Issuer URL](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#update-an-existing-aks-cluster). You will need this URL to complete the configuration on Step 3.

2. Create a new managed identity using the [az identity create](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#create-a-managed-identity) command, or by using the [Create a user-assigned managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities?pivots=identity-mi-methods-azp#create-a-user-assigned-managed-identity) wizard in the Azure Portal.

    This Managed Identity would act as a *storage admin*. When a new environment is created, this **storage admin** will create that environment's tenant database, blob storage and an environment's Managed Identity (this environment-specific managed identity would only be able to access the environment's tenant database and file storage).

    For every new environment, Mendix Operator will create an environment managed identity - in the same region and resource group as the *storage admin* managed identity.

    Later, you'll need the following details of the *storage admin* managed identity:

    * **Name**
    * **Client ID**
    * **Object (principal) ID**

3. Add a **Federated Credential** to the **Managed identity** by using [az identity federated-credential create](https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster#establish-federated-identity-credential) command, or going to the **Federated credentials** tab and using the **Add Credential** wizard. This will allow the *storage admin* Kubernetes Service Account to be associated with its **Managed identity**.

    Fill in the following details:

    * **Federated credential scenario** - Kubernetes accessing Azure resources
    * **Cluster Issuer URL** - the Cluster OIDC URL from step 1
    * **Namespace** - the Kubernetes namespace where the Operator is installed; for Global Operator installations, you must specify the managed namespace in the **Namespace** field.
    * **Service Account** - on the Kubernetes side, this would be a *storage admin* account assigned to the **Managed Identity** created on Step 2. To avoid conflicts with existing ServiceAccounts, as a best practice, use `mendix-storage-provisioner-wi` as the Kubernetes ServiceAccount name. You will this name later.
    * **Name** - any value

4. Assign this *storage admin* Managed Identity a [Managed Identity Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#managed-identity-contributor) role in its resource group.

Managed Identity authentication uses the same Managed Identity and Kubernetes Service Account to authenticate with Azure services. It is not possible to assign more than one Kubernetes Service Account to a Mendix app environment. To avoid conflicts, the database and file storage provisioners will create the environment's tenant managed identity with the same parameters in parallel.

For more details, see the [Postgres (Azure managed identity authentication)](#database-postgres-azwi), [SQL Server (Azure managed identity authentication)](#database-sqlserver-azwi) and [Azure Blob Storage (Azure managed identity authentication)](#blob-azure-azwi) plan details.

#### Postgres (Flexible Server) Database

To configure the required settings for a Postgres database, do the following steps:

1. Create a Postgres (Flexible Server) instance. Navigate to the **Overview** page, and write down the **Server name**.

2. Navigate to the **Authentication** page. Set authentication to **Microsoft Entra authentication only** and press Save.

3. Add the *storage admin* Managed Identity you've created [in the beginning of this walkthrough](#walkthrough-azure-azwi) as a Microsoft Entra Admin.

{{% alert color="info" %}}To improve security, set the firewall to only allow connections to the database from the Kubernetes cluster.{{% /alert %}}

#### Azure SQL Database

To configure the required settings for an Azure SQL, do the following steps:

1. Create an Azure SQL Server instance. Navigate to the **Overview** page, and write down the **Server name**.

2. Navigate to the **Microsoft Entra ID** page, and add yourself (or your Entra group) as an [Entra Admin user](https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?view=azuresql&tabs=azure-powershell#azure-portal-1) in the Azure SQL database.

    Azure SQL can only have one Entra Admin, and to add multiple users you'll need to do grant access through an Entra group.

3. Open Azure Cloud Shell (or a Bash-compatible terminal) and run `az login` to authenticate with Entra ID.

4. Run the following command to [connect to the Azure SQL database](https://learn.microsoft.com/en-us/sql/connect/odbc/linux-mac/connecting-with-sqlcmd?view=azuresqldb-current), replacing `<hostname>` with the **Server name** from Step 1:

   ```shell
   az account get-access-token --resource https://database.windows.net --output tsv | cut -f 1 | tr -d '\n' | iconv -f ascii -t UTF-16LE > /tmp/token && sqlcmd -S <hostname> -G -P /tmp/token && rm /tmp/token
   ```

5. In the sqlcmd client, run the following commands (replace `<storage-admin-identity-name>` with the **Name** of the *storage admin* Managed Identity you've created [in the beginning of this walkthrough](#walkthrough-azure-azwi):

   ```sql
   CREATE USER [<storage-admin-identity-name>] FROM EXTERNAL PROVIDER;
   GO
   ALTER ROLE dbmanager ADD MEMBER [<storage-admin-identity-name>];
   quit
   ```

{{% alert color="info" %}}To improve security, set the firewall to only allow connections to the database from the Kubernetes cluster.{{% /alert %}}

#### Azure Blob Storage

To configure the required settings for an S3 bucket, do the following steps:

1. Create an Azure Blob Storage account, and write down the following details from its **Overview** page:

   * Name of the storage account
   * **Resource group**
   * **Subscription ID**

2. Grant the *storage admin* Managed Identity (created [in the beginning of this walkthrough](#walkthrough-azure-azwi)) the following permissions:

* A [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role scoped to the blob storage account.
* A [Role Based Access Control Administrator](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/general#role-based-access-control-administrator) role scoped to the blob storage account, and constrained to only have permissions to add the [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-contributor) role to Service principals.

{{% alert color="info" %}}To improve security, set the firewall to only allow connections to the blob storage account from the Kubernetes cluster.{{% /alert %}}

{{% alert color="info" %}}To allow recovery of deleted files, set up [Data protection](https://learn.microsoft.com/en-us/azure/storage/blobs/data-protection-overview) options such as **Container soft delete** and/or **Blob soft delete**.{{% /alert %}}

#### Creating the Storage Plans

To create the required storage plans, do the following steps:

1. Run the `mxpc-cli` configuration tool and select to configure the **Database Plan** and **Storage Plan**.

2. If you created a Postgres database:

    In the **Database** configuration tab, select `postgres` as the database type, and provide the following details:

    * **Host** should be set to the **Server name** of the Postgres database server
    * **Port** should be set to `5432` (or custom port if the Postgres server is using a non-standard port)
    * **Strict TLS** should be set to *yes*
    * **Database Name** should be set to `postgres` (or a custom login database if the default database is not available)
    * **Authentication** should be set to `azure-wi`
    * **Managed Identity name** should be set to the **Name** of the *storage admin* Managed Identity created [in the beginning of this walkthrough](#walkthrough-azure-azwi)
    * **Managed Identity Client ID** should be set to the **Client ID** of the *storage admin* Managed Identity created [in the beginning of this walkthrough](#walkthrough-azure-azwi)
    * **K8s Service Account** should use the same Kubernetes Service Account that was specified [in the beginning of this walkthrough](#walkthrough-azure-azwi). If you used the recommended Service Account name, paste `mendix-storage-provisioner-wi` in this field.

3. If you created an Azure SQL database:

   In the **Database** configuration tab, select `sqlserver` as the database type, and provide the following details:

    * **Host** should be set to the **Server name** of the Azure SQL database server
    * **Port** should be set to `1433` (or custom port if the SQL Server instance is using a non-standard port)
    * **Strict TLS** should be set to *yes*
    * **Authentication** should be set to `azure-wi`
    * **Managed Identity Client ID** should be set to the **Client ID** of the *storage admin* Managed Identity created [in the beginning of this walkthrough](#walkthrough-azure-azwi)
    * **K8s Service Account** should use the same Kubernetes Service Account that was specified [in the beginning of this walkthrough](#walkthrough-azure-azwi). If you used the recommended Service Account name, paste `mendix-storage-provisioner-wi` in this field.
    * **Is Azure SQL Server** should be enabled to change default settings:
      * **Elastic Pool** - Specifies an existing Elastic Pool to use (can be left empty if the new app's database should not be using an elastic pool)
      * **Edition** - Specifies the [database edition/tier](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#edition) to use, for example `Basic` to use an entry-level tier. Can be left empty, in this case Azure SQL will use the default `GeneralPurpose` edition.
      * **Service Objective** - Specifies the [database service objective](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#service_objective) (performance level), for example `Basic` to use an entry-level tier. Can be left empty, in which case Azure SQL will use the default service objective (such as `GP_Gen5_2`).
      * **Maximum Size** - Specifies the database maximum size, for example `1 GB`.

    {{% alert color="warning" %}}To avoid unexpected costs associated with the default Azure SQL database tier, set **Edition** and **Service Objective** to `Basic`. If a higher database tier is needed later, the Azure Portal allows to change the database tier of any database.{{% /alert %}}

4. In the **Storage Plan** configuration tab, select `azure-blob` as the storage type, and provide the following details:

    * **Account name** should be set to the Blob Storage account name
    * **Managed Identity authentication** should be set to *yes*
    * **Account Subscription ID** should be set to the **Subscription ID** of the Blob Storage account
    * **Account Resource Group** should be set to the **Resource Group** of the Blob Storage account
    * **Managed Identity Client ID** should be set to the **Client ID** of the *storage admin* Managed Identity created [in the beginning of this walkthrough](#walkthrough-azure-azwi)
    * **K8s Service Account** should use the same Kubernetes Service Account that was specified [in the beginning of this walkthrough](#walkthrough-azure-azwi). If you used the recommended Service Account name, paste `mendix-storage-provisioner-wi` in this field.

5. Apply the changes - you can now use the new database and blob storage plans to create new environments with Managed Identity authentication.
