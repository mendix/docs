---
title: "Configuring External Secret Management with Azure Key Vault"
url: /private-mendix-platform/configure-azure-key-vault/
description: "Documents the configuration of Azure Key Vault for the Private Mendix Platform."
weight: 40
---

## Introduction

The Private Mendix Platform offers enhanced security and flexibility for credential management by supporting [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault) as an external secret management solution, alongside the traditional database storage option. In the legacy database storage approach, the credentials are encrypted and stored directly in the Private Mendix Platform database. With Azure Key Vault, credentials are instead stored in a secure vault and accessed securely via for improved security, centralized management, and compliance with enterprise security policies. This document describes how you can configure Azure Key Vault integration for your Private Mendix Platform project.

## Prerequisites

Before configuring Azure Key Vault integration, prepare the following:

* An Azure subscription with appropriate permissions to create and manage Key Vaults.
* Permissions in Azure Active Directory (Azure AD) to create User-Assigned Managed Identities and grant role assignments.
* Access to the Private Mendix Platform project admin panel with administrative privileges.
* Basic knowledge of Azure services, Azure AD, and Kubernetes (if using AKS deployment).
* An existing AKS (Azure Kubernetes Service) cluster with the OIDC Issuer feature enabled.

## Configuring External Secret Management

To configure external secret management, you must first create a Key Vault and store your sensitive credentials as secrets, configure Azure AD Workload Identity, and then configure the required credentials in the Private Mendix Platform administrator panel. For more information, refer to the sections below.

### Creating a Secret

To create a secret in Azure Key Vault, perform the following steps:

1. Log in to the Azure Portal.
2. Navigate to the **Key Vaults** service.
3. Click **Create** and configure a new Key Vault:

    1. Select your **Subscription** and **Resource Group**.
    2. Enter a Key Vault name (for example, *PMP-Production-Vault*). This name must be globally unique.
    3. Select a **Region**.
    4. On the **Access configuration** tab, select **Azure role-based access control (RBAC)** as the permission model.

4. Review and create the Key Vault.
5. Once deployed, navigate to your new Key Vault.
6. Go to the **Secrets** section and click **Generate/Import**.
7. Enter a **Name** for your secret (for example, *PMP-Credentials*).
8. Click **Create** to store the secret.

{{% alert color="info" %}}
Make note of the Vault Name (for example, *PMP-Production-Vault*). You will need this when configuring Private Mendix Platform.
{{% /alert %}}

#### Naming Convention for Key Properties {#naming-convention}

When creating the JSON structure for your secret, you must use a flat key-value format. The key names use a hyphen to separate the module from the credential name (for example, *Email-SMTPPassword*).

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

        * **BuildCluster.KubernetesConfigureToken** - Token for the Kubernetes cluster configuration
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

### Configuring Azure AD Workload Identity

Private Mendix Platform uses Azure AD Workload Identity to securely access Azure Key Vault without storing credentials. This requires creating a User-Assigned Managed Identity, granting it permissions to the Key Vault, and linking it to the Kubernetes Service Account used by the Private Mendix Platform.

#### Creating a User-Assigned Managed Identity

To create a User-Assigned Managed Identity, perform the following steps:

1. In the Azure Portal, search for and select **Managed Identities**.
2. Click **Create**.
3. Select your **Subscription** and **Resource Group**.
4. Choose a **Region**.
5. Enter a **Name** (for example, *PMP-KeyVault-Identity*).
6. Review and click **Create**.
7. Once deployed, navigate to the new identity. 
8. From the **Overview** page, make note of the **Client ID**. This will be needed later to configure the service account.

#### Grant the Managed Identity Access to Key Vault

To grant the Managed Identity access to the Key Vault, perform the following steps:

1. Navigate to the Key Vault you created earlier.
2. Go to the **Access control (IAM)** section.
3. Click **Add > Add role assignment**.
4. Select the **Key Vault Secrets User** role. This role allows Get and List operations for secrets.
5. Click **Next**. 
6. For **Assign access to**, select **Managed identity**.
7. Click **Select members** and search for the **User-Assigned Managed Identity** you created (for example, **PMP-KeyVault-Identity**).
8. Select the identity, and then click **Review + assign**.

#### Configuring the Federated Identity

To configure the federated identity, perform the following steps:

1. Navigate back to your User-Assigned Managed Identity (for example, **PMP-KeyVault-Identity**) in the Azure Portal.
2. Go to the **Federated credentials** section.
3. Click **Add credential**.
4. From the **Federated credential scenario** list, select **Kubernetes accessing Azure resources**.
5. Enter the following details:

    * **Kubernetes namespace** - The namespace where your Private Mendix Platform is deployed (for example, **pmp-prod**).
    * **Service account name** - The name of the Kubernetes service account your PMP deployment will use (for example, **pmp-secret-accessor**).
    * **Issuer** - The OIDC Issuer URL of your AKS cluster.

Click **Add**.

#### Modifying the Operation Configuration

For more information about advanced configuration settings, see [Advanced Operator Configuration](/developerportal/deploy/private-cloud-cluster/#advanced-operator-configuration).

To modify the configuration, perform the following steps:

1. Update the configuration to [use the service token](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-deployment-settings). 

    Set `runtimeAutomountServiceAccountToken: true` to allow Mendix app pods to get a Kubernetes Service Account token.

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    spec:
    # Optional: provide Mendix app Pods to get a Kubernetes Service Account token
    runtimeAutomountServiceAccountToken: true
    ```

2. Add a custom pod label which informs the Operator to use workload identities. For more information, see [General Pod Labels](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#general-pod-labels).

    ```text
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    spec:
    # ...
    # Other configuration options values
    # Optional: custom pod labels
    customPodLabels:
        # Optional: general pod labels (applied to all app-related pods)
        general:
        # Example: enable Azure Workload Identity
        azure.workload.identity/use: "true"
    ```

#### Configuring the Kubernetes Service Account

To enable Azure AD Workload Identity, the Kubernetes Service Account used by your Private Mendix Platform application needs specific annotations to link it to the Azure User-Assigned Managed Identity. You have two options: use a dedicated custom Service Account or use the existing default Service Account in your application's namespace.

Using a Custom Service Account is recommended for better isolation. This involves creating a new Service Account specifically for your Mendix application to access secrets. The default service account already exists in every Kubernetes namespace. It's simpler but provides less isolation if other applications in the same namespace also use the default Service Account.

To configure the Kubernetes service account, perform the following steps:

1. Create a Kubernetes service account with the name you specified above (for example, **pmp-secret-accessor**).
2. Annotate this service account to link it to your User-Assigned Managed Identity.

    ```text
    kubectl -n <{Kubernetes namespace}> create serviceaccount <{environment name}>
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> privatecloud.mendix.com/environment-account=true
    kubectl -n <{Kubernetes namespace}> annotate serviceaccount <{environment name}> azure.workload.identity/client-id=<{managed identity client id}>
    ```

3. Apply this service account to your cluster by using the following command: `kubectl apply -f <your-service-account-file>.yaml`.
4. Update your Private Mendix Platform deployment YAML to use this service account:

    ```text
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: pmp-deployment
    spec:
        template:
            spec:
                serviceAccountName: pmp-secret-accessor
    ```

5. Apply the changes to your deployment by using the following command: `kubectl apply -f <your-deployment-file>.yaml`.

### Configuring the Credentials
 
Private Mendix Platform supports multiple secret storage backends. You can configure different types of credentials (VCS PAT, email server credentials, and so on) to use your preferred secret management solution.

#### Example Configuration - Azure Key Vault and VCS PAT
 
The following example shows how you can configure Private Mendix Platform to work with Azure Key Vault and VCS PAT.

1. Navigate to the Private Mendix Platform administrator panel.
2. Go to the **Version Control** settings.
3. Select the service which you want to configure (for example, GitHub, GitLab, or Bitbucket).
4. Enter all required configuration details.
5. In the **Credentials** section, select **Azure Key Vault**.
6. Enter the **Secret Name (Vault Name)** of your Key Vault (for example, **PMP-Production-Vault**).

    The Key name field displays the auto-generated key path in read-only format. For example, if you are using Bitbucket, the key name for Project Admin PAT would be *VCS-BitbucketProjectAdminPAT*.

7. Ensure that your Azure Key Vault secret's **Value** contains the correct credential value for that particular key.
8. Repeat the process for other credentials as needed, ensuring you follow the naming conventions for each service.

### Storing the Credentials Directly in the Database
 
Instead of using the Azure Key Vault, you can still use the legacy option to store the credentials in the Private Mendix Platform database. To do this, you must select **Database** from the list of storage options, and then enter the credentials directly in an input field. The credentials are encrypted and stored in the Private Mendix Platform database.
