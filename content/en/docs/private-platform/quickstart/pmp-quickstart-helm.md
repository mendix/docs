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

ServiceAccount creation depends on the value of the **UseStoragePlanwithIRSA** field. If set to **false**, Chart creates the ServiceAccount with workload identity annotations. If set to **true**, Mendix Operator creates ServiceAccount based on StoragePlan configuration.

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