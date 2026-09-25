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

📦 2. Scope
Mendix Private Platform deployed in standalone mode on AKS.

Environments using Azure Key Vault as the external secret store, via the CSI Secrets Store Driver.

Four supported secret types, mapped 1:1 to entries in the environment's SecretProviderClass:

 Secret type 

 Set via PMP UI as 

 Purpose 

 App Constant 

 Constant name + value 

 Mendix app constant, same as Studio Pro constants 

 Runtime Custom Setting 

 Setting name + value 

 Mendix Runtime custom setting (m2ee configuration) 

 MxAdmin Password 

 (fixed, one per environment) 

 The environment's administrator account password 

 Debugger Password 

 (fixed, one per environment) 

 The environment's remote debugger password 

Out of scope for this feature

Database and blob storage connection secrets are not supported through this automatic flow — provision those manually, per the general Secret Store documentation.

Connected-mode deployments.

Non-AKS or on-premises Kubernetes clusters.

🛣️ 3. The Two Onboarding Paths
Whether an environment needs manual UAMI setup or not depends entirely on whether it uses an Azure Workload Identity (azure-wi) storage/database plan.

 

 Approach A — environment uses an azure-wi storage or database plan 

 Approach B — environment does not use an azure-wi plan 

 Managed identity (UAMI) creation 

 Automatic — created by the Mendix Operator during environment provisioning 

 Manual — the customer must create a UAMI before enabling Key Vault 

 Kubernetes ServiceAccount 

 Already exists, created by the Operator, already annotated with the UAMI Client ID 

 Does not exist yet — PMP detects this and asks for the Client ID, then creates it 

 Customer effort per environment 

 Low — Key Vault + RBAC only 

 Higher — UAMI + Key Vault + RBAC; PMP creates the ServiceAccount for you 

PMP determines which path applies automatically: when you enable the secret store for an environment, PMP checks whether a Kubernetes ServiceAccount already exists for that environment.

If it exists (Approach A: the Mendix Operator already created one as part of an azure-wi storage/database plan), PMP reads the UAMI Client ID directly from the ServiceAccount's existing annotation. No customer input is required.

If it does not exist (Approach B — no azure-wi plan in use), PMP shows an informational prompt:

"Private Mendix Platform has detected that an auto-provisioned managed identity does not exist for this environment. In order to use the automatic secret store, request your infrastructure team to provision an Azure Managed Identity for this environment and provide the Client ID."

The customer's infrastructure team creates the UAMI in Azure and supplies its Client ID in this prompt. PMP stores it and — the first time it needs to — creates the Kubernetes ServiceAccount itself, with the correct name and annotations (see section 8). The customer does not need to run kubectl create serviceaccount or kubectl annotate manually for this path; PMP has the necessary Kubernetes RBAC to do it.

🔑 4. Managed Identities & Azure RBAC — Full Permission Reference
Read this section carefully

There are three separate identities involved in this feature, each with a different Azure role, a different scope, and a different party responsible for granting it. Getting any one of these wrong is the most common cause of setup failures. This section is the single source of truth for "who needs what, and when."

4.1 Identity #1 — PMP's Own Managed Identity (PMP-KeyVault-Identity)
This is the Workload Identity assigned to the PMP pod itself (not to any customer environment). PMP uses it — via DefaultAzureCredentialBuilder — for every write, update, delete, and recover operation against a customer's Key Vault.

 Property 

 Value 

 Azure role required 

 Key Vault Secrets Officer 

 Scope 

 Each individual environment's Key Vault (named mendix-<environment internal name>) — granted per-environment, not once globally 

 Why this role and not less 

 "Secrets Officer" (rather than just "Secrets User") is required because PMP must be able to write, delete, and recover soft-deleted secrets — not just read them 

 Granted by 

 Customer (Infrastructure Team) 

 When 

 Once per environment, before the customer toggles "Enable Secret Store" — Approach A step A3, Approach B step B5 

 Applies to 

 Both Approach A and Approach B — identical requirement in both cases 

4.2 Identity #2 — The Environment-Level UAMI (per-environment managed identity)
This is the managed identity tied to the specific environment — created automatically by the Operator in Approach A, or manually by the customer in Approach B. It is used exclusively at runtime by the CSI driver running inside the app pod — PMP's own code never uses this identity.

 Property 

 Value 

 Azure role required 

 Key Vault Secrets User (read-only) 

 Scope 

 The same Key Vault used by Identity #1 above 

 Why read-only 

 The running app pod only ever needs to read the mounted secret values — it never writes back to Key Vault 

 Granted by 

 Customer (Infrastructure Team) 

 When 

 Approach A: after the Operator auto-creates the UAMI (step A1), and before the customer toggles "Enable Secret Store" (step A5) — this is step A4. Approach B: after the customer manually creates the UAMI (step B2), and before the customer toggles "Enable Secret Store" (step B6) — this is part of step B5. 

 Applies to 

 Both approaches — same role, same scope, only the creator of the identity differs 

4.3 Identity #3 — The Mendix Operator's Own Provisioning Identity (Approach A only, cluster-level)
This is not a Key Vault permission — read carefully

This identity is unrelated to Key Vault access. It is what allows the Mendix Operator to automatically create the per-environment UAMI and wire it up to an azure-wi storage or database plan in the first place. It is included here because it is a precondition for Approach A to exist at all — without it, there is no auto-created UAMI for Identity #2 to even attach a Key Vault role to.

 Property 

 Value 

 Azure roles required 

 1. Managed Identity Contributor — to create the per-environment UAMI and attach its federated credential (issuer = cluster OIDC URL, subject = the environment's ServiceAccount) 

2. A role-assignment-capable role — e.g. User Access Administrator or Role Based Access Control Administrator — scoped to the storage account or database resource used by the azure-wi plan, so the Operator can grant the newly created UAMI the data-plane role that plan actually needs (for example Storage Blob Data Contributor for Blob Storage, or the equivalent Microsoft Entra role for Azure SQL / Postgres Flexible Server) 

 Scope 

 The resource group containing the per-environment UAMIs, and the storage/database resource(s) used by azure-wi plans 

 Granted by 

 Customer (Infrastructure Team) 

 When 

 Once per cluster — this is a cluster bootstrap step, done before any environment can use an azure-wi storage/database plan. It is not granted per-environment, and it is not part of enabling the Key Vault secret store feature specifically — but Approach A cannot function without it. 

 Applies to 

 Approach A only. Approach B environments don't use azure-wi plans, so this identity is never involved. 

4.4 Consolidated "Who / What / When" Summary
 Identity 

 Role 

 Scope 

 Approach A: who & when 

 Approach B: who & when 

 PMP's own managed identity 

 Key Vault Secrets Officer 

 Env Key Vault 

 Customer, before toggling "Enable Secret Store" (step A3) 

 Customer, before toggling "Enable Secret Store" (step B5) 

 Environment UAMI 

 Key Vault Secrets User 

 Env Key Vault (same one) 

 Customer, after Operator auto-creates the UAMI, before the toggle (step A4) 

 Customer, after customer manually creates the UAMI, before the toggle (step B5) 

 Operator provisioning identity 

 Managed Identity Contributor + role-assignment role on storage/db resource 

 Resource group / storage-db resource 

 Customer, once per cluster, before azure-wi plans are usable at all 

 Not applicable — no azure-wi plan in use 

4.5 Other Azure-Side Details Worth Knowing
Key Vault access model: the Key Vault's Access configuration must use the Azure RBAC permission model (not the legacy "Vault access policies" model) — role assignments like Secrets Officer/Secrets User only take effect under the RBAC model.

Tenant ID source: the Directory (tenant) ID used in the SecretProviderClass is found on the Key Vault's Overview page in the Azure Portal — it is the Azure AD tenant the Key Vault belongs to, not anything environment-specific.

Soft-delete & recovery: Azure Key Vault has soft-delete enabled by default and it cannot be disabled. PMP relies on this — when a secret name that was previously deleted is written again, PMP automatically recovers the soft-deleted secret before writing the new value, rather than failing. If a secret is ever purged (permanently deleted) directly in Azure, this automatic recovery is no longer possible and requires manual intervention.

Resource providers: Microsoft.KeyVault and Microsoft.ManagedIdentity must be registered on the subscription (this is almost always already the case on any subscription that has created a Key Vault or managed identity before).

✅ 5. Prerequisites — One-Time Cluster Setup (Customer Responsibility)
These must be in place once per cluster, before any environment can use this feature:

Secrets Store CSI Driver + Azure Key Vault provider installed cluster-wide (typically in kube-system), via Helm:




helm repo add csi-secrets-store-provider-azure https://azure.github.io/secrets-store-csi-driver-provider-azure/charts
helm install csi-secrets-store-provider-azure csi-secrets-store-provider-azure/csi-secrets-store-provider-azure -n kube-system

This chart bundles the generic secrets-store-csi-driver as a sub-chart dependency — installing it also installs the underlying driver.

Azure Workload Identity webhook enabled and active on the cluster.

OIDC issuer enabled on the AKS cluster (required for federated credentials on managed identities).

Kubernetes RBAC for PMP's cluster credential. PMP authenticates to the Kubernetes API using a bearer token (a dedicated ServiceAccount, e.g. pmp-event-all), distinct from the app-environment identities. This token needs a namespaced Role/RoleBinding in every namespace where app environments using this feature are deployed, granting:

 Resource 

 Verbs 

 Used for 

 secretproviderclasses 

 get, create, patch, delete 

 Creating/updating/removing the environment's SecretProviderClass 

 serviceaccounts 

 get, create, patch 

 Reading the UAMI annotation (Approach A) or creating/annotating the ServiceAccount (Approach B) 

Most common setup mistake

Without this, PMP calls fail with 403 Forbidden (system:serviceaccount:kube-system:pmp-event-all cannot ... in the namespace). Verify with:




kubectl auth can-i create secretproviderclasses --as=system:serviceaccount:kube-system:pmp-event-all -n <namespace>
Namespace-level flag: the namespace must have external secret store support enabled ("Automatic AKS" mode) before any environment in it can toggle the per-environment flag below.

🅰️ 6. Per-Environment Setup — Approach A (azure-wi storage/database plan)
 Step 

 Action 

 Who 

 A1 

 Create the environment in the PMP wizard, selecting an azure-wi storage and/or database plan. The Mendix Operator automatically creates the UAMI, its federated credential, and annotates the environment's ServiceAccount with the Client ID. 

 Customer (Portal User) / Mendix Operator 

 A2 

 Create an empty Key Vault named mendix-<environment internal name> (see section 8 for naming), with Azure RBAC selected as the permission model. 

 Customer (Infrastructure Team) 

 A3 

 Grant PMP's own managed identity the Key Vault Secrets Officer role on that Key Vault (Identity #1 — section 4.1). 

 Customer (Infrastructure Team) 

 A4 

 Grant the environment's UAMI the Key Vault Secrets User role on that Key Vault (Identity #2 — section 4.2). 

 Customer (Infrastructure Team) 

 A5 

 Toggle Enable Secret Store for the environment in the PMP portal. PMP reads the UAMI Client ID from the existing ServiceAccount annotation automatically. 

 Customer (Portal User) 

No manual Kubernetes object creation or Client ID entry is needed for this path.

🅱️ 7. Per-Environment Setup — Approach B (no azure-wi plan)
 Step 

 Action 

 Who 

 B1 

 Create the environment normally, without an azure-wi storage/database plan. 

 Customer (Portal User) 

 B2 

 Create a User-Assigned Managed Identity for this environment in Azure. Recommended naming: mendix-<namespace><environment internal name><app CR UID> (matches the convention the Operator itself uses in Approach A, for consistency). 

 Customer (Infrastructure Team) 

 B3 

 Add a federated credential to the UAMI: issuer = the cluster's OIDC issuer URL, subject = system:serviceaccount:<namespace>:<environment internal name>. 

 Customer (Infrastructure Team) 

 B4 

 Create an empty Key Vault named mendix-<environment internal name>, with Azure RBAC selected as the permission model. 

 Customer (Infrastructure Team) 

 B5 

 Grant the UAMI Key Vault Secrets User on that Key Vault (Identity #2). Grant PMP's managed identity Key Vault Secrets Officer on the same Key Vault (Identity #1). 

 Customer (Infrastructure Team) 

 B6 

 Toggle Enable Secret Store for the environment in the PMP portal. PMP detects that no ServiceAccount exists yet and shows the "provide Client ID" prompt described in section 3. 

 Customer (Portal User) 

 B7 

 Enter the UAMI's Client ID (from step B2) in the PMP prompt and save. PMP creates the Kubernetes ServiceAccount for the environment, with both required annotations (see section 8), and stores the Client ID for use when secrets are written. 

 Customer (Portal User) 

You do not need to run any kubectl create serviceaccount or kubectl annotate commands yourself for Approach B — PMP performs this step once it has the Client ID.

🏷️ 8. Naming Conventions & Kubernetes Object Reference
 Object 

 Name 

 Notes 

 Azure Key Vault 

 mendix-<environment internal name> 

 Environment internal name is the MendixApp CR name (e.g. zw783i12). Must be globally unique in Azure and ≤ 24 characters — this convention comfortably fits. 

 Kubernetes ServiceAccount 

 <environment internal name> 

 Same name as the MendixApp CR, in the environment's deployment namespace. 

 ServiceAccount annotations 

 privatecloud.mendix.com/environment-account: "true" 

azure.workload.identity/client-id: <UAMI Client ID> 

 Both are required. PMP sets these via a JSON merge patch, so re-running the setup never removes annotations it doesn't know about (e.g. ones set by the Mendix Operator). 

 Kubernetes SecretProviderClass 

 <environment internal name> 

 Same name as the environment, in the same namespace. 

 SecretProviderClass annotation 

 privatecloud.mendix.com/environment-class: "true" 

 Identifies this SPC as a PMP-managed environment secret class. 

 Managed Identity (Approach A) 

 mendix-<namespace><mxAppCrName><mxAppCrUid> 

 Auto-generated by the Mendix Operator. 

Secret key naming (inside the Key Vault / SecretProviderClass)
These follow the official Mendix documentation for Retrieve Environment-Sensitive Data from a Secret Store, and are exactly what PMP writes:

 Secret type 

 Logical key (SPC objectAlias, what Mendix Runtime reads) 

 Azure Key Vault secret name (SPC objectName) 

 App Constant <Module.ConstantName> 

 mx-const-<Module.ConstantName> 

 mx-const-<Module-ConstantName> (dots → hyphens) 

 Runtime Custom Setting <settingName> 

 mx-runtime-<settingName> 

 mx-runtime-<settingName> (dots → hyphens) 

 MxAdmin Password 

 mx-admin-password (fixed literal) 

 mx-admin-password 

 Debugger Password 

 mx-debugger-password (fixed literal) 

 mx-debugger-password 

Why two different names for the same secret?

Azure Key Vault secret names may not contain dots, so any dots in a constant or runtime setting name are converted to hyphens for the Key Vault entry (objectName). The objectAlias — the file name actually mounted into the pod and read by the Mendix Runtime — always keeps the dots, exactly matching the format in the official documentation (e.g. mx-const-MyFirstModule.WelcomePageTitle). PMP performs this conversion consistently both when it writes the value to Key Vault and when it builds the SecretProviderClass entry, so the two always stay in sync.

⚙️ 9. Using the Feature Day-to-Day
Once an environment is onboarded (Approach A or B), the day-to-day PMP UI operations behave as follows:

Adding a new App Constant, Runtime Setting, MxAdmin Password, or Debugger Password
Enter the name (for constants/runtime settings) and value in the PMP portal. The value is only held in memory while the request is processed — it is never written to the PMP database.

PMP writes the value to the environment's Key Vault under the correct name (see section 8). If the Key Vault previously had this same secret name soft-deleted, PMP recovers it automatically before writing.

PMP checks whether the environment's SecretProviderClass already exists:
	

Does not exist yet → PMP creates it, with this secret as its first (and possibly only) entry. The SPC is never created empty.

Already exists → PMP patches it in place, adding the new entry without touching any existing ones.

PMP shows a notification that the value was written but will not take effect until the environment is restarted.

Updating an existing value
Only the Key Vault value is updated — the SecretProviderClass is unchanged, because the mapping of key names to Key Vault entries hasn't changed. A restart is still needed for the new value to take effect in the running app; for already-mounted secrets, the CSI driver also refreshes mounted values automatically every ~2 minutes without requiring a restart, but restarting is the reliable way to guarantee it.

Deleting a value
Deletion happens in two phases, always in this order:

The entry is removed from the SecretProviderClass first (Kubernetes side).

The secret is then soft-deleted from Azure Key Vault.

This order prevents a pod restart from failing to find a secret that the SPC still references but which has already been removed from the vault.

Restart requirement
Restart is required

Every write, update, or delete requires an environment restart to take effect for a currently running pod, except for value-only updates to already-mounted secrets, which the CSI driver picks up within about 2 minutes on its own. On the first ever write for an environment, PMP also flips allowOverrideSecretsWithSecretStoreCSIDriver: true on the MendixApp CR (only once, at restart time — not immediately at write time, to avoid the Operator reconciling against a pod that hasn't actually restarted with the new mount yet).

🧩 10. What Happens Internally (For Troubleshooting)
ServiceAccount management uses a JSON merge patch (Content-Type: application/merge-patch+json), not a full-manifest replace. Only the two annotations PMP manages are ever included in the patch body — any other annotations already present (set by the Mendix Operator, or manually by the customer) are left untouched. The same request body is valid both as a PATCH (existing SA) and as the body for creating a new one, so the same code path handles both Approach A (patch-only, annotation already correct) and Approach B (first-time creation).

SecretProviderClass management follows a create-or-patch pattern: PMP first attempts to POST a new SPC; if the API returns 409 Conflict (already exists), PMP falls back to a PATCH. This avoids a separate read-before-write round trip and is safe to retrigger — a repeated create attempt on an existing SPC simply falls through to the patch path.

Both the ServiceAccount and SecretProviderClass operations authenticate to the Kubernetes API using a cluster bearer token distinct from any per-environment identity — this is the credential covered by the RBAC in section 5, step 4.

Writing values to Azure Key Vault uses PMP's own pod identity (Identity #1, section 4.1 — Azure Workload Identity, via DefaultAzureCredentialBuilder) — a completely separate credential from the Kubernetes token above.

At pod startup, the CSI driver (not PMP) does the actual secret retrieval: it reads the SecretProviderClass, exchanges the pod's Kubernetes-issued token for an Azure AD token via the environment UAMI's (Identity #2) federated credential, fetches every listed secret from Key Vault, and mounts them as files under /mnt/secrets/ in an in-memory (tmpfs) volume — they are never written to disk and never become a Kubernetes Secret object.

🛠️ 11. Troubleshooting
 Symptom 

 Likely cause 

 Fix 

 403 Forbidden on serviceaccounts or secretproviderclasses 

 PMP's cluster token lacks the namespaced RBAC from section 5, step 4 

 Apply/verify the Role/RoleBinding in the target namespace; confirm with kubectl auth can-i 

 "the server doesn't have a resource type secretproviderclasses" 

 CSI Secrets Store Driver / Azure provider not installed on the cluster 

 Install via the Helm chart in section 5, step 1 

 Pod fails to start with CreateContainerError after restart 

 A secret listed in the SecretProviderClass does not exist in Key Vault (e.g. it was deleted directly in Azure, bypassing PMP) 

 Re-add the missing secret via PMP, or manually restore it in Key Vault; never edit const/runtime/password secrets directly in Azure — always go through PMP (see section 12) 

 Environment shows "managed identity does not exist" prompt repeatedly 

 The ServiceAccount still doesn't exist, or the Client ID entered doesn't correspond to a UAMI with a working federated credential 

 Verify the UAMI and its federated credential (issuer + subject) match section 7, step B3 exactly 

 New/updated value doesn't appear in the running app 

 Environment wasn't restarted after the write 

 Restart the environment from the PMP portal 

 Pod authenticates to the wrong Azure tenant, or Key Vault access fails despite correct RBAC 

 Key Vault's Access configuration is set to "Vault access policies" instead of "Azure RBAC" 

 Recreate or reconfigure the Key Vault to use the Azure RBAC permission model (section 4.5) 

📋 12. Customer Responsibilities Summary
 Responsibility 

 Owner 

 Install CSI driver + Azure provider, enable WI webhook + OIDC issuer (once per cluster) 

 Customer (Infrastructure Team) 

 Grant PMP's Kubernetes RBAC per namespace (once per namespace) 

 Customer (Infrastructure Team) 

 Grant Operator's provisioning identity its Azure roles for azure-wi plans (once per cluster — Approach A precondition) 

 Customer (Infrastructure Team) 

 Create environment Key Vault (mendix-<env name>) with Azure RBAC access model 

 Customer (Infrastructure Team) 

 Grant PMP's managed identity Key Vault Secrets Officer on each environment KV 

 Customer (Infrastructure Team) 

 Grant the environment UAMI Key Vault Secrets User on each environment KV 

 Customer (Infrastructure Team) 

 Create UAMI + federated credential for non-azure-wi environments (Approach B) 

 Customer (Infrastructure Team) 

 Provide UAMI Client ID when prompted by PMP (Approach B) 

 Customer (Portal User) 

 Select azure-wi storage/database plan where applicable (Approach A) 

 Customer (Portal User) 

 Add, update, delete constants / runtime settings / MxAdmin / Debugger password 

 Customer (Portal User), exclusively through the PMP portal 

 Restart the environment after any secret change 

 Customer (Portal User) 

Governance rule

Once an environment's constants, runtime settings, or passwords are managed via Key Vault, all further changes to them must go through the PMP portal. Editing these specific secrets directly in the Azure Portal or via the Azure CLI will cause the SecretProviderClass (PMP's record of what should exist) to drift out of sync with Key Vault, with no automatic reconciliation.

## Known Limitations

Database and blob storage plans cannot be provisioned through this automatic flow — configure those manually per the general Mendix secret store documentation if needed.

An environment can use either a SecretProviderClass or a regular Kubernetes Secret for its configuration, never both at the same time.

azure-wi storage/database plans are not compatible with connected-mode deployments that also use the external secret store — the azure.workload.identity/client-id annotation on the ServiceAccount can only hold one value at a time, and the Operator may overwrite it. This feature is scoped to standalone mode only.