---
title: "Install Private Mendix Platform with Helmfile"
linktitle: "Helmfile Installation"
url: /private-mendix-platform/helmfile-installation/
description: "Documents the installation process for Private Mendix Platform in non-interactive (automatic) mode."
weight: 30
---

## Introduction

To automate the declarative installation of Private Mendix Platform, you can now use Helm and Helmfile in order to automate the declarative installation of Private Mendix Platform. In this way, you can automatically install Private Mendix Platform components. If you would like to perform a manual installation instead, see [Install Private Mendix Platform in Interactive Mode](/private-mendix-platform/interactive-installation/).

Helmfile installation supports the following tasks:

* Automated namespace installation, upgrade, and Operator configuration 
* Installation and upgrade of components such as Svix, PCLM, and others
* Installation and upgrade of Private Mendix Platform  

## Components

Helmfile manages multiple Helm releases with dependency ordering, ensuring components are installed in the correct sequence.

The following components must be installed in a shared namespace (that is, the same namespace as Private Mendix Platform):

* `mx-privatecloud`
* `maia-appgen`
* `svix-server`
* `mxplatform`

The following components can use different (independent) namespaces:

* `mxplatform-kube-agent`
* `mx-private-document-generation`

| Component | Description | Namespace | Required | ServiceAccount |
| --- | --- | --- | --- | --- |
| `mx-privatecloud-license-manager` | Private Cloud License Manager (PCLM) | Shared | Required | `mendix-pclm` (created by chart) |
| `mx-privatecloud` | Private Cloud services (authenticator, collector, interactor, bridge) | Shared | Optional | `mx-privatecloud` (created by chart) |
| `maia-appgen` | Maia AI AppGen service | Shared | Optional | `maia-appgen` (created by chart) |
| `maia-llm-gateway` | Maia LLM Gateway service for routing LLM requests | Shared | Optional | `maia-llm-gateway` (created by chart) |
| `svix-server` | Webhook delivery service | Shared | Optional | `svix` (created by chart) |
| `mxplatform` | Mendix Platform application (MendixApp CR) | Shared | Optional | `mxplatform` (created by chart or operator) |
| `mxplatform-kube-agent` | Build agent for mxplatform | Independent | Optional | `mxplatform-kube-agent` (created by chart) |
| `mx-private-document-generation` | PDF document generation service | Independent | Optional | `mx-private-document-generation (created by chart)` |

ServiceAccount creation depends on the value of the **UseStoragePlanwithIRSA** field. If set to **false**, Chart creates the ServiceAccount with workload identity annotations. If set to **true**, Mendix Operator creates ServiceAccount based on StoragePlan configuration.

### Dependency and Install Order  
 
The following components are installed in parallel during the first phase of the installation:

* `mx-privatecloud-license-manager`
* `mx-privatecloud`
* `maia-appgen`
* `svix-server`
* `maia-llm-gateway`
* `mxplatform-kube-agent`
* `mx-private-document-generation`

The `mxplatform` component is installed during the second phase, with configurations depending on which components were enabled during the first phase.

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

## Installation Requirements for the Mendix Operator

Before deploying the Mendix Private Platform components, you must install the Mendix Operator with proper configuration.

### Private Cloud License Manager Credentials

You must configure the Mendix Operator with Private Cloud License Manager (PCLM) credentials that match the credentials you will use when installing `mx-privatecloud-license-manager` with Helmfile.

#### Operator Installation Values

```yaml
licenseManager:
  enable: true
  credentialsSecretName: "mendix-pclm-credentials"
  serverURL: "http://mx-privatecloud-license-manager"
  username: "operatoruser"      # Must match pclm bootstrap operator_user
  password: "operatorpass"       # Must match pclm bootstrap operator_password
```

#### Helmfile Values for Mx-privatecloud-license-manager

```yaml
mx-privatecloud-license-manager:
  enable: true
  bootstrap_users:
    create_operator_user: true
    operator_user: "operatoruser"      # Must match operator licenseManager.username
    operator_password: "operatorpass"  # Must match operator licenseManager.password
```

{{% alert color="info" %}}
The `operator_user` and `operator_password` in PCLM bootstrap configuration must exactly match the `licenseManager.username` and `licenseManager.password` in the Operator installation. A mismatch will prevent the Operator from obtaining licenses.
{{% /alert %}}

### ServiceAccount Token Automount for Maia Integration

If you plan to use Maia AppGen and LLM gateway integration, you must configure the Operator to automount ServiceAccount tokens for Mendix app pods. Maia AppGen requires automounting in order to communicate with Mendix applications through the Kubernetes API. Without this setting, the application pods will not have the necessary ServiceAccount token to authenticate API calls.

```yaml
operator_config:
  # REQUIRED for Maia integration: Allow Mendix app Pods to access Kubernetes API
  runtimeAutomountServiceAccountToken: true
```

### StoragePlan and Database Plan Configuration

You must configure the storage and database plans in the Operator installation values, not in the Helmfile values for `mxplatform`.

#### Example: Azure Database and Storage with Workload Identity

```yaml
# Credential Service Accounts (for Workload Identity)
credentialServiceAccounts:
  enabled: true
  serviceAccounts:
    - authType: "azure-wi"
      k8sServiceAccountName: "db-admin-sa"
      azwiClientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    - authType: "azure-wi"
      k8sServiceAccountName: "storage-admin-sa"
      azwiClientID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"

# Database Storage Plans
database:
  postgres:
    enabled: true
    plans:
      - planName: "azure-db"
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
      - planName: "azure-sp"
        k8sServiceAccountName: "storage-admin-sa"
        useAzureWIAuth: true
        azureStorageAccount: "mystorageaccount"
        azureResourceGroup: "my-resource-group"
        azureAccountSubscriptionID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        azureContainerName: ""  # Auto-created per environment
        preventDataDeletion: false

# Operator Configuration
operator_config:
  runtimeAutomountServiceAccountToken: true  # Required for Maia integration
```

### Complete Operator Installation Example

For an example of the complete Operator installation values,see *samples/operator-sp.yaml*.

To install the Operator, use the following commands:

```text
helm install --create-namespace \
  -n <namespace> \
  -f samples/operator-sp.yaml \
  operator \
  mx-privatecloud-operator-installer
```

For detailed Operator installation instructions, see [Installing and Configuring Mendix on Kubernetes with Helm Charts](/developerportal/deploy/helm-charts/#installing-and-configuring-the-mendix-on-kubernetes-with-helm-charts).

## Quick Start

Use the following templates to help you prepare your own Helmfile-based installation.

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

```yaml
# ─────────────────────────────────────────────────────────────────────────────
# REQUIRED: Shared namespace
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
    registry: "private-cloud.registry.mendix.com"
    name: "privatecloud-license-manager"
    tag: "0.11.0"
  
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

Setting `mxplatform.enable: false` and running `helmfile sync` uninstalls the `mxplatform` release and deletes the MendixApp Custom Resource.

{{% alert color="warning" %}}
The Mendix Operator will react based on the reclaim policies in your StoragePlan and DBPlan. If configured with destructive policies, this will result in irreversible data loss.
{{% /alert %}}

Before disabling `mxplatform`, perform the following actions::

1. Review the reclaim policies of StoragePlan and DBPlan.
2. Ensure that you have backups.
3. Understand that disabling `mxplatform` is a destructive operation.

## Global Configuration

The following configuration applies to all components.

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

## Component Configurations

The following configurations are component-specific.

### Mx-privatecloud-license-manager

This is the Private Cloud License Manager (PCLM) component. It is required for Private Mendix Platform deployment. It manages licenses for Mendix applications running in Private Cloud.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | boolean | Yes | Enable PCLM deployment |
| `image.registry` | string | No | Container registry URL (uses the global value if not specified) |
| `image.name` | string | Yes | The image name |
| `image.tag` | string | Yes | Image tag (version) |
| `jwt_secret` | string | No | The JWT secret for license token signing (auto-generated if empty) |

#### Database Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `db.type` | string | Yes | Database type: `postgres` or `sqlserver` |
| `db.strict_tls` | Boolean | No (default: `false`) | Enable strict TLS for database connection |
| `db.ssl_root_cert` | string | Conditional | The SSL root certificate in PEM format; required when `strict_tls` is set to `true` |

##### PostgreSQL Configuration

The following settings are used when `db.type` is set to `postgres`.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `db.postgres.host` | string | Yes | The PostgreSQL host |
| `db.postgres.port` | number | No (default: `5432`) | The PostgreSQL port |
| `db.postgres.name` | string | Yes | The PostgreSQL database name |
| `db.postgres.user` | string | Yes | The PostgreSQL username |
| `db.postgres.password` | string | Conditional | The PostgreSQL password; required only when not using Azure Workload Identity (when `azureWorkloadIdentity.enable` is set to `false`) or AWS IRSA (when `awsIRSA.enable` is set to `false`) for IAM-based database authentication |

##### SQL Server Configuration

The following settings are used when `db.type` is set to `sqlserver`.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `db.sqlserver.host` | string | Yes | The SQL Server host |
| `db.sqlserver.port` | number | No (default: `1433`) | The SQL Server port |
| `db.sqlserver.name` | string | Yes | The SQL Server database name |
| `db.sqlserver.user` | string | Yes | The SQL Server username |
| `db.sqlserver.password` | string | Conditional | The SQL Server password; required only when not using Azure Workload Identity (when `azureWorkloadIdentity.enable` is set to `false`) or AWS IRSA (when `awsIRSA.enable` is set to `false`) for IAM-based database authentication |

##### Bootstrap User Configuration

{{% alert color="info" %}}
Bootstrap user credentials must match the configuration in both Mendix Operator and `mxplatform`.

Operator user credentials (`operator_user` and `operator_password`) must exactly match the `licenseManager.username` and `licenseManager.password` in your Mendix Operator installation values. A mismatch will prevent the Operator from obtaining licenses.

Admin user credentials (`admin_user` and `admin_password`) must exactly match the `pclm.username` and `pclm.password` in your `mxplatform` configuration. A mismatch will prevent `mxplatform` from obtaining licenses.
{{% /alert %}}

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bootstrap_users.admin_user` | string | Yes | The Administrator user name |
| `bootstrap_users.admin_password` | string | Yes | The Administrator password |
| `bootstrap_users.create_operator_user` | Boolean | Yes | Set to true to create the Operator user |
| `bootstrap_users.operator_user` | string | Yes | The Operator username; must match the Mendix Operator configuration |
| `bootstrap_users.operator_password` | string | Yes | The Operator password; must match the Mendix Operator configuration |

##### Ingress Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ingress.enabled` | Boolean | No (default: `false`) | Enable ingress for external access |
| `ingress.host` | string | Conditional | The hostname for the PCLM web UI |
| `ingress.ingressClassName` | string | Conditional | The Ingress class name (for example, `nginx`) |
| `ingress.annotations` | object | No | Additional ingress annotations |
| `ingress.labels` | object | No | Additional ingress labels |

##### Workload Identity Configuration

For passwordless database authentication using cloud-native identity, configure the following settings.

###### Azure Workload Identity

| Field | Type | Description |
| --- | --- | --- |
| `azureWorkloadIdentity.enable` | Boolean | Enable Azure Workload Identity |
| `azureWorkloadIdentity.clientID` | string | Azure Managed Identity Client ID |

###### AWS IRSA (IAM Roles for Service Accounts)

| Field | Type | Description |
| --- | --- | --- | 
| `awsIRSA.enable` | Boolean | Enable AWS IRSA |
| `awsIRSA.roleArn` | string | AWS IAM Role ARN |

{{% alert color="info" %}}
Component-level workload identity configuration overrides global settings.
{{% /alert %}}

##### Example Configurations

The following is an example of basic setup with static credentials:

```text
mx-privatecloud-license-manager:
  enable: true
  image:
    name: "privatecloud-license-manager"
    tag: "0.11.0"
  # JWT secret (leave empty to auto-generate)
  jwt_secret: ""
  # Database configuration
  db:
    type: "postgres"
    postgres:
      host: "postgres.example.com"
      port: 5432
      name: "pclm"
      user: "pclm_user"
      password: "StrongPassword123"
    strict_tls: false
  # Bootstrap users - MUST match operator installation
  bootstrap_users:
    admin_user: "administrator"
    admin_password: "AdminPassword123"
    create_operator_user: true
    operator_user: "operatoruser"      # Must match operator licenseManager.username
    operator_password: "operatorpass"  # Must match operator licenseManager.password
  ingress:
    enabled: false
```

The following is an example of an SSL/TLS database connection:

```text
mx-privatecloud-license-manager:
  enable: true
  image:
    name: "privatecloud-license-manager"
    tag: "0.11.0"
  jwt_secret: ""
  db:
    type: "postgres"
    postgres:
      host: "auto-infra-azure-postgre-db.postgres.database.azure.com"
      port: 5432
      name: "pclm"
      user: "postgres"
      password: "StrongPassword123"
    strict_tls: true  # Enable strict TLS validation
    ssl_root_cert: |
      -----BEGIN CERTIFICATE-----
      MIIDjjCCAnagAwIBAgIQAzrx5qcRqaC7KGSxHQn65TANBgkqhkiG9w0BAQsFADBh
      ... (Azure PostgreSQL DigiCert Global Root G2 certificate)
      -----END CERTIFICATE-----
  bootstrap_users:
    admin_user: "administrator"
    admin_password: "AdminPassword123"
    create_operator_user: true
    operator_user: "operatoruser"
    operator_password: "operatorpass"
  ingress:
    enabled: false
```

The following example uses Azure Workload Identity with passwordless database authentication:

```text
mx-privatecloud-license-manager:
  enable: true
  image:
    name: "privatecloud-license-manager"
    tag: "0.11.0"
  # Enable Azure Workload Identity for passwordless database access
  azureWorkloadIdentity:
    enable: true
    clientID: "cf85d643-0de1-477a-9d1b-647882fd44e0"  # Managed Identity Client ID
  jwt_secret: ""
  db:
    type: "postgres"
    postgres:
      host: "auto-infra-azure-postgre-db.postgres.database.azure.com"
      port: 5432
      name: "pclm"
      user: "pclm-database-identity"  # Azure AD database user
      password: ""  # Empty - authentication via Managed Identity
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
  ingress:
    enabled: false
```

#### Integration with Mendix Operator

The Mendix Operator must be configured to use PCLM for license management.

```text
# In Mendix Operator installation values
licenseManager:
  enable: true
  credentialsSecretName: "mendix-pclm-credentials"
  serverURL: "http://mx-privatecloud-license-manager"  # Service name in same namespace
  username: "operatoruser"      # Must match bootstrap_users.operator_user
  password: "operatorpass"       # Must match bootstrap_users.operator_password
```

#### Service URL

The PCLM service is accessible within the cluster at the following:

* Service name - `mx-privatecloud-license-manager`
* Port - 80 (HTTP)
* Full URL - `http://mx-privatecloud-license-manager` (when in same namespace)

This URL is used by the following:

* Mendix Operator (for obtaining licenses)
* `mxplatform` (configured through the `pclm.serviceUrl` field)

### Mx-privatecloud

The following configuration apply to Mendix Private Cloud core services (Authenticator, Collector, Interactor, Interactor-bridge).

#### Quick Deployment Scenarios

Refer to the following list for a quick summary of the supported deployment scenarios and the required configuration.

* Basic setup

    Set the database credentials for authenticator and collector, and then configure NATS.

Database with SSL/TLS

Set dbssl: true and provide dbca certificate

External agents

Enable interactor_bridge.ingress with hostname

AWS RDS IAM Authentication (Passwordless)

Enable awsIRSA with roleArn, leave database passwords empty

Azure Managed Identity Database Auth (Passwordless)

Enable azureWorkloadIdentity, leave database passwords empty

Azure Key Vault

Enable azureWorkloadIdentity + secretProviderclass with provider: "azure"

AWS Secrets Manager

Enable awsIRSA + secretProviderclass with provider: "aws"

HashiCorp Vault

Enable secretProviderclass with provider: "vault"

Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |

enable

boolean

Yes

Enable mx-privatecloud deployment

nats.server_addr

string

Yes

NATS server address. Example: "nats://nats.nats.svc:4222"

Architecture: Deploys 4 components (Authenticator, Collector, Interactor, Interactor-Bridge)

NATS Setup
This chart does not install NATS. Deploy separately:

helm repo add nats https://nats-io.github.io/k8s/helm/charts/
helm install nats nats/nats --namespace nats --create-namespace
Database Configuration
Authenticator Database:

| Field | Required | Description |
| --- | --- | --- |

authenticator.database.host

Yes*

Database hostname

authenticator.database.port

No (default: "5432")

Database port

authenticator.database.name

Yes*

Database name

authenticator.database.user

Yes*

Database username

authenticator.database.password

Yes††

Database password

authenticator.database.dbssl

No

Enable SSL/TLS

authenticator.database.dbca

Conditional

CA certificate (required if dbssl: true)

Collector Database: Same structure as Authenticator

*Not required when secretProviderclass.enable: true

††Password is not required when using AWS IRSA (awsIRSA.enable: true) or Azure Workload Identity (azureWorkloadIdentity.enable: true) for IAM-based database authentication

RSA Keys & Internal Credentials

| Field | Required | Description |
| --- | --- | --- |

rsa.privateKey

Has default

⚠️ Override in production

rsa.publicKey

Has default

⚠️ Override in production

credentials.*_pass

Auto-generated

Recommended to set explicitly

Generate RSA keys:

openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
Example Configurations
Minimal Setup:

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  authenticator:
    database:
      host: "postgres-auth.example.com"
      name: "authenticator"
      user: "auth_user"
      password: "StrongPassword123"
  collector:
    database:
      host: "postgres-collector.example.com"
      name: "collector"
      user: "collector_user"
      password: "StrongPassword456"
With AWS IAM Database Authentication (Passwordless):

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  # Enable AWS IRSA for IAM-based database authentication
  awsIRSA:
    enable: true
    roleArn: "arn:aws:iam::123456789012:role/mx-privatecloud-rds-iam-role"
  # Database passwords not required when using IAM authentication
  authenticator:
    database:
      host: "postgres-auth.region.rds.amazonaws.com"
      name: "authenticator"
      user: "iam_auth_user"
      password: ""  # Empty - IAM authentication used
  collector:
    database:
      host: "postgres-collector.region.rds.amazonaws.com"
      name: "collector"
      user: "iam_collector_user"
      password: ""  # Empty - IAM authe
With Azure Managed Identity Database Authentication (Passwordless):

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  # Enable Azure Workload Identity for Managed Identity database authentication
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  # Database passwords not required when using Managed Identity
  authenticator:
    database:
      host: "postgres-auth.postgres.database.azure.com"
      name: "authenticator"
      user: "managed_identity_user"
      password: ""  # Empty - Managed Identity authentication used
  collector:
    database:
      host: "postgres-collector.postgres.database.azure.com"
      name: "collector"
      user: "managed_identity_user"
      password: ""  # Empty - Managed Identity authentication used
With Database SSL:

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.nats.svc:4222"
  authenticator:
    database:
      host: "postgres-auth.example.com"
      name: "authenticator"
      user: "auth_user"
      password: "StrongPassword123"
      dbssl: true
      dbca: |
        -----BEGIN CERTIFICATE-----
        ...
        -----END CERTIFICATE-----
  collector:
    database:
      host: "postgres-collector.example.com"
      name: "collector"
      user: "collector_user"
      password: "StrongPassword456"
      dbssl: true
      dbca: |
        -----BEGIN CERTIFICATE-----
        ...
        -----END CERTIFICATE-----
With Azure Key Vault:

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.default:4222"
  # Azure Workload Identity (REQUIRED for Azure Key Vault)
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    tenantID: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      keyvaultName: "my-mx-keyvault"
      # clientID and tenantID inherited from azureWorkloadIdentity
  # Database fields ignored when using Secret Provider
  authenticator:
    database: {host: "", name: "", user: "", password: ""}
  collector:
    database: {host: "", name: "", user: "", password: ""}
Required Azure Key Vault Secrets:

When using Azure Key Vault (provider: "azure"), you must create the following secrets in your Key Vault:

Secret Name

Description

Example Value

authenticator-db-name

Authenticator database name

authenticator

authenticator-db-host

Authenticator database host

postgres.example.com

authenticator-db-port

Authenticator database port

5432

authenticator-db-user

Authenticator database username

auth_user

authenticator-db-pass

Authenticator database password

StrongPassword123

collector-db-name

Collector database name

collector

collector-db-host

Collector database host

postgres.example.com

collector-db-port

Collector database port

5432

collector-db-user

Collector database username

collector_user

collector-db-pass

Collector database password

StrongPassword456

With Ingress for External Agents:

mx-privatecloud:
  enable: true
  nats:
    server_addr: "nats://nats.default:4222"
  # ... database config ...
  interactor_bridge:
    ingress:
      enable: true
      className: "nginx"
      hostName: "bridge.mendix.example.com"
      certSecret: "bridge-tls-cert"
# Agent connection URL: wss://bridge.mendix.example.com/agent
maia-appgen
Maia AI AppGen service for AI-powered application generation.

Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |

enable

boolean

Yes

Enable Maia AppGen deployment

env

array

Yes

Must include MXASSIST_COPILOT_MXID3_URL

Environment Variables
Required:

env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: "https://pmp.example.com/oidc/"  # REQUIRED - OIDC endpoint
ServiceAccount

| Field | Type | Must Stay |
| --- | --- | --- |

serviceAccount.create

true

Yes - Required for RBAC

serviceAccount.name

"maia-appgen"

Use for IRSA/Workload Identity

serviceAccount.automount

true

Yes - Needs K8s API access

Example Configurations
Basic:

maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
With Azure Workload Identity:

maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
With Ingress:

maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
  ingress:
    enable: true
    className: "nginx"
    hostName: "maia.example.com"
    certSecret: "maia-tls-secret"
maia-llm-gateway
Maia LLM Gateway service for routing LLM requests to various AI model providers.

Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |

enable

boolean

Yes

Enable Maia LLM Gateway deployment

env

array

Yes

Must include MXASSIST_COPILOT_MXID3_URL

Optional for MXASSIST_COPILOT_MXID3_SSL_CA_CERT

Environment Variables
The chart uses a two-tier environment variable system:

defaultEnv: Chart-managed defaults (set in values.yaml, don't modify)

env: User-defined variables (your overrides and required settings)

Required:

env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: "https://pmp.example.com/oidc/"  # REQUIRED - OIDC endpoint
Optional:

env:
  - name: MXASSIST_COPILOT_MXID3_SSL_CA_CERT
    value: |
      -----BEGIN CERTIFICATE-----
      ...
      -----END CERTIFICATE-----  # Optional - Custom CA certificate for MxID3
ServiceAccount

| Field | Type | Must Stay |
| --- | --- | --- |

serviceAccount.create

true

Yes - Required for RBAC

serviceAccount.name

"maia-llm-gateway"

Use for IRSA/Workload Identity

serviceAccount.automount

true

Yes - Needs K8s API access

Example Configurations
Basic:

maia-llm-gateway:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
With Custom CA Certificate:

maia-llm-gateway:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
    - name: MXASSIST_COPILOT_MXID3_SSL_CA_CERT
      value: |
        -----BEGIN CERTIFICATE-----
        MIIDjjCCAnagAwIBAgIQAzrx5qcRqaC7KGSxHQn65TANBgkqhkiG...
        -----END CERTIFICATE-----
With Ingress:

maia-llm-gateway:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
  ingress:
    enable: true
    className: "nginx"
    hostName: "llm-gateway.example.com"
    certSecret: "llm-gateway-tls-secret"
Integration with mxplatform
When maia-llm-gateway is enabled, mxplatform automatically configures these microflow constants:

Constant

Value

Description

Maia.Enable

True

Set when maia-llm-gateway OR maia-appgen is enabled

Maia.Config_Secret_Name_LLM_GW

Secret name

Auto-discovered via label lookup

Maia.Config_Secret_Namespace_LLM_GW

Namespace

Same as mxplatform namespace

Maia.LLM_GW_URL

https://<hostname>

Set when ingress is enabled with hostname

You don't need to configure anything — integration happens automatically when you enable the component.

svix-server
Svix webhooks server for event delivery and webhook management.

Quick Deployment Scenarios 
Your situation

Configuration needed

Basic production

Set postgres, optionally redis + useRedis: true

Azure Key Vault

Enable azureWorkloadIdentity + secretProviderclass with provider: "azure"

AWS Secrets Manager

Enable awsIRSA + secretProviderclass with provider: "aws"

HashiCorp Vault

Enable secretProviderclass with provider: "vault"

Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |

enable

boolean

Yes

Enable svix-server deployment

postgres

string

Conditional

PostgreSQL DSN. Required when secretProviderclass.enable: false

secretKey

string

Recommended

JWT secret key. Auto-generated if empty

Database & Cache

svix-server:
  enable: true
  postgres: "postgresql://user:pass@host:5432/svix"
  redis: "redis://host:6379/0"  # Optional
  useRedis: false  # Set true to enable Redis
  secretKey: ""  # Leave empty for auto-generation
Secret Key Management
The JWT secret is managed via ConfigMap (svix-configmap):

User provides secretKey → Uses provided value

secretKey empty AND ConfigMap exists → Preserves existing key (upgrade-safe)

secretKey empty AND ConfigMap doesn't exist → Auto-generates 64-char key

Shared with mxplatform: JWT secret is automatically injected into mxplatform's SvixClient.JwtSecret constant.

Example Configurations
Basic:

svix-server:
  enable: true
  postgres: "postgresql://svix:pass@host:5432/svix"
  secretKey: ""  # Auto-generated
With Redis:

svix-server:
  enable: true
  postgres: "postgresql://svix:pass@host:5432/svix"
  redis: "redis://redis-master:6379/0"
  useRedis: true
With Azure Key Vault:

svix-server:
  enable: true
  # Azure Workload Identity (REQUIRED for Azure Key Vault)
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
When using Azure Key Vault (provider: "azure"), you must create the following secrets in your Key Vault:

Secret Name

Description

Example Value

svix-db-dsn

PostgreSQL connection string

postgresql://user:pass@host:5432/svix

svix-redis-dsn

Redis connection string (optional, when useRedis: true)

redis://host:6379/0

mxplatform
The Mendix application platform deployment.

Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |

enable

boolean

Yes

Enable mxplatform deployment

name

string

No (default: "mxplatform")

Name for MendixApp CR and ServiceAccount if created

UseStoragePlanwithIRSA

boolean

No (default: false)

Set true when using StoragePlans with workload identity 

PCLM Integration (Required)

| Field | Required | Description |
| --- | --- | --- |

pclm.serviceUrl

Yes

PCLM service endpoint

pclm.username

Yes*

PCLM username

pclm.password

Yes*

PCLM password

*Not required when secretProviderclass.enable: true (credentials injected from secret manager)

Spec Configuration

| Field | Required | Description |
| --- | --- | --- |

spec.appURL

Yes

Public domain for the app

spec.sourceURL

Yes

OCI image path. Format: "oci-image://<registry>/<image>:<tag>"

spec.database.servicePlan

Yes*

Database service plan name

spec.storage.servicePlan

Yes*

Storage service plan name

spec.runtime.mxAdminPassword

Yes*

Admin password

*Not required when secretProviderclass.enable: true (credentials injected from secret manager)

Automatic Integration Detection
mxplatform automatically integrates with enabled components — you don't configure integration flags manually:

Auto-detected Flag

Set when...

Purpose

privatecloudEnabled

mx-privatecloud.enable: true

Connects to Private Cloud services

maiaEnabled

maia-appgen.enable: true

Enables Maia AI assistant

svixEnabled

svix-server.enable: true

Enables webhook delivery

kubeAgentEnabled

mxplatform-kube-agent.enable: true

Enables build agent

You only need to: Enable/disable components. Integration is automatic.

Example Configurations
Basic:

mxplatform:
  enable: true
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: "administrator"
    password: "PCLMPassword"
  spec:
    appURL: "app.example.com"
    sourceURL: "oci-image://registry/app:1.0"
    database:
      servicePlan: "production-db"
    storage:
      servicePlan: "production-storage"
    resources:
      limits:
        cpu: 2000m
        memory: 4096Mi
      requests:
        cpu: 1000m
        memory: 2048Mi
    runtime:
      applicationRootUrl: "https://app.example.com"
      mxAdminPassword: "AdminPassword"
      dtapMode: "P"
With Secret Provider:

mxplatform:
  enable: true
  # PCLM credentials from Secret Provider
  pclm:
    serviceUrl: "http://mx-privatecloud-license-manager"
    username: ""  # Empty - injected from Secret Provider
    password: ""  # Empty - injected from Secret Provider
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      clientID: "..."
      tenantID: "..."
      keyvaultName: "my-keyvault"
  spec:
    appURL: "app.example.com"
    sourceURL: "oci-image://registry/app:1.0"
    # Leave empty when using Secret Provider
    database:
      servicePlan: ""
    storage:
      servicePlan: ""
    runtime:
      mxAdminPassword: ""  # Empty - injected from Secret Provider
When using Azure Key Vault (provider: "azure"), you must create the following secrets in your Key Vault:

Always Required:

Secret Name

Description

Example Value

mx-admin-password

Mendix application admin password

AdminPassword123

pclm-admin-username

PCLM administrator username

administrator

pclm-admin-password

PCLM administrator password

PCLMPassword123

Database Secrets (required when spec.database.servicePlan is empty):

Secret Name

Description

Example Value

database-type

Database type

PostgreSQL

database-host

Database host

postgres.example.com

database-name

Database name

mxplatform

database-username

Database username

mxplatform_user

database-password

Database password

DBPassword123

database-jdbc-url

JDBC connection URL

jdbc:postgresql://postgres.example.com:5432/mxplatform

Azure Blob Storage Secrets (required when spec.storage.servicePlan is empty):

Secret Name

Description

Example Value

storage-service-name

Storage service name

azure

storage-azure-container

Azure Blob container name

mxplatform-files

storage-azure-blob-endpoint

Azure Blob endpoint

https://mystorageaccount.blob.core.windows.net

storage-azure-use-default-azure-credential

Use Azure Workload Identity

true

storage-perform-delete

Allow delete operations

true

storage-use-ca-certificates

Use CA certificates

false

storage-azure-use-https

Use HTTPS for Blob access

true

Azure Blob Storage Secrets (with static credentials - when useManagedIdentityForBlob: false):

Secret Name

Description

Example Value

storage-azure-account-name

Azure Storage account name

mystorageaccount

storage-azure-account-key

Azure Storage account key

base64encodedkey==

mxplatform-kube-agent
Build agent for mxplatform app deployments.

Basic Configuration

| Field | Required | Description |
| --- | --- | --- |

enable

boolean

Yes

namespace

string

Yes

config.buildUser

string

No (default: "pmpbuilder")

config.buildPassword

string

No (auto-generated)

Example

mxplatform-kube-agent:
  enable: true
  namespace: "build-agents"
 
mx-private-document-generation
PDF document generation service.

Basic Configuration

| Field | Required | Description |
| --- | --- | --- |

enable

boolean

Yes

namespace

string

Yes

Example

mx-private-document-generation:
  enable: true
  namespace: "document-generation"
  image:
    registry: "private-cloud.registry.mendix.com"
    name: "mendix/document-generation-service"
    tag: "1.0.0"
Service URL for Mendix apps: http://document-generation.<namespace>:8085

Container Registry Configuration
Azure Container Registry (ACR) with AKS
Recommended: Use AKS-ACR integration with Managed Identity (no secrets needed).

# Attach ACR to AKS
az aks update \
  --name <aks-cluster> \
  --resource-group <rg> \
  --attach-acr <acr-name>
Configuration:

global:
  imageRegistry:
    url: "<acr-name>.azurecr.io"
    pullSecrets: []  # Empty - using managed identity
Benefits:

✅ No secrets to manage

✅ Automatic authentication

✅ Works across all namespaces

✅ Production-ready

AWS Elastic Container Registry (ECR)
Recommended: Attach ECR permissions to Node IAM Role.

# Attach ECR policy to node role
aws iam attach-role-policy \
  --role-name <eks-node-role> \
  --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly
Configuration:

global:
  imageRegistry:
    url: "<account-id>.dkr.ecr.<region>.amazonaws.com"
    pullSecrets: []  # Empty - node IAM role handles auth
Using Image Pull Secrets (Alternative)
If managed identity is not available:

# Create secret in each namespace
kubectl create secret docker-registry acr-secret \
  --namespace <namespace> \
  --docker-server=<registry>.azurecr.io \
  --docker-username=<username> \
  --docker-password=<password>
Configuration:

global:
  imageRegistry:
    url: "<registry>.azurecr.io"
    pullSecrets:
      - name: acr-secret  # Must exist in EACH namespace

Secret Management
Using Secret Provider Class

Quick Summary for Customers

Secret Provider Class allows you to store all sensitive credentials (passwords, connection strings, API keys) in a centralized vault (Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault) instead of hardcoding them in configuration files.

Key Requirements:

✅ Install CSI Secrets Store Driver + provider plugin

✅ Configure identity authentication (Azure Workload Identity or AWS IRSA)

✅ Grant vault access permissions to the identity

✅ Store secrets in the vault with correct key names

✅ Enable secretProviderclass in helmfile configuration

The identity authentication (Step 2) is MANDATORY - the CSI driver uses your ServiceAccount's cloud identity to authenticate to the vault and retrieve secrets.

Inject credentials from external secret management systems (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).

🔐 IMPORTANT: Authentication Required

Secret Provider Class requires workload identity authentication to access the secret vault:

Azure Key Vault → Requires Azure Workload Identity (azureWorkloadIdentity.enable: true)

AWS Secrets Manager → Requires AWS IRSA (awsIRSA.enable: true)

HashiCorp Vault → Requires Kubernetes Auth configured in Vault

The CSI driver uses the ServiceAccount's identity to authenticate to the vault and retrieve secrets.

Prerequisites

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
Supported Components
Component

Secrets Managed

mx-privatecloud

Authenticator & Collector database credentials

svix-server

PostgreSQL and Redis connection strings

mxplatform

PCLM credentials, admin passwords, database credentials, storage credentials

Configuration Pattern

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
Key Points:

✅ Azure: Must enable azureWorkloadIdentity + configure Managed Identity with Key Vault access

✅ AWS: Must enable awsIRSA + configure IAM role with Secrets Manager access

✅ Vault: Must configure Kubernetes auth method in Vault + grant policy access

❌ Secret Provider Class will not work without proper identity authentication configured

Global vs Component Configuration
Component settings take precedence over global settings:

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
Auto-Generated Credentials
For internal component communication:

Component

Credential

Generated

mx-privatecloud

Internal API passwords

Random 16-char

mxplatform-kube-agent

Build password

Random 20-char

svix-server

JWT secret

Random 64-char

Upgrade-safe: Existing credentials preserved via lookup.

Workload Identity 
💡 What is Workload Identity?

Workload Identity enables  components to connect to cloud resources WITHOUT passwords. Instead of storing passwords and access keys in configuration files, components use cloud-native identity (AWS IAM or Azure Managed Identity) to authenticate.

Supported Components:

mx-privatecloud-license-manager: Passwordless database connections for PCLM service

mx-privatecloud: Passwordless database connections for authenticator and collector services

mxplatform: Passwordless database and storage connections for Mendix application runtime

Supported Cloud Providers:

AWS IRSA (IAM Roles for Service Accounts): AWS RDS databases and S3 storage

Azure Workload Identity: Azure Database for PostgreSQL and Azure Blob Storage

Use Case 1: Database Authentication for PCLM and mx-privatecloud
💡 What is IAM-Based Database Authentication?

IAM-based database authentication allows components to connect to cloud databases WITHOUT passwords. Instead of storing database passwords in configuration files, components use cloud-native identity (AWS IAM or Azure Managed Identity) to authenticate.

Applicable to:

mx-privatecloud-license-manager (PCLM): Passwordless connection to PCLM database

mx-privatecloud: Passwordless connections for authenticator and collector databases

Supported databases:

AWS RDS for PostgreSQL/MySQL/SQL Server (using AWS IAM database authentication)

Azure Database for PostgreSQL/SQL Server (using Microsoft Entra ID / Managed Identity authentication)

How It Works
Enable cloud identity: Set awsIRSA.enable: true (for AWS) or azureWorkloadIdentity.enable: true (for Azure)

Configure database settings: Provide host, port, name, and user — leave password empty

Chart validation allows empty passwords: When workload identity is enabled, the chart skips password validation

At runtime: Components use temporary IAM/Managed Identity tokens to authenticate to the database

Requirements
For AWS RDS IAM Authentication:

✅ RDS instance must have IAM database authentication enabled

✅ Database user must be created with rds_iam role

✅ IAM role (specified in awsIRSA.roleArn) must have rds-db:connect permission for the database resource

✅ EKS cluster must have OIDC provider configured

✅ Federated credential must map ServiceAccount to IAM role

For Azure Database for PostgreSQL with Managed Identity:

✅ Azure Database for PostgreSQL must have Microsoft Entra authentication enabled

✅ Database user must be created as a Microsoft Entra user

✅ Managed Identity (specified in azureWorkloadIdentity.clientID) must have permission to connect

✅ AKS cluster must have OIDC issuer and Workload Identity enabled

✅ Federated credential must map ServiceAccount to Managed Identity

Configuration Examples
Example 1: mx-privatecloud-license-manager with Azure Managed Identity

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
Helmfile configuration:

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
Example 2: mx-privatecloud with Azure Managed Identity

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
Helmfile configuration:

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
Workload Identity vs Secret Provider Class
These are different approaches for database credentials management:

Feature

Workload Identity (IAM Authentication)

Secret Provider Class

Purpose

Passwordless database connection at runtime

Inject all secrets from vault during installation

What it secures

Database passwords only

Database credentials + all other secrets

Configuration

awsIRSA.enable: true or azureWorkloadIdentity.enable: true + empty passwords

secretProviderclass.enable: true

Works with

AWS RDS IAM auth or Azure Database Managed Identity auth

AWS Secrets Manager, Azure Key Vault, HashiCorp Vault

Credential type

Temporary cloud tokens (auto-rotated)

Static secrets from vault

Can be combined?

❌ No - mutually exclusive with Secret Provider Class

❌ No - mutually exclusive with Workload Identity

Key Difference:

Workload Identity: Components use cloud identity to connect to databases (no passwords stored anywhere)

Secret Provider Class: Helm retrieves database passwords from a vault and injects them during installation (passwords exist in vault as static secrets)

Use Case 2: mxplatform Database and Storage Authentication
For mxplatform, Workload Identity provides passwordless authentication for both database AND storage at application runtime.

📖 Detailed Guide: See private-cloud-storage-plans for complete scenarios and StoragePlan configuration examples.

ℹ️ Note: This is for mxplatform's runtime data access — it does NOT apply to installation secrets (admin passwords, PCLM credentials). For those, use Secret Provider Class.

How It Works
Workload Identity uses StoragePlans with managed identity authentication (managed by Mendix Operator, not Helm) to configure passwordless authentication for database and storage connections:

You create StoragePlans (During Operator configuration) with workload identity configuration:

For AWS: Specify IAM role ARN that has permissions to access RDS/S3

For Azure: Specify Managed Identity client ID that has permissions to access Azure Database/Blob Storage 

You set UseStoragePlanwithIRSA: true in mxplatform helmfile configuration

You reference these plans in spec.database.servicePlan and spec.storage.servicePlan

Mendix Operator automatically:

Create a Managed Identity for an mxplatform application

Create a Kubernetes Service Account

Adds appropriate cloud provider annotations to the ServiceAccount:

AWS: eks.amazonaws.com/role-arn: "arn:aws:iam::123456789012:role/mxplatform-role"

Azure: azure.workload.identity/client-id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

Configures mxplatform pods to use this ServiceAccount

🚨 CRITICAL: Workload Identity Limitation

When UseStoragePlanwithIRSA: true, the Mendix Operator creates the ServiceAccount, NOT the Helm chart. This means:

❌ Chart-level azureWorkloadIdentity configuration does NOT work for mxplatform

❌ The chart cannot add azure.workload.identity/client-id annotation (Service account will be created by Operator)

Azure Example - StoragePlan with Managed Identity
Step 1: Create StoragePlans with Managed Identity

atabase:
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
Step 2: Configure mxplatform in helmfile values

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
Result: Mendix Operator creates ServiceAccount with azure.workload.identity/client-id annotation, enabling passwordless Azure Database and Blob Storage access.

mxplatform: Workload Identity vs Secret Provider Class
These are two different approaches for managing credentials for mxplatform:

Feature

Workload Identity (StoragePlan)

Secret Provider Class (CSI)

Purpose

Runtime connection to cloud database and storage

Inject all secrets from vault

What it authenticates

mxplatform app connecting to database + storage

Database + Storage + Admin password + PCLM credentials

Credentials

Temporary cloud tokens (auto-rotated by AWS/Azure)

Static secrets from vault

Configuration

In StoragePlan CRDs + UseStoragePlanwithIRSA: true

secretProviderclass.enable: true

ServiceAccount

Created by Mendix Operator (based on StoragePlan)

Created by Helm chart

Mutual exclusivity

❌ Cannot use with Secret Provider Class

❌ Cannot use with workload identity storage plan

key Difference:

Workload Identity: Your running Mendix application uses cloud identity to connect to its database and file storage (no database passwords in config)

Secret Provider Class: Helm chart retrieves secrets from vault to configure/install the components (admin passwords, PCLM credentials, database connection strings)

Decision Matrix
Use Workload Identity (StoragePlan) when:

✅ You want passwordless database and storage access for your running Mendix application

✅ You're on AWS EKS or Azure AKS with native cloud database/storage services

✅ You want automatic credential rotation (cloud provider handles token refresh)

✅ You only need to secure runtime database/storage connections (admin password and PCLM can be in values file or traditional secrets)

✅ Example scenario: "My Mendix app should connect to Azure Database for PostgreSQL and Azure Blob Storage using Managed Identity, without storing any database passwords"

Use Secret Provider Class when:

✅ You want all installation secrets (admin password, PCLM credentials, database connection strings, storage credentials) from a centralized vault

✅ You need multi-cloud secret management (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault)

✅ You want centralized secret management across all PMP components (mx-privatecloud, svix-server, mxplatform)

✅ You're using HashiCorp Vault or managing secrets across multiple cloud providers

✅ Example scenario: "I want to store all PMP installation secrets (PCLM password, admin password, database credentials) in Azure Key Vault and inject them during Helm installation"

Can they be used together?

❌ No - These are mutually exclusive for mxplatform

If UseStoragePlanwithIRSA: true → Operator creates ServiceAccount with database/storage identity → Chart cannot use Secret Provider Class for that ServiceAccount

If secretProviderclass.enable: true → Chart creates ServiceAccount with vault access → Cannot use StoragePlan with workload identity for database/storage

Why mutually exclusive?: Both approaches need to control the ServiceAccount annotations, but in different ways (Operator or pmp helm )

Complete Comparison Example
Approach 1: Workload Identity (StoragePlan) - Passwordless Runtime Database/Storage Access

This approach secures how your Mendix application connects to its database and storage at runtime.

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
What this secures:

✅ Runtime database connection: App uses Managed Identity to connect to PostgreSQL (no database password in config)

✅ Runtime storage connection: App uses Managed Identity to access Blob Storage (no storage access key in config)

❌ Installation secrets (PCLM password, admin password) are still in values file

Approach 2: Secret Provider Class - Centralized Installation Secret Management

This approach secures installation and configuration secrets by retrieving them from Azure Key Vault during Helm installation.

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
What this secures:

✅ PCLM credentials: Retrieved from Key Vault during installation

✅ Admin password: Retrieved from Key Vault during installation

✅ Database credentials: Retrieved from Key Vault (but stored as static passwords in vault)

✅ Storage credentials: Retrieved from Key Vault (but stored as static access keys in vault)

ℹ️ Runtime connections still use static passwords/keys (not cloud-native passwordless auth)

Troubleshooting
Critical Issues Only
mxplatform has empty credentials
Cause: mxplatform installed before dependencies completed.

Solution: Re-run full apply:

helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
helmfile diff shows empty lookup values
Expected behavior: lookup functions return empty during diff because they query the live cluster. Actual apply resolves values correctly.

Image pull errors
Solutions:

Verify registry configuration

For AKS: Use az aks update --attach-acr

For EKS: Attach ECR policy to node IAM role

For cross-namespace: Create imagePullSecrets in each namespace

Database connection failures
Checklist:

Verify host is reachable from cluster

Check credentials

If dbssl: true, verify CA certificate

If using Secret Provider, verify CSI driver installed

Secret Provider Class issues
Checklist:

Verify CSI driver installed: kubectl get pods -n kube-system | grep secrets-store

Check provider plugin installed

Verify authentication (IRSA/Workload Identity/Kubernetes Auth)

Check SecretProviderClass: kubectl describe secretproviderclass -n <namespace>

View pod events: kubectl describe pod <pod> -n <namespace>

Security Best Practices
Use Secret Provider Class to avoid storing credentials in values files

Do not commit values files to Git — they contain sensitive data

echo "my-values.yaml" >> .gitignore
Generate unique RSA keys for each environment

openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
Rotate credentials regularly via secret provider or values file, then run helmfile apply

Use managed identity for container registries (AKS-ACR, EKS-ECR)

Samples 
1:  PCLM/Mx-PrivateCloud/Mxplatform Storageplan/DB Plan with Managed Identity

azure-workload-IdentitySP.yaml
23 Jul 2026, 12:17 PM
2: Azure Key Vault  for Installation  for Svix/Mx-Privatecloud/Mxplatform 

azure-workload-secret.yaml
 
3: Plain Text with Auto generated internal Credentails

azure-static.yaml

4: Plain Text with explicit Internal Credentails 