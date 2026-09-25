---
title: "Azure Key Vault Integration"
url: /private-mendix-platform/key-vault-integration/
description: "Documents the set up and usage of Azure Key Vault for managing sensitive, environment-specific Private Mendix Platform configurations."
weight: 41
---

## Introduction

Private Mendix Platform can use Azure Key Vault to automatically manage sensitive, environment-specific configuration, such as app constants, Mendix Runtime custom settings, the MxAdmin password, and the Debugger password, instead of storing them as plain values in the database.

The integration uses the [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/) with the Azure Key Vault provider. Every environment must have a User-Assigned Managed Identity (UAMI) from Azure Workload Identity. Private Mendix Platform automates the Kubernetes-side configuration of the `ServiceAccount` and `SecretProviderClass` objects and the Key Vault writes. The customer only needs to manage the Azure-side infrastructure (such as Key Vaults, managed identities, and RBAC), instead of manually configuring Kubernetes manifests for every environment.

### Secret Values Storage

Secret values are never stored in the Private Mendix Platform database or converted to a Kubernetes Secret object. They exist in Azure Key Vault, and are mounted into the running app pod as in-memory (`tmpfs`) files by the CSI driver.

## Prerequisites

Your Private Mendix Platform must be deployed in standalone mode on AKS.

Your environments must be configured to use Azure Key Vault as the external secret store through the CSI Secrets Store Driver.

You must map the following supported secret types 1-to-1 to entries in the environment's `SecretProviderClass`:

* App constant  - This secret type is configured as a constant name and value in the Private Mendix Platform UI. It represents a Mendix app constant, for example, `MyFirstModule.WelcomePageTitle`.
* Runtime custom setting - This secret type is configured as a setting name and value in the Private Mendix Platform UI. It represents a [Mendix Runtime custom setting](/refguide/custom-settings/) for `m2ee` configuration.
 Setting name + value 
* MxAdmin Password - This secret type is a fixed value, configured once per environment. It represents the password of the environment's administrator account. 
* Debugger Password - This secret type is a fixed value, configured once per environment. It represents the password of the environment's remote debugger. 

{{% alert color="info" %}}
Database and blob storage connection secrets are not supported through this automatic flow. You must provision them manually. For more information, refer to the general Secret Store documentation.

The integration does not support deployments in Interactor-Agent mode, or non-AKS and on-premises Kubernetes clusters.{{% /alert %}}

## Onboarding Approaches

The approach to implementing the Key Vault integration is slightly different for environments that do not use an Azure Workload Identity (`azure-wi`) storage or database plan.

### Approach A - With Azure Workload Identity Storage

For environments which use an `azure-wi` storage or database plan, the managed identity (UAMI) is automatically created by the Mendix Operator during environment provisioning. The Kubernetes ServiceAccount is created by the Operator and annotated with the UAMI Client ID. Because of that, the customer must only configure Key Vault and RBAC.

### Approach B - Without Azure Workload Identity Storage

For environments which do not use `azure-wi` plans, the managed identity (UAMI) must be manually created by the customer before enabling Key Vault. Since the 
Kubernetes ServiceAccount does not exist, Private Mendix Platform detects that it is missing and asks for the Client ID, and then created the ServiceAccount. This approach requires the customer to configure the UAMI, in addition to Key Vault and RBAC.

### Process

Private Mendix Platform automatically determines the correct path. When you enable the secret store for an environment, Private Mendix Platform checks whether a Kubernetes ServiceAccount already exists for that environment.

If the ServiceAccount exists, Private Mendix Platform reads the UAMI Client ID directly from the ServiceAccount's existing annotation. No customer input is required.

If the ServiceAccount does not exist, Private Mendix PlatformP shows a message like the following:

*Private Mendix Platform has detected that an auto-provisioned managed identity does not exist for this environment. In order to use the automatic secret store, request your infrastructure team to provision an Azure Managed Identity for this environment and provide the Client ID.*

The customer's infrastructure team must create the UAMI in Azure and supply its Client ID in this prompt. Private Mendix Platform stores it and creates the Kubernetes ServiceAccount  with the correct [name and annotations](#naming-conventions). The customer does not need to create or annotate the service account manually.

## Permissions Reference for Managed Identities and Azure RBAC

All of the following identities must be correctly configured, each with a different Azure role, a different scope, and a different party responsible for granting it. Incorrectly configuring any of the identities will cause errors with the integration.

### Private Mendix Platform Managed Identity {#identity-pmp}

The `PMP-KeyVault-Identity` is the Workload Identity assigned to the Private Mendix Platform pod (not to any customer environment). Private Mendix Platform uses it through `DefaultAzureCredentialBuilder` for every write, update, delete, and recover operation against a customer's Key Vault.

| Property |  Value |
| --- | --- |
| **Azure role required** | Key Vault Secrets Officer |
| **Scope** | Each individual environment's Key Vault (named `mendix-<environment internal name>`). The role is granted separately for each environment. |
| **Explanation** | *Secrets Officer* (rather than just *Secrets User*) is required because Private Mendix Platform must be able to write, delete, and recover soft-deleted secrets, not just read them. | 
| **Granted by** | Customer (Infrastructure Team) |
| **When** |  Once per environment, before the customer toggles *Enable Secret Store* |
| **Applies to** | Approach A and B | 

### Environment-Level UAMI {#identity-uami}

This is the managed identity tied to a specific environment. It is created automatically by the Operator in Approach A, or manually by the customer in Approach B. It is used exclusively at runtime by the CSI driver running inside the app pod. Private Mendix Platform code never uses this identity.

| Property |  Value |
| --- | --- |
| **Azure role required** | Key Vault Secrets User (read-only) |
| **Scope** | The same Key Vault as for `PMP-KeyVault-Identity` |
| **Explanation** | This identity is read-only because the running app pod only ever needs to read the mounted secret values. It never writes back to Key Vault. |
| **Granted by** | Customer (Infrastructure Team) |
| **When** | After the Operator or the customer creates the UAMI, and before the customer toggles **Enable Secret Store**. |
| **Applies to** | Approach A and B; only the creator of the identity differs | 

### Mendix Operator Provisioning Identity

This identity not a Key Vault access identity. It allows the Mendix Operator to automatically create the UAMI and connect it to an `azure-wi` storage or database plan. It is required for Approach A to work.

| Property | Value |
| **Azure roles required** | The *Managed Identity Contributor* role is required to create the per-environment UAMI and attach its federated credential. The issuer is the cluster OIDC URL, and the subject is the environment's ServiceAccount. <br> 2. A *role-assignment-capable* role - for example, User Access Administrator or Role Based Access Control Administrator. This role must be scoped to the storage account or database resource used by the `azure-wi` plan, so the Operator can grant the newly created UAMI the required data-plane role, for example, Storage Blob Data Contributor for Blob Storage, or the equivalent Microsoft Entra role for Azure SQL or Postgres Flexible Server. |
| **Scope** |  The resource group containing the per-environment UAMIs, and the storage or database resources used by azure-wi plans |
| **Granted by** | Customer (Infrastructure Team) |
| **When** | Once per cluste. This is a cluster bootstrap step, done before any environment can use an `azure-wi` storage or database plan. It is not granted per environment, and it is not part of enabling the Key Vault secret store feature specifically. However, it is required for Approach A to work. |
| **Applies to** | Approach A only. Approach B environments do not use `azure-wi` plans, so this identity is never involved. | 

### Additional Concerns {#additional-concerns}

#### Key Vault Access Model

The Key Vault's access configuration must use the Azure RBAC permission model, not the legacy Vault access policies model. Role assignments like Secrets Officer or Secrets User only take effect under the RBAC model.

#### Tenant ID Source

The directory tenant ID used in the `SecretProviderClass` is found on the Key Vault's Overview page in the Azure Portal - it is the Azure AD tenant the Key Vault belongs to, not anything environment-specific.

#### Soft-Delete and Recovery

Azure Key Vault has soft-delete enabled by default and it cannot be disabled. Private Mendix Platform relies on this - when a secret name that was previously deleted is written again, Private Mendix Platform automatically recovers the soft-deleted secret before writing the new value, rather than failing. If a secret is ever purged (permanently deleted) directly in Azure, this automatic recovery is no longer possible and requires manual intervention.

#### Resource Providers

`Microsoft.KeyVault` and `Microsoft.ManagedIdentity` must be registered on the subscription.

## Prerequisites {#prerequisites}

The customer is responsible for configuring the following prerequisites. They must be in place once per cluster, before any environment can use this feature.

### Secrets Store CSI Driver and Azure Key Vault Provider

The Secrets Store CSI Driver and Azure Key Vault provider must be installed cluster-wide (typically in `kube-system`), by using the following Helm commands:

```text
helm repo add csi-secrets-store-provider-azure https://azure.github.io/secrets-store-csi-driver-provider-azure/charts
helm install csi-secrets-store-provider-azure csi-secrets-store-provider-azure/csi-secrets-store-provider-azure -n kube-system
```

This chart bundles the generic `secrets-store-csi-driver` as a sub-chart dependenc. Installing it also installs the underlying driver.

### Azure Workload Identity Webhook

The Azure Workload Identity webhook must be enabled and active on the cluster.

### OIDC Issuer Enabled

OIDC issuer must be enabled on the AKS cluster. This is required for federated credentials on managed identities.

### Kubernetes RBAC

Private Mendix Platform authenticates to the Kubernetes API using a bearer token (a dedicated ServiceAccount, for example, `pmp-event-all`), distinct from the app-environment identities. This token needs a namespaced Role and RoleBinding in every namespace where app environments using this feature are deployed, granting the following:

| Resource | Verbs | Used for |
| --- | --- | --- |
| `secretproviderclasses` | `get, create, patch, delete` | Creating, updating, or removing the environment's SecretProviderClass |
| `serviceaccounts` | `get, create, patch` | Reading the UAMI annotation (for Approach A) or creating and annotating the ServiceAccount (Approach B) |

{{% alert color="warning" %}}
Without Kubernetes RBAC for the Private Mendix Platform cluster credentials, calls from Private Mendix Platform fail with a *403 Forbidden* error and a message like the following `system:serviceaccount:kube-system:pmp-event-all cannot ... in the namespace`. 

Verify the configuration by using the following command:

```text
kubectl auth can-i create secretproviderclasses --as=system:serviceaccount:kube-system:pmp-event-all -n <namespace>
```
{{% /alert %}}

### Namespace-Level Flag

The namespace must have external secret store support enabled through Automatic AKS" mode before any environment in it can toggle the per-environment flag below.

## Per-Environment Setup - Approach A

For environments which use an `azure-wi` storage or database plan, the configuration requires the following steps:

1. The customer (portal user) or Mendix Operator creates the environment in the Private Mendix Platform wizard, selecting an azure-wi storage and/or database plan. The Mendix Operator automatically creates the UAMI, its federated credential, and annotates the environment's ServiceAccount with the Client ID. 
2. The customer's Infrastructure Team creates an empty Key Vault named [mendix-<environment internal name>](#naming-conventions), with Azure RBAC selected as the permission model. 
3. The customer's Infrastructure Team grants the Key Vault Secrets Officer role on that Key Vault to the [Private Mendix Platform managed identity](#identity-pmp).
4. The customer's Infrastructure Team grants the Key Vault Secrets User role on that Key Vault to the environment's [UAMI]({#identity-uami}).
5. The customer (portal user) toggles **Enable Secret Store** for the environment in the Private Mendix Platform portal. Private Mendix Platform reads the UAMI Client ID from the existing ServiceAccount annotation automatically. 

No manual Kubernetes object creation or Client ID entry is needed for this path.

## Per-Environment Setup - Approach B {#environment-b}

For environments which do not use any `azure-wi` plans, the configuration requires the following steps:

1. The customer (portal user) creates the environment without an azure-wi storage or database plan. 
2. The customer's Infrastructure Team creates a User-Assigned Managed Identity for this environment in Azure. The recommended naming for the UAMI is `mendix-<namespace><environment internal name><app CR UID>`. This matches the convention the Operator itself uses in Approach A, for consistency. 
3. The customer's Infrastructure Team adds a federated credential to the UAMI, where the issuer is the cluster's OIDC issuer URL, and the subject is `system:serviceaccount:<namespace>:<environment internal name>`. 
4. Create an empty Key Vault named mendix-<environment internal name>, with Azure RBAC selected as the permission model. 
5. The customer's Infrastructure Team grants the Key Vault Secrets Officer role on that Key Vault to the [Private Mendix Platform managed identity](#identity-pmp).
6. The customer's Infrastructure Team grants the Key Vault Secrets User role on that Key Vault to the environment's [UAMI]({#identity-uami}).
7. The customer (portal user) toggle **Enable Secret Store** for the environment in the Private Mendix Platform portal. Private Mendix Platform detects that no ServiceAccount exists yet and prompts the user to provide a Client ID.
8. The customer (portal user) enters the UAMI's Client ID created in step 2 above. Private Mendix Platform creates the Kubernetes ServiceAccount for the environment with both required annotations, and stores the Client ID for use when secrets are written. 

You do not need to manually run any `kubectl create serviceaccount` or `kubectl annotate` commands. Private Mendix Platform performs this step after the user has entered the Client ID.

## Naming Conventions and Kubernetes Object Reference {#naming-conventions}

| Object | Name | Notes |
| --- | --- | --- |
| Azure Key Vault | `mendix-<environment internal name>` | The environment internal name is the MendixApp CR name (for example, `zw783i12`). Must be globally unique in Azure and shorter or equal to 24 characters. |
| Kubernetes ServiceAccount | `<environment internal name>` | Same name as the MendixApp CR, in the environment's deployment namespace. |
| ServiceAccount annotations | `privatecloud.mendix.com/environment-account: "true"` and `azure.workload.identity/client-id: <UAMI Client ID>` |  Both are required. Private Mendix Platform sets these through a JSON merge patch, so re-running the setup never removes annotations it does not know about (for example, ones set by the Mendix Operator). |
| Kubernetes SecretProviderClass | `<environment internal name>` | Same name as the environment, in the same namespace. |
| SecretProviderClass annotation | `privatecloud.mendix.com/environment-class: "true"` | Identifies this SPC as a Private Mendix Platform-managed environment secret class. |
| Managed Identity (Approach A) | `mendix-<namespace><mxAppCrName><mxAppCrUid>` | Auto-generated by the Mendix Operator. |

### Secret Key Naming

Secret key naming inside the Key Vault or SecretProviderClass follows the general. Mendix conventions. For more information, see [Retrieve Environment-Sensitive Data from a Secret Store](/developerportal/deploy/secret-store-credentials/).

| Secret type | Logical key (SPC objectAlias) | Azure Key Vault secret name (SPC objectName) |
| --- | --- | --- |
| App Constant `<Module.ConstantName>` | `mx-const-<Module.ConstantName>` | `mx-const-<Module-ConstantName>` (periods changed to hyphens) |
| Runtime Custom Setting `<settingName>` | `mx-runtime-<settingName>` | `mx-runtime-<settingName>` (periods changed to hyphens) |
| MxAdmin Password | `mx-admin-password` (fixed literal) | `mx-admin-password` |
| Debugger Password | `mx-debugger-password` (fixed literal) | `mx-debugger-password` |

Azure Key Vault secret names cannot contain periods, so any periods in a constant or runtime setting name are converted to hyphens for the Key Vault entry (`objectName`). The `objectAlias` - that is, the file name actually mounted into the pod and read by the Mendix Runtime - always keeps the periods, exactly matching the format in the official documentation, for example, `mx-const-MyFirstModule.WelcomePageTitle`. Private Mendix Platform performs this conversion consistently both when it writes the value to Key Vault and when it builds the SecretProviderClass entry, so the two always stay in sync.

## Using Key Vault Integration

The following sections provide information about using the Key Vault integration for business-as-usual operations.

### Adding New Values

To add a new app constant, runtime setting, MxAdmin password, or debugger password, log in to the Private Mendix Platform portal, and enter the value and optionally the name (for constants or runtime settings). The value is only held in memory while the request is processed. It is never written to the Private Mendix Platform database.

Private Mendix Platform writes the value to the environment's Key Vault under the correct [name](#naming-conventions). If the Key Vault previously had this same secret name soft-deleted, Private Mendix Platform recovers it automatically before writing.

Private Mendix Platform checks whether the environment's SecretProviderClass already exists. If it does not, Private Mendix Platform creates it, with this secret as its first entry. The SecretProviderClass is never created empty.

If the SecretProviderClass already exists, Private Mendix Platform patches it in place, adding the new entry without modifying any existing ones.

Private Mendix Platform then shows a notification that the value was written but will not take effect until the environment is [restarted](#restart).

### Updating an Existing Value

Only the Key Vault value is updated. The SecretProviderClass is unchanged, because the mapping of key names to Key Vault entries has not changed. A restart is required for the new value to take effect in the running app. For already-mounted secrets, the CSI driver also automatically refreshes mounted values within approximately 2 minutes without requiring a [restart](#restart), but restarting is the reliable way to guarantee it.

### Deleting a Value

Deletion happens in two phases, always in this order:

1. The entry is removed from the SecretProviderClass on Kubernetes side.
2. The secret is soft-deleted from Azure Key Vault.

This order prevents a pod restart from failing to find a secret that the SecretProviderClass still references but which has already been removed from the vault.

### Restarting the Environment {#restart}

Every write, update, or delete requires an environment restart to take effect for a currently running pod, except for value-only updates to already-mounted secrets, which the CSI driver automatically picks up within approximately 2 minutes. 

On the first ever write for an environment, Private Mendix Platform sets `allowOverrideSecretsWithSecretStoreCSIDriver: true` on the MendixApp CR. This happens only once, at restart time, not immediately at write time, in order to avoid the Operator reconciling against a pod that has not actually restarted with the new mount yet.

## Troubleshooting

If you encounter any issues with Key Vault integration, use the following troubleshooting tips to help you solve them.

## 403 Forbidden Error

You get an `403 Forbidden` error on `serviceaccounts` or `secretproviderclasses`. 

### Cause

The Private Mendix Platform cluster token does not have a [namespace RBAC](#prerequisites).

### Solution

Apply and verify the Role and RoleBinding in the target namespace. Confirm by running the following command: `kubectl auth can-i`.

## Missing Secretproviderclasses Resource Type

You see an error like the following: *The server doesn't have a resource type secretproviderclasses*.

### Cause

The CSI Secrets Store Driver or Azure provider is not installed in the cluster. 

### Solution

Install the dependencies through the [Helm chart](#prerequisites).

## CreateContainerError After Restart

After a restart, the pod fails to start and shows a *CreateContainerError*.

### Cause

A secret listed in the SecretProviderClass does not exist in Key Vault (for example, it was deleted directly in Azure, bypassing Private Mendix Platform). 

### Solution

Add the missing secret again through Private Mendix Platform, or manually restore it in Key Vault. Never edit `const`, `runtime`, or `password` secrets directly in Azure. Always perform the changes through Private Mendix Platform. 

## Managed Identity Does Not Exist Error

The environment shows an error like *Managed identity does not exist*.

### Cause

The ServiceAccount does not exist, or the Client ID entered does not correspond to a UAMI with a working federated credential.

### Solution

Check the [UAMI and its federated credential (issuer and subject)](#environment-b).

## Value Changes Not Showing

A new or updated value does not appear in the running app.

### Cause

The environment was not restarted after the change. 

### Solution

Restart the environment from the Private Mendix Platform portal. 

## Wrong Azure Tenant or Access Fail

The pod authenticates to the wrong Azure tenant, or Key Vault access fails despite correct RBAC.

### Cause

The Key Vault access configuration is set to *Vault access policies"* instead of *Azure RBAC*.

### Solution

Recreate or reconfigure the Key Vault to use the [Azure RBAC permission model](#additional-concerns).

## Customer Responsibilities Summary

| Responsibility | Owner |
| --- | --- |
| Install CSI driver and Azure provider, enable WI webhook and OIDC issuer (once per cluster) | Customer (Infrastructure Team) |
| Grant Private Mendix Platform Kubernetes RBAC per namespace (once per namespace) | Customer (Infrastructure Team) |
| Grant the Operator provisioning identity its Azure roles for azure-wi plans (once per cluster - Approach A precondition) | Customer (Infrastructure Team) |
| Create environment Key Vault (`mendix-<env name>`) with Azure RBAC access model | Customer (Infrastructure Team) |
| Grant Private Mendix Platform's managed identity the Key Vault Secrets Officer role on each Key Vault environment | Customer (Infrastructure Team) |
| Grant the environment UAMI Key Vault Secrets User on each Key Vault environment | Customer (Infrastructure Team) |
| Create UAMI and federated credential for non-azure-wi environments (Approach B) | Customer (Infrastructure Team) |
| Provide UAMI Client ID when prompted by Private Mendix Platform (Approach B) | Customer (Portal User) |
| Select azure-wi storage or database plan where applicable (Approach A) | Customer (Portal User) |
| Add, update, delete constants, Runtime settings, MxAdmin and Debugger password | Customer (Portal User) through the Private Mendix Platform portal |
| Restart the environment after any secret change | Customer (Portal User) |

{{% alert color="warning" %}}
Once an environment's constants, runtime settings, or passwords are managed through Key Vault, all further changes to them must go through the Private Mendix Platform portal. Editing these secrets directly in the Azure Portal or through the Azure CLI will cause the `SecretProviderClass` (Private Mendix Platform's record of what should exist) to go out of sync with Key Vault, with no automatic reconciliation.
{{% /alert %}}

## Known Limitations

* Database and blob storage plans cannot be provisioned through this automatic flow. Configure them manually according to the general Mendix secret store documentation if needed.
* An environment can use either a `SecretProviderClass` or a regular Kubernetes Secret for its configuration, never both at the same time.
* Azure-wi storage and database plans are not compatible with Interactor-Agent deployments that also use the external secret store. The `azure.workload.identity/client-id` annotation on the ServiceAccount can only hold one value at a time, and the Operator may overwrite it. This feature is supported only in Standalone mode.