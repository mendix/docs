---
title: "Installation Reference"
url: /private-mendix-platform/installation-reference/
description: "Documents the required and optional components used in Private Mendix Platform installation."
weight: 18
---

## Introduction

The following reference document presents a list of required and optional components of Private Mendix Platform.

## Images

| Image | Description | Required |
| --- | --- | --- 
| `privatecloud-license-manager` | Private Cloud License Manager (PCLM) | Required |
| `mendix-operator` | Mendix Operator | Required |
| `image-builder` | Builds app container images | Required |
| `mendix-private-platform` | Mendix Platform application runtime | Required |
| `mx-m2ee-sidecar` | M2EE sidecar for app pods | Required |
| `mxpc-test` | Private Cloud connectivity/validation tests | Required |
| `pmp-pipeline-tools` | PMP deployment pipeline tooling | Required |
| `app-building-blocks` | App runtime and JRE base layers - pull the versions matching your app deployment requirements | Per deployment |
| `storage-provisioner` | Provisions app databases and file storage - pull the variants matching your database and storage requirements | Per deployment |
| `kubernetes-agent` | Cluster agent - used in Interactor-Agent mode | Optional |
| `interactor` | Interactor service - used in Interactor-Agent mode | Optional |
| `interactor-bridge` | Interactor bridge - used in Interactor-Agent mode | Optional |
| `privatecloud-authenticator` | Authenticator service - used in Interactor-Agent mode | Optional |
| `privatecloud-collector` | Collector service - used in Interactor-Agent mode | Optional |
| `mxplatform-kube-agent` | Build agent for mxplatform | Optional |
| `maia-appgen` | Maia AI AppGen service - required only if Maia features are used | Optional |
| `maia-llm-gateway` | Maia LLM Gateway service - required only if Maia features are used | Optional |
| `document-generation-service` | PDF document generation service | Optional |
| `svix-server` | Webhook delivery service (upstream image `svix/svix-server`) | Optional |

### Registry Paths

* `registry.mendix.com/private-cloud/ (license-manager, operator, image-builder, m2ee-sidecar, storage-provisioner, app-building-blocks, kubernetes-agent, interactor, interactor-bridge, authenticator, collector)`
* `registry.mendix.com/private-platform/ (mxpc-test, pmp-pipeline-tools, mxplatform-kube-agent, mendix-private-platform)`
* `registry.mendix.com/maia/ (maia-appgen, maia-llm-gateway)`
* `registry.mendix.com/docgen/ (document-generation-service)`, Docker Hub
* `svix/ (svix-server)`

## Charts

| Component | Description | Namespace | Required | ServiceAccount |
| --- | --- | --- | --- | --- |
| `mx-privatecloud-operator-installer` | Mendix Operator installer | Independent | Required | created by chart |
| `mx-privatecloud-operator-crd` | Mendix Operator CRDs | Cluster-scoped | Required | N/A |
| `mx-privatecloud-license-manager` | Private Cloud License Manager (PCLM) | Shared | Required | `mendix-pclm` (created by chart) |
| `installer-config` | Shared installer configuration | Shared | Required | n/a |
| `mxplatform` | Mendix Platform application (MendixApp CR) | Shared | Required | `mxplatform` (created by chart or operator) |
| `mx-privatecloud` | Private Cloud services (authenticator, collector, interactor, bridge) - used in Interactor-Agent mode | Shared | Optional | `mx-privatecloud` (created by chart) |
| `mxplatform-kube-agent` | Build agent for mxplatform | Independent | Optional | `mxplatform-kube-agent` (created by chart) |
| `maia-appgen` | Maia AI AppGen service | Shared | Optional | `maia-appgen` (created by chart) |
| `maia-llm-gateway` | Maia LLM Gateway service for routing LLM requests | Shared | Optional | `maia-llm-gateway` (created by chart) |
| `mx-private-document-generation` | PDF document generation service | Independent | Optional | `mx-private-document-generation` (created by chart) |
| `svix-server` | Webhook delivery service | Shared | Optional | `svix` (created by chart) |

### Pull Command

```bash
helm pull oci://registry.mendix.com/private-cloud/charts/<chart> --version <version>
```

### Registry Paths

* `private-cloud/charts/` (operator-installer, operator-crd, license-manager, mx-privatecloud)
* `private-platform/charts/` (mxplatform, mxplatform-kube-agent, installer-config, svix-server)
* `maia/charts/` (maia-appgen, maia-llm-gateway)
* `docgen/charts/` (mx-private-document-generation)

## Custom Artifacts

| Artifact | Description | Required |
| --- | --- | --- |
| `installer-helmfile` | Tarball containing the helmfile and `helmfile-config` sample values | Required |

### Address

* `registry.mendix.com/private-platform/installer-helmfile:<version>`

## Component Configurations

The following configurations are component-specific.

### Mx-privatecloud-license-manager

This is the Private Cloud License Manager (PCLM) component. It is required for Private Mendix Platform deployment. It manages licenses for Mendix applications running in Private Cloud.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enable PCLM deployment |
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

##### TLS Configuration for Ingress

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `ingress.enableTLS` | Boolean | No | `false` | Set to `true` to enable TLS termination at ingress. |
| `ingress.tlsSecretName` | string | Conditional | "" | Kubernetes Secret name containing TLS certificate. Required if `ingress.enableTLS: true`. |

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

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

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

#### Service URL

The PCLM service is accessible within the cluster at the following:

* Service name - `mx-privatecloud-license-manager`
* Port - 80 (HTTP)
* Full URL - `http://mx-privatecloud-license-manager` (when in same namespace)

This URL is used by the following:

* Mendix Operator (for obtaining licenses)
* `mxplatform` (configured through the `pclm.serviceUrl` field)

### Mx-privatecloud

The following configurations apply to Mendix Private Cloud core services (Authenticator, Collector, Interactor, Interactor-bridge).

#### Quick Deployment Scenarios

Refer to the following list for a quick summary of the supported deployment scenarios and the required configuration.

* Basic setup

    Set the database credentials for authenticator and collector, and then configure NATS.

* Database with SSL/TLS

    Set `dbssl` to `true` and provide a `dbca` certificate.

* External agents

    Enable `interactor_bridge.ingress` with a host name.

* AWS RDS IAM Authentication (Passwordless)

    Enable `awsIRSA` with `roleArn` and leave the database passwords empty.

* Azure Managed Identity Database Auth (Passwordless)

    Enable `azureWorkloadIdentity` and leave the database passwords empty.

* Azure Key Vault

    Enable `azureWorkloadIdentity + secretProviderclass` with `provider` set to `azure`.

* AWS Secrets Manager

    Enable `awsIRSA + secretProviderclass` with `provider` set to `aws`.

* HashiCorp Vault

    Enable `secretProviderclass` with `provider` set to `vault`.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enable `mx-privatecloud` deployment |
| `nats.server_addr` | string | Yes | The NATS server address, for example, `nats://nats.nats.svc:4222` |

This chart deploys 4 components (Authenticator, Collector, Interactor, and Interactor-Bridge).

#### NATS Setup

This chart does not install NATS. You must deploy it separately by running the following commands:

```text
helm repo add nats https://nats-io.github.io/k8s/helm/charts/
helm install nats nats/nats --namespace nats --create-namespace
```

### Database Configuration

The following configurations apply to databases.

#### Authenticator Database and Collector Database

The Authenticator and Collector database have the same structure.

| Field | Required | Description |
| --- | --- | --- |
| `authenticator.database.host` | Conditional | Database host name; not required when `secretProviderclass.enable` is set to `true` |
| `authenticator.database.port` | No (default: `5432`) | Database port |
| `authenticator.database.name` | Conditional | Database name; not required when `secretProviderclass.enable` is set to `true` |
| `authenticator.database.user` | Conditional | Database user name; not required when `secretProviderclass.enable` is set to `true` |
| `authenticator.database.password` | Conditional | Database password; not required when using AWS IRSA (`awsIRSA.enable: true`) or Azure Workload Identity (`azureWorkloadIdentity.enable: true`) for IAM-based database authentication |
| `authenticator.database.dbssl` | No | Enables SSL/TLS |
| `authenticator.database.dbca` | Conditional | CA certificate; required if `dbssl` is set to `true` |

#### RSA Keys and Internal Credentials

| Field | Default | Recommendation |
| --- | --- | --- |
| `rsa.privateKey` | Has a default value | It is recommended to override this value in production |
| `rsa.publicKey` | Has a default value | It is recommended to override this value in production |
| `credentials.authenticator_admin_pass` | Auto-generated | It is recommended to set this value explicitly |
| `credentials.authenticator_standard_pass` | Auto-generated | It is recommended to set this value explicitly |
| `credentials.collector_api_pass` | Auto-generated | It is recommended to set this value explicitly |
| `credentials.interactor_api_pass` | Auto-generated | It is recommended to set this value explicitly |

##### Generate RSA Keys

```text
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
```

#### Example Configurations

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Minimal Setup

```text
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
```

##### With AWS IAM Database Authentication (Passwordless)

```text
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
```

##### With Azure Managed Identity Database Authentication (Passwordless)

```text
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
```

##### With Database SSL

```text
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
```

##### With Azure Key Vault

```text
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
```

##### Required Azure Key Vault Secrets

When using Azure Key Vault (with `provider` set to `azure`), you must create the following secrets in your Key Vault:

| Secret Name | Description | Example Value |
| --- | --- | --- |
| `authenticator-db-name` | Authenticator database name | `authenticator` |
| `authenticator-db-host` | Authenticator database host | `postgres.example.com` |
| `authenticator-db-port` | Authenticator database port | `5432` |
| `authenticator-db-user` | Authenticator database username | `auth_user` |
| `authenticator-db-pass` | Authenticator database password | `StrongPassword123` |
| `collector-db-name` | Collector database name | `collector` |
| `collector-db-host` | Collector database host | `postgres.example.com` |
| `collector-db-port` | Collector database port | `5432` |
| `collector-db-user` | Collector database username | `collector_user` |
| `collector-db-pass` | Collector database password | `StrongPassword456` |

##### With Ingress for External Agents

```text
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
```

### Maia-appgen

This component provides the Maia AI AppGen service for AI-powered application generation.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enables Maia AppGen deployment |
| `env` | array | Yes | Must include the `MXASSIST_COPILOT_MXID3_URL` |

#### Environment Variables

##### Required

```text
env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: "https://pmp.example.com/oidc/"  # REQUIRED - OIDC endpoint
```

##### ServiceAccount

| Field | Type | Must Stay |
| --- | --- | --- |
| `serviceAccount.create` | `true` | Yes - required for RBAC |
| `serviceAccount.name` | `maia-appgen` | Used for IRSA/Workload Identity |
| `serviceAccount.automount` | `true` | Yes - needs K8s API access |

#### Example Configurations

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Basic

```text
maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
```

##### With Azure Workload Identity

```text
maia-appgen:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
  azureWorkloadIdentity:
    enable: true
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

##### With Ingress

```text
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
```

### Maia-llm-gateway

The Maia LLM Gateway service is used for routing LLM requests to various AI model providers.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enables Maia LLM Gateway deployment |
| `env` | array | Yes | Must include `MXASSIST_COPILOT_MXID3_URL`; optional for `MXASSIST_COPILOT_MXID3_SSL_CA_CERT` |

#### Environment Variables

The chart uses a two-tier environment variable system:

* `defaultEnv` - Chart-managed defaults set in `values.yaml`. Do not modify them.
* `env` - User-defined variables (your overrides and required settings).

##### Required

```text
env:
  - name: MXASSIST_COPILOT_MXID3_URL
    value: "https://pmp.example.com/oidc/"  # REQUIRED - OIDC endpoint
```    

##### Optional

```text
env:
  - name: MXASSIST_COPILOT_MXID3_SSL_CA_CERT
    value: |
      -----BEGIN CERTIFICATE-----
      ...
      -----END CERTIFICATE-----  # Optional - Custom CA certificate for MxID3
```

#### ServiceAccount

| Field | Type | Must Stay |
| --- | --- | --- |
| `serviceAccount.create` | `true` | Yes - required for RBAC |
| `serviceAccount.name` | `maia-llm-gateway` | Used for IRSA/Workload Identity |
| `serviceAccount.automount` | `true` | Yes - needs K8s API access |

#### Example Configurations

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Basic

```text
maia-llm-gateway:
  enable: true
  env:
    - name: MXASSIST_COPILOT_MXID3_URL
      value: "https://pmp.example.com/oidc/"
```

##### With Custom CA Certificate

```text
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
```

##### With Ingress

```text
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
```

#### Integration with Mxplatform

When `maia-llm-gateway` is enabled, `mxplatform` automatically configures the following microflow constants. You do not need to configure anything yourself - the integration happens automatically when you enable the component.

| Constant | Value | Description |
| --- | --- | --- |
| `Maia.Enable` | `true | Set when `maia-llm-gateway` or `maia-appgen` is enabled |
| `Maia.Config_Secret_Name_LLM_GW` | Secret name | Auto-discovered through label lookup |
| `Maia.Config_Secret_Namespace_LLM_GW` | Namespace | Same as thw `mxplatform` namespace |
| `Maia.LLM_GW_URL` | `https://<hostname>` | Set when Ingress is enabled with host name |

### Svix-server

The Svix webhooks server is used for event delivery and webhook management.

#### Quick Deployment Scenarios

Refer to the following list for a quick summary of the supported deployment scenarios and the required configuration.

* Basic production

    Set `postgres`, and optionally also `redis` and `useRedis` to `true`.

* Azure Key Vault

    Enable `azureWorkloadIdentity` and `secretProviderclass` with `provider` set to `azure`.

* AWS Secrets Manager

    Enable `awsIRSA` and `secretProviderclass` with `provider` set to `aws`.

* HashiCorp Vault

    Enable `secretProviderclass` with `provider` set to `vault`.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enables svix-server deployment |
| `postgres` | string | Conditional | The PostgreSQL DSN. Required when `secretProviderclass.enable` is set to `false` |
| `secretKey` | string | Recommended | The JWT secret key; auto-generated if empty |

#### Database and Cache

```text
svix-server:
  enable: true
  postgres: "postgresql://user:pass@host:5432/svix"
  redis: "redis://host:6379/0"  # Optional
  useRedis: false  # Set true to enable Redis
  secretKey: ""  # Leave empty for auto-generation
```

#### Secret Key Management

The JWT secret is managed through `svix-configmap` in the following way:

* If the user provides a `secretKey`, the provided value is used.
* If the `secretKey` is empty and the ConfigMap exists, the existing key is preserved (`upgrade-safe`).
* If the `secretKey` is empty and the ConfigMap does not exist, a 64-character key is auto-generated.

The JWT secret is automatically injected into the `SvixClient.JwtSecret` constant of the `mxplatform`.

#### Example Configurations

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Basic

```text
svix-server:
  enable: true
  postgres: "postgresql://svix:pass@host:5432/svix"
  secretKey: ""  # Auto-generated
```

##### With Redis

```text
svix-server:
  enable: true
  postgres: "postgresql://svix:pass@host:5432/svix"
  redis: "redis://redis-master:6379/0"
  useRedis: true
```

##### With Azure Key Vault

```text
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
```

When using Azure Key Vault (with `provider` set to `azure`), you must create the following secrets in your Key Vault:

| Secret Name | Description | Example Value |
| --- | --- | --- |
| `svix-db-dsn` | The PostgreSQL connection string | `postgresql://user:pass@host:5432/svix` |
| `svix-redis-dsn` | The Redis connection string (optional, used when `useRedis` is set to `true`) | `redis://host:6379/0` |

### Mxplatform

The `mxplatform` component is used for Mendix application platform deployment.

#### Basic Configuration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable` | Boolean | Yes | Enables `mxplatform` deployment |
| `name` | string | No (default: `mxplatform`) | The name of the MendixApp CR and ServiceAccount, if created |
| `UseStoragePlanwithIRSA` | Boolean | No (default: `false`) | Set to `true` when using StoragePlans with Workload Identity |

#### PCLM Integration (Required)

| Field | Required | Description |
| --- | --- | --- |
| `pclm.serviceUrl` | Yes | PCLM service endpoint |
| `pclm.username` | Conditional | The PCLM username; not required when `secretProviderclass.enable` is set to `true` (for credentials injected from a secret manager) |
| `pclm.password` | Conditional | The PCLM password; not required when `secretProviderclass.enable` is set to `true` (for credentials injected from a secret manager) |

#### Spec Configuration

| Field | Required | Description |
| --- | --- | --- |
| `spec.appURL` | Yes | A public domain for the app |
| `spec.sourceURL` | Yes | The OCI image path in the following format: `oci-image://<registry>/<image>:<tag>` |
| `spec.database.servicePlan` | Conditional | The database service plan name; not required when `secretProviderclass.enable` is set to `true` (for credentials injected from a secret manager) |
| `spec.storage.servicePlan` | Conditional | The storage service plan name; not required when `secretProviderclass.enable` is set to `true` (for credentials injected from a secret manager) |
| `spec.runtime.mxAdminPassword` | Conditional | The admin password not required when `secretProviderclass.enable` is set to `true` (for credentials injected from a secret manager) |

#### Automatic Integration Detection

`Mxplatform` automatically integrates with enabled components. You only need to enable or disable components. Do not configure integration flags manually.

| Auto-detected Flag | When Used | Purpose |
| --- | --- | --- |
| `privatecloudEnabled` | Set when `mx-privatecloud.enable` is set to `true` | Connects to Private Cloud services |
| `maiaEnabled` | Set when `maia-appgen.enable` is set to `true` | Enables the Maia AI assistant |
| `svixEnabled` | Set when `svix-server.enable` is set to `true` | Enables webhook delivery |
| `kubeAgentEnabled` | Set when `mxplatform-kube-agent.enable` is set to `true` | Enables build agent |

#### Example Configurations

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

##### Basic

```text
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
```

##### With Secret Provider

```text
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
```

When using Azure Key Vault (with `provider` set to `azure`), you must create the following secrets in your Key Vault:

| Secret Name | Description | Example Value | When Required |
| --- | --- | --- | --- |
| `mx-admin-password` | The Mendix application admin password | `AdminPassword123` | Always |
| `pclm-admin-username` | The PCLM administrator username | `administrator` | Always |
| `pclm-admin-password` | The PCLM administrator password | `PCLMPassword123` | Always |
| `database-type` | Database type | `PostgreSQL` | Database secrets; required when `spec.database.servicePlan` is empty |
| `database-host` | Database host | `postgres.example.com` | Database secrets; required when `spec.database.servicePlan` is empty |
| `database-name` | Database name | `mxplatform` | Database secrets; required when `spec.database.servicePlan` is empty |
| `database-username` | Database username | `mxplatform_user` | Database secrets; required when `spec.database.servicePlan` is empty |
| `database-password` | Database password | `DBPassword123` | Database secrets; required when `spec.database.servicePlan` is empty |
| `database-jdbc-url` | JDBC connection URL | `jdbc:postgresql://postgres.example.com:5432/mxplatform` | Database secrets; required when `spec.database.servicePlan` is empty |
| `storage-service-name` | Storage service name | `azure` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-azure-container` | Azure Blob container name | 
`mxplatform-files` | Storage service name | `azure` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-azure-blob-endpoint` | Azure Blob endpoint | `https://mystorageaccount.blob.core.windows.net` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-azure-use-default-azure-credential` | Use Azure Workload Identity | `true` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-perform-delete` | Allow delete operations | `true` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-use-ca-certificates` | Use CA certificates | `false` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |
| `storage-azure-use-https` | Use HTTPS for Blob access | `true` | Azure Blob Storage secrets; required when `spec.storage.servicePlan is empty` |

Azure Blob Storage Secrets (with static credentials - when useManagedIdentityForBlob: false):

| `storage-azure-account-name` | Azure Storage account name | `mystorageaccount` | Azure Blob Storage secrets with static credentials; required when `useManagedIdentityForBlob` is set to `false` |
| `storage-azure-account-key` | Azure Storage account key | `base64encodedkey==` | Azure Blob Storage secrets with static credentials; required when `useManagedIdentityForBlob` is set to `false` |

### Mxplatform-kube-agent

Mxplatform-kube-agent is the Build agent for `mxplatform` app deployments.

#### Basic Configuration

| Field | Type | Required |
| --- | --- | --- |
| `enable` | Boolean | Yes |
| `namespace` | string | Yes |
| `config.buildUser` | string | No (default: `pmpbuilder`) |
| `config.buildPassword` | string | No (auto-generated) |

##### Example

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
mxplatform-kube-agent:
  enable: true
  namespace: "build-agents"
```

### Mx-private-document-generation

Mx-private-document-generation is the PDF document generation service.

The wervice URL for Mendix apps is `http://document-generation.<namespace>:8085`.

#### Basic Configuration

| Field | Type | Required |
| --- | --- | --- |
| `enable` | Boolean | Yes |
| `namespace` | string | Yes |

##### Example

{{% alert color="warning" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```text
mx-private-document-generation:
  enable: true
  namespace: "document-generation"
  image:
    registry: "registry.mendix.com"
    name: "mendix/document-generation-service"
    tag: "1.0.0"
```
