---
title: "Configuring External Secret Management with AWS Secret Manager"
url: /private-mendix-platform/configure-aws-secret-manager/
description: "Documents the configuration of AWS Secret Manager for the Private Mendix Platform."
weight: 40
---

## Introduction

The Private Mendix Platform offers enhanced security and flexibility for credential management by supporting [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) as an external secret management solution, alongside the traditional database storage option. In the legacy database storage approach, the credentials are encrypted and stored directly in the Private Mendix Platform database. With AWS Secrets Manager, credentials are instead stored in AWS Secrets Manager and accessed securely via IAM roles for improved security, centralized management, and compliance with enterprise security policies. This document describes how you can configure AWS Secrets Manager integration for your Private Mendix Platform project.

## Prerequisites

Before configuring AWS Secrets Manager integration, prepare the following:

* An AWS account with appropriate permissions to create and manage secrets
* IAM permissions to create roles and policies for AWS Secrets Manager access
* Access to the PPrivate Mendix Platform project admin panel with administrative privileges
* Basic knowledge of AWS services, IAM roles, and Kubernetes (if using EKS deployment)
* An existing EKS cluster (if your PMP deployment runs on Kubernetes)

## Configuring External Secret Management

To configure external secret management, you must first create a secret in AWS Secret Manager, configure the IAM permissions and service accounts, and then configure the required credentials in the Private Mendix Platform administrator panel. For more information, refer to the sections below.

### Creating a Secret

To create a secret in AWS Secret Manager, perform the following steps:

1. Log in to the AWS Management Console.
2. Navigate to the **AWS Secrets Manager** service.
3. Click **"Store a new secret**.
4. Choose the type of secret as **Other type of secret**.
5. Select the **JSON** format for storing secrets.
6. Enter the key-value pairs for your secrets using the Private Mendix Platform [naming convention](#naming-convention).
7. Click **Next**.
8. Enter a descriptive name for your secret, for example, *PMP-Production-Credentials*.
9. Optional: Add a description and tags for better organization and compliance tracking.
10. Click **Next** to review your secret settings.
11. Review the details and click **Store** to create the secret.

{{% alert color="info" %}}
Make note of the secret name and ARN. You will need these when configuring Private Mendix Platform to use the secret.
{{% /alert %}}

#### Naming Convention for Key Properties {#naming-convention}

When creating a property to use as a key for external secret storage, use the following naming conventions:

* All the key names are read-only. You should not change them.
* Create the keys in the external secret storage with the same names as in the Private Mendix Platform configuration.
* The mappings are as follows:

    * VCS

        * Bitbucket

            * **VCS.BitbucketProjectAdminPAT** - Personal access token for the Bitbucket project admin
            * **VCS.BitbucketAdminPassword** - Password for the Bitbucket admin user

        * GitLab

            * **VCS.GitlabGroupOwnerPAT** - Personal access token for the GitLab group owner
            * **VCS.GitlabAdminPAT** - Personal access token for the GitLab admin

        * GitHub

            * **VCS.GithubOrgOwnerPAT** - Personal access token for the GitHub organization owner
            * **VCS.GithubAdminPAT** - Personal access token for the GitHub admin
            * **VCS.GithubEnterpriseClientSecret** - Client secret for the GitHub Enterprise app

        * Azure

            * **VCS.AzureDevOpsOrgAdminPAT** - Personal access token for the Azure DevOps organization owner
            * **VCS.AzureAuthSecret** - Currently unused

    * Kubernetes Build Settings

        * BuildPackage

            * fileServerBasic
               
                * **BuildPackage.FileBasicAuthPassword** - Password for the file server

            * AwsAKSK

                * **BuildPackage.AwsSecretAccessKey** - AWS secret access key for the file server

        * RuntimeBaseImage

            * privateRegistry

                * **RuntimeBaseImage.PrivateRegistryPassword** - Base image for the runtime

            * S3compatibleAccessKey

                * **RuntimeBaseImage.S3CompatibleAccessKey** - S3-compatible access key for the base image

        * MDAStorage

            * fileServerBasic

                * **MDAStorage.FileBasicAuthPassword** - Password for the file server

            * awsAKSK

                * **MDAStorage.AwsSecretAccessKey** - AWS secret access key for the MDA storage

        * OCIRegistry

            * privateRegistry

                * **OCIRegistry.PrivateRegistryPassword** - Password for the private registry

            * S3compatibleAccessKey

                * **OCIRegistry.S3CompatibleAccessKey** - S3 compatible access key for the OCI registry

    * Build Cluster Settings

        * **kubernetesConfigureToken**
        * **BuildCluster.KubernetesConfigureToken** - Token for the Kubernetes cluster configuration
        * **JenkinsConfigureAPIToken**
        * **CIAdmin.JenkinsConfigureAPIToken** - Token for the Jenkins configuration
        * **CIAdmin.JenkinsTriggerAuthToken** - Token for the Jenkins trigger configuration
        * **CIAdmin.AzureOrgAdminPAT** - Personal access token for the Azure DevOps configuration
        * **CIAdmin.AzureBlobStorageToken** - SAS token for the Azure Blob Storage
        * **CIAdmin.AzureAwsS3SK** - Name of the Azure DevOps organization

    * Cluster Manager

        * **ClusterManager.KubernetesApiToken** - Token for the Kubernetes admin user
        * **ClusterSettings.KubernetesAdminPassword** - Password for the Kubernetes admin user
        * **ClusterSettings.GrafanaAPIKey** - Password for the Grafana admin user
        * **ClusterSettings.MDAAWSS3AccessKey** - Password for the Prometheus admin user
        * **ClusterSettings.OCIRegistryPassword** - Password for the Prometheus admin user

    * Marketplace

        * **Marketplace.ImportCDNPassword** - Personal access token for the Marketplace admin

    * Email

        * **Email.SMTPPassword** - Password for the SMTP server

The following is a JSON template. Copy this template into your secret, and set the values that you want to use. Leave those you do not want to use empty.

```json
{
  "VCS": {
    "BitbucketProjectAdminPAT": "",
    "BitbucketAdminPassword": "",
    "GitlabGroupOwnerPAT": "",
    "GitlabAdminPAT": "",
    "GithubOrgOwnerPAT": "",
    "GithubAdminPAT": "",
    "GithubEnterpriseClientSecret": "",
    "AzureDevOpsOrgAdminPAT": "",
    "AzureAuthSecret": ""
  },
  "BuildPackage": {
    "FileBasicAuthPassword": "",
    "AwsSecretAccessKey": ""
  },
  "RuntimeBaseImage": {
    "PrivateRegistryPassword": "",
    "S3CompatibleAccessKey": ""
  },
  "MDAStorage": {
    "FileBasicAuthPassword": "",
    "AwsSecretAccessKey": ""
  },
  "OCIRegistry": {
    "PrivateRegistryPassword": "",
    "S3CompatibleAccessKey": ""
  },
  "BuildCluster": {
    "KubernetesConfigureToken": ""
  },
  "CIAdmin": {
    "JenkinsConfigureAPIToken": "",
    "JenkinsTriggerAuthToken": "",
    "AzureOrgAdminPAT": "",
    "AzureBlobStorageToken": "",
    "AzureAwsS3SK": ""
  },
  "ClusterManager": {
    "KubernetesApiToken": ""
  },
  "ClusterSettings": {
    "KubernetesAdminPassword": "",
    "GrafanaAPIKey": "",
    "MDAAWSS3AccessKey": "",
    "OCIRegistryPassword": ""
  },
  "Marketplace": {
    "ImportCDNPassword": ""
  },
  "Email": {
    "SMTPPassword": ""
  }
}
```

### Configuring IAM Permissions and Service Accounts

Private Mendix Platform uses [IRSA (IAM Roles for Service Accounts)](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) to securely access AWS Secrets Manager without storing AWS credentials. This provides a secure, auditable way to access secrets. To enable this functionality, you must first create an [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html), and then configure the service account.

#### Creating an IAM Role

To create an IAM role, perform the following steps:

1. Navigate to the IAM service in the AWS Management Console.
2. Click **Create role** and configure the following:

    * **Trusted entity** - Select **Web identity**
    * **Identity provider** - Choose your EKS cluster's OIDC provider
    * **Audience** - `sts.amazonaws.com`

3. Click **Next** to proceed to permissions.
4. Create or attach a custom policy with the following permissions:

    ```yaml
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "secretsmanager:GetSecretValue",
                    "secretsmanager:DescribeSecret"
                ],
                "Resource": "arn:aws:secretsmanager:*:*:secret:PMP-*"
            }
        ]
    }
    ```

5. Name the role, for example, *PMP-SecretsManager-Role*.
6. Make a note of the **Role ARN** for the next steps.

#### Configuring the EKS Service Account

To configure the EKS service account, perform the following steps:

1. Navigate to your EKS cluster in the AWS Management Console.
2. In the **Configuration** tab, select **Service accounts**.
3. Click **Create** to create a new service account.
4. Enter a name for the service account, for example, *pmp-secrets-access*.
5. Under **IAM role**, select the role you created above.
6. Click **Create** to finalize the service account creation.
7. Update your Kubernetes deployment to use the new service account by adding the following annotation to your deployment YAML:

    ```text
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: pmp-deployment
        annotations:
            eks.amazonaws.com/role-arn: arn:aws:iam::<your-account-id>:role/pmp-secret-access
    spec:
        template:
            spec:
                serviceAccountName: pmp-secret-access
    ```

8. Apply the changes to your Kubernetes cluster using the following command: `kubectl apply -f <your-deployment-file>.yaml`.
9. Verify that the service account is correctly configured by checking the logs of your application.

    It should be able to access the secrets stored in AWS Secret Manager.

### Configuring the Credentials

Private Mendix Platform supports multiple secret storage backends. You can configure different types of credentials (VCS PAT, email server credentials, and so on) to use your preferred secret management solution.

#### Example Configuration - AWS Secrets Manager and VCS PAT

The following example shows how you can configure Private Mendix Platform to work with AWS Secrets Manager and VCS PAT.

1. Navigate to the Private Mendix Platform administrator panel.
2. Go to the **Version Control** settings.
3. Select the service which you want to configure (for example, GitHub, GitLab, or Bitbucket).
4. Enter all required configuration details.
5. In the **Credentials** section, select **AWS Secrets Manager**.
6. Enter the name of the secret that you created earlier, for example, *PMP-Credentials*.

    The **Key name** field displays the auto-generated key path in read-only format.

7. Ensure that your AWS Secrets Manager secret contains the credential using the proper key structure.

    For example, if you are using Bitbucket, the key name for `Project Admin PAT` would be `VCS.BitbucketProjectAdminPAT`, where `VCS` is the module name, and `BitbucketProjectAdminPAT` is the credential name.

    The secret template contains a sample key structure which you can use:

    ```text
        {  //...other keys
            "VCS": {
                // ...other keys
                "BitbucketProjectAdminPAT": "your-bitbucket-pat",
                // ...other keys
                },
            // ...other keys
        }
    ```

8. Repeat the process for other credentials as needed, ensuring you follow the naming conventions for each service.

## Storing the Credentials Directly in the Database

Instead of using the AWS Secret Manager, you can still use the legacy option to store the credentials in the Private Mendix Platform database. To do this, you must select **Database** from the storage options dropdown, and then enter the credentials directly in an input field. The credentials are encrypted and stored in the Private Mendix Platform database.
