---
title: "Install Private Mendix Platform with Helmfile"
linktitle: "Helmfile Installation"
url: /private-mendix-platform/helmfile-installation/
description: "Documents the installation process for Private Mendix Platform in non-interactive (automatic) mode."
weight: 30
---

## Introduction

You can now use Helm and Helmfile in order to automate the declarative installation of Private Mendix Platform and its components through GitOps and CI/CD pipelines.

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

### Install helm-diff plugin
```bash
helm plugin install https://github.com/databus23/helm-diff

# Verify installation
helm plugin list | grep diff
```

---

# Mendix Operator Installation Requirements
Before deploying the Mendix Private Platform components, you must install the Mendix Operator with proper configuration.

## 1. License Manager (PCLM) Credentials
The operator must be configured with PCLM credentials that match the credentials you'll use when installing `mx-privatecloud-license-manager` via helmfile.

**In operator installation values:**
```yaml
licenseManager:
  enable: true
  credentialsSecretName: "mendix-pclm-credentials"
  serverURL: "http://mx-privatecloud-license-manager"
  username: "operatoruser"      # Must match pclm bootstrap operator_user
  password: "operatorpass"       # Must match pclm bootstrap operator_password
```

**In helmfile values for mx-privatecloud-license-manager:**
```yaml
mx-privatecloud-license-manager:
  enable: true
  bootstrap_users:
    create_operator_user: true
    operator_user: "operatoruser"      # Must match operator licenseManager.username
    operator_password: "operatorpass"  # Must match operator licenseManager.password
```
> **CRITICAL:** The `operator_user` and `operator_password` in PCLM bootstrap configuration must exactly match the `licenseManager.username` and `licenseManager.password` in the operator installation.

## 2. ServiceAccount Token Automount (Required for Maia Integration)
If you plan to use Maia AppGen/LLM gateway integration, the operator must be configured to automount ServiceAccount tokens:
```yaml
operator_config:
  runtimeAutomountServiceAccountToken: true
```
**Why:** Maia AppGen needs to communicate with Mendix applications via the Kubernetes API.

## 3. StoragePlan and Database Plan Configuration
Storage and database plans must be configured in the operator installation values.

**Example: Azure Database and Storage with Workload Identity**
```yaml
credentialServiceAccounts:
  enabled: true
  serviceAccounts:
    - authType: "azure-wi"
      k8sServiceAccountName: "db-admin-sa"
      azwiClientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

database:
  postgres:
    enabled: true
    plans:
      - planName: "azure-db"
        planType: "on-demand"
        useAzureWIAuth: true
        k8sServiceAccountName: "db-admin-sa"
        host: "myserver.postgres.database.azure.com"
        user: "mendix-storage-admin"
        password: ""  # Empty when using Workload Identity

storage:
  azure_blob:
    enabled: true
    plans:
      - planName: "azure-sp"
        k8sServiceAccountName: "storage-admin-sa"
        useAzureWIAuth: true
        azureStorageAccount: "mystorageaccount"
```

---

# Quick Start
```bash
# 1. Create your values file
cp examples/my-values.yaml my-values.yaml

# 2. Deploy all enabled components
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
```

## Minimal Values File Template
```yaml
namespace: mendix-platform

global:
  imageRegistry:
    url: "customer-prod.azurecr.io"
    pullSecrets: []

mx-privatecloud-license-manager:
  enable: true
  db:
    type: "postgres"
    postgres:
      host: "postgres.example.com"
      name: "pclm"
      user: "pclm_user"
      password: "pclm-password"
  bootstrap_users:
    admin_user: "administrator"
    admin_password: "admin-password"
    create_operator_user: true
    operator_user: "operatoruser"
    operator_password: "operatorpass"

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
```

---

# Installation Commands

## Recommended: Full Apply
```bash
helmfile --file helmfile.d/helmfile.yaml \
  --state-values-file my-values.yaml \
  apply
```

## Selective Component Install
```bash
# Step 1: Update dependency
helmfile ... -l name=mx-privatecloud apply

# Step 2: MANDATORY - sync mxplatform
helmfile ... -l name=mxplatform apply
```

## Other Commands
*   **Preview:** `helmfile ... diff`
*   **Status:** `helmfile ... status`
*   **Destroy:** `helmfile ... destroy`

> **CRITICAL:** Disabling `mxplatform` (setting `enable: false`) is a destructive operation. Review reclaim policies to prevent data loss.

---

# Component Configurations

## mx-privatecloud-license-manager (PCLM)
Required for `mxplatform` deployment.

### Database Configuration
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| **db.type** | string | Yes | "postgres" or "sqlserver" |
| **db.strict_tls** | boolean | No | Enable strict TLS for database |

### Bootstrap Users
| Field | Required | Description |
| :--- | :--- | :--- |
| **admin_user** | Yes | PCLM Admin username |
| **operator_user** | Yes | Must match Mendix Operator config |

---

# Secret Management

## Using Secret Provider Class
Allows storing credentials in Azure Key Vault, AWS Secrets Manager, or HashiCorp Vault.

**Pattern:**
```yaml
mx-privatecloud:
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  secretProviderclass:
    enable: true
    provider: "azure"
    azureparameters:
      keyvaultName: "my-keyvault"
```

---

# Workload Identity Decision Matrix

| Feature | Workload Identity (IAM) | Secret Provider Class (CSI) |
| :--- | :--- | :--- |
| **Purpose** | Passwordless runtime connection | Inject secrets during install |
| **Secures** | DB/Storage passwords only | All secrets/passwords |
| **Rotation** | Automatic (Cloud tokens) | Static secrets in Vault |
| **Compatibility** | Mutually exclusive with CSI | Mutually exclusive with IAM |

---

# Troubleshooting

*   **Empty Credentials:** Re-run full `helmfile apply`.
*   **Image Pull Errors:** Verify registry URL or attach ACR/ECR permissions to nodes.
*   **DB Failures:** Check reachability and CA certificates if `strict_tls` is enabled.
*   **CSI Issues:** Verify the Secrets Store Driver pods are running in `kube-system`.

# Security Best Practices
1.  Use **Secret Provider Class** to avoid plain-text credentials.
2.  Add `my-values.yaml` to `.gitignore`.
3.  Generate unique RSA keys for each environment.
4.  Use **Managed Identities** for container registries.
```