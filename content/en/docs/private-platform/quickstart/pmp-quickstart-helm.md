---
title: "Install Private Mendix Platform with Helmfile"
linktitle: "Helmfile Installation"
url: /private-mendix-platform/helmfile-installation/
description: "Documents the installation process for Private Mendix Platform in non-interactive (automatic) mode."
weight: 30
---

## Introduction

You can now use Helm and Helmfile in order to automate the declarative installation of Private Mendix Platform. In this way, you can automatically install Private Mendix Platform components. For other installation types, see the following topic:

* [Install Private Mendix Platform in GUI Mode](/private-mendix-platform/interactive-installation/)

Helm charts are available for Private Mendix Platform 2.8.0 and newer. Namespaces created with Private Mendix Platform 2.7.0 and older do not currently support Helm charts.

## Required Tools

Before running Helmfile, ensure you have the following tools installed:

| Tool | Minimum Version | Purpose | Installation |
| --- | --- | --- | --- |
| **helmfile** | 0.150.0+ | Declarative Helm deployment orchestration | [Installation Guide](https://helmfile.readthedocs.io/en/latest/#installation) |
| **helm** | 3.10.0+ | Kubernetes package manager | [Installation Guide](https://helm.sh/docs/intro/install/) |
| **helm-diff plugin** | 3.0.0+ | Required for helmfile diff and helmfile apply | `helm plugin install https://github.com/databus23/helm-diff` |
| **kubectl** | 1.24.0+ | Kubernetes command-line tool | [Installation Guide](https://kubernetes.io/docs/tasks/tools/) |
| **bash** | 4.0+ | Shell for running hooks | Linux and macOS: pre-installed; Windows: [Git Bash](https://git-scm.com/download/win) |
| **oras** | 1.3+ | Tool for working with OCI artifacts | See [Installation](https://oras.land/docs/installation) in ORAS documentation |

{{% alert color="info" %}}
`Helm-diff` is required for `helmfile apply` and `helmfile diff` commands. If you only use `helmfile sync` (which forces synchronization without using `diff`), it is optional. 
{{% /alert %}}

## Installation Overview

The installation process consists of the following high-level steps. For more information, refer to the sections below.

1. Retrieve the manifest of image and charts version through the Download Portal GUI or API. 
2. Pull the images and charts marked **Required**, as well as any optional components your deployment needs. For a list of required and optional components, see [Installation Reference](/private-mendix-platform/installation-reference/).
3. Install the `mx-privatecloud-operator-crd` charts.
4. Install the `mx-privatecloud-operator-installer` charts.
5. Install Private Mendix Platform charts using Helm by performing the following steps:

    1. Pull the `installer-helmfile` image.
    2. A *targ.gz* file should be installed in *oras-artifact*. Unzipp the file and find the sample *values.yaml* files in the folder.
    3. Use these samples files as a reference for applying the Private Mendix Platform charts.

6. Configure the PCLM host name, user name and password in the *operator-generated-values.yaml* file and re-apply the Mendix Operator chart.

## Platform-Specific Installation Notes

### Linux

For Linux, all tools are typically available through package managers:

```bash
# Ubuntu/Debian
apt-get install kubectl helm

# CentOS/RHEL
yum install kubectl helm

# Arch
pacman -S kubectl helm
```

### MacOS

For macOS, use Homebrew:

```bash
brew install helmfile helm kubectl
```

### Windows

For Windows, we recommend Git Bash with Chocolatey, or Scoop:

```bash
# Using Chocolatey
choco install kubernetes-cli kubernetes-helm helmfile

# Using Scoop
scoop install kubectl helm helmfile
```

{{% alert color="info" %}}
Helmfile hooks require bash. Install Git for Windows and run Helmfile from the Git Bash terminal.
{{% /alert %}}

```bash
helmfile version v0.150.0+
version.BuildInfo{Version:"v3.12.0", ...}
Client Version: v1.27.0
GNU bash, version 5.x.x

Kubernetes control plane is running at https://...

NAME    VERSION
diff    3.11.0    ← This is REQUIRED
```

### Installing the Helm-diff Plugin

This plugin is required for the `helmfile apply` and `helmfile diff` commands. If you only use `helmfile sync` (not recommended for production environments), you can skip this plugin.

```bash
helm plugin install https://github.com/databus23/helm-diff

# Verify installation
helm plugin list | grep diff
```

## Starting the Installation

Before deploying the Mendix Private Platform components, you must install the Mendix Operator with proper configuration.

The Helmfile installation does not support installing or upgrading the Mendix Operator with the mx-ops-cli tool. To install the Operator, perform the following steps.

### ServiceAccount Token Automount for Maia Integration

If you plan to use Maia AppGen and LLM gateway integration, you must configure the Operator to automount ServiceAccount tokens for Mendix app pods. Maia AppGen requires automounting in order to communicate with Mendix applications through the Kubernetes API. Without this setting, the application pods will not have the necessary ServiceAccount token to authenticate API calls.

```yaml
operator_config:
  # REQUIRED for Maia integration: Allow Mendix app pods to access Kubernetes API
  runtimeAutomountServiceAccountToken: true
  # Set runtimeAutomountServiceAccountToken: true in the Operator values file and apply the helm charts again.
```

### Private Cloud License Manager Credentials

You must configure the Mendix Operator with Private Cloud License Manager (PCLM) credentials that match the credentials you will use when installing `mx-privatecloud-license-manager` with Helmfile. If the credentials do not ’match, update the license manager credentials in the Operator Helm chart *value* file, and then apply it again.

{{% alert color="info" %}}
The `operator_user` and `operator_password` in PCLM bootstrap configuration must exactly match the `licenseManager.username` and `licenseManager.password` in the Operator installation. A mismatch will prevent the Operator from obtaining licenses.
{{% /alert %}}

## Installing the Mendix Operator {#install-operator}

Install the Mendix Operator by doing the following steps:

1. Log in to the [Download Portal](https://privateplatform.mendix.com/).
2. Export the image and charts list.

    1. In the [https://privateplatform.mendix.com/](https://privateplatform.mendix.com/), go to **Artifact Management** and select a Private Mendix Platform version.
    2. Filter by **Category** and select the images
    3. Click **Export Selection** to export the list to a file named *export-images-vx.x.x.json*, where `x.x.x` corresponds to a Private Mendix Platform version.

3. In the Mendix Portal, create a Personal Access Token (PAT) for private images that require a PAT for authentication. 

    1. Sign in to Mendix and go to **User Settings > Developer Settings > Personal Access Token**
    2. Click **New Token**.
    3. Under **OCI registry**, select the **mx:registry:access** as scope.
 
4. Pull the charts.

    1. Log in to the OCI registry for Helm by using the following command: `helm registry login -u pat -p ${YOUR_PAT} registry.mendix.com`.
    2. Use the `helm pull` command to download the Helmfile from the OCI registry, for example:

    ```text
    helm pull oci://registry.mendix.com/private-cloud/charts/mx-privatecloud-operator-installer --version 0.2.36
    helm install operator mx-privatecloud-operator-installer-0.2.36.tgz -f ./Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml --namespace pmp-oci-test
    ```

    where `/Downloads/20260916T113717Z-pmp-test-oci-generated-values.yaml` is the yaml file for Operator configuration. You can find this yaml file among the example files in the installer package.

#### Download Package API {#download-api}

The following Download Portal APIs enable automating package downloads.

##### Get Private Mendix Platform Release Version List

```text
GET https://privateplatform.mendix.com/rest/pmpreleaseservice/v1/versions
```

##### Get the Manifest of a Specific Private Mendix Platform Version

```text
GET https://privateplatform.mendix.com/rest/pmpreleaseservice/v1/versions/{version}/manifest
```

## Helmfile Components

For more information about the Helmfile components, see [Installation Reference](/private-mendix-platform/installation-reference/).

## Quick Start

Use the following templates to help you prepare your own Helmfile-based installation.

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
# 1. Create your values file
cp examples/my-values.yaml my-values.yaml
# Edit my-values.yaml with your configuration
# 2. Deploy all enabled components
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
```

### Minimal Values File Template

Replace the component versions in the following template with the correct versions for your Private Mendix Platform release. For more information, refer to [Private Mendix Platform Release Notes](/releasenotes/private-platform/).

```yaml
# ─────────────────────────────────────────────────────────────────────────────
# REQUIRED: Private Mendix Platform namespace namespace
# ─────────────────────────────────────────────────────────────────────────────
namespace: mendix-platform

# ─────────────────────────────────────────────────────────────────────────────
# Global Configuration
# ─────────────────────────────────────────────────────────────────────────────
global:
  imageRegistry:
    url: "customer-prod.azurecr.io"
    pullSecrets: []  # Empty when using managed identity

# ─────────────────────────────────────────────────────────────────────────────
# Components (enable/disable as needed)
# ─────────────────────────────────────────────────────────────────────────────

# ═════════════════════════════════════════════════════════════════════════════
# mx-privatecloud-license-manager (PCLM) - REQUIRED for mxplatform
# ═════════════════════════════════════════════════════════════════════════════
mx-privatecloud-license-manager:
  enable: true
  image:
    registry: "registry.mendix.com"
    name: "privatecloud-license-manager"
    tag: "{insert component version as indicated in release notes}"
  
  # Database configuration
  db:
    type: "postgres"
    postgres:
      host: "postgres.example.com"
      port: 5432
      name: "pclm"
      user: "pclm_user"
      password: "pclm-password"
    strict_tls: false  # Set true if database requires TLS
  
  # Bootstrap users - MUST match operator installation
  bootstrap_users:
    admin_user: "administrator"
    admin_password: "admin-password"
    create_operator_user: true
    operator_user: "operatoruser"      # Must match operator licenseManager.username
    operator_password: "operatorpass"  # Must match operator licenseManager.password
  
  ingress:
    enabled: false

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  authenticator:
    database:
      host: "postgres.example.com"
      name: "authenticator"
      user: "auth_user"
      password: "password"
  collector:
    database:
      host: "postgres.example.com"
      name: "collector"
      user: "collector_user"
      password: "password"

maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"

svix-server:
  enable: true
  postgres: "postgresql://user:pass@host:5432/svix"

mxplatform:
  enable: true
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: "administrator"
    password: "admin-password"
  spec:
    appURL: "https://app.example.com"
    sourceURL: "oci-image://registry/app:tag"
    database:
      servicePlan: "your-db-plan"
    storage:
      servicePlan: "your-storage-plan"
    runtime:
      mxAdminPassword: "admin-password"

mxplatform-kube-agent:
  enable: false

mx-private-document-generation:
  enable: false
```

## Installation Commands

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

### Recommended: Full Apply

For most operations (such as upgrades or enabling and disabling components), use a full apply:

```bash
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
```

Using full apply ensures that auto-detection works correctly for component integration, prevents configuration drift between dependencies, and handles dependency updates automatically.

### Advanced: Selective Component Install

If you want to only install a specific selection of components, use selectors as in the following example:

```text
# Install only mx-privatecloud
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  --selector name=mx-privatecloud \
  apply
```

{{% alert color="info" %}}
When using selectors, you must first apply changes to the dependency, and then synchronize `mxplatform` to recognize the changes:

```text
# Step 1: Update dependency
helmfile ... -l name=mx-privatecloud apply
# Step 2: MANDATORY - sync mxplatform
helmfile ... -l name=mxplatform apply
```

{{% /alert %}}

### Other Commands

```text
# Preview changes (dry run)
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  diff

# Check status
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  status

# Destroy all releases
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  destroy
```

### Disabling Mxplatform

{{% alert color="warning" %}}
This operation is dangerous and may cause serious issues if performed needlessly. The Mendix Operator will react based on the reclaim policies in your StoragePlan and DBPlan. If configured with destructive policies, this will result in irreversible data loss.
{{% /alert %}}

Setting `mxplatform.enable: false` and running `helmfile sync` uninstalls the `mxplatform` release and deletes the MendixApp Custom Resource.

Before disabling `mxplatform`, perform the following actions:

1. Review the reclaim policies of StoragePlan and DBPlan.
2. Ensure that you have backups.
3. Understand that disabling `mxplatform` is a destructive operation.

## Global Configuration

The following configuration applies to all components.

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

### Image Registry

This is the Container registry URL applied to all components, unless overridden.

* **Type** - `string`
* Default value - `""`

```text
global:
  imageRegistry:
    url: "customer-prod.azurecr.io"
```

The priority is applied in this order: Component-specific > Global > Default.

### Image Pull Secrets

These are Kubernetes secrets for private registry authentication.

* **Type** - `array`
* Default value - `[]`

```text
global:
  imageRegistry:
    pullSecrets:
      - name: acr-secret
```

### ChartRepo OCI Registry

This is the custom Helm chart repository URL for all components. It allows you to host all charts in your own OCI registry instead of pulling from the default Mendix registry.

* **Type** - `string`
* Default value - `""` (uses default Mendix registries)

When `chartRepo` is not specified, each component pulls from its default Mendix registry location with the following full paths:

* `installer-config` - `oci://registry.mendix.com/private-platform/charts/installer-config`
* `mxplatform` - `oci://registry.mendix.com/private-platform/charts/mxplatform`
* `mxplatform-kube-agent` - `oci://registry.mendix.com/private-platform/charts/mxplatform-kube-agent`
* `svix-server` - `oci://registry.mendix.com/private-platform/charts/svix-server`
* `mx-privatecloud` - `oci://registry.mendix.com/private-cloud/charts/mx-privatecloud`
* `mx-privatecloud-license-manager` - `oci://registry.mendix.com/private-cloud/charts/mx-privatecloud-license-manager`
* `maia-appgen` - `oci://registry.mendix.com/maia/charts/maia-appgen`
* `maia-llm-gateway` - `oci://registry.mendix.com/maia/charts/maia-llm-gateway`
* `mx-private-document-generation` - `oci://registry.mendix.com/docgen/charts/mx-private-document-generation`

#### Custom Repository Structure

When a custom Helm chart repository is configured using `chartRepo`, all charts are pulled using a flat structure. The chart name is appended to your repository URL, as in the following example:

```text
# Example: Use Azure Container Registry
chartRepo: "oci://crpmp001.azurecr.io/helm/pmp"
# Charts will be pulled from:
# - oci://crpmp001.azurecr.io/helm/pmp/mxplatform
# - oci://crpmp001.azurecr.io/helm/pmp/mx-privatecloud
# - oci://crpmp001.azurecr.io/helm/pmp/maia-appgen
# etc.
```

## Component Configurations

For a list of component-specific configurations, see [Installation Reference](/private-mendix-platform/installation-reference/).

## Container Registry Configuration

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

### Azure Container Registry (ACR) with AKS

We recommend that you use AKS-ACR integration with Managed Identity. No secrets are required.

```text
# Attach ACR to AKS
az aks update \
  --name <aks-cluster> \
  --resource-group <rg> \
  --attach-acr <acr-name>
```

#### Configuration

```text
global:
  imageRegistry:
    url: "<acr-name>.azurecr.io"
    pullSecrets: []  # Empty - using managed identity
```

#### Benefits

The benefits of using Azure Container Registry with AKS include the following:

* No secrets to manage
* Automatic authentication
* Works across all namespaces
* Production-ready

### AWS Elastic Container Registry (ECR)

We recommend that you attach ECR permissions to Node IAM Role.

```text
# Attach ECR policy to node role
aws iam attach-role-policy \
  --role-name <eks-node-role> \
  --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
```

#### Configuration

```text
global:
  imageRegistry:
    url: "<account-id>.dkr.ecr.<region>.amazonaws.com"
    pullSecrets: []  # Empty - node IAM role handles auth
```

### Using Image Pull Secrets

If managed identity is not available, you can use image pull secrets as an alternative.

```text
# Create secret in each namespace
kubectl create secret docker-registry acr-secret \
  --namespace <namespace> \
  --docker-server=<registry>.azurecr.io \
  --docker-username=<username> \
  --docker-password=<password>
```

#### Configuration

```text
global:
  imageRegistry:
    url: "<registry>.azurecr.io"
    pullSecrets:
      - name: acr-secret  # Must exist in EACH namespace
```

## Secret Management Using the SecretProviderClass

The SecretProviderClass allows you to store all sensitive credentials (passwords, connection strings, API keys) in a centralized vault (Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault) instead of hardcoding them in configuration files.

{{% alert color="warning" %}}
Do not set `secretProviderclass.enable` and `useStoragePlanwithIRSA` to `true` on `mxplatform` at the same time. A storage plan that uses workload identity and the secret store both need to own the app ServiceAccount. You can use a workload identity together with the secret store when `useStoragePlanwithIRSA` is `false`, so the chart creates the ServiceAccount. A database plan or a storage plan still provisions that resource. See [Using a Secret Store for the Platform App](#disable-provisioners).
{{% /alert %}}

### Requirements

To use the SecretProviderClass, you must fulfill the following requirements:

1. Install the CSI Secrets Store Driver with a provider plugin. The CSI driver uses the ServiceAccount's identity to authenticate to the vault and retrieve secrets.
2. Create a keyvault per component, for example: `pmp-install-kv` or `svix-kv`
3. Configure identity authentication (Azure Workload Identity or AWS IRSA). This step is mandatory because the CSI driver uses your ServiceAccount's cloud identity to authenticate to the vault and retrieve secrets.

    * For Azure WI, configure the Federated Credential.

4. Grant vault access permissions to the identity to the keyvault created in step 2. 
5. Store secrets in the vault with the correct key names:

    * [For svix](/private-mendix-platform/installation-reference/#svix-key-vault)
    * [For mxplatform](/private-mendix-platform/installation-reference/#secret-provider-key)

6. Enable `secretProviderclass` in Helmfile configuration. 
7. Grant RBAC per namespace for the CSI driver's ServiceAccount.

### Example - Install CSI Driver {#example}

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
# Install CSI Secrets Store Driver
helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
helm install csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver --namespace kube-system
# Install provider plugin
# For Azure:
kubectl apply -f https://raw.githubusercontent.com/Azure/secrets-store-csi-driver-provider-azure/master/deployment/provider-azure-installer.yaml
# For AWS:
kubectl apply -f https://raw.githubusercontent.com/aws/secrets-store-csi-driver-provider-aws/main/deployment/aws-provider-installer.yaml
# For Vault:
helm install vault-csi-provider hashicorp/vault-csi-provider --namespace kube-system
```

### Supported Components

| Component | Secrets Managed |
| --- | --- |
| `mx-privatecloud` | Authenticator and Collector database credentials |
| `svix-server` | PostgreSQL and Redis connection strings |
| `mxplatform` | PCLM credentials, admin passwords, database credentials, storage credentials |

On `mxplatform`, keep `useStoragePlanwithIRSA` set to `false` when the secret store is enabled. See [Using a Secret Store for the Platform App](#disable-provisioners).

#### Configuration Pattern

When configuring secret management, keep in mind the following key points:

* The SecretProviderClass and SA annotations are performed by the Helmfile installation. 
* For Azure, you must enable `azureWorkloadIdentity` and configure Managed Identity with Key Vault access.
* For AWS, you must enable `awsIRSA` and configure IAM role with Secrets Manager access.
* For Vault, you must configure the Kubernetes Auth method in Vault and grant the policy access.

```text
{component}: 
  # Step 1: Configure identity authentication (REQUIRED)
  # For Azure Key Vault - MUST configure Workload Identity
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
  # OR for AWS Secrets Manager - MUST configure IRSA
  awsIRSA:
    enable: true
    roleArn: "arn:aws:iam::123456789012:role/component-role"
  # Step 2: Configure Secret Provider Class
  secretProviderclass:
    enable: true
    provider: "azure"  # azure | aws | vault
    # For Azure Key Vault
    azureparameters:
      keyvaultName: "my-keyvault"
      # clientID and tenantID automatically inherited from azureWorkloadIdentity above
    # For AWS Secrets Manager
    awsparameters:
      # roleArn automatically inherited from awsIRSA above
      secretName: "my-secret"
    # For HashiCorp Vault
    vaultparameters:
      address: "http://vault.vault.svc:8200"
      role: "my-role"
      secretName: "my-secret"
      version: "v2"  # Optional: v1 or v2
```

##### Svix Configuration Example

```text
svix-server:
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      keyvaultName: "my-svix-keyvault"
      # clientID and tenantID inherited from azureWorkloadIdentity
  # postgres ignored when using Secret Provider
```

#### Global vs Component Configuration

Component settings take precedence over global settings:

```text
global:
  # Global Azure Workload Identity configuration
  # REQUIRED for Azure Key Vault authentication
  azureWorkloadIdentity:
    enabled: true
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"  # Shared tenant
  # Global Secret Provider configuration
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      keyvaultName: "shared-keyvault"  # Same Key Vault for all components
# Each component uses a different Managed Identity (different clientID)
mx-privatecloud:
  # Identity for mx-privatecloud
  azureWorkloadIdentity:
    clientID: "11111111-1111-1111-1111-111111111111"
  secretProviderclass:
    # Inherits: enable=true, provider="azure", keyvaultName, tenantID
    # Authenticates with clientID: 11111111-1111-1111-1111-111111111111
svix-server:
  # Identity for svix-server
  azureWorkloadIdentity:
    clientID: "22222222-2222-2222-2222-222222222222"
  secretProviderclass:
    # Inherits global settings
    # Authenticates with clientID: 22222222-2222-2222-2222-222222222222
mxplatform:
  # Identity for mxplatform
  azureWorkloadIdentity:
    clientID: "33333333-3333-3333-3333-333333333333"
  secretProviderclass:
    # Inherits global settings
    # Authenticates with clientID: 33333333-3333-3333-3333-333333333333
```

#### Using a Secret Store for the Platform App {#disable-provisioners}

The secret store for the Private Mendix Platform app is the setup described in [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/). You can use it together with a [database plan](/developerportal/deploy/private-cloud-storage-plans/#database) or a [storage plan](/developerportal/deploy/private-cloud-storage-plans/#blob-storage). The Mendix Operator still creates each resource that has a plan. The secret store supplies the settings that do not come from a plan, such as the MxAdmin password and the license-manager credentials.

##### ServicePlan

Leave `spec.database.servicePlan` or `spec.storage.servicePlan` unset when you want to create that resource yourself. With the secret store enabled, both stay unset unless you set them. The chart requires a plan only when the secret store is off. For each plan you leave unset, the operator does not create that resource and reads its settings from the secret store.

With a database plan and a storage plan, and with the secret store left off, the operator creates the database, file container, and managed identity while the app is being deployed. A role that the identity needs beyond what the plan grants, such as **Storage Blob Delegator** for MDA downloads, can only be assigned after that deployment has started.

##### SecretProviderClass

Set `secretProviderclass.enable` to `true`. The chart sets `allowOverrideSecretsWithSecretStoreCSIDriver` to `true`. A plan you leave unset is left off the MendixApp. A plan you set is written onto the MendixApp, and the operator runs that provisioner. The chart then omits that resource's keys from the SecretProviderClass.

When a plan is unset, you must create the following yourself, before you install the app:

* The identity the pod will use (an Azure user-assigned managed identity, or an AWS IAM role), and the federated credential that ties it to the app ServiceAccount. The ServiceAccount name is the MendixApp name. The default is `mxplatform`. The chart creates that ServiceAccount when `useStoragePlanwithIRSA` is `false`. The account does not have to exist before you create the federated credential.
* The database, and a database user that can use that database only.
* The file container for the app's own files, and the permission that lets the identity use that container.
* When the platform stores MDA files in Azure Blob Storage, the MDA container as well. Assign **Storage Blob Data Contributor** on that container and **Storage Blob Delegator** on the storage account. Delegator has no effect below the account, because a user-delegation key is an account operation. In Private Mendix Platform, set **Mda Location** to `https://<account>.blob.core.windows.net/<container>`. For the portal settings, see [Configuring MDA Storage Setting](/private-mendix-platform/configure-k8s/#mda-storage). The chart adds the pod label `azure.workload.identity/use: "true"` when `azureWorkloadIdentity.enable` is `true`, or when the secret store uses Azure and `useManagedIdentityForBlob` is `true`. You do not set that label on the operator.
* The secrets in the vault, under the key names in [Installation Reference](/private-mendix-platform/installation-reference/#secret-provider-key).

##### PCLM Username and Passwords

Leave `pclm.username`, `pclm.password`, and `spec.runtime.mxAdminPassword` out of the values file. The chart reads `pclm-admin-username` and `pclm-admin-password` from the vault and mounts them as the constants `Common.PCLM_USERNAME` and `Common.PCLM_PASSWORD`. It reads `mx-admin-password` as the MxAdmin password.

##### UseStoragePlanwithIRSA

Keep `useStoragePlanwithIRSA` set to `false`. With `true`, the operator creates the ServiceAccount from the storage plan, and the chart cannot attach the secret store to it.

The same identity can still open the database and the blob container without a stored password. That is workload identity on the ServiceAccount the chart creates. It is separate from the operator provisioner. See [Enabling the Secret Store](#enable-secret-store).

On AWS and with HashiCorp Vault the same rule applies. A plan still provisions that resource. When the plan is unset, you create the database, the file storage, and the identity, and the operator does not. The key names for S3 are listed in [SecretProviderClass Keys](/developerportal/deploy/secret-store-credentials/#keys).

#### Enabling the Secret Store {#enable-secret-store}

To enable the secret store for `mxplatform`, install the CSI driver and provider as in [Example - Install CSI Driver](#example), create the resources in [Using a Secret Store for the Platform App](#disable-provisioners), and use values like the following.

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
mxplatform:
  enable: true
  name: mxplatform
  # The chart creates the ServiceAccount. The operator does not.
  useStoragePlanwithIRSA: false
  azureWorkloadIdentity:
    enable: true
    clientID: "<client-id>"
    tenantID: "<tenant-id>"
  secretProviderclass:
    enable: true
    provider: "azure"
    # Omit database-password. The sidecar requests an Entra token instead.
    database:
      passwordless: true
    azureparameters:
      keyvaultName: "<key-vault-name>"
      # Omit the storage account name and key. Blob access uses the workload identity.
      useManagedIdentityForBlob: true
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager.<namespace>"
  spec:
    appURL: "mxplatform.example.com"
    sourceURL: "oci-image://<registry>/mendix-private-platform:<tag>"
    # Set this to the runtime version of the platform image.
    mendixRuntimeVersion: "<runtime-version>"
    runtime:
      applicationRootUrl: "https://mxplatform.example.com"
```

##### Explanation of the Values

* `secretProviderclass.enable` sets `allowOverrideSecretsWithSecretStoreCSIDriver` to `true` and, when `secretProviderclass.create` is left at its default `true`, renders a SecretProviderClass with the same name as the app. The chart adds the annotation `privatecloud.mendix.com/environment-class: "true"`.
* `spec.database.servicePlan` and `spec.storage.servicePlan` stay empty unless you set them. An empty plan means the operator takes that resource's settings from the vault. A plan name means the operator provisions that resource.
* `secretProviderclass.database.passwordless` keeps `database-password` out of the SecretProviderClass. It requires `azureWorkloadIdentity.enable` or `awsIRSA.enable`, no database plan, and `secretProviderclass.create` left at `true`. For a SecretProviderClass you write yourself, leave `database-password` out of that object instead. The flag has no effect when `create` is `false`.
* `useManagedIdentityForBlob` adds the pod label `azure.workload.identity/use: "true"` and leaves out `storage-azure-account-name` and `storage-azure-account-key`.
* `useStoragePlanwithIRSA: false` makes the chart create the ServiceAccount and annotate it with `privatecloud.mendix.com/environment-account: "true"`. With `azureWorkloadIdentity.enable` set to `true`, it also annotates the client id and tenant id. The operator requires that ServiceAccount when a SecretProviderClass is used.

{{% alert color="info" %}}
`SecretProviderclass.database.passwordless` is available starting from Private Mendix Platform 2.8.2. With `passwordless` set to `true`, that chart leaves `database-password` out of the SecretProviderClass.

The `mxplatform` charts shipped with Private Mendix Platform 2.8.0 and 2.8.1 do not include this value. Those charts always request `database-password`. Helm ignores `passwordless` on those versions, so the key stays in the object. Remove that object from the SecretProviderClass after installation and after every upgrade that rewrites the object, and do not create the secret.

`SecretProviderclass.create` is available in the same 2.8.2 release. See [Overriding App Constants](#override-constants).
{{% /alert %}}

For AWS, set `awsIRSA.enable` and `awsIRSA.roleArn`, set `secretProviderclass.provider` to `aws`, and set `awsparameters.secretName`. For HashiCorp Vault, set `secretProviderclass.provider` to `vault` and fill in `vaultparameters`.

##### Creating Azure Resources {#azure-resources}

You must create the resources listed in [Using a Secret Store for the Platform App](#disable-provisioners) before you install the app. On Azure that is a Key Vault, one user-assigned managed identity, the platform database, and the file container.

1. Provide an OIDC issuer and workload identity for the cluster. On AKS, the Key Vault CSI add-on does not enable them. 

    1. Add a federated credential for the app identity with the subject `system:serviceaccount:<namespace>:<app name>`, and the audience `api://AzureADTokenExchange`. 
    2. Put the client ID and tenant ID in `azureWorkloadIdentity`.

2. Give the *Key Vault Secrets User* Vault role for the app identity, and the *Key Vault Secrets Officer* for the account which writes the secrets.

    {{% alert color="warning" %}}
    Do not register the app identity as a Microsoft Entra administrator of the PostgreSQL server. That role is an administrator of every database on the server. If the license manager uses the same server, the platform app can read and change its data. Create an ordinary role that can use only the platform database.
    {{% /alert %}}

3. Store the role name as `database-username`. 
4. Assign the **Storage Blob Data Contributor** role on the file container. 
5. If Private Mendix Platform must store MDA files in Azure Blob Storage, assign the **Storage Blob Data Contributor** role on the MDA container, and the **Storage Blob Delegator** role on the storage account.
6. Set **Mda Location** as described in [Configuring MDA Storage Setting](/private-mendix-platform/configure-k8s/#mda-storage).
7. Write the secrets listed in [Installation Reference](/private-mendix-platform/installation-reference/#secret-provider-key). 

    Do not create `database-password` when `secretProviderclass.database.passwordless` is `true`. Key Vault rejects an empty value, and any value you store is used as the password instead of an Entra token.

8. To store a database password instead of using an Entra token, leave `secretProviderclass.database.passwordless` at `false` and create `database-password`. 
9. To use a storage account key instead of the workload identity, set `useManagedIdentityForBlob` to `false` and also create `storage-azure-account-name` and `storage-azure-account-key`.

#### Overriding App Constants {#override-constants}

A mounted object named `mx-const-<Module.Constant>` sets that constant. The secret store value overrides the same constant on the MendixApp. A mounted object named `mx-runtime-<setting>` overrides that [runtime custom setting](/refguide/custom-settings/).

When the chart renders the SecretProviderClass, it maps the vault keys `pclm-admin-username` and `pclm-admin-password` to `mx-const-Common.PCLM_USERNAME` and `mx-const-Common.PCLM_PASSWORD`. You do not add those two constant names yourself. That class lists a fixed set of keys: the MxAdmin password, the two license-manager keys, and the database and storage keys the secret store supplies. It has no entry for any other constant, such as `Encryption.EncryptionKey`.

Starting from Private Mendix Platform 2.8.2, set `secretProviderclass.create` to `false` and write the SecretProviderClass yourself. `secretProviderclass.enable` stays `true`, so the chart still sets `allowOverrideSecretsWithSecretStoreCSIDriver` to `true`. It does not render a SecretProviderClass, and it ignores the `secretProviderclass` provider parameters. On 2.8.0 and 2.8.1 this value does not exist. Helm ignores it, and the chart still renders its own SecretProviderClass.

```text
mxplatform:
  secretProviderclass:
    enable: true
    # The chart still sets allowOverrideSecretsWithSecretStoreCSIDriver.
    # It does not render a SecretProviderClass.
    create: false
```

##### Requirements for SecretProviderClass

Your SecretProviderClass must meet all of the following requirements:

* Its name is the MendixApp name (`mxplatform` by default, or `<name>-test` when `testApp` is `true`). The name is the app name, not the name of a separate Helm release.
* It is in the same namespace as the MendixApp.
* It has the annotation `privatecloud.mendix.com/environment-class: "true"`.
* It mounts the same object aliases the chart would have mounted (see the key table in [Installation Reference](/private-mendix-platform/installation-reference/#secret-provider-key)), plus the extra constants. When you write the class, include `mx-const-Common.PCLM_USERNAME` and `mx-const-Common.PCLM_PASSWORD` yourself.
* For a passwordless database, leave `database-password` out of this list. `secretProviderclass.database.passwordless` has no effect when `create` is `false`, so the chart does not remove that key for you.
* Keep `azureWorkloadIdentity.clientID` and `azureWorkloadIdentity.tenantID` in the values, so the chart can annotate the ServiceAccount. Repeat that client id and tenant id in the SecretProviderClass. The chart does not copy them when `create` is `false`.

Azure Key Vault secret names cannot contain periods or underscores. Store the secret under a name that uses hyphens, and set `objectAlias` to the name the runtime reads. The alias keeps the periods and underscores. The chart does not rewrite those names.

The following SecretProviderClass is a passwordless Azure setup. Blob access uses the workload identity, so the storage account name and key are absent. The license-manager keys are aliased to constants, and the remaining objects are further constants the chart cannot add. Keep the constants your app reads.

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: mxplatform
  namespace: <namespace>
  annotations:
    privatecloud.mendix.com/environment-class: "true"
+spec:
  provider: azure
  parameters:
    clientID: "<client-id>"
    keyvaultName: "<key-vault-name>"
    tenantID: "<tenant-id>"
    objects: |
      array:
        - |
          objectName: database-type
          objectType: secret
          objectAlias: database-type
        - |
          objectName: database-jdbc-url
          objectType: secret
          objectAlias: database-jdbc-url
        - |
          objectName: database-host
          objectType: secret
          objectAlias: database-host
        - |
          objectName: database-name
          objectType: secret
          objectAlias: database-name
        - |
          objectName: database-username
          objectType: secret
          objectAlias: database-username
        - |
          objectName: storage-service-name
          objectType: secret
          objectAlias: storage-service-name
        - |
          objectName: storage-azure-container
          objectType: secret
          objectAlias: storage-azure-container
        - |
          objectName: storage-azure-blob-endpoint
          objectType: secret
          objectAlias: storage-azure-blob-endpoint
        - |
          objectName: storage-azure-use-default-azure-credential
          objectType: secret
          objectAlias: storage-azure-use-default-azure-credential
        - |
          objectName: storage-perform-delete
          objectType: secret
          objectAlias: storage-perform-delete
        - |
          objectName: storage-use-ca-certificates
          objectType: secret
          objectAlias: storage-use-ca-certificates
        - |
          objectName: storage-azure-use-https
          objectType: secret
          objectAlias: storage-azure-use-https
        - |
          objectName: mx-admin-password
          objectType: secret
          objectAlias: mx-admin-password
        - |
          objectName: pclm-admin-username
          objectType: secret
          objectAlias: mx-const-Common.PCLM_USERNAME
        - |
          objectName: pclm-admin-password
          objectType: secret
          objectAlias: mx-const-Common.PCLM_PASSWORD
        - |
          objectName: encryption-key
          objectType: secret
          objectAlias: mx-const-Encryption.EncryptionKey
        - |
          objectName: portunus-authenticator-username
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_AUTHENTICATOR_USERNAME
        - |
          objectName: portunus-authenticator-password
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_AUTHENTICATOR_PASSWORD
        - |
          objectName: portunus-collector-username
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_COLLECTOR_USERNAME
        - |
          objectName: portunus-collector-password
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_COLLECTOR_PASSWORD
        - |
          objectName: portunus-interactor-username
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_INTERACTOR_USERNAME
        - |
          objectName: portunus-interactor-password
          objectType: secret
          objectAlias: mx-const-PortunusAdaptor.MXPC_INTERACTOR_PASSWORD
        - |
          objectName: jenkins-build-agent-user
          objectType: secret
          objectAlias: mx-const-Jenkins.BuildAgentUser
        - |
          objectName: jenkins-build-agent-password
          objectType: secret
          objectAlias: mx-const-Jenkins.BuildAgentPassword
```

Apply this object in the app namespace before the platform pod starts. The full key list, including runtime settings, is in [SecretProviderClass Keys](/developerportal/deploy/secret-store-credentials/#keys).

Changing a constant or a runtime setting in the vault is picked up by the CSI driver after a short delay. The running runtime does not apply that change until the app is restarted. File storage credentials and the MxAdmin password are applied without that limitation. For the operator behavior, see [Additional Considerations](/developerportal/deploy/secret-store-credentials/#additional-considerations).

#### Auto-Generated Credentials

Auto-generated credentials are used for internal component communication.

| Component | Credential | Generated |
| --- | --- | --- |
| `mx-privatecloud` | Internal API passwords | Random 16-char |
| `mxplatform-kube-agent` | Build password | Random 20-char |
| `svix-server` | JWT secret | Random 64-char |

This method is upgrade-safe. Existing credentials are preserved through lookup.

## Workload Identity 

Workload Identity enables components to connect to cloud resources without passwords. Instead of storing passwords and access keys in configuration files, components use cloud-native identity (AWS IAM or Azure Managed Identity) to authenticate.

{{% alert color="info" %}}
On `mxplatform`, do not combine `useStoragePlanwithIRSA: true` with `secretProviderclass.enable: true`. You can use a workload identity with the secret store when the chart creates the ServiceAccount. See [Using a Secret Store for the Platform App](#disable-provisioners).
{{% /alert %}}

### Supported Components

* `mx-privatecloud-license-manager` - Passwordless database connections for the PCLM service
* `mx-privatecloud` - Passwordless database connections for Authenticator and Collector services
* `mxplatform` - Passwordless database and storage connections for Mendix application runtime

### Supported Cloud Providers

* AWS IRSA (IAM Roles for Service Accounts) - AWS RDS databases and S3 storage
* Azure Workload Identity - Azure Database for PostgreSQL and Azure Blob Storage

### Use Case 1: Database Authentication for PCLM and Mx-privatecloud

IAM-based database authentication allows components to connect to cloud databases without passwords. Instead of storing database passwords in configuration files, components use cloud-native identity (AWS IAM or Azure Managed Identity) to authenticate.

This method is applicable to the following:

* `mx-privatecloud-license-manager` (PCLM) - Passwordless connection to PCLM database
* `mx-privatecloud` - Passwordless connections for authenticator and collector databases

The following databases are supported:

* AWS RDS for PostgreSQL, MySQL, or SQL Server (with AWS IAM database authentication)
* Azure Database for PostgreSQL or SQL Server (with Microsoft Entra ID or Managed Identity authentication)

#### Configuring IAM-based Database Authentication

To configure IAM-based database authentication, perform the following steps:

1. To enable cloud identity, `set awsIRSA.enable` (for AWS) or `azureWorkloadIdentity.enable` (for Azure) to `true`.
2. Configure the following database settings: 

    * **Host**
    * **Port**
    * **Name**
    * **User** 
    
3. Leave the **Password** empty.

#### How it Works

Chart validation allows empty passwords. When workload identity is enabled, the chart skips password validation.

At runtime, components use temporary IAM/Managed Identity tokens to authenticate to the database.

#### Requirements

For AWS RDS IAM authentication, ensure that you fulfill the following prerequisites:

* RDS instance must have IAM database authentication enabled.
* Database user must be created with the `rds_iam` role.
* The IAM role (specified in `awsIRSA.roleArn`) must have the `rds-db:connect` permission for the database resource.
* EKS cluster must have the OIDC provider configured.
* The federated credential must map `ServiceAccount` to an IAM role.

For Azure Database for PostgreSQL with Managed Identity, ensure that you fulfill the following prerequisites:

* Azure Database for PostgreSQL must have Microsoft Entra authentication enabled.
* The database user must be created as a Microsoft Entra user.
* Managed Identity (specified in `azureWorkloadIdentity.clientID`) must have permission to connect.
* The AKS cluster must have OIDC issuer and Workload Identity enabled.
* The federated credential must map the `ServiceAccount` to Managed Identity.

#### Configuration Examples

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Example 1

The following shows an example of configuring `mx-privatecloud-license-manager` with Azure Managed Identity.

```text
# 1. Create Managed Identity for PCLM
az identity create --name pclm-db-identity --resource-group my-rg
# 2. Enable Microsoft Entra authentication on Azure Database
az postgres server ad-admin create \
  --resource-group my-rg \
  --server-name myserver \
  --display-name "DBA Admin" \
  --object-id <admin-object-id>
# 3. Create database user with Managed Identity
psql "host=myserver.postgres.database.azure.com user=dba_admin@myserver dbname=postgres sslmode=require"
SET aad_validate_oids_in_tenant = off;
CREATE ROLE "pclm-db-identity" WITH LOGIN PASSWORD NULL IN ROLE azure_ad_user;
GRANT ALL PRIVILEGES ON DATABASE pclm TO "pclm-db-identity";
# 4. Create Federated Identity Credential (maps K8s ServiceAccount to Managed Identity)
OIDC_ISSUER=$(az aks show --name my-aks --resource-group my-rg --query "oidcIssuerProfile.issuerUrl" -o tsv)
az identity federated-credential create \
  --name pclm-federated \
  --identity-name pclm-db-identity \
  --resource-group my-rg \
  --issuer $OIDC_ISSUER \
  --subject "system:serviceaccount:production:mendix-pclm" \
  --audience api://AzureADTokenExchange
```

Helmfile configuration:

```text
mx-privatecloud-license-manager:
  enable: true
  image:
    name: "privatecloud-license-manager"
    tag: "0.11.0"
  # Enable Azure Workload Identity
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  # Managed Identity client ID
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
  jwt_secret: ""
  # Database configuration without password
  db:
    type: "postgres"
    postgres:
      host: "myserver.postgres.database.azure.com"
      port: 5432
      name: "pclm"
      user: "pclm-db-identity@myserver"
      password: ""  # Empty - Managed Identity authentication
    strict_tls: true
    ssl_root_cert: |
      -----BEGIN CERTIFICATE-----
      ... (Azure PostgreSQL certificate)
      -----END CERTIFICATE-----
  bootstrap_users:
    admin_user: "administrator"
    admin_password: "AdminPassword123"
    create_operator_user: true
    operator_user: "operatoruser"
    operator_password: "operatorpass"
```

##### Example 2

The following shows an example of configuring `mx-privatecloud` with Azure Managed Identity.

```text
# 1. Create Managed Identity for mx-privatecloud
az identity create --name mx-privatecloud-db-identity --resource-group my-rg
# 2. Create database users (same steps as above, but for authenticator and collector databases)
psql "host=myserver.postgres.database.azure.com user=dba_admin@myserver dbname=postgres sslmode=require"
SET aad_validate_oids_in_tenant = off;
CREATE ROLE "mx-privatecloud-db-identity" WITH LOGIN PASSWORD NULL IN ROLE azure_ad_user;
GRANT ALL PRIVILEGES ON DATABASE authenticator TO "mx-privatecloud-db-identity";
GRANT ALL PRIVILEGES ON DATABASE collector TO "mx-privatecloud-db-identity";
# 3. Create Federated Identity Credential
OIDC_ISSUER=$(az aks show --name my-aks --resource-group my-rg --query "oidcIssuerProfile.issuerUrl" -o tsv)
az identity federated-credential create \
  --name mx-privatecloud-federated \
  --identity-name mx-privatecloud-db-identity \
  --resource-group my-rg \
  --issuer $OIDC_ISSUER \
  --subject "system:serviceaccount:production:mx-privatecloud" \
  --audience api://AzureADTokenExchange
```

Helmfile configuration:

```text
mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  # Enable Azure Workload Identity
  azureWorkloadIdentity:
    enable: true
    clientID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"  # Managed Identity client ID
    tenantID: "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz"
  # Database configuration without passwords
  authenticator:
    database:
      host: "myserver.postgres.database.azure.com"
      port: "5432"
      name: "authenticator"
      user: "mx-privatecloud-db-identity@myserver"
      password: ""  # Empty - Managed Identity authentication
  collector:
    database:
      host: "myserver.postgres.database.azure.com"
      port: "5432"
      name: "collector"
      user: "mx-privatecloud-db-identity@myserver"
      password: ""  # Empty - Managed Identity authentication
```

#### Workload Identity vs Secret Provider Class for PCLM and Mx-PrivateCloud

For `mx-privatecloud-license-manager` and `mx-privatecloud`, workload identity and the SecretProviderClass are two ways to supply database credentials. Use one of them for a component's database. For the Private Mendix Platform app, the secret store can be used with a plan and can still use a workload identity. A plan still provisions that resource. See [Storage Plans and the Secret Store for Mxplatform](#storage-plan-or-secret-store).

| Feature | Workload Identity (IAM Authentication) | Secret Provider Class |
| --- | --- | --- |
| Purpose | Passwordless database connection at runtime | Inject credentials from a vault |
| What it secures | Database passwords for PCLM, Authenticator, and Collector | Database credentials and the other secrets those components read from the vault |
| Configuration | `awsIRSA.enable: true` or `azureWorkloadIdentity.enable: true`, and an empty password | `secretProviderclass.enable: true` |
| Works with | AWS RDS IAM authentication or Azure Database Managed Identity authentication | AWS Secrets Manager, Azure Key Vault, HashiCorp Vault |
| Credential type | Temporary cloud tokens, rotated by the cloud provider | The values stored in the vault |

### Use Case 2: Mxplatform Database and Storage Authentication

For `mxplatform`, Workload Identity provides passwordless authentication for both database and storage at application runtime.

For complete scenarios and Storage Plan configuration examples, see [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/).

{{% alert color="info" %}}
On this path the operator creates the database, the file storage, and the identity. The MxAdmin password and the PCLM credentials stay in the values file. To read those settings from a vault, and to leave provisioning to yourself where you do not set a plan, use [Enabling the Secret Store](#enable-secret-store).
{{% /alert %}}

#### Configuring Workload Identity Authentication

To configure Workload Identity authentication, perform the following steps:

1. During Operator configuration, create Storage Plans with workload identity configuration:

    * For AWS, specify the IAM role ARN that has permissions to access RDS/S3.
    * For Azure, specify the Managed Identity client ID that has permissions to access the Azure Database and Blob Storage.

2. Set `useStoragePlanwithIRSA` to `true` in the Helmfile configuration for `mxplatform`.
3. Reference these plans in `spec.database.servicePlan` and `spec.storage.servicePlan`.

#### How It Works

Workload Identity uses Storage Plans with managed identity authentication (managed by Mendix Operator, not Helm) to configure passwordless authentication for database and storage connections.

Mendix Operator automatically performs the following tasks:

* Creates a Managed Identity for an mxplatform application.
* Creates a Kubernetes Service Account.
* Adds appropriate cloud provider annotations to the ServiceAccount:

    * For AWS, add `eks.amazonaws.com/role-arn: "arn:aws:iam::123456789012:role/mxplatform-role"`
    * For Azure, add `azure.workload.identity/client-id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`

* Configures mxplatform pods to use this ServiceAccount.

{{% alert color="info" %}}
When `useStoragePlanwithIRSA` is set to `true`, the Mendix Operator creates the ServiceAccount, not the Helm chart. This causes the following limitations:

* Chart-level `azureWorkloadIdentity` configuration is not supported for mxplatform.
* The chart cannot add `azure.workload.identity/client-id` annotation. The Service account will be created by the Operator.
{{% /alert %}}

#### Example

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

To configure an Azure Storage Plan with Managed Identity, perform the following steps:

1. Create the StoragePlans with Managed Identity.

    ```text
    database:
      postgres:
        enabled: true
        plans:
          - planName: "azure-postgres-plan"
            planType: "on-demand"
            useAzureWIAuth: true
            k8sServiceAccountName: "db-admin-sa"
            host: "myserver.postgres.database.azure.com"
            port: 5432
            database: "postgres"
            user: "mendix-storage-admin"
            password: ""  # Empty when using Workload Identity
            strictTLS: true
    # Object Store Storage Plans
    storage:
      azure_blob:
        enabled: true
        plans:
          - planName: "azure-blob-plan"
            k8sServiceAccountName: "storage-admin-sa"
            useAzureWIAuth: true
            azureStorageAccount: "mystorageaccount"
            azureResourceGroup: "my-resource-group"
            azureAccountSubscriptionID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            azureContainerName: ""  # Auto-created per environment
            preventDataDeletion: false
    ```

2. Configure mxplatform in the Helmfile values.

    ```text
    mxplatform:
      enable: true
      # REQUIRED: Let Operator create ServiceAccount
      useStoragePlanwithIRSA: true
      pclm:
        serviceUrl: "http://mx-privatecloud-license-manager"
        username: "administrator"
        password: "pclm-password"
      spec:
        appURL: "app.example.com"
        sourceURL: "oci-image://myregistry.azurecr.io/app:1.0"
        # Reference the Managed Identity-enabled plans
        database:
          servicePlan: "azure-postgres-plan"
        storage:
          servicePlan: "azure-blob-plan"
        runtime:
          applicationRootUrl: "https://app.example.com"
          mxAdminPassword: "admin-password"
    ```

The Mendix Operator creates the ServiceAccount with the `azure.workload.identity/client-id` annotation. The app then connects to Azure Database for PostgreSQL and Blob Storage with that identity.

#### Storage Plans and the Secret Store for Mxplatform {#storage-plan-or-secret-store}

A storage plan with workload identity and the secret store can be used for the same platform app, with one limit. Do not set `useStoragePlanwithIRSA` to `true` together with the secret store. Both need to own the ServiceAccount. A database plan or a storage plan can still be set while the secret store is enabled. The operator provisions that resource, and the chart creates the ServiceAccount.

| | Storage plan with workload identity | Secret store |
| --- | --- | --- |
| Who creates the database, file container, and app identity | Mendix Operator, during deployment | You, when the plan is unset. The operator, when the plan is set |
| Database and file settings | Taken from the plan | Taken from the vault |
| ServiceAccount | Created by the operator. Set `useStoragePlanwithIRSA` to `true` | Created by the chart. Set `useStoragePlanwithIRSA` to `false` |
| Passwordless database and blob access | Yes, through the plan | Yes, when `secretProviderclass.database.passwordless` and `useManagedIdentityForBlob` are `true` |
| MxAdmin password and PCLM credentials | In the values file, unless you add them some other way | In the vault (`mx-admin-password`, `pclm-admin-username`, `pclm-admin-password`) |
| Extra roles, such as Storage Blob Delegator for MDA files | Assigned after the operator has created the identity | Assigned before installation, on the identity you created |
| App constants | On the MendixApp | Any `mx-const-<Module.Constant>` object in the secret store. See [Overriding App Constants](#override-constants) |

Use a storage plan when you want the operator to create the database, the file container, and the identity while the app is deployed, and you can assign any further roles after that identity exists.

Use the secret store when the MxAdmin password, the license-manager credentials, and any extra app constants should come from the vault. Leave a plan unset when you want to create that resource yourself, before installation, including roles the plan does not grant, such as **Storage Blob Delegator**. Passwordless access still uses a workload identity. The chart attaches that identity to the ServiceAccount. The steps are in [Using a Secret Store for the Platform App](#disable-provisioners) and [Enabling the Secret Store](#enable-secret-store).

##### Approach 1: Storage Plan with Workload Identity

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

The Operator provisions the database and file storage and creates the ServiceAccount. Leave the secret store disabled.

```text
mxplatform:
  useStoragePlanwithIRSA: true
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: "administrator"
    password: "pclm-password"
  spec:
    database:
      servicePlan: "azure-postgres-plan"
    storage:
      servicePlan: "azure-blob-plan"
    runtime:
      mxAdminPassword: "admin-password"
  secretProviderclass:
    enable: false
```

The app connects to PostgreSQL and Blob Storage with the managed identity from the plan. The PCLM password and the MxAdmin password are still in the values file.

##### Approach 2: Secret Store

Enable the secret store and set `useStoragePlanwithIRSA` to `false`. Leave the database plan and the storage plan unset. Create the database, file storage, identity, and role assignments yourself. The values are in [Enabling the Secret Store](#enable-secret-store). To override a constant, see [Overriding App Constants](#override-constants). A plan can be set as well. The operator then provisions that resource.

## Troubleshooting Critical Issues

### The Mxplatform Credentials Are Empty

#### Cause 

Mxplatform was installed before the dependencies application was completed.

#### Solution

Re-run with full apply:

```text
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
```

### The Helmfile Diff Shows Empty Lookup Values

This behavior is expected. Lookup functions return an empty result during diff because they query the live cluster. Actual apply resolves values correctly.

### Image Pull Errors

If you encounter image pull errors, perform the following actions:

* Verify the registry configuration.

    * For AKS, use `az aks update --attach-acr`.
    * For EKS, attach the ECR policy to a node IAM role.
    * For cross-namespace, create `imagePullSecrets` in each namespace.

### Database Connection Failures

If you encounter database connection failures, perform the following actions:

* Verify that the host is reachable from the cluster.
* Check the credentials.

    * If `dbssl` is set to `true`, verify the CA certificate.
    * If using Secret Provider, verify that the CSI driver is installed.

### Secret Provider Class Issues

If you encounter Secret Provider Class issues, perform the following actions:

* Verify that the CSI driver is installed by using the following command: `kubectl get pods -n kube-system | grep secrets-store`.
* Verify that the provider plugin is installed.
* Verify the authentication (IRSA, Workload Identity, or Kubernetes Auth).
* Check the SecretProviderClass by using the following command: `kubectl describe secretproviderclass -n <namespace>`.
* View the pod events by using the following command: `kubectl describe pod <pod> -n <namespace>`.

## Security Best Practices

Keep in mind the following security best practices:

* Use Secret Provider Class to avoid storing credentials in values files.
* Do not commit values files to Git. They contain sensitive data.

```text
echo "my-values.yaml" >> .gitignore
```

* Generate unique RSA keys for each environment.

```text
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
```

* Rotate credentials regularly through a Secret Provider or values file, then run `helmfile apply`.
* Use managed identity for container registries (AKS-ACR and EKS-ECR),
