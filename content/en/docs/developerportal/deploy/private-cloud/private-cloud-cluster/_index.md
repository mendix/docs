---
title: "Creating a Private Cloud Cluster"
url: /developerportal/deploy/private-cloud-cluster/
description: "Describes the processes for creating a Private Cloud cluster in the Mendix Developer Portal"
weight: 10
tags: ["Create", "Private Cloud", "Cluster", "Namespace"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

To allow you to manage the deployment of your apps to Red Hat OpenShift and Kubernetes, you first need to create a cluster and add at least one namespace in the Mendix Developer Portal. This will provide you with the information you need to deploy the **Mendix Operator** and **Mendix Gateway Agent** in your OpenShift or Kubernetes context and create a link to the **Environments** pages of your Mendix app through the **Interactor**.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/mx4pc-architecture.png" >}}

This document explains how to set up the cluster in Mendix.

Once you have created your namespace, you can invite additional team members who can then create or view environments in which their apps are deployed, depending on the rights you give them. For more information on the relationship between Mendix environments, Kubernetes namespaces, and Kubernetes clusters, see [Containerized Mendix App Architecture](#containerized-architecture), below.

## 2 Prerequisites for Creating a Cluster{#prerequisites}

To create a cluster in your OpenShift context, you need the following:

* A Kubernetes platform with a version from 1.13 through 1.20, or OpenShift version 3.11 or above (version 4.4 and above is recommended)
* An administration account for your OpenShift or Kubernetes platform
* **OpenShift CLI** installed (see [Getting started with the CLI](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html) on the Red Hat OpenShift website for more information) if you are creating clusters on OpenShift
* **Kubectl** installed if you are deploying to another Kubernetes platform (see [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) on the Kubernetes webside for more information)
* A command line terminal that supports the console API and mouse interactions. In Windows, this could be PowerShell or the Windows Command Prompt. See [Terminal limitations](#terminal-limitations), below, for a more detailed explanation.

### 2.1 Connected Environments{#prerequisites-connected}

Should you consider using a connected environment, the following URLs should be *whitelisted* in your cluster's operating system, as these URLs point to services or resources required by the *Connected Environments'* infrastructure.

| URL | Description |
|-----|-------------|
| `https://interactor-bridge.private-cloud.api.mendix.com` | Websocket based main communication API |
| `https://privatecloud.mendixcloud.com` | Registry for downloading MDA artifacts |
| `https://private-cloud.registry.mendix.com` | Docker registry for downloading Runtime base images |
| `https://cdn.mendix.com` | Registry for downloading placeholder MDA artifacts |
| `https://subscription-api.mendix.com` | Service to verify call-home licence |

## 3 Creating a Cluster & Namespace

### 3.1 Creating a Cluster{#create-cluster}

1. Click **Cloud Settings** on the **General Settings** page of your Mendix app.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image2.png" >}}

2. Click **Mendix for Private Cloud**.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image3.png" >}}

3. Click **Set up Mendix for Private Cloud**.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image4.png" >}}

4. Click the **Switch-to** menu in the Developer Portal and choose **Cloud**.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/go-to-nodes-page.png" >}}

5. Select **Cluster Manager** from the top menu bar in the Developer Portal.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/cluster-manager.png" >}}

6. Click **Register Cluster**. 

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image6.png" >}}

7. Enter the following information:
    
    1. **Name** – The name you want to give the cluster you are creating.
  
    2. **Type** – choose the correct type for your cluster. See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) for more information.

    3. **Description** – an optional description of the cluster which will be displayed under the cluster name in the cluster manager.

8. Click **Create**.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/create-cluster.png" >}}

### 3.2 Adding a Namespace

You now need to add a namespace to your cluster. Your cluster can contain several namespaces, see [Containerized Mendix App Architecture](#containerized-architecture), below for more information.

To add a namespace, do the following:

1. Click **Details**:

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/empty-cluster.png" >}}

2. Click **Add Namespace**:

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/namespace-details.PNG" >}}

3. Enter the following details:
    * **Namespace** – this is the namespace in your platform; this must conform to the namespace naming conventions of the cluster: all lower-case with hyphens allowed within the name
    * **Installation type** – if you want to [create environments and deploy your app from the Mendix Developer Portal](/developerportal/deploy/private-cloud-deploy/), choose **Connected**, but if you only want to [control your deployments through the Mendix Operator using the CLI](/developerportal/deploy/private-cloud-operator/), choose **Standalone**

4. Click **Done** to create the namespace.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/add-namespace.png" >}}

{{% alert color="warning" %}} If you have selected a *Connected Installation Type* please verify that the [Connected Environment Pre-requisites](#prerequisites-connected) are configured. {{% /alert %}}

## 4. Installing and Configuring the Mendix Operator

Before you can use the Mendix Operator in your namespace you need to install it and configure the services your app will use. Mendix provides you with a **Configuration Tool** which guides you through the process.

### 4.1 Download the Configuration Tool{#download-configuration-tool}

If you are not already on the installation tab for your namespace, go to it by following these instructions:

1. Go to the Cluster Manager page by clicking **Cluster Manager** in the top menu of the **Clouds** page of the Developer Portal.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/cluster-manager.png" >}}

2. Click **Details** next to the namespace you want to use.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/cluster-details.png" >}}

3. Select the **Installation** tab.

Now you can download the Configuration Tool by doing the following:

1. Choose the **Operating System** for your local computer.
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/choose-operating-system.png" >}}

2. Click **Download Executable**.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/download-executable.png" >}}

3. Choose the **Mendix Operator Version** that you would like to install. If you have already installed the Mendix Operator, your currently installed version will be highlighted.

    {{% alert color="info" %}}Mendix Operator version 2.\*.\* supports Kubernetes versions 1.19 and later. Mendix Operator version 1.12.\* supports Kubernetes versions 1.12 through 1.21. Choose the latest version that is supported by your Kubernetes cluster.{{% /alert %}}

    {{% alert color="info" %}}Versions earlier than 1.9.0 are only available to allow _configuration_ of previously installed Mendix Operator versions.{{% /alert %}}

    {{% alert color="warning" %}}Once you've installed a certain version of the Mendix Operator into any namespace in the cluster, you should not install older versions of the Mendix Operator into the same cluster, including other namespaces.{{% /alert %}}

    {{% alert color="info" %}}The installation and configuration tool only supports a limited range of Mendix Operator versions. If the Mendix Operator version in your namespace is too new or too old, the configuration tool will not be able to configure it. Download a version of the Configuration tool that is compatible with the Mendix Operator you have installed.{{% /alert %}}

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/download-operator-version.png" >}}

4. Click the **Download** icon to download the installation and configuration tool. Make sure that it is stored somewhere on your path.

### 4.2 Signing in to the Platform{#openshift-signin}

You will need to have administrator rights to your private cloud platform. This means you will have to log in before you run the Configuration Tool.

These instructions are for the OpenShift platform; a similar process will be required for other platforms.

You can do this as follows:

1. Sign in to the OpenShift Console.

2. Click **Copy Login Command** in the user drop-down.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image9.png" >}}

3. Choose your IdP (Identity Provider).
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image10.png" >}}

4. Click **Display Token**.

5. Copy the command under **Log in with this token**.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image11.png" >}}

6. Paste the command into your command line terminal and press Enter.

### 4.3 Running the Configuration Tool{#running-the-tool}

Once you are signed in to your cluster you can run the Configuration Tool.

To install in non-interactive mode please see: [Install and Configure Mendix for Private Cloud Non-interactive Mode](/developerportal/deploy/private-cloud-cli-non-interactive/)

1. Copy the **Installation Command** by clicking **Copy to clipboard**.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/private-cloud-cli-non-interactive/installation-command.png" >}}

2. Paste the command into your command line terminal and press <kbd>Enter</kbd>

    {{% alert color="warning" %}}The Configuration Tool needs a CLI terminal with mouse support. Read the [Terminal limitations](#terminal-limitations) section before running the Configuration Tool.{{% /alert %}}

    You will see the configuration options on the screen and will be guided through filling in the information needed.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/post-install-landing-page.png" >}}

#### 4.3.1 Base Installation{#base-installation}

If the Mendix Operator and the Mendix Gateway Agent have not been installed in your cluster, you will need to install them.

1. Click **Base Installation**.

    You will see the screen below.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/installer-options.png" >}}

2. Select the required **Cluster Mode** – *connected* or *standalone*.

    For more information, see [Connected and Standalone Clusters](/developerportal/deploy/private-cloud/#connected-standalone) in the *Private Cloud* documentation.

3. Select the required **Cluster Type** – *openshift* or *generic*.

4. Click **Run Installer** to install the Mendix Operator and Mendix Gateway Agent in your cluster.

    {{% alert color="info" %}}The installation is successful if the **Installer output** ends with **Done**.{{% /alert %}}

5. Click **Save Installer** if you want to save these settings to be used later.

6. Click **Exit Installer** to finish.

The Mendix operator and Mendix Gateway Agent are now installed on your platform.

{{% alert color="info" %}}
If you have selected the **Connected Mode** which installs the **Mendix Gateway Agent** component, please take note of the following:

* All the Websocket connections (to communicate with the Mendix Platform) are initiated by the Mendix Gateway Agent from the cluster, and said connections do not require any listening ports to be opened in the cluster's firewall.

* All the Websocket connections are established over HTTPS, and therefore, can be routed through a Proxy server.
{{% /alert %}}

#### 4.3.2 Configure Namespace{#configure-namespace}

You can now configure the resources required for your namespace.

The first time you configure the namespace, you should select all the items under **Select items to configure** except **Proxy** and **Custom TLS**. Only select **Proxy** if you want to configure a proxy for your namespace. Select **Custom TLS** only if you want to configure custom CAs for your namespace.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/configure-namespace.png" >}}

The options do the following:

* **Database Plan** – will create a new database plan for your cluster — you must have at least one database plan in your namespace, but you can have more than one
* **Storage Plan** – will create a new storage plan for your cluster — you must have at least one storage plan in your namespace, but you can have more than one
* **Ingress** – will configure the ingress for your namespace — if there is already an ingress, this will replace it with new settings
* **Registry** – will configure a registry for your namespace — if there is already a registry, this will replace it with new settings
* **Proxy** – will configure a proxy for your namespace — if there is already a proxy, this will replace it with new settings
* **Custom TLS** – will configure custom CA trust for your namespace — if there is already a custom CA trust configuration, this will replace it with new settings

1. Select the options you need to configure – the first time you configure your namespace you must check *all the first four options*.  **Proxy** is optional.

2. Click **Configure Namespace**.

    You will be shown the **Installation wizard** landing page.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/installation-wizard.png" >}}

3. Click the appropriate button at the bottom of the page to navigate to the setup page for each resource which you need to configure. Alternatively, use the allocated function keys (for example <kbd>F2</kbd> for the **Database Plan**). 

4. Each page will lead you through the information you need to supply.

    These are described in the following sections:

    * [Database Plan](#database-plan)
    * [Storage Plan](#storage-plan)
    * [Ingress](#ingress)
    * [Registry](#registry)
    * [Proxy](#proxy)
    * [Custom TLS](#custom-tls)

##### 4.3.2.1 Database Plan{#database-plan}

A database plan tells the Operator how the Mendix app needs to connect to a database when it is deployed. Although the database plan might be valid, there also has to be a database instance for it to connect to. This database instance may be created when the database plan is applied, or it may be an existing database instance which the database plan identifies.

Give your plan a **Name** and choose the **Database Type**. See the information below for more help in setting up plans for the different types of database which are supported by Mendix for Private Cloud.

Once you have entered the details you can apply two validation checks by clicking the **Validate** and **Connection Validation** buttons:

* **Validate** – checks that you have provided all the required values and that they are in the correct format
* **Connection validation** –  checks whether the specified storage plan has been successfully created — this does not guarantee that the storage *instance* will be created successfully when the configuration is applied

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/database-plan-config.png" alt="Database Plan Configuration" >}}

The following **Database Types** are supported:

* PostgreSQL
* Ephemeral
* SQL Server
* Dedicated JDBC

They are described in more detail below:

**Postgres** will enable you to enter the values to configure a PostgreSQL database. You will need to provide all the information about your PostgreSQL database such as plan name, host, port, database, user, and password.

{{% alert color="info" %}}
If the plan name already exists, you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Azure PostgreSQL server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall. For the database name, use `postgres`.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Amazon RDS database, the VPC and firewall must be configured to allow connections to the database from the Kubernetes cluster.
{{% /alert %}}

{{% alert color="info" %}}
Enabling the **Strict TLS** option will enable full TLS certificate validation and require encryption when connecting to the PostgreSQL server. If the PostgreSQL server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.

Disabling **Strict TLS** will attempt to connect with TLS, but skip certificate validation. If TLS is not supported, it will fall back to an unencrypted connection.
{{% /alert %}}

**Ephemeral** will enable you to quickly set up your environment and deploy your app, but any data you store in the database will be lost when you restart your environment.

**SQL Server** will enable you to enter the values to configure a Microsoft SQL Server database. You will need to provide all the information about your SQL Server database such as plan name, host, port, user, and password. 

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To connect to an Azure SQL Server, the Kubernetes cluster must be added to the list of allowed hosts in the firewall.
{{% /alert %}}

{{% alert color="info" %}}
For Azure SQL databases, the additional parameters `elastic pool name`, `tier`, `service objective`, and `maximum size` are required to specify the database. You can find information about these in the [Create Database](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=azuresqldb-current&tabs=sqlpool#create-a-database) documentation for the Azure SQL Database on the Microsoft documentation site.
{{% /alert %}}

{{% alert color="info" %}}
Enabling the **Strict TLS** option will enable full TLS certificate validation and require encryption when connecting to SQL Server. If the SQL Server has a self-signed certificate, you will also need to configure [custom TLS](#custom-tls) so that the self-signed certificate is accepted.

Disabling **Strict TLS** will attempt to connect with TLS, but skip certificate validation. If encryption is not supported, it will fall back to an unencrypted connection.
{{% /alert %}}

**Dedicated JDBC** will enable you to enter the [database configuration parameters](/refguide/custom-settings/) for an existing database directly, as supported by the Mendix Runtime.

{{% alert color="info" %}}
A dedicated JDBC database cannot be used by more than one Mendix app.
{{% /alert %}}

{{% alert color="info" %}}
Configuration parameters will not be validated and will be provided to the Mendix app as-is. If the arguments are not valid or there is an issue with permissions, the Mendix Runtime will fail to start the and deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.
{{% /alert %}}

{{% alert color="info" %}}
If the plan name already exists you will receive an error that it cannot be created. This is not a problem, you can continue to use the plan, and it will now have the new configuration.
{{% /alert %}}

{{% alert color="info" %}}
To use this plan, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.1.0 or later.
{{% /alert %}}

##### 4.3.2.2 Storage Plan{#storage-plan}

**Minio** will connect to a [MinIO](https://min.io/product/overview) S3-compatible object storage. You will need to provide all the information about your MinIO storage such as endpoint, access key, and secret key. The MinIO server needs to be a full-featured MinIO server, or a [MinIO Gateway](https://github.com/minio/minio/tree/master/docs/gateway) with configured etcd.

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

**S3 (existing bucket and account)** will connect to an existing S3 bucket with the provided IAM user access key and secret keys. All apps (environments) will use the same S3 bucket and an IAM user account. You will need to provide all the information relating to your Amazon S3 storage such as plan name, endpoint, access key, and secret key. The associated IAM user account needs to have the following IAM policy (replace `<bucket_name>` with the your S3 bucket name):

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

**Ephemeral** will enable you to quickly set up your environment and deploy your app, but any data objects you store will be lost when you restart your environment.

##### 4.3.2.3 Ingress{#ingress}

**openshift-route** will configure an OpenShift Route. This can only be used for OpenShift clusters. This option allows you to enable or disable TLS.

**kubernetes-ingress** will configure ingress according to the additional domain name you supply. This option allows you to configure the ingress path and custom ingress class (dependent on the Ingress controller) and enable or disable TLS.

**service-only** will create just a Kubernetes Service, without an Ingress or OpenShift route.
This option enables you to use a Load Balancer without an Ingress, or to manually create and manage the Ingress object (an Ingress that is not managed by Mendix for Private Cloud).

{{% alert color="info" %}}
When switching between Ingress, OpenShift Routes, and Service Only, you need to [restart the Mendix Operator](#restart-after-changing-network-cr) for the changes to be fully applied.
{{% /alert %}}

{{% alert color="info" %}}
Additional network options such as Ingress/Service annotations and Service ports are available in [advanced network settings](#advanced-network-settings).
{{% /alert %}}

##### 4.3.2.4 Registry{#registry}

Selecting a registry type and configuring its credentials will configure the destination registry used by Mendix for Private Cloud to build images.
Images are pulled from this registry by Kubernetes, bypassing the Mendix Operator.

You can choose one of the following registry types. OpenShift registries can only be used for clusters on the OpenShift platform. AWS ECR can only be used for AWS EKS clusters. For some of these registries you may need to supply additional information such as the pull URL, push URL, name, and secret.

* OpenShift 3 Registry
* OpenShift 4 Registry
* Amazon Elastic Container Registry (AWS ECR)
* Generic registry with authentication – this supports most registries, for example Azure Container Registry, quay.io, or Docker Hub
* Generic registry without authentication – this can be used for basic, self-hosted registries such as the ones included with Minikube and MicroK8s
* Existing docker-registry secret
* Google Cloud Container Registry

**Additional Information**

You can host the default Mendix components in your own registry, for example if your cluster is firewalled and cannot open up a route to the Mendix registry. In this case you need to migrate some, or all, of the Mendix components to your cluster. See the instructions in [Migrating to Your Own Registry](/developerportal/deploy/private-cloud-migrating/) to find out how to do this.

For **OpenShift 3** and **OpenShift 4** registries, the default image pull credentials from the `default` ServiceAccount will be used. No additional configuration steps are required to enable image pulls in OpenShift.

For **Generic registry…** options, the configuration script will ask if the credentials should be added to `imagePullSecrets` in the `default` ServiceAccount. If you answer **Yes**, the configuration script will add image pull credentials to the `default` ServiceAccount – no additional image pull configuration is required. If you want to configure the image pull separately, choose **No**.

For **Amazon Elastic Container Registry**, you will need to configure registry authentication separately through [IAM roles](https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_EKS.html).

When choosing the **Existing docker-registry secret**, you will need to add this secret to the `default` ServiceAccount manually, or provide registry authentication configuration in another way (depending on which registry authentication options the Kubernetes cluster vendor is offering).

For **Google Cloud Container Registry**, the supported authentication is [workload identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity). You will need to supply the following:

* `Registry Name`: google container registry full path name — for example `my-google-account-id/my-registry/dev-repo`.
* `Registry URL`: container or artifact registry host — for example `us.gcr.io` or `europe-west4-docker.pkg.dev`.
* `GCP Service Account`: [google service account](https://cloud.google.com/iam/docs/service-accounts) — for example `service-account-name@project-id.iam.gserviceaccount.com`.
* `Kubernetes Service Account`: the kubernetes service account that will be created and annotated with your google service account during post configuration. You need to [bind](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#authenticating_to) the kubernetes service account to your google service account.

    Below is an example how to bind a google cloud service account to a kubernetes service account:
    ```shell
    gcloud iam service-accounts add-iam-policy-binding \
            --role roles/iam.workloadIdentityUser \
            --member "serviceAccount:PROJECT_ID.svc.id.goog[K8S_NAMESPACE/KSA_NAME]" \
            GSA_NAME@PROJECT_ID.iam.gserviceaccount.com
    ```


#### 4.3.3 Proxy{#proxy}

Check the **Enable Proxy** checkbox if a proxy is required to access the public internet from the namespace; you will be asked for the proxy configuration details.

List all local (including cluster-local) IP addresses and domains in the **No proxy for** field. The format is listed below:

Hosts which should be excluded from proxying are specified as:

* a string containing comma-separated values
* each value is
    * an IP address prefix (`1.2.3.4`)
    * an IP address prefix in CIDR notation (`1.2.3.4/8`)
    * a domain name
    * if you use the special DNS label (`*`) this indicates that there are no exceptions and everything will be proxied 
* each IP address prefix or domain name can also include a literal port number (`1.2.3.4:80`)
* a domain name matches that name and all subdomains
* a domain name with a leading "." matches subdomains only

    For example "foo.com" matches "foo.com" and "bar.foo.com"; ".y.com" matches "x.y.com" but not "y.com".
 
For more information about how to use this field, see the [http proxy documentation used by the Configuration Tool](https://pkg.go.dev/golang.org/x/net/http/httpproxy).

#### 4.3.4 Custom TLS{#custom-tls}

{{% alert color="info" %}}
To use this option, [upgrade](/developerportal/deploy/private-cloud-upgrade-guide/) the Mendix Operator to version 1.7.0 or later.
{{% /alert %}}

To use encryption and avoid [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), communication with all external services should be done over TLS.
By default, Mendix Operator trusts Certificate Authorities from the [Mozilla CA root bundle](https://wiki.mozilla.org/CA), as they are provided by default in the container image.

If Mendix for Private Cloud needs to communicate with external services, some of those services might have TLS certificates signed by a custom (private) CA.
In order for the Mendix Operator to trust such certificates, you need to add their root CAs to the Mendix Operator configuration.

1. In another terminal, prepare the Kubernetes secret containing the custom root CAs list:
   1. Create a `custom.crt` file, containing the public keys of all custom (private) CAs that Mendix for Private Cloud should trust:
       ```
       # Private CA 1
       -----BEGIN CERTIFICATE-----
       [...]
       -----END CERTIFICATE-----
       # Private CA 2
       -----BEGIN CERTIFICATE-----
       [...]
       -----END CERTIFICATE-----
       ```
       (concatenate all the public keys from custom CAs into one `custom.crt` file, separating them with line breaks and optional comments).
   2. Load the file into a Secret (replace `{namespace}` with the namespace where the Operator is installed, and `{secret}` with the name of the Secret to create, for example, `mendix-custom-ca`):

        For OpenShift:
        ```shell
        oc -n {namespace} create secret generic {secret} --from-file=custom.crt=custom.crt
        ```

        For Kubernetes:
        ```shell
        kubectl -n {namespace} create secret generic {secret} --from-file=custom.crt=custom.crt
        ```

2. Paste the name of this `custom.crt` secret (the `{secret}` used in the commands above) into the **CA Certificates Secret Name** field (for example, `mendix-custom-ca`):
   
   {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/custom-tls-config.png" alt="Custom TLS configuration" >}}

These custom CAs will be trusted by:

* The Mendix Operator when communicating with the database and file storage
* The Mendix Operator when pushing app images to the container registry
* Mendix apps when communicating with the database, file storage and external web services

{{% alert color="info" %}}
To prevent MITM attacks, enable **Strict TLS** for the database and use an HTTPS URL for Minio. This will ensure that all communication with data storage is done over TLS, and that certificates are properly validated.
{{% /alert %}}

{{% alert color="info" %}}
Strict TLS mode should only be used with apps created in Mendix 8.15.2 (or later versions), earlier Mendix versions will fail to start when validating the TLS certificate.
{{% /alert %}}

#### 4.3.5 Review and Apply{#review-apply}

When you have configured all the resources, do the following:

1. Press <kbd>F7</kbd> to **Review and Apply**.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/review-and-apply.png" >}}

2. Click **Evaluate Configuration** to check the configuration.

    Resources which are correctly configured will have a status **Valid configuration**. If an resource is incorrectly configured, it will have a status **Invalid configuration: …** and an explanation of the issue.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/evaluate-configuration.png" >}}

3. Once you have evaluated the configuration, click **Write YAML** to save a copy of the configuration .yml files on your local machine.

    The **Installer output** panel will display the locations of the saved files.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/write-yaml.png" >}}

4. Click **Apply Configuration** to apply the configuration to your namespace.

    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/apply-configuration.png" >}}

    Once the configuration has been applied you will see the message **Successfully applied all the configuration!**.

5. Click **Exit Installer** to return to the landing page.

### 4.4 Confirming Namespace Configuration

When using a connected cluster, its status will be shown as **Connected** in the Developer Portal when the namespace is configured correctly. You may need to click the **Refresh** button if the screen does not update automatically.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image22.png" >}}

## 5 Advanced Operator Configuration

Some advanced configuration options of the Mendix Operator are not yet available in the **Configuration Tool**.
These options can be changed by editing the `OperatorConfiguration` custom resource directly in Kubernetes.

Look at [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) to ensure that your planned configuration is supported by Mendix for Private Cloud.

To start editing the `OperatorConfiguration`, use the following commands (replace `{namespace}` with the namespace where the operator is installed):

For OpenShift:

```shell
oc -n {namespace} edit operatorconfiguration mendix-operator-configuration
```

For Kubernetes:

```shell
kubectl -n {namespace} edit operatorconfiguration mendix-operator-configuration
```

{{% alert color="warning" %}}
Changing options which are not documented here can cause the Mendix Operator to configure environments incorrectly. We recommend that you make a backup before applying any changes.
{{% /alert %}}

### 5.1 Endpoint (network) Configuration{#advanced-network-settings}

The OperatorConfiguration contains the following user-editable options for network configuration:

When using **Ingress** for network endpoints:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # Endpoint (Network) configuration
  endpoint:
    # Endpoint type: ingress, openshiftRoute or service
    type: ingress
    # Optional, can be omitted: Service annotations
    serviceAnnotations:
      # example: custom AWS CLB configuration
      service.beta.kubernetes.io/aws-load-balancer-backend-protocol: tcp
      service.beta.kubernetes.io/aws-load-balancer-ssl-cert: arn:aws:acm:eu-west-1:account:certificate/id
      service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"
    # Ingress configuration: used only when type is set to ingress
    ingress:
      # Optional, can be omitted: annotations which should be applied to all Ingress Resources
      annotations:
        # default annotation: allow uploads of files up 500 MB in the NGINX Ingress Controller
        nginx.ingress.kubernetes.io/proxy-body-size: 500m
        # example: use the specified cert-manager ClusterIssuer to generate TLS certificates with Let's Encrypt
        cert-manager.io/cluster-issuer: staging-issuer
        # example: deny access to /rest-doc
        nginx.ingress.kubernetes.io/configuration-snippet: |
          location /rest-doc {
            deny all;
            return 403;
          }
      # App URLs will be generated for subdomains of this domain, unless an app is using a custom appURL
      domain: mendix.example.com
      # Enable or disable TLS
      enableTLS: true
      # Optional: name of a kubernetes.io/tls secret containing the TLS certificate
      # This example is a template which lets cert-manager to generate a unique certificate for each app
      tlsSecretName: '{{.Name}}-tls'
      # Optional: specify the Ingress class name
      ingressClassName: alb
      # Optional, can be omitted : specify the Ingress path
      path: "/"
      # Optional, can be omitted : specify the Ingress pathType
      pathType: ImplementationSpecific
```

When using **OpenShift Routes** for network endpoints:

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # Endpoint (Network) configuration
  endpoint:
    # Endpoint type: ingress, openshiftRoute, or service
    type: openshiftRoute
    # OpenShift Route configuration: used only when type is set to openshiftRoute
    openshiftRoute:
      # Optional, can be omitted: annotations which should be applied to all Ingress Resources
      annotations:
        # example: use HSTS headers
        haproxy.router.openshift.io/hsts_header: max-age=31536000;includeSubDomains;preload
      # Optional: App URLs will be generated for subdomains of this domain, unless an app is using a custom appURL
      domain: mendix.example.com
      # Enable or disable TLS
      enableTLS: true
      # Optional: name of a kubernetes.io/tls secret containing the TLS certificate
      # This example is the name of an existing secret, which should be a wildcard matching subdomains of the domain name
      tlsSecretName: 'mendixapps-tls'
```

When using **Services** for network endpoints (without an Ingress or OpenShift route):

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # Endpoint (Network) configuration
  endpoint:
    # Endpoint type: ingress, openshiftRoute, or service
    type: service
    # Optional, can be omitted: the Service type
    serviceType: LoadBalancer
    # Optional, can be omitted: Service annotations
    serviceAnnotations:
      # example: annotations required for AWS NLB
      service.beta.kubernetes.io/aws-load-balancer-type: external
      service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip
      service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing
    # Optional, can be omitted: Service ports
    servicePorts:
      - 80
      - 443
```

You can change the following options:

* **type**: – select the Endpoint type, possible options are `ingress`, `openshiftRoute` and `service`; this parameter is also configured through the **Configuration Tool**
* **ingress**: - specify the Ingress configuration, required when **type** is set to `ingress`
* **openshiftRoute**: - specify the OpenShift Route configuration, required when **type** is set to `openshiftRoute`
* **annotations**: - optional, can be used to specify the Ingress or OpenShift Route annotations, can be a template: `{{.Name}}` will be replaced with the name of the CR for the Mendix app, and {{.Domain}} will be replaced with the application's domain name
* **serviceAnnotations**: - optional, can be used to specify the Service annotations, can be a template: `{{.Name}}` will be replaced with the name of the CR for the Mendix app, and {{.Domain}} will be replaced with the application's domain name
* **ingressClassName**: - optional, can be used to specify the Ingress Class name
* **path**: - optional, can be used to specify the Ingress path; default value is `/`
* **pathType**: - optional, can be used to specify the Ingress pathType; if not set, no pathType will be specified in Ingress objects
* **domain**: - optional for `openshiftRoute`, required for `ingress`, used to generate the app domain in case no app URL is specified; if left empty when using OpenShift Routes, the default OpenShift `apps` domain will be used; this parameter is also configured through the **Configuration Tool**
* **enableTLS**: - allows you to enable or disable TLS for the Mendix App's Ingress or OpenShift Route
* **tlsSecretName**: - optional name of a `kubernetes.io/tls` secret containing the TLS certificate, can be a template: `{{.Name}}` will be replaced with the name of the CR for the Mendix app; if left empty, the default TLS certificate from the Ingress Controller or OpenShift Router will be used
* **serviceType**: - can be used to specify the Service type, possible options are `ClusterIP` and `LoadBalancer`; if not specified, Services will be created with the `ClusterIP` type
* **servicePorts**: - can be used to specify a list of custom ports for the Service; if not specified, Services will use be created with port `8080`


{{% alert color="info" %}}
When switching between Ingress and OpenShift Routes, you need to [restart the Mendix Operator](#restart-after-changing-network-cr) for the changes to be fully applied.
{{% /alert %}}

### 5.2 Mendix App Deployment settings{#advanced-deployment-settings}

The OperatorConfiguration contains the following user-editable options for configuring Mendix app Deployments (Pods):

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
spec:
  # Optional: provide Mendix app Pods to get a Kubernetes Service Account token
  runtimeAutomountServiceAccountToken: true
  # Optional: annotations for Mendix app Pods
  runtimeDeploymentPodAnnotations:
    # example: inject the Linkerd proxy sidecar
    linkerd.io/inject: enabled
    # example: enable Prometheus metrics scraping
    prometheus.io/path: /metrics
    prometheus.io/port: '8900'
    prometheus.io/scrape: 'true'
```

You can change the following options:

* **runtimeAutomountServiceAccountToken**: – specify if Mendix app Pods should get a Kubernetes Service Account token; defaults to `false`; should be set to `true` when using Linkerd [Automatic Proxy Injection](https://linkerd.io/2.10/features/proxy-injection/) 
* **runtimeDeploymentPodAnnotations**: – specify default annotations for Mendix app Pods

### 5.3 Mendix app resource customization{#advanced-resource-customization}

The Deployment object that controls the pod of a given Mendix application contains user-editable options for fine-tuning the execution to the application's runtime resources.

The Deployment object as a name in the following format:
```
<internal environment name>-master
```

Below is an example of the Deployment definition of an app. In this example, the Deployment definition is called `b8nn6lq5-master`:

```yaml
apiVersion: apps/v1
kind: Deployment
# ...
# omitted lines for brevity
# ...
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 0
  # ...
  # omitted lines for brevity
  # ...
  template:
    metadata:
      # ...
      # omitted lines for brevity
      # ...
      creationTimestamp: null
      labels:
        app: b8nn6lq5
        component: mendix-app
        node-type: master
    spec:
      automountServiceAccountToken: false
      containers:
      - env:
        - name: M2EE_ADMIN_LISTEN_ADDRESSES
          value: 127.0.0.1
        - name: M2EE_ADMIN_PORT
          value: "9000"
        - name: M2EE_ADMIN_PASS
          valueFrom:
            secretKeyRef:
              key: adminpassword
              name: b8nn6lq5-m2ee
        image: image-registry.openshift-image-registry.svc:5000/test-app/b8nn6lq5
        imagePullPolicy: Always
        ports:
          - containerPort: 8080
          name: mendix-app
          protocol: TCP
        name: mendix
        livenessProbe:
          failureThreshold: 3
          httpGet:
          path: /
          port: mendix-app
          scheme: HTTP
          initialDelaySeconds: 60
          periodSeconds: 15
          successThreshold: 1
          timeoutSeconds: 1
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: mendix-app
            scheme: HTTP
          initialDelaySeconds: 5
          periodSeconds: 1
          successThreshold: 1
          timeoutSeconds: 1
        resources:
          limits:
            cpu: 1
            memory: 512Mi
          requests:
            cpu: 100m
            memory: 512Mi
# ...
# omitted lines for brevity
# ...
```

#### 5.3.1 Customize Liveness Probe to Resolve Crash Loopback Scenarios

The `liveness probe` informs the cluster whether the pod is dead or alive. If the pod fails to respond to the liveness probe, the pod will be restarted (this is called a `crash loopback`).

The `readiness probe`, on the other hand, is designed to check if the cluster is allowed to send network traffic to the pod. If the pod fails this probe, requests will no longer be sent to the pod.

{{% alert color="warning" %}}
The configuration of the **Readiness probe** does not help to resolve *crash loopback* scenarios. In fact increasing its parameters might degrade the performance of your app, since any malfunction or error recovery will take longer to be acknowledged by the cluster.
{{% /alert %}}

Let us now analyze the `liveness probe` section from the application deployment example, above:

```yaml
livenessProbe:
  failureThreshold: 3
  httpGet:
    path: /
    port: mendix-app
    scheme: HTTP
  initialDelaySeconds: 60
  periodSeconds: 15
  successThreshold: 1
  timeoutSeconds: 1
```

The following fields can be configured:

* `initialDelaySeconds` – the number of seconds after the container has started that the probe is initiated. Minimum value is 0.
* `periodSeconds` – how often (in seconds) to perform the probe. Default is 10 seconds. Minimum value is 1.
* `timeoutSeconds` – the number of seconds after which the probe times out. Default is 1 second. Minimum value is 1.
* `successThreshold` – the number of consecutive successes required before the probe is considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup Probes. Minimum value is 1.
* `failureThreshold` – the number of times Kubernetes will retry when a probe fails before giving up. Giving up in case of a liveness probe means restarting the container. Defaults to 3. Minimum value is 1.

{{% alert color="info" %}}
If we are deploying a large application that takes much longer to start than the defined 60 seconds, we will observe it restarting multiple times. To solve this scenario we must edit field `initialDelaySeconds` for the **Liveness probe** to a substantially larger value.
{{% /alert %}}

#### 5.3.2 Customize Container Resources: Memory and CPU

Let us now analyze the `resources` section from the example application deployment, above:

```yaml
resources:
  limits:
    cpu: 1
    memory: 512Mi
  requests:
    cpu: 100m
    memory: 512Mi
```

This section allows the configuration of the lower and upper resource boundaries, the `requests` and `limits` respectively.

The settings in the example above mean that

* the container will always receive at least the resources set in `requests`
* if the server node where a pod is running has enough of a given resource available the container can be granted resource than its `requests`
* a container will never be granted more than its resource `limits`

##### 5.3.2.1 Meaning of CPU

Limits and requests for CPU resources are measured in cpu units. One CPU, in this context, is equivalent to 1 vCPU/Core for cloud providers and 1 hyperthread on bare-metal Intel processors.

Fractional requests are allowed. For instance, in this example, we are requesting `100m`, which can be read as *one hundred millicpu*, and limiting to a maximum of `1` CPU (1000m).

A precision finer than 1m is not allowed.

##### 5.3.2.2 Meaning of Memory

Limits and requests for memory are measured in bytes. You can express memory as a plain integer or as a fixed-point number using one of these suffixes: E, P, T, G, M, K. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: `128974848`, `129e6`, `129M`, `123Mi`

For instance, in the example above, we are requesting and limiting memory usage to roughly **512MiB**.

{{% alert color="warning" %}}
Modifying the resource configuration should be performed carefully as that might have direct implications on the performance of your application, and the resource usage of the server node.
{{% /alert %}}

#### 5.3.3 Resource Definition via Operator Configuration Manifest

For a given namespace all the resource information is aggregated in the `mendix-operator-configuration` manifest. This centralizes and overrides all the configuration explained above. An example of the operator configuration manifest is given below.

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
# ...
# omitted lines for brevity
# ...
spec:
  sidecarResources:
    limits:
      cpu: 250m
      memory: 32Mi
    requests:
      cpu: 100m
      memory: 16Mi
  metricsSidecarResources:
    limits:
      cpu: 100m
      memory: 32Mi
    requests:
      cpu: 100m
      memory: 16Mi
  buildResources:
    limits:
      cpu: '1'
      memory: 256Mi
    requests:
      cpu: 250m
      memory: 64Mi
  runtimeResources:
    limits:
      cpu: 1000m
      memory: 512Mi
    requests:
      cpu: 100m
      memory: 512Mi
  runtimeLivenessProbe:
    initialDelaySeconds: 60
    periodSeconds: 15
  runtimeReadinessProbe:
    initialDelaySeconds: 5
    periodSeconds: 1
```

The following fields can be configured:

* `Liveness` and `readiness` probes  – these are used for all Mendix app deployments in the namespace. Therefore, any changes made in the Deployments will be discarded and overwritten with values from `OperatorConfiguration` resource
* `sidecarResources` –  this is used for all m2ee-sidecar containers in the namespace
* `metricsSidecarResources`: this is used for all m2ee-metrics containers in the namespace
* `runtimeResources`: this is used for `mendix-runtime` containers in the namespace (but this is overwritten if the Mendix app CRD has a resources block)
* `buildResources`  – this is used for the main container in `*-build` pods

### 5.4 Customize Registry ImageNameTemplate{#customize-registry-imagenametemplate}

ImageNameTemplate allows you to specify how the image name and tag are generated. It allows both use of OpenShift-style "repository per app" and ECR-style "tag per app". For example, a value of imageNameTemplate may be `registry.example.com/mendix-apps/{{.Name}}-{{.Version}}-{{.UnixTimestamp}}` which would generate an image for the build like `registry.example.com/mendix-apps/pgv9gw71-0.0.1.2-1640699175.392`

The imageNameTemplate is generated by mxpc-cli when you update the registry configuration.

{{% alert color="warning" %}}
Any manual changes you make to the imageNameTemplate in the manifest are overwritten when you update the registry configuration using mxpc-cli.
{{% /alert %}}

An example of the imageNameTemplate in the operator configuration manifest is given below.

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
    # …
spec:
  registry:
    imageNameTemplate: 'my-registry/{{.Name}}-{{.Version}}-{{.UnixTimestamp}}'
    pullURL: 'image-registry.openshift-image-registry.svc:5000'
    pushURL: 'image-registry.openshift-image-registry.svc:5000'
    type: openshift
  # …
```

You can customize the registry imageNameTemplate in OperatorConfiguration with these available variables:

* `{{.Name}}`: internal environment name.
* `{{.Generation}}`: value of the Build CR’s [Generation](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace#generation) attribute.
* `{{.Version}}`: value of sourceVersion in MendixApp CR. The value will be automatically set to the MDA version if an MDA is deployed from the Private Cloud Portal.
* `{{.UnixTimestamp}}`: current UNIX timestamp with at least millisecond precision e.g. 1640615972.897.
* `{{.Timestamp}}`: current timestamp in the following format 20211231.081224.789 for 2021-12-31 08:12:24.789.

### 5.5 Customize Runtime Metrics{#customize-runtime-metrics}

Mendix for Private Cloud provides a Prometheus API, which can be used to collect metrics from Mendix apps.

`runtimeMetricsConfiguration` allows you to specify the default metrics configuration for a namespace.
Any configuration values from `runtimeMetricsConfiguration` can be overridden for an environment using the `MendixApp` CR (see [Generating Metrics](/developerportal/deploy/private-cloud-monitor/#generating) for more details).

An example of the `runtimeMetricsConfiguration` in the operator configuration manifest is given below.

```yaml
apiVersion: privatecloud.mendix.com/v1alpha1
kind: OperatorConfiguration
    # …
spec:
  runtimeMetricsConfiguration:
    mode: native
    interval: "PT1M"
    mxAgentConfig: |-
      {
        "requestHandlers": [
          {
            "name": "*"
          }
        ],
        "microflows": [
          {
            "name": "*"
          }
        ],
        "activities": [
          {
            "name": "*"
          }
        ]
      }
    mxAgentInstrumentationConfig: |-
      {
        …
      }
  # …
```

You can set the following metrics configuration values:

* `mode`: metrics mode, `native` or `compatibility`. `native` mode is only available for Mendix versions 9.7 and above. See [Metrics Generation Modes](/developerportal/deploy/private-cloud-monitor/#metrics-generation-modes) in *Monitoring Environments in Mendix for Private Cloud* for more information.
* `interval`: Interval between Prometheus scrapes specified in ISO 8601 duration format (e.g. 'PT1M' would be an interval of one minute). This should be aligned with your Prometheus configuration. If left empty it defaults to 1 minute (matching the default Prometheus scrape interval). This attribute is only applicable when `mode` is `native`.
* `mxAgentConfig`: configuration for the [Java instrumentation agent](https://github.com/mendix/mx-agent); collects additional metrics such as microflow execution times; can be left empty to disable the instrumentation agent. This attribute is only applicable when `mode` is `native`.
* `mxAgentInstrumentationConfig`: instrumentation configuration for the [Java instrumentation agent](https://github.com/mendix/mx-agent); collects additional metrics such as microflow execution times; can be left empty to use the default instrumentation config. This attribute is only applicable when `mode` is `native`, and `mxAgentConfig` is not empty.

{{% alert color="warning" %}}
MxAgent is a [Java instrumentation agent](https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html) and is unrelated to the Mendix for Private Cloud Gateway Agent.
{{% /alert %}}

{{% alert color="info" %}}
To disable the Prometheus metrics API, remove the `runtimeMetricsConfiguration` section or set `mode` to an empty string.
{{% /alert %}}

For more information about collecting metrics in Mendix for Private Cloud, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).

### 5.6 Autoscaling

Mendix for Private Cloud is compatible with multiple types of Kubernetes autoscalers.

{{% alert color="warning" %}}
To optimize resource utilization, autoscaling can terminate running instances of an app.

When autoscaling scales down an app or Kubernetes node, microflows in affected pods will be terminated, and the terminating pod will no longer accept new HTTP connections.
{{% /alert %}}

#### 5.6.1 Cluster Autoscaling

The Kubernetes [cluster autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler) monitors resource usage and automatically adjusts the size of the cluster based on its resource needs.

Mendix for Private Cloud is compatible with cluster autoscaling. To install and enable cluster autoscaling, follow your cluster vendor's recommended way of configuring the cluster autoscaler.

#### 5.6.2 Horizontal Pod Autoscaling{#horizontal-autoscaling}

{{% alert color="info" %}}
You need to have the Mendix Operator version 2.4.0 or above installed in your namespace to use horizontal pod autoscaling.
{{% /alert %}}

[Horizontal pod autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) is a standard Kubernetes feature
and can automatically add or remove pods based on metrics, such as average CPU usage.

Enabling horizontal pod autoscaling allows you to increase processing capacity during peak loads and reduce resource usage during periods of low activity.
Horizontal pod autoscaling can be combined with cluster autoscaling, so that the cluster and environment are automatically optimized for the current workload.

To enable horizontal pod autoscaling for an environment, run the following command:

```shell
kubectl -n {namespace} autoscale mendixapp {envname} --cpu-percent=50 --min=1 --max=10
```

Replace `{namespace}` with the namespace name, and `{envname}` with the MendixApp CR name (the environment internal name).
Use `--cpu-percent` to specify the target CPU usage, and `--min` `--max` to specify minimum and maximum number of replicas.

To configure additional horizontal pod autoscaling, run the following command:

```shell
kubectl -n {namespace} edit horizontalpodautoscaling {envname}
```

Replace `{namespace}` with the namespace name, and `{envname}` with the MendixApp CR name (the environment internal name).
The Kubernetes [Horizontal pod autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) documentation explains additional available autoscaling options.

{{% alert color="warning" %}}
The Mendix Runtime is based on Java, which preallocates memory and typically never releases it.
Memory-based metrics should not be used for autoscaling.
{{% /alert %}}

When an environment is scaled (manually or automatically), it will not be restarted. Adjusting the number of replicas will not cause downtime - as long as the number of replicas is greater than zero.
Scaling an environment up (increasing the number of replicas) adds more pods - without restarting any already running pods; once the additional pods become available, they will start receiving HTTP(S) requests.
Scaling an environment down (decreasing the number of replicas) removes some of the running pods - without restarting remaining pods; all HTTP(S) traffic will be routed to the remaining pods.

#### 5.6.3 Vertical Pod Autoscaling

[Vertical pod autoscaling](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) can automatically configure CPU and memory resources and requirements for a pod.

{{% alert color="warning" %}}
The Mendix Runtime is based on Java, which preallocates memory and typically never releases it.
Memory-based metrics should not be used for autoscaling.
{{% /alert %}}

Mendix Operator version 2.4.0 or above has the APIs required by the vertical pod autoscaler.

{{% alert color="warning" %}}
Vertical pod autoscaling is still an experimental, optional Kubernetes addon.

We recommend using *horizontal* pod autoscaling to adjust environments to meet demand.

Vertical pod autoscaling cannot be combined with horizontal pod autoscaling.
{{% /alert %}}

## 6 Cluster and Namespace Management

Once it is configured, you can manage your cluster and namespaces through the Developer Portal.

### 6.1 Cluster Overview {#overview}

Go to the Cluster Manager page by clicking **Cluster Manager** in the top menu of the **Clouds** page of the Developer Portal.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/cluster-manager.png" >}}

From this page you can see a summary of your clusters with all their namespaces and an indication of the namespace status and how long it has been running (runtime).

#### 6.1.1 Managing the Cluster

Here you can perform the following actions on the entire cluster:

* Delete the cluster by clicking the delete icon
* Rename the cluster or edit its description by clicking the edit icon
* Invite another cluster manager

<a name="actvity-logs"></a>You can also see the activities logged for all you clusters by clicking **Activity** in the [cluster overview](#overview) page. This shows the following:

* When a cluster has been added
* When a cluster description is added
* When name of the cluster is changed
* When cluster description is changed

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/cluster-activity-logs.PNG" >}}

{{% alert color="info" %}}
When you add a cluster manager, the user will have most of the access which the original cluster manager had, such as the abilities to add a namespace, add a member, change the permissions of the cluster member, and delete another cluster manager. 

The only limitations are that:

* an added cluster manager will not be able to operate on or manage the environments created in the namespaces which are already in the cluster — they need to be added as a member of the namespace if they want to manage environments in the namespaces
* cluster managers who are added to the cluster cannot remove the cluster manager who created the cluster
{{% /alert %}}

{{% alert color="info" %}}
When you delete a cluster, this removes the cluster from the Developer Portal. However, it will not remove the cluster from your platform. You will need to explicitly delete the cluster using the tools provided by your platform.
{{% /alert %}}

### 6.2 Namespace Management

If you are a member of a namespace, you can also manage a namespace in the cluster.

Click the **Details** button for the namespace you want to manage.

On the namespace management page, there are a number of tabs which allow you to manage aspects of your namespace :

* Apps
* Members
* Operate
* Plans
* Installation
* Additional information

See the sections below for more information.

You can also delete your namespace from the cluster manager by clicking the delete icon in the top right.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image25.png" >}}

If there are any environments associated with the namespace, you cannot delete the namespace until the environments associated with it are deleted.

When you delete a namespace, this removes the namespace from the cluster in the Developer Portal. However, it will not remove the namespace from your platform. You will need to explicitly delete the namespace using the tools provided by your platform.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image26.png" >}}

You can also see an activity log containing the following information for all namespaces within the cluster:

* When a namespace has been added
* When a namespace has been deleted
* When a cluster manager has been added
* When a cluster manager invitation is removed
* When a cluster manager accepts the invitation
* When a cluster manager is removed from the cluster
* When a new database plan is added in a namespace
* When a database plan is deactivated
* When a new storage plan is added in a namespace
* When a storage plan is deactivated
* When Metrics/Alerts/Logs/Backups URLs are added in the namespace
* When Metrics/Alerts/Logs/Backups URLs are removed from the namespace
* When Metrics/Alerts/Logs/Backups URLs are changed in the namespace
* When a user is invited as a namespace member
* When a user invitation for namespace member is removed
* When a user accepts the invitation as a namespace member
* When a user is removed as a namespace member
* When user's permission is changed in the namespace

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/namespace-activity-logs.PNG" >}}

#### 6.2.1 Apps

The **Apps** tab of namespace details in the cluster manager page lists all the app environments which are deployed to this namespace.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image27.png" >}}

If you are a team member of the app, click **Details** to go to the *Environment Details* page for that app.

{{% alert color="info" %}}
You can only see the environment details of an app if you are a member of the team with the appropriate authorization.
{{% /alert %}}

If you are a cluster administrator, you can also click **Configure** to configure the environment by adding annotations for pods, ingress, and service.

##### 6.2.1.1 Configure Environment

You can add, edit, and delete annotations for your environment.

{{% alert color="info" %}}
You need to have the Mendix Operator version 1.12.0 or above installed in your namespace to configure all the available annotations. You need version 1.11.0 to use pod annotations.
{{% /alert %}}

To add a new annotation, do the following.

1. Click **Add**.
2. Choose the **Annotation type** from the dropdown.
3. Enter the **Key** and the **Value** for the annotation.
4. Click **Save**.

You can also **Edit** or **Delete** an existing annotation by selecting it and clicking the appropriate button.

{{% alert color="warning" %}}
The new value for the annotation will only be applied when the application is restarted.
{{% /alert %}}

#### 6.2.2 Members

By default, the cluster manager, who created the cluster in Mendix, and anyone added as a cluster manager has full administration rights to the cluster and its namespaces. These cluster managers will also need to be given the appropriate permissions on the Kubernetes or OpenShift Cluster. The administration rights are:

* Add and delete namespaces
* Add, activate, or deactivate plans
* Invite and manage users

The following rights are available to the cluster creator, and members of a namespace with appropriate authorization:

* Set up operating URLs for the namespace
* View all environments in the namespace
* Manage own environments – user can create and manage an environment in any namespace in the cluster

The following actions require the appropriate access to the namespace **and** access to the app environment as a team member with appropriate authorization:

* Deploy App – user can deploy a new app to the environment or start and stop existing apps
* Scale App – user can change the number of replicas
* Edit App Constants
* Manage App Scheduled Events
* View App Logs
* View App Alerts
* View App Metrics
* Manage App Backups
* Manage Debugger
* Manage TLS configurations
* Manage Custom Runtime Settings
* Manage Log levels

The **Members** tab allows you to manage the list of members of the namespace and control what rights they have.

##### 6.2.2.1 Adding Members

You can invite additional members to the namespace, and configure their role depending on what they should be allowed to do.

1. The **Members** tab displays a list of current members (if any).

2. Click **Invite Member**.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image28.png" >}}

3. Enter the **Email** of the person you want to invite.

4. Give them the rights they need. This can be:
    
    1. **Developer** – a standard set of rights needed by a developer, these are listed on the screen
    2. **Administrator** – a standard set of rights needed by an administrator, these are listed on the screen
    3. **Custom** – you can select a custom set of rights by checking the box next to each role you want to give to this person

5. Click **Send Invite** to send an invite to this person.
    
    {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image29.png" >}}

6. The user will receive an email and will be required to follow a link to confirm that they want to join this namespace. They will need to be logged in to Mendix when they follow the confirmation link.

##### 6.2.2.2 Editing & Removing Members

You can change the access rights for, or completely remove, existing members.

1. Click **Edit** next to the member you want to change.

2. Either:
    
    1. Make changes and click **Save**.
    
    2. Click **Remove member** to remove this member completely. You will be asked to confirm this action.
        
        {{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image30.png" >}}

#### 6.2.3 Operate {#operate}

The **Operate** tab allows you to add a set of links which are used when users request an operations page for their app in the Developer Portal.
The following pages can be configured:

* Metrics
* Alerts
* Logs
* Backups

The specification of these pages is optional.

Open the **Operate** tab, enter the URLs relevant to your namespace, and click **Save** for each one.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image32.png" >}}

#### 6.2.4 Plans

The **Plans** tab shows you the database and storage plans which are currently configured for your namespace.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image33.png" >}}

##### 6.2.4.1 Deactivating a Plan

Click **Deactivate** next to the name of the plan you wish to deactivate. You cannot remove plans from within the cluster manager, but you can deactivate them to ensure that developers cannot create environments using the plan. Any environments currently using the plan will not be affected by this setting.

##### 6.2.4.2 Activating a Plan

Click **Activate** next to the name of the plan you wish to activate. The plan can then be used by developers when they create an environment to deploy their apps.

#### 6.2.5 Installation

The **Installation** tab shows you the Configuration Tool which you used to create the namespace, together with the parameters which are used to configure the agent.

You can use the Configuration Tool again to change the configuration of your namespace by pasting the command into a command line terminal as described in [Running the Configuration Tool](#running-the-tool), above.

You can also download the Configuration Tool again, if you wish.

#### 6.2.6 Additional Information

This tab shows information on the versions of the various components installed in your namespace.

## 7 Current Limitations

### 7.1 Storage Provisioning

If the Operator fails to provision or deprovision storage (a database or file storage), it will not retry the operation. If there is a failed `*-database` or `*-file` pod, you'll need to do the following:

1. Check the failed pod logs for the error message.
2. Troubleshoot and fix the cause of this error.
3. Delete the failed pod to retry the process again.

### 7.2 Restart Required When Switching Between Ingress and OpenShift Route {#restart-after-changing-network-cr}

Starting with Mendix Operator version 1.5.0, the operator will monitor only one network resource type: Ingress or OpenShift route.

If you switch between Ingress and OpenShift Route, you will need to restart the Mendix Operator so that it can monitor the right network resource (replace `{namespace}` with the namespace where the Operator is installed). This can be done as follows:

For OpenShift:

```shell
oc -n {namespace} scale deployment mendix-operator --replicas=0
oc -n {namespace} scale deployment mendix-operator --replicas=1
```

For Kubernetes:

```shell
kubectl -n {namespace} scale deployment mendix-operator --replicas=0
kubectl -n {namespace} scale deployment mendix-operator --replicas=1
```

### 7.3 Terminal limitations {#terminal-limitations}

#### 7.3.1 Windows

The Windows version of the Configuration Tool must be run in a terminal that supports the Windows console API and has mouse support. PowerShell and the Windows Command Prompt are supported.

{{% alert color="info" %}}
When running PowerShell or the Windows Command Prompt from the [new Windows Terminal](https://www.microsoft.com/en-US/p/windows-terminal/9n0dx20hk701), mouse clicks are [not supported](https://github.com/microsoft/terminal/issues/376).
Run PowerShell or the Windows Command Prompt terminal as a standalone app.
{{% /alert %}}

{{% alert color="warning" %}}
Some previously released versions of Mendix for Private Cloud required using Git Bash in Windows.
Starting from Mendix Operator version 1.9.0, Git Bash is no longer required.
{{% /alert %}}

#### 7.3.2 Linux and macOS

When running the installation tool over SSH, make sure that the SSH client supports terminal emulation and has mouse support enabled.

`ssh.exe` in Windows doesn't support mouse click forwarding and another SSH client should be used instead, such as [MobaXterm](https://mobaxterm.mobatek.net/) or [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

## 8 Troubleshooting

### 8.1 Status Reporting

This section covers an issue which can arise where Mendix cannot recover automatically and manual intervention may be required.

Under some circumstances changes in the status of the cluster, namespaces, and environments will not be updated automatically. To ensure you are seeing the current status, you may need to click the **Refresh** button on the screen (not the browser page refresh button).

### 8.2 Windows PowerShell

This section covers how to troubleshoot an issue you may find when running the installation tool with Windows PowerShell Terminal.

### 8.2.1 Enable Copy and Paste in Windows PowerShell

If you are unable to copy and paste in the installation tool, you may need to enable it from the Windows PowerShell Properties. Open the **Properties** menu by right clicking the header or by pressing <kbd>Alt</kbd> + <kbd>Space</kbd>.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image34.png" >}}

Select the **Options** tab and enable **Use Ctrl+Shift+C/V as <u>C</u>opy/Paste**

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image35.png" >}}

You can now copy and paste with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> and <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> in the terminal.

### 8.2.2 Unable to Click a Button

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image36.png" >}}

If you highlight a button instead of clicking the button, you may need to disable the **Quick Edit Mode** from the Windows PowerShell Properties.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/image37.png" >}}

After disabling the option you need to enable the new settings. You can do this by navigating to other page by pressing a shortcut key, or reopening the installer tool by closing it with **<kbd>Ctrl</kbd>+<kbd>C</kbd>** and reopening the tool with the installation command.

## 9 Containerized Mendix App Architecture {#containerized-architecture}

Within your cluster you can run one, or several, Mendix apps. Each app runs in an environment, and each environment is in a namespace. You can see the relationship between the Mendix environments and the Kubernetes namespaces in the image below.

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/mx4pc-containerized-architecture.png" >}}

To ensure that every app deployed to a namespace has a unique name, the environment will have an **Environment UUID** added to the environment name when it is deployed to ensure that it is unique in the project. This also ensures the app cannot have the same name as the Mendix tools used to deploy the app. See [Deploying a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-deploy/) for more information.
