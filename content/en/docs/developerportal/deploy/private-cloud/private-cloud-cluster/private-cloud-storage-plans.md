---
title: "Storage plans"
url: /developerportal/deploy/private-cloud-storage-plans/
description: "Describes how to configure storage plans in Mendix for Private Cloud"
weight: 10
tags: ["Private Cloud", "Storage", "Database", "File", "S3", "Minio", "Postgres", "Azure"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---


## 1 Introduction




## 2 Database Plans{#database}

A database plan tells the Operator how the Mendix app needs to connect to a database when it is deployed. Although the database plan might be valid, there also has to be a database instance for it to connect to. This database instance may be created when the database plan is applied, or it may be an existing database instance which the database plan identifies.

{{% alert color="warning" %}}
The database plan does not include any functionality for backing up or restoring data on your database. It is your responsibility to ensure that appropriate provision is made for backing up and restoring your database using the tools provided by your database management system and/or cloud provider.
{{% /alert %}}

Give your plan a **Name** and choose the **Database Type**. See the information below for more help in setting up plans for the different types of database which are supported by Mendix for Private Cloud.

Once you have entered the details you can apply two validation checks by clicking the **Validate** and **Connection Validation** buttons:

* **Validate** – checks that you have provided all the required values and that they are in the correct format
* **Connection validation** –  checks whether the specified storage plan has been successfully created — this does not guarantee that the storage *instance* will be created successfully when the configuration is applied

{{< figure src="/attachments/developerportal/deploy/private-cloud/private-cloud-cluster/database-plan-config.png" alt="Database Plan Configuration" >}}

{{% alert color="info" %}}
You cannot create multiple database plans at the same time. Run the configuration tool multiple time to apply several database plans.
{{% /alert %}}

The following **Database Types** are supported:

* PostgreSQL
* Ephemeral (non-persistent)
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
