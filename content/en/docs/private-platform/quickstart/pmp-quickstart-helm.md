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

{{% alert color="info" %}}
`Helm-diff` is required for `helmfile apply` and `helmfile diff` commands. If you only use `helmfile sync` (which forces synchronization without using `diff`), it is optional. 
{{% /alert %}}

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

## Installation Overview

The installation process consists of the following high-level steps. For more information, refer to the sections below.

1. Retrieve the list of image and charts version through the Download Portal GUI or API. 
2. Pull the images and charts marked **Required**, as well as any optional components your deployment needs. For a list of required and optional components, see [Installation Reference](/private-mendix-platform/installation-reference/).
3. Install the Operator charts.
4. Install Priave Mendix Platform charts using Helm.
5. Configure the PCLM host name, user name and password in the `<operator-generated-values.yaml` file and re-apply the Mendix Operator chart.

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

Helmfile manages multiple Helm releases with dependency ordering, ensuring components are installed in the correct sequence.

| Component | Description | Namespace | Required | ServiceAccount |
| --- | --- | --- | --- | --- |
| `mx-privatecloud-license-manager` | Private Cloud License Manager (PCLM) | Private Mendix Platform namespace | Required | `mendix-pclm` (created by Operator) |
| `mx-privatecloud` | Private Cloud services (authenticator, collector, interactor, bridge) | Private Mendix Platform namespace | Optional | `mx-privatecloud` (created by chart) |
| `maia-appgen` | Maia AI AppGen service | Private Mendix Platform namespace | Optional | `maia-appgen` (created by chart) |
| `maia-llm-gateway` | Maia LLM Gateway service for routing LLM requests | Private Mendix Platform namespace | Optional | `maia-llm-gateway` (created by chart) |
| `svix-server` | Webhook delivery service | Private Mendix Platform namespace | Optional | `svix` (created by chart) |
| `mxplatform` | Mendix Platform application (MendixApp CR) | Private Mendix Platform namespace | Optional | `mxplatform` (created by chart or Operator) |
| `mxplatform-kube-agent` | Build agent for mxplatform | Independent | Optional | `mxplatform-kube-agent` (created by chart) |
| `mx-private-document-generation` | PDF document generation service | Independent | Optional | `mx-private-document-generation` (created by chart) |

ServiceAccount creation depends on the value of the **UseStoragePlanwithIRSA** field. If set to **false**, Chart creates the ServiceAccount with workload identity annotations. If set to **true**, Mendix Operator creates ServiceAccount based on StoragePlan configuration.

### Dependency and Install Order  
 
The following components are installed in parallel during the first phase of the Helmfile installation:

* `mx-privatecloud`
* `maia-appgen`
* `svix-server`
* `maia-llm-gateway`
* `mxplatform-kube-agent`
* `mx-private-document-generation`

The `mxplatform` component is installed during the second phase, with configurations depending on which components were enabled during the first phase.

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

## Secret Management Using the Secret Provider Class

The Secret Provider class allows you to store all sensitive credentials (passwords, connection strings, API keys) in a centralized vault (Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault) instead of hardcoding them in configuration files.

### Requirements

To use the Secret Provider class, you must fulfill the following requirements:

1. Install the CSI Secrets Store Driver with a provider plugin.
2. Configure identity authentication (Azure Workload Identity or AWS IRSA).

    This step is mandatory because the CSI driver uses your ServiceAccount's cloud identity to authenticate to the vault and retrieve secrets.

3. Grant vault access permissions to the identity.
4. Store secrets in the vault with the correct key names.
5. Enable `secretProviderclass` in hHelmfile configuration.
6. Inject credentials from external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).

{{% alert color="info" %}}
Secret Provider Class requires workload identity authentication to access the secret vault:

* Azure Key Vault requires Azure Workload Identity (`azureWorkloadIdentity.enable` set to `true`).
* AWS Secrets Manager requires AWS IRSA (`awsIRSA.enable` set to `true`)
* HashiCorp Vault requires Kubernetes Auth configured in Vault.

The CSI driver uses the ServiceAccount's identity to authenticate to the vault and retrieve secrets.
{{% /alert %}}

### Example

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

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

#### Configuration Pattern

When configuring secret management, keep in mind the following key points:

* The Secret Provider class will not work without proper identity authentication configured.
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

#### Workload Identity vs Secret Provider Class

Workload Identity and Secret Provider Class are different approaches for database credentials management.

| Feature | Workload Identity (IAM Authentication) | Secret Provider Class |
| Purpose | Passwordless database connection at runtime | Inject all secrets from vault during installation |
| What it secures | Database passwords only | Database credentials and all other secrets |
| Configuration | `awsIRSA.enable: true` or azureWorkloadIdentity.enable: true` and empty passwords | `secretProviderclass.enable: true` |
| Works with | AWS RDS IAM authentication or Azure Database Managed Identity authentication | AWS Secrets Manager, Azure Key Vault, HashiCorp Vault |
| Credential type | Temporary cloud tokens (auto-rotated) | Static secrets from vault |
| Can it be combined? | No - mutually exclusive with Secret Provider Class | No - mutually exclusive with Workload Identity |

##### Key Differences

* Workload Identity - Components use cloud identity to connect to databases (no passwords stored anywhere).
* Secret Provider Class - Helm retrieves database passwords from a vault and injects them during installation. Passwords exist in vault as static secrets.

### Use Case 2: Mxplatform Database and Storage Authentication

For `mxplatform`, Workload Identity provides passwordless authentication for both database and storage at application runtime.

For complete scenarios and Storage Plan configuration examples, see [Storage Plans](/developerportal/deploy/private-cloud-storage-plans/).

{{% alert color="info" %}}
This type of authentication applies to runtime data access. It does not apply to installation secrets (that is, admin passwords and PCLM credentials). For those secrets, use the Secret Provider Class.
{{% /alert %}}

#### Configuring Workload Identity Authentication

To configure Workload Identity authentication, perform the following steps:

1. During Operator configuration, create Storage Plans with workload identity configuration:

    * For AWS, specify the IAM role ARN that has permissions to access RDS/S3.
    * For Azure, specify the Managed Identity client ID that has permissions to access the Azure Database and Blob Storage.

2. Set `UseStoragePlanwithIRSA` to `true` in the Helmfile configuration for `mxplatform`.
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
When `UseStoragePlanwithIRSA` is set to `true`, the Mendix Operator creates the ServiceAccount, not the Helm chart. This causes the following limitations:

* Chart-level `azureWorkloadIdentity` configuration does NOT work for mxplatform
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
      UseStoragePlanwithIRSA: true
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

Mendix Operator creates the ServiceAccount with `azure.workload.identity/client-id annotation`, enabling passwordless Azure Database and Blob Storage access.

#### Workload Identity vs Secret Provider Class for Mxplatform

Workload Identity and Secret Provider Class are different approaches for database credentials management.

| Feature | Workload Identity (StoragePlan) | Secret Provider Class (CSI) |
| --- | --- | --- |
| Purpose | Runtime connection to cloud database and storage | Inject all secrets from vault |
| What it authenticates | mxplatform app connecting to database and storage | Database, Storage, Admin password, and PCLM credentials |
| Credentials | Temporary cloud tokens (auto-rotated by AWS or Azure) | Static secrets from vault |
| Configuration | In StoragePlan CRDs and `UseStoragePlanwithIRSA: true` | `secretProviderclass.enable: true` |
| ServiceAccount | Created by Mendix Operator (based on StoragePlan) | Created by Helm chart |
| Can it be combined? | No - mutually exclusive with Secret Provider Class | No - mutually exclusive with Workload Identity |

##### Key Differences

* Workload Identity - Your running Mendix application uses cloud identity to connect to its database and file storage (no database passwords in configuration).
* Secret Provider Class - Helm chart retrieves secrets from vault to configure or install the components (admin passwords, PCLM credentials, database connection strings).

##### Decision Matrix

Use Workload Identity (StoragePlan) when:

* You want passwordless database and storage access for your running Mendix application.
* You are on AWS EKS or Azure AKS with native cloud database or storage services.
* You want automatic credential rotation (with the cloud provider handling the token refresh).
* You only need to secure runtime database or storage connections; admin password and PCLM can be set in a values file or traditional secrets.
* Example scenario: *My Mendix app should connect to Azure Database for PostgreSQL and Azure Blob Storage using Managed Identity, without storing any database passwords*.

Use Secret Provider Class when:

* You want all installation secrets (admin password, PCLM credentials, database connection strings, storage credentials) from a centralized vault.
* You need multi-cloud secret management (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).
* You want centralized secret management across all Private Mendix Platform components (mx-privatecloud, svix-server, mxplatform).
* You are using HashiCorp Vault or managing secrets across multiple cloud providers.
* Example scenario: *I want to store all Private Mendix Platform installation secrets (PCLM password, admin password, database credentials) in Azure Key Vault and inject them during Helm installation.

The two solutions cannot be used together. They are mutually exclusive for `mxplatform`.

If `UseStoragePlanwithIRSA` is set to `true`, the Operator creates the ServiceAccount with database and storage identity. The chart then cannot use Secret Provider Class for that ServiceAccount.

If `secretProviderclass.enable` is set to `true`, the chart creates the ServiceAccount with vault access. The chart cannot then use StoragePlan with Workload Identity for database or storage.

Both approaches must control the ServiceAccount annotations, but in different ways (through the Operator or Helm for Private Mendix Platform).

##### Approach 1: Workload Identity (StoragePlan)

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

This approach secures how your Mendix application connects to its database and storage at runtime with passwordless runtime database and storage access.

```text
mxplatform:
  # Enable StoragePlan with Workload Identity
  UseStoragePlanwithIRSA: true
  # Installation secrets still in values file
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: "administrator"
    password: "pclm-password"
  spec:
    # Reference StoragePlans that have Managed Identity configuration
    database:
      servicePlan: "azure-postgres-plan"  # StoragePlan with Managed Identity client ID
    storage:
      servicePlan: "azure-blob-plan"      # StoragePlan with Managed Identity client ID
    runtime:
      mxAdminPassword: "admin-password"   # Still in values file
  secretProviderclass:
    enable: false  # Cannot be used - ServiceAccount managed by Operator
```

This secures the following:

* Runtime database connection - The app uses Managed Identity to connect to PostgreSQL (no database password in configuration).
* Runtime storage connection - The app uses Managed Identity to access Blob Storage (no storage access key in configuration).

Installation secrets (PCLM password, admin password) are still in the values file.

##### Approach 2: Secret Provider Class

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

This approach secures centralized installation and configuration secrets by retrieving them from Azure Key Vault during Helm installation.

```text
mxplatform:
  # No StoragePlan workload identity
  UseStoragePlanwithIRSA: false
  # All credentials from Key Vault (empty values = injected from vault)
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: ""  # Injected from Key Vault secret "pclm-admin-username"
    password: ""  # Injected from Key Vault secret "pclm-admin-password"
  spec:
    # Database and storage credentials from Key Vault
    database:
      servicePlan: ""  # Credentials injected from Key Vault
    storage:
      servicePlan: ""  # Credentials injected from Key Vault
    runtime:
      mxAdminPassword: ""  # Injected from Key Vault secret "mx-admin-password"
  # Managed Identity to ACCESS Key Vault (not for database/storage)
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  # Identity with Key Vault Secrets User role
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      keyvaultName: "my-keyvault"  # Vault containing all installation secrets
```

This secures the following:

* PCLM credentials - Retrieved from Key Vault during installation.
* Admin password - Retrieved from Key Vault during installation.
* Database credentials - Retrieved from Key Vault (but stored as static passwords in Vault).
* Storage credentials - Retrieved from Key Vault (but stored as static access keys in vault).

Runtime connections still use static passwords and keys, not cloud-native passwordless authentication.

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

### Secret Provider Class issues

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
